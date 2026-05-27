# Al Syedi Salt — MERN + Next.js

Showpiece site for **Al Syedi Group** — Himalayan pink salt manufacturer & B2B exporter.

- **Frontend:** Next.js 14 (App Router) + React 18 — `client/`
- **Backend:** Node.js + Express + Mongoose — `server/`
- **Database:** MongoDB (Atlas free tier in production, in-memory fallback for local dev)

## Project structure

```
Al_Syedi_Salt/
├── client/          # Next.js frontend (port 3000)
├── server/          # Express API (port 5000)
└── run_project.py   # Local dev helper — runs both with one command
```

## Local development

### Option A — one command (recommended)

```bash
# From repo root, after npm install in both client/ and server/
python run_project.py
```

Runs the frontend (`next dev`) and backend (`nodemon`) side by side and restarts each one if it crashes.

### Option B — two terminals

Terminal 1 — backend:
```bash
cd server
npm install
cp .env.example .env       # then edit if needed
npm run dev
```

Terminal 2 — frontend:
```bash
cd client
npm install
cp .env.local.example .env.local
npm run dev
```

Frontend: http://localhost:3000 — Backend: http://localhost:5000/api

> If `MONGO_URI` is not set, the server starts an in-memory MongoDB instance (data resets on every restart). For production, point `MONGO_URI` at a real cluster.

## Environment variables

**server/.env**
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/al_syedi   # required in production
PORT=5000
CLIENT_URL=http://localhost:3000                                 # comma-separated for multiple
NODE_ENV=development
GEMINI_API_KEY=                                                  # optional — for the AI chatbot
```

**client/.env.local**
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## API endpoints

| Method | Route                  | Description                |
|--------|------------------------|----------------------------|
| GET    | `/api/health`          | Liveness probe             |
| GET    | `/api/products`        | List all products          |
| GET    | `/api/products/:id`    | Get one product            |
| GET    | `/api/brands`          | List all brands            |
| GET    | `/api/ingredients`     | List all salt varieties    |
| POST   | `/api/contact`         | Submit contact form        |
| POST   | `/api/newsletter`      | Subscribe to newsletter    |
| POST   | `/api/chat`            | AI assistant (Gemini)      |

## Deployment

- **Frontend** → Vercel (free Hobby tier, no card)
- **Backend** → Render (free web service, no card)
- **Database** → MongoDB Atlas M0 (free 512 MB cluster, no card)

On the backend host, set:
- `MONGO_URI` to your Atlas connection string
- `CLIENT_URL` to your Vercel domain (comma-separated if you have multiple)
- `GEMINI_API_KEY` if you want the chatbot to work

On the frontend host, set:
- `NEXT_PUBLIC_API_URL` to your deployed backend URL ending in `/api`
