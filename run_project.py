#!/usr/bin/env python3
"""
Al Syedi Group — dev runner.

Starts the Express API and the Next.js client together, with:
  • automatic port-conflict resolution (walks to the next free port)
  • dynamic wiring (frontend NEXT_PUBLIC_API_URL points at the actual backend
    port; backend CLIENT_URL is set to the actual frontend port for CORS)
  • health-check wait so we know the API is reachable before opening browser
  • per-process log prefix + colored status banner
  • graceful shutdown on Ctrl+C (cancels both subprocesses)

Usage:
    python run_project.py
    python run_project.py --backend-port 5005 --frontend-port 3005
    python run_project.py --no-browser
"""

import argparse
import asyncio
import os
import signal
import socket
import sys
import urllib.error
import urllib.request
import webbrowser
from pathlib import Path

# ---------- Console encoding ----------
for stream in (sys.stdout, sys.stderr):
    try:
        stream.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

# ---------- ANSI colors (auto-disable if not a TTY / Windows legacy) ----------
class C:
    if sys.stdout.isatty():
        RESET = "\033[0m"
        BOLD = "\033[1m"
        DIM = "\033[2m"
        ROSE = "\033[38;5;174m"
        ROSE_DEEP = "\033[38;5;131m"
        GREEN = "\033[38;5;108m"
        YELLOW = "\033[38;5;179m"
        RED = "\033[38;5;167m"
        CYAN = "\033[38;5;110m"
        GREY = "\033[38;5;245m"
    else:
        RESET = BOLD = DIM = ROSE = ROSE_DEEP = GREEN = YELLOW = RED = CYAN = GREY = ""

# Enable ANSI on Windows 10+ consoles
if os.name == "nt":
    try:
        import ctypes
        kernel32 = ctypes.windll.kernel32
        kernel32.SetConsoleMode(kernel32.GetStdHandle(-11), 7)
    except Exception:
        pass

ROOT = Path(__file__).resolve().parent
CLIENT_DIR = ROOT / "client"
SERVER_DIR = ROOT / "server"
IS_WINDOWS = os.name == "nt"
NPM_CMD = "npm.cmd" if IS_WINDOWS else "npm"
RESTART_DELAY_SECONDS = 2
BACKEND_HEALTH_TIMEOUT = 60   # seconds to wait for /api/health to respond

# ===================================================================
# Port utilities
# ===================================================================
def is_port_free(port: int, host: str = "127.0.0.1") -> bool:
    """Return True if (host, port) can be bound — i.e. nothing is listening."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            s.bind((host, port))
            return True
        except OSError:
            return False


def find_free_port(start: int, label: str, max_walk: int = 50) -> int:
    """
    Try `start`; if taken, walk forward until a free port is found.
    Logs the swap so the user knows what happened.
    """
    for candidate in range(start, start + max_walk):
        if is_port_free(candidate):
            if candidate != start:
                print(
                    f"{C.YELLOW}⚠ {label} port {start} is busy "
                    f"(another project?). Using {candidate} instead.{C.RESET}"
                )
            return candidate
    raise RuntimeError(
        f"No free port found for {label} between {start} and {start + max_walk - 1}. "
        f"Free one up or pass --{label.lower()}-port manually."
    )


# ===================================================================
# Health check
# ===================================================================
async def wait_for_backend(port: int, timeout: float) -> bool:
    """Poll http://localhost:{port}/api/health until it returns 200 or we time out."""
    url = f"http://localhost:{port}/api/health"
    deadline = asyncio.get_event_loop().time() + timeout
    attempts = 0
    while asyncio.get_event_loop().time() < deadline:
        attempts += 1
        try:
            def _check():
                req = urllib.request.Request(url, headers={"User-Agent": "run_project"})
                with urllib.request.urlopen(req, timeout=2) as resp:
                    return resp.status == 200
            ok = await asyncio.to_thread(_check)
            if ok:
                print(
                    f"{C.GREEN}✓ Backend healthy at {url} "
                    f"(after {attempts} attempt{'s' if attempts > 1 else ''}){C.RESET}"
                )
                return True
        except (urllib.error.URLError, urllib.error.HTTPError, ConnectionRefusedError, TimeoutError, OSError):
            pass
        await asyncio.sleep(1)
    print(f"{C.RED}✗ Backend did not become healthy within {timeout}s.{C.RESET}")
    return False


# ===================================================================
# Subprocess management
# ===================================================================
async def stream_process_output(proc, name, color):
    async def stream(reader, prefix):
        while True:
            line = await reader.readline()
            if not line:
                break
            text = line.decode(errors="replace").rstrip("\n")
            if not text:
                continue
            print(f"{color}[{name}]{C.RESET} {prefix}{text}")

    await asyncio.gather(
        stream(proc.stdout, ""),
        stream(proc.stderr, f"{C.RED}ERR: {C.RESET}"),
    )


async def run_service(name, cwd, command, env, color):
    while True:
        print(f"{C.DIM}↻ Starting {name} in {cwd}…{C.RESET}")
        proc = await asyncio.create_subprocess_exec(
            *command,
            cwd=str(cwd),
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            env=env,
        )

        output_task = asyncio.create_task(stream_process_output(proc, name, color))
        try:
            exit_code = await proc.wait()
        except asyncio.CancelledError:
            if proc.returncode is None:
                try:
                    if IS_WINDOWS:
                        proc.terminate()
                    else:
                        proc.send_signal(signal.SIGINT)
                    # Give it a chance to shut down cleanly
                    try:
                        await asyncio.wait_for(proc.wait(), timeout=5)
                    except asyncio.TimeoutError:
                        proc.kill()
                        await proc.wait()
                except ProcessLookupError:
                    pass
            raise
        finally:
            try:
                await output_task
            except asyncio.CancelledError:
                pass

        if exit_code == 0:
            print(f"{C.GREEN}✓ {name} exited cleanly.{C.RESET}")
            break

        print(
            f"{C.YELLOW}⚠ {name} exited with code {exit_code}. "
            f"Restarting in {RESTART_DELAY_SECONDS}s…{C.RESET}"
        )
        await asyncio.sleep(RESTART_DELAY_SECONDS)


# ===================================================================
# Sanity checks before launch
# ===================================================================
def preflight() -> bool:
    ok = True
    if not CLIENT_DIR.exists() or not SERVER_DIR.exists():
        print(f"{C.RED}✗ Missing client or server directory.{C.RESET}")
        print(f"  Expected: {CLIENT_DIR}")
        print(f"            {SERVER_DIR}")
        return False

    for label, d in [("client", CLIENT_DIR), ("server", SERVER_DIR)]:
        if not (d / "package.json").exists():
            print(f"{C.RED}✗ {label}/package.json not found.{C.RESET}")
            ok = False
        elif not (d / "node_modules").exists():
            print(
                f"{C.YELLOW}⚠ {label}/node_modules missing. "
                f"Run: cd {label} && npm install{C.RESET}"
            )
            ok = False
    return ok


def print_banner(backend_port, frontend_port):
    bar = "─" * 60
    print(f"\n{C.ROSE_DEEP}{bar}{C.RESET}")
    print(f"{C.BOLD}{C.ROSE} AL SYEDI GROUP — Dev Runner{C.RESET}")
    print(f"{C.ROSE_DEEP}{bar}{C.RESET}")
    print(f"  {C.CYAN}Backend (API):{C.RESET} http://localhost:{backend_port}")
    print(f"  {C.CYAN}Frontend (Web):{C.RESET} {C.BOLD}http://localhost:{frontend_port}{C.RESET}")
    print(f"  {C.GREY}Frontend → Backend: NEXT_PUBLIC_API_URL=http://localhost:{backend_port}/api{C.RESET}")
    print(f"  {C.GREY}Backend  ← CORS:   CLIENT_URL=http://localhost:{frontend_port}{C.RESET}")
    print(f"{C.ROSE_DEEP}{bar}{C.RESET}")
    print(f"  {C.DIM}Press Ctrl+C to stop both services.{C.RESET}\n")


# ===================================================================
# Main
# ===================================================================
async def main(args):
    if not preflight():
        sys.exit(1)

    backend_port = find_free_port(args.backend_port, "Backend")
    frontend_port = find_free_port(args.frontend_port, "Frontend")

    frontend_url = f"http://localhost:{frontend_port}"
    backend_url = f"http://localhost:{backend_port}"
    api_url = f"{backend_url}/api"

    # --- Build env for each child process ---
    # Inherit current env first, then override the wiring vars.
    server_env = {
        **os.environ,
        "PORT": str(backend_port),
        "CLIENT_URL": frontend_url,
        "NODE_ENV": os.environ.get("NODE_ENV", "development"),
    }
    client_env = {
        **os.environ,
        "PORT": str(frontend_port),          # Next.js dev server respects PORT
        "NEXT_PUBLIC_API_URL": api_url,      # baked into client + server components
    }

    print_banner(backend_port, frontend_port)

    client_command = [NPM_CMD, "run", "dev"]
    server_command = [NPM_CMD, "run", "dev"]

    tasks = [
        asyncio.create_task(
            run_service("backend",  SERVER_DIR, server_command, server_env, C.ROSE_DEEP),
            name="backend",
        ),
        asyncio.create_task(
            run_service("frontend", CLIENT_DIR, client_command, client_env, C.CYAN),
            name="frontend",
        ),
    ]

    # Optional: wait for backend to be healthy, then open the browser to the frontend.
    async def open_when_ready():
        # Wait a moment so the spinner has a chance to start
        await asyncio.sleep(2)
        backend_ok = await wait_for_backend(backend_port, BACKEND_HEALTH_TIMEOUT)
        if backend_ok and not args.no_browser:
            print(f"{C.GREEN}→ Opening {frontend_url} in your browser…{C.RESET}")
            webbrowser.open(frontend_url)

    if not args.no_health:
        tasks.append(asyncio.create_task(open_when_ready(), name="healthcheck"))

    # ---- Graceful shutdown wiring ----
    shutting_down = False
    def shutdown(*_):
        nonlocal shutting_down
        if shutting_down:
            return
        shutting_down = True
        print(f"\n{C.YELLOW}↓ Shutdown requested — stopping services…{C.RESET}")
        for task in tasks:
            if not task.done():
                task.cancel()

    if not IS_WINDOWS:
        loop = asyncio.get_running_loop()
        for signame in ("SIGINT", "SIGTERM"):
            if hasattr(signal, signame):
                loop.add_signal_handler(getattr(signal, signame), shutdown)

    try:
        await asyncio.gather(*tasks, return_exceptions=False)
    except asyncio.CancelledError:
        pass


def cli() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Run the Al Syedi Group MERN dev stack.")
    p.add_argument("--backend-port",  type=int, default=int(os.environ.get("BACKEND_PORT", 5000)),
                   help="Preferred backend port (default 5000; walks if busy).")
    p.add_argument("--frontend-port", type=int, default=int(os.environ.get("FRONTEND_PORT", 3000)),
                   help="Preferred frontend port (default 3000; walks if busy).")
    p.add_argument("--no-browser", action="store_true",
                   help="Don't auto-open the browser when the backend is healthy.")
    p.add_argument("--no-health",  action="store_true",
                   help="Skip the backend health-check / browser-open task.")
    return p.parse_args()


if __name__ == "__main__":
    args = cli()
    try:
        asyncio.run(main(args))
    except KeyboardInterrupt:
        print(f"\n{C.YELLOW}Shutdown requested, exiting…{C.RESET}")
        sys.exit(0)
