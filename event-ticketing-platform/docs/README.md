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

## Data Model (Day 0)

- **Frontend:** `frontend/src/types/index.ts` — `Event` and `TicketTier` only  
- **Backend:** planned (Day 2+) — SQLAlchemy models and Pydantic schemas will mirror these types  
