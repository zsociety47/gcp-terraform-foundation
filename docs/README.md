# Documentation Index

Navigate the `gcp-terraform-foundation` docs by purpose:

## Getting started

| Document | Description |
|---|---|
| [Day 0 Setup Log](day-0-setup-log.md) | Tools, GCP project, gcloud MCP, verification checklist |

## Architecture

| Document | Description |
|---|---|
| [Technical Architecture](architecture/technical-architecture.md) | Module composition, state management, environment strategy |
| [Platform Context](architecture/platform-context.md) | The event ticketing platform this foundation supports |

## Sprint & Planning

| Document | Description |
|---|---|
| [Sprint Plan](sprint-plan.md) | Two-week foundation sprint schedule (Day 0–13) |

## Concepts (Why / Terraform / Interview Q&A)

See [concepts/README.md](concepts/README.md) for the full index and [concepts/_template.md](concepts/_template.md) for the format. Summary:

| Concept | Status |
|---|---|
| [Terraform Remote State](concepts/terraform-remote-state.md) | Day 1 deliverable 1 (state bucket) |
| VPC Design | Planned — Day 2 |
| Cloud NAT & Hybrid Connectivity | Planned — Day 3 |
| Firewall Rules | Planned — Day 4 |
| IAM & Service Accounts | Planned — Day 5 |
| Pub/Sub Fundamentals | Planned — Day 7 |
| Compute Engine | Planned — Day 8 |
| App Engine | Planned — Day 9 |
| Cloud Functions | Planned — Day 10 |
| Secrets Management | Planned — Day 11 |
| Cost Control Automation | Planned — Day 12 |
| CI/CD Pipeline | Planned — Day 12 |

## Decisions (ADRs)

| ADR | Title |
|---|---|
| [001](decisions/001-multi-repo-structure.md) | Multi-repo structure |
| [002](decisions/002-remote-state-in-gcs.md) | Remote state in GCS |
| [003](decisions/003-separate-gcp-project-per-build.md) | Separate GCP project per weekly build |
| [004](decisions/004-module-split-strategy.md) | Independent child modules per concern |
| [005](decisions/005-per-service-identity.md) | Per-service service accounts from day one |

## Reference

| Document | Description |
|---|---|
| [Cross-Cloud Glossary](cross-cloud-glossary.md) | GCP / Azure / AWS terminology mapping |
