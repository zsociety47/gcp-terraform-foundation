# gcp-terraform-foundation

Reusable, versioned Terraform modules that underpin the [Event Ticketing Platform](https://github.com/zsociety47/event-ticketing-platform) and future GCP weekly projects.

## What This Repo Is

A **multi-module Terraform foundation** designed for:

- Multiple independently-deployed microservices (forecasting agent, fraud detection, organizer copilot, notifications, search)
- Dev / staging / prod environment separation
- Remote state in GCS (bootstrapped by this repo itself)
- Cross-cloud expansion (notifications service will eventually move off GCP)

## Quick Start

### Prerequisites

| Tool | Version | Purpose |
|---|---|---|
| [Terraform](https://www.terraform.io/downloads) | ≥ 1.9 | Infrastructure as code |
| [gcloud CLI](https://cloud.google.com/sdk/docs/install) | latest | GCP authentication & project management |
| Python | ≥ 3.12 | Bootstrap/teardown scripts |

### 1. Clone and configure

```bash
git clone https://github.com/zsociety47/gcp-terraform-foundation.git
cd gcp-terraform-foundation
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```

### 2. Create a GCP project

```bash
gcloud projects create YOUR_PROJECT_ID --name="Foundation Dev"
gcloud billing projects link YOUR_PROJECT_ID --billing-account=YOUR_BILLING_ACCOUNT
gcloud config set project YOUR_PROJECT_ID
```

### 3. Bootstrap remote state

```bash
cp environments/dev/terraform.tfvars.example environments/dev/terraform.tfvars
# Edit terraform.tfvars with your project ID

terraform init
terraform apply -var-file=environments/dev/terraform.tfvars
```

### 4. Migrate to remote backend

```bash
cp backend.tf.example backend.tf
# Edit bucket name in backend.tf
terraform init -migrate-state
```

### 5. Tear down (cost control)

```bash
python scripts/teardown.py --project-id YOUR_PROJECT_ID --environment dev
```

## Repository Layout

```
gcp-terraform-foundation/
├── modules/
│   ├── bootstrap/          # GCS state bucket + backup bucket (Day 1)
│   ├── network/            # VPC, NAT, firewall (Days 2–4)
│   ├── identity/           # IAM, service accounts (Day 5)
│   ├── messaging/          # Pub/Sub topics (Day 7)
│   ├── compute-vm/         # Compute Engine (Day 8)
│   ├── compute-app-engine/ # App Engine (Day 9)
│   └── compute-functions/  # Cloud Functions (Day 10)
├── environments/
│   ├── dev/
│   ├── staging/
│   └── prod/
├── scripts/
│   ├── bootstrap.py        # Automated state bootstrap
│   └── teardown.py         # Cost-control teardown
├── docs/
│   ├── architecture/       # Technical architecture docs
│   ├── concepts/           # Per-concept docs (Why / Terraform / Interview Q&A)
│   ├── decisions/          # Architecture Decision Records (ADRs)
│   └── cross-cloud-glossary.md
└── tests/                  # terraform validate + Python tests
```

## Module Roadmap

| Sprint Day | Module | Status |
|---|---|---|
| Day 1 | Bootstrap (state bucket + backup lifecycle) | 🟡 In progress |
| Days 2–4 | Network (VPC, NAT, firewall, hybrid stub) | ⬜ Planned |
| Day 5 | Identity (IAM, per-service accounts) | ⬜ Planned |
| Day 7 | Messaging (Pub/Sub) | ⬜ Planned |
| Days 8–10 | Compute (VM, App Engine, Functions) | ⬜ Planned |
| Day 11 | Secrets & environments | ⬜ Planned |
| Day 12 | Cost control & CI/CD | ⬜ Planned |

## Documentation

- [Technical Architecture](docs/architecture/technical-architecture.md) — how modules compose and connect
- [Platform Context](docs/architecture/platform-context.md) — the ticketing platform this foundation supports
- [Sprint Plan](docs/sprint-plan.md) — two-week day-by-day schedule
- [Cross-Cloud Glossary](docs/cross-cloud-glossary.md) — GCP / Azure / AWS terminology mapping
- [ADRs](docs/decisions/) — architecture decision records
- [Concept Docs](docs/concepts/) — per-service deep dives (Why / Terraform / Interview Q&A)

## Related Repos

| Repo | Purpose |
|---|---|
| **gcp-terraform-foundation** (this repo) | Shared Terraform modules |
| [event-ticketing-platform](https://github.com/zsociety47/event-ticketing-platform) | FastAPI + React ticketing app + LangGraph agents |

## License

MIT
