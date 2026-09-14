# Event Ticketing Platform (TicketFlow)

Eventbrite-style ticket-selling platform with three LangGraph AI agents and two supporting services.

> **Note:** This platform lives in its own repo (`event-ticketing-platform`). During Day 0 setup it is scaffolded alongside `gcp-terraform-foundation` in the workspace. Push to a separate GitHub repo before Day 1.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Backend | FastAPI (Python 3.12), async/await |
| Database | Cloud SQL (PostgreSQL), SQLAlchemy + Alembic |
| Agents | LangGraph (Python), Vertex AI (Gemini) |
| Messaging | GCP Pub/Sub (via foundation module) |
| IaC | Terraform, consuming `gcp-terraform-foundation` |

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Backend

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]"
uvicorn app.main:app --reload
# → http://localhost:8000
```

### Run Tests

```bash
cd backend
pytest
```

## Screens

| Screen | Route | Status |
|---|---|---|
| Public event page | `/events/:eventId` | 🟢 UI built (mock data) |
| Checkout flow | `/events/:eventId/checkout` | 🟢 UI built (mock data) |
| Organizer dashboard | `/organizer/dashboard` | 🟢 UI built (mock data) |

## Repository Layout

```
event-ticketing-platform/
├── frontend/               # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/     # UI components by domain
│   │   ├── pages/          # Route-level page components
│   │   ├── types/          # Shared TypeScript types (data model)
│   │   └── data/           # Mock/stub data for agent responses
│   └── ...
├── backend/
│   ├── app/
│   │   ├── api/            # FastAPI route handlers
│   │   ├── models/         # SQLAlchemy ORM models
│   │   └── schemas/        # Pydantic request/response schemas
│   └── tests/
└── docs/
    ├── architecture/
    ├── decisions/
    └── design/
```

## Data Model

Core entities (see `backend/app/models/` and `frontend/src/types/`):

- **events** — title, date, location, organizer
- **ticket_tiers** — name, price, total/remaining quantity (per event)
- **orders** — buyer info, status, items
- **order_items** — tier, quantity, unit price (immutable history)

Agent-driven entities (stubbed, wired in later days):

- **forecast_recommendations** — agent price/inventory suggestions
- **fraud_decisions** — agent flag/clear/block decisions (immutable)

## Related Repos

| Repo | Purpose |
|---|---|
| [gcp-terraform-foundation](https://github.com/zsociety47/gcp-terraform-foundation) | Shared Terraform modules |
| **event-ticketing-platform** (this repo) | Application code |

## Open Decisions

See [docs/decisions/001-frontend-ui-approach.md](docs/decisions/001-frontend-ui-approach.md) for pending UI/component library choices.
