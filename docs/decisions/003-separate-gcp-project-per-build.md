# ADR-003: Separate GCP Project Per Weekly Build

## Status
Accepted

## Context
Multiple weekly GCP projects share the same foundation modules but need isolated billing, IAM, and clean teardown.

## Decision
Create a separate GCP project for each weekly build/environment. Use project-level labels for cost attribution.

## Consequences
**Positive:** Clean billing exports, IAM isolation, safe teardown without affecting other projects.
**Negative:** More projects to manage, org-level quota considerations.
**Mitigation:** Automated project creation in bootstrap script; teardown script for cleanup.
