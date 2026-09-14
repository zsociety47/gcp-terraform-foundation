# ADR-002: Remote State in GCS

## Status
Accepted

## Context
Terraform state must be shared across team members and CI/CD pipelines. State contains sensitive resource attributes and must be protected.

## Decision
Store Terraform state in a GCS bucket with:
- Object Versioning enabled (rollback capability)
- Uniform bucket-level access (no ACL complexity)
- The bootstrap module creates this bucket as its first resource

Bootstrap flow: apply locally → create bucket → migrate to remote backend.

## Consequences
**Positive:** Native GCP locking, versioning, IAM-controlled access, no third-party state backend needed.
**Negative:** Chicken-and-egg bootstrap (need local state for first apply).
**Mitigation:** Documented bootstrap flow in README and `scripts/bootstrap.py`.
