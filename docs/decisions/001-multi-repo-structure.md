# ADR-001: Multi-Repo Structure

## Status
Accepted

## Context
The foundation sprint produces two distinct artifacts: reusable Terraform modules and an event ticketing application with AI agents. These have different lifecycles, consumers, and deployment patterns.

## Decision
Use a multi-repo structure:
- `gcp-terraform-foundation` — shared, versioned Terraform modules
- `event-ticketing-platform` — application code (FastAPI + React + LangGraph agents)
- One repo per future weekly project/service

Foundation modules are consumed by downstream repos via Terraform `module` source references (Git tags or Terraform Registry).

## Consequences
**Positive:** Independent versioning, clean IAM boundaries, modules reusable across projects.
**Negative:** Cross-repo coordination overhead, need to pin module versions explicitly.
**Mitigation:** Document module consumption pattern; use Git tags for version pinning.
