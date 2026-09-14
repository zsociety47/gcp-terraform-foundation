# Architecture Decision Records (ADRs)

We document significant architecture decisions using the ADR format. Each record captures the context, decision, and consequences.

## Index

| ADR | Title | Status |
|---|---|---|
| [001](001-multi-repo-structure.md) | Multi-repo structure | Accepted |
| [002](002-remote-state-in-gcs.md) | Remote state in GCS | Accepted |
| [003](003-separate-gcp-project-per-build.md) | Separate GCP project per weekly build | Accepted |
| [004](004-module-split-strategy.md) | Independent child modules per concern | Accepted |
| [005](005-per-service-identity.md) | Per-service service accounts from day one | Accepted |

## Format

Each ADR follows this template:

```
# ADR-NNN: Title

## Status
Accepted | Proposed | Deprecated | Superseded by ADR-NNN

## Context
What is the issue?

## Decision
What did we decide?

## Consequences
What are the trade-offs?
```
