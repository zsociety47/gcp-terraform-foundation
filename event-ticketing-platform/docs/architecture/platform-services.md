# Platform Services

Five services, each with independent scaling characteristics and identity.

## Agentic AI Services

### 1. Forecasting Agent
- **Purpose:** Predict sellouts, recommend price/inventory changes
- **Reasoning type:** Predictive
- **Trigger:** Pub/Sub `ticket-events` (new purchase)
- **Output:** `forecast-recommendations` topic → organizer dashboard
- **Load profile:** Bursty, compute-heavy (Vertex AI calls)

### 2. Fraud & Scalping Detection Agent
- **Purpose:** Flag suspicious purchase patterns (bulk/bot buying)
- **Reasoning type:** Anomaly detection + policy reasoning
- **Trigger:** Pub/Sub `ticket-events` (checkout initiated)
- **Output:** cleared/flagged/blocked decision on checkout UI
- **Load profile:** Near real-time, latency-sensitive

### 3. Organizer Copilot Agent
- **Purpose:** Draft event descriptions, suggest tier names/pricing, generate launch copy
- **Reasoning type:** Generative
- **Trigger:** Organizer dashboard actions
- **Output:** Text suggestions displayed in dashboard
- **Load profile:** On-demand, moderate compute

## Supporting Services

### 4. Notifications Service
- **Purpose:** Confirmations, price-change alerts, sellout warnings
- **Trigger:** Pub/Sub from agents and core API
- **Delivery:** SendGrid (email), future SMS
- **Load profile:** Lightweight, event-driven
- **Future:** Moves to Azure Functions or AWS Lambda (multi-cloud project)

### 5. Search/Discovery Service
- **Purpose:** Event browsing, filtering, search
- **Trigger:** Public frontend requests
- **Load profile:** Read-heavy, cache-friendly

## Service Account Mapping

Each service gets a dedicated GCP service account (via foundation `identity` module):

| Service | Service Account | Key Permissions |
|---|---|---|
| Core API | `sa-core-api` | Cloud SQL, Pub/Sub publish, Secret Manager |
| Forecasting | `sa-forecasting-agent` | Vertex AI, Pub/Sub sub/pub, Cloud SQL read |
| Fraud Detection | `sa-fraud-detection` | Pub/Sub subscribe |
| Organizer Copilot | `sa-organizer-copilot` | Vertex AI |
| Notifications | `sa-notifications` | Pub/Sub subscribe, SendGrid |
| Search | `sa-search-discovery` | Cloud SQL read |
