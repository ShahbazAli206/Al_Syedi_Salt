#!/usr/bin/env python3
import asyncio
import os
import signal
import sys
from pathlib import Path

for stream in (sys.stdout, sys.stderr):
    try:
        stream.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

ROOT = Path(__file__).resolve().parent
CLIENT_DIR = ROOT / "client"
SERVER_DIR = ROOT / "server"
IS_WINDOWS = os.name == "nt"
NPM_CMD = "npm.cmd" if IS_WINDOWS else "npm"
RESTART_DELAY_SECONDS = 2

async def stream_process_output(proc, name):
    async def stream(reader, prefix):
        while True:
            line = await reader.readline()
            if not line:
                break
            text = line.decode(errors="replace").rstrip("\n")
            print(f"[{name}] {prefix}{text}")

    await asyncio.gather(
        stream(proc.stdout, ""),
        stream(proc.stderr, "ERR: "),
    )

async def run_service(name, cwd, command):
    while True:
        print(f"Starting {name} in {cwd}...")
        proc = await asyncio.create_subprocess_exec(
            *command,
            cwd=str(cwd),
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )

        output_task = asyncio.create_task(stream_process_output(proc, name))
        try:
            exit_code = await proc.wait()
        except asyncio.CancelledError:
            if proc.returncode is None:
                proc.kill()
                await proc.wait()
            raise
        finally:
            await output_task

        if exit_code == 0:
            print(f"{name} exited cleanly with code 0.")
            break

        print(f"{name} exited with code {exit_code}. Restarting in {RESTART_DELAY_SECONDS}s...")
        await asyncio.sleep(RESTART_DELAY_SECONDS)

async def main():
    if not CLIENT_DIR.exists() or not SERVER_DIR.exists():
        print("Error: Could not find both client and server directories.")
        print(f"Expected: {CLIENT_DIR} and {SERVER_DIR}")
        sys.exit(1)

    client_command = [NPM_CMD, "run", "dev"]
    server_command = [NPM_CMD, "run", "dev"]

    tasks = [
        asyncio.create_task(run_service("frontend", CLIENT_DIR, client_command)),
        asyncio.create_task(run_service("backend", SERVER_DIR, server_command)),
    ]

    def shutdown():
        for task in tasks:
            task.cancel()

    if not IS_WINDOWS:
        loop = asyncio.get_running_loop()
        for signame in ("SIGINT", "SIGTERM"):
            if hasattr(signal, signame):
                loop.add_signal_handler(getattr(signal, signame), shutdown)

    try:
        await asyncio.gather(*tasks)
    except asyncio.CancelledError:
        pass

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Shutdown requested, exiting...")
        sys.exit(0)
