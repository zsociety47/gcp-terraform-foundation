# Documentation Index

Navigate the `gcp-terraform-foundation` docs by purpose:

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

Concept docs are added one per GCP service as modules are built:

| Concept | Status |
|---|---|
| [Terraform Remote State](concepts/terraform-remote-state.md) | 🟡 Day 1 |
| VPC Design | ⬜ Day 2 |
| Cloud NAT & Hybrid Connectivity | ⬜ Day 3 |
| Firewall Rules | ⬜ Day 4 |
| IAM & Service Accounts | ⬜ Day 5 |
| Pub/Sub Fundamentals | ⬜ Day 7 |
| Compute Engine | ⬜ Day 8 |
| App Engine | ⬜ Day 9 |
| Cloud Functions | ⬜ Day 10 |
| Secrets Management | ⬜ Day 11 |
| Cost Control Automation | ⬜ Day 12 |
| CI/CD Pipeline | ⬜ Day 12 |

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
