# Documentation Index — Event Ticketing Platform

## Architecture

| Document | Description |
|---|---|
| [Technical Architecture](architecture/technical-architecture.md) | Service topology, data flow, agent integration |
| [Platform Services](architecture/platform-services.md) | Five services and their responsibilities |

## Design

| Document | Description |
|---|---|
| [UI Design Direction](design/ui-design-direction.md) | Visual direction, component approach, accessibility |

## Decisions (ADRs)

| ADR | Title | Status |
|---|---|---|
| [001](decisions/001-frontend-ui-approach.md) | Frontend UI approach | Proposed |

## Data Model

Types live in two places (kept in sync):

- **Frontend:** `frontend/src/types/index.ts`
- **Backend:** `backend/app/models/` (SQLAlchemy) + `backend/app/schemas/` (Pydantic)
