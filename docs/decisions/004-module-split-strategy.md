# ADR-004: Independent Child Modules Per Concern

## Status
Accepted

## Context
The foundation must support multiple independently-deployed microservices (five services in the ticketing platform, more in future projects). A monolithic Terraform module would force all consumers to deploy everything.

## Decision
Split into independent child modules:
- `bootstrap`, `network`, `identity`, `messaging`
- Three separate compute modules: `compute-vm`, `compute-app-engine`, `compute-functions`

Each module has its own `main.tf`, `variables.tf`, `outputs.tf`. The root module composes them.

## Consequences
**Positive:** Consumers pick only what they need; modules version independently; aligns with future K8s service split.
**Negative:** More files to maintain; inter-module dependencies must be explicit via outputs/inputs.
**Mitigation:** Root module provides a "batteries included" composition; individual modules usable standalone.
