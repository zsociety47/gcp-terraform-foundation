# gcp-terraform-foundation

Reusable Terraform modules for the Event Ticketing Platform GCP foundation sprint.

## Day 0 — Setup only

Day 0 does **not** create cloud resources with Terraform. You install tools, create a GCP project, authenticate `gcloud`, configure the **gcloud MCP** server in Cursor, and verify everything with the checklist in [docs/day-0-setup-log.md](docs/day-0-setup-log.md).

### Prerequisites

| Tool | Minimum | Check |
|---|---|---|
| [Terraform](https://www.terraform.io/downloads) | 1.9+ | `terraform version` |
| [gcloud CLI](https://cloud.google.com/sdk/docs/install) | latest | `gcloud version` |
| Node.js | 20+ | `node --version` (for gcloud-mcp) |
| Python | 3.12+ | `python3 --version` |

### 1. Clone and Python scripts package (minimal)

```bash
git clone https://github.com/zsociety47/gcp-terraform-foundation.git
cd gcp-terraform-foundation
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```

Automation scripts (`bootstrap.py`, `teardown.py`) are added on **Day 1** and **Day 12**.

### 2. Create your GCP project (browser + CLI)

1. Sign in at [Google Cloud Console](https://console.cloud.google.com).
2. Create a **billing account** and note the Billing Account ID (`XXXXXX-XXXXXX-XXXXXX`).
3. Create a project (ID must be globally unique), e.g. `ticketflow-foundation-dev`:

```bash
gcloud projects create YOUR_PROJECT_ID --name="Foundation Dev"
gcloud billing projects link YOUR_PROJECT_ID --billing-account=YOUR_BILLING_ID
gcloud config set project YOUR_PROJECT_ID
```

4. Authenticate:

```bash
gcloud auth login
gcloud auth application-default login
```

5. Enable Storage API (needed for Day 1 state bucket):

```bash
gcloud services enable storage.googleapis.com --project=YOUR_PROJECT_ID
```

Copy `environments/dev/terraform.tfvars.example` to `environments/dev/terraform.tfvars` with your project ID. Do **not** commit `terraform.tfvars` (ignored by git).

### 3. gcloud MCP in Cursor

This repo includes [`.cursor/mcp.json`](.cursor/mcp.json):

```json
{
  "mcpServers": {
    "gcloud": {
      "command": "npx",
      "args": ["-y", "@google-cloud/gcloud-mcp"]
    }
  }
}
```

Reload Cursor MCP / the window, confirm **gcloud** is connected, then run a read-only check (e.g. describe your project). Record results in [docs/day-0-setup-log.md](docs/day-0-setup-log.md).

### 4. Ticketing platform scaffold (parallel track)

See [event-ticketing-platform/README.md](event-ticketing-platform/README.md) — one event page with ticket tier display.

## Documentation

| Start here | Description |
|---|---|
| [docs/README.md](docs/README.md) | Full documentation index |
| [docs/day-0-setup-log.md](docs/day-0-setup-log.md) | Day 0 verification checklist |
| [docs/sprint-plan.md](docs/sprint-plan.md) | Two-week sprint schedule |
| [docs/cross-cloud-glossary.md](docs/cross-cloud-glossary.md) | GCP / Azure / AWS terms |
| [docs/architecture/](docs/architecture/) | Target technical architecture |
| [docs/decisions/](docs/decisions/) | Architecture decision records |
| [docs/concepts/](docs/concepts/) | Per-concept docs (added one per sprint day) |

Platform UI and service docs: [event-ticketing-platform/docs/README.md](event-ticketing-platform/docs/README.md).

## Repository layout (Day 0)

```
gcp-terraform-foundation/
├── .cursor/mcp.json
├── docs/                        # navigation, sprint plan, ADRs, glossary
├── environments/dev/terraform.tfvars.example
├── scripts/__init__.py          # Day 1+ scripts go here
├── variables.tf
├── versions.tf                  # providers only — no resources yet
└── event-ticketing-platform/    # separate repo later; Day 0 UI scaffold
```

## What comes on Day 1

Day 1 is split into **deliverables** (one PR each). First up: state bucket bootstrap + [Terraform Remote State](docs/concepts/terraform-remote-state.md). See [docs/sprint-plan.md](docs/sprint-plan.md) and [docs/contributing-workflow.md](docs/contributing-workflow.md).

**One deliverable = one PR.** Merge and verify before starting the next deliverable.
