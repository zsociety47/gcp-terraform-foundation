# Day 0 Setup Log

Use this worksheet to verify setup **step by step**. Fill in outputs as you go. Do not start Day 1 until every required row is checked.

## Your turn: GCP from scratch (do this first on your machine)

1. Open [Google Cloud Console](https://console.cloud.google.com) and sign in (or create a Google account).
2. **Billing** → **Manage billing accounts** → **Create account** → add a payment method. Copy the **Billing account ID**.
3. In a terminal (with [gcloud installed](https://cloud.google.com/sdk/docs/install)):

```bash
# Replace with a globally unique project ID
export PROJECT_ID=ticketflow-foundation-dev
export BILLING_ID=YOUR_BILLING_ACCOUNT_ID

gcloud projects create "$PROJECT_ID" --name="Foundation Dev"
gcloud billing projects link "$PROJECT_ID" --billing-account="$BILLING_ID"
gcloud config set project "$PROJECT_ID"
gcloud auth login
gcloud auth application-default login
gcloud services enable storage.googleapis.com --project="$PROJECT_ID"
```

4. Copy `environments/dev/terraform.tfvars.example` to `environments/dev/terraform.tfvars` and set `project_id`.
5. In **Cursor** (desktop), open this repo, reload MCP, and confirm the **gcloud** server connects (uses `.cursor/mcp.json`).

## Cloud agent pre-check (automated — partial)

These were verified in the Cloud Agent environment; **you still must complete GCP auth and MCP on your local Cursor**:

| Check | Result |
|---|---|
| Terraform | v1.9.8 |
| gcloud SDK | 584.0.0 |
| Node.js | v22.14.0 |
| Python | 3.12.3 |
| gcloud auth | Not configured in cloud VM — expected; run `gcloud auth login` locally |
| Frontend `npm run build` | Passed |
| Repo scope | No `modules/`, no `backend/` |

## Tooling

| # | Step | Command | Your output / notes | Done |
|---|---|---|---|---|
| 1 | Terraform | `terraform version` | | ☐ |
| 2 | gcloud CLI | `gcloud version` | | ☐ |
| 3 | Node.js (MCP) | `node --version` | Need v20+ | ☐ |
| 4 | Python | `python3 --version` | Need 3.12+ | ☐ |

## GCP account and project

| # | Step | Action | Your values | Done |
|---|---|---|---|---|
| 5 | Cloud account | [console.cloud.google.com](https://console.cloud.google.com) sign-in | Email: | ☐ |
| 6 | Billing account | Billing → Manage billing accounts | Billing Account ID: | ☐ |
| 7 | Create project | `gcloud projects create PROJECT_ID --name="Foundation Dev"` | Project ID: | ☐ |
| 8 | Link billing | `gcloud billing projects link PROJECT_ID --billing-account=BILLING_ID` | | ☐ |
| 9 | Default project | `gcloud config set project PROJECT_ID` | | ☐ |
| 10 | Describe project | `gcloud projects describe PROJECT_ID` | Paste project number if helpful | ☐ |
| 11 | Billing enabled | `gcloud billing projects describe PROJECT_ID` | Expect `billingEnabled: true` | ☐ |

## Authentication

| # | Step | Command | Done |
|---|---|---|---|
| 12 | User login | `gcloud auth login` | ☐ |
| 13 | Application default | `gcloud auth application-default login` | ☐ |
| 14 | Active account | `gcloud auth list` | Active account marked with `*` | ☐ |

## APIs (Day 1 prep only)

| # | Step | Command | Done |
|---|---|---|---|
| 15 | Cloud Storage API | `gcloud services enable storage.googleapis.com --project=PROJECT_ID` | ☐ |

## Local Terraform config (no apply yet)

| # | Step | Action | Done |
|---|---|---|---|
| 16 | tfvars | Copy `environments/dev/terraform.tfvars.example` → `environments/dev/terraform.tfvars` | ☐ |
| 17 | Set project_id | Edit `terraform.tfvars` with your real `PROJECT_ID` | ☐ |

## gcloud MCP (Cursor)

| # | Step | Action | Done |
|---|---|---|---|
| 18 | Config present | Repo has `.cursor/mcp.json` with `@google-cloud/gcloud-mcp` | ☐ |
| 19 | MCP connected | Cursor → MCP settings → **gcloud** server connected | ☐ |
| 20 | MCP smoke test | Ask agent to run read-only: `gcloud projects describe PROJECT_ID` | ☐ |
| 21 | Match CLI | MCP result matches terminal `gcloud projects describe` | ☐ |

**If MCP fails:** ensure `gcloud auth login` completed on the same machine as Cursor, Node 20+, and reload the window.

## Ticketing platform frontend

| # | Step | Command | Expected | Done |
|---|---|---|---|---|
| 22 | Install deps | `cd event-ticketing-platform/frontend && npm install` | No errors | ☐ |
| 23 | Dev server | `npm run dev` | Event page at http://localhost:5173 | ☐ |
| 24 | Production build | `npm run build` | Exit code 0 | ☐ |

## Repo scope sanity check

| # | Check | Expected | Done |
|---|---|---|---|
| 25 | No Terraform modules | No `modules/` directory | ☐ |
| 26 | No backend API | No `event-ticketing-platform/backend/` | ☐ |
| 27 | Single UI screen | Event page + tier list only | ☐ |

---

## Agent / cloud environment notes

If you run this checklist on a **Cursor Cloud Agent** VM, items 12–14 and 19–21 may require **your local Cursor desktop** (where you signed into Google). Complete GCP auth and MCP verification on the machine where you develop day to day, then paste results above.

## Sign-off

- **Date completed:**
- **Project ID used for sprint:**
- **Ready for Day 1:** ☐ Yes ☐ Not yet — blockers:
