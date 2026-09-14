# Event Ticketing Platform (TicketFlow) — Day 0 Scaffold

Minimal frontend scaffold for the GCP foundation sprint parallel track.

## Day 0 scope

- Vite + React + TypeScript + Tailwind
- One screen: public event page with ticket tier **display** (mock data)
- Shared types: `Event`, `TicketTier` in `frontend/src/types/index.ts`

**Not yet (later days):** checkout, organizer dashboard, FastAPI backend, agents.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 — you should see the Neon Nights festival event and three ticket tiers.

## Verify build

```bash
npm run build
```

> This folder will move to its own GitHub repo (`event-ticketing-platform`) before Day 1.
