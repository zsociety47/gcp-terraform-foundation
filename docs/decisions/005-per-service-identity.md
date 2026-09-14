# ADR-005: Per-Service Service Accounts from Day One

## Status
Accepted

## Context
The ticketing platform will have five services (three agentic, two supporting), each eventually on its own GKE Helm chart with independent scaling. Service-to-service communication will eventually cross cloud boundaries.

## Decision
Design the identity module to create a dedicated service account per service from the start, with least-privilege IAM bindings scoped to that service's needs.

Planned service accounts:
- `sa-core-api`
- `sa-forecasting-agent`
- `sa-fraud-detection`
- `sa-organizer-copilot`
- `sa-notifications`
- `sa-search-discovery`

## Consequences
**Positive:** Ready for GKE split without IAM rework; blast radius contained per service; supports cross-cloud identity federation later.
**Negative:** More service accounts to manage upfront, even before all services exist.
**Mitigation:** Identity module accepts a map of service definitions; only create accounts for services that exist.
