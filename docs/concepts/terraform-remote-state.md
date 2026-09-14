# Terraform Remote State

> **Day 1 placeholder.** The **Why** and **Interview questions** below are stable reference material. The **Terraform** section with live module paths will be filled in when the Day 1 PR adds `modules/bootstrap/` and `main.tf`. Until then, use [\_template.md](_template.md) and verify snippets against the repo after merge.

## Why

Terraform tracks the mapping between your configuration and real infrastructure in a **state file**. By default this is a local `terraform.tfstate` file — fine for solo experiments, problematic for teams:

- **No locking** — two people running `apply` simultaneously can corrupt state  
- **No sharing** — teammates cannot see what is deployed  
- **No backup** — delete the file, lose track of resources  
- **Secrets in plaintext** — state can contain sensitive resource attributes  

Remote state in GCS provides centralized storage, versioning, IAM-controlled access, and locking suitable for CI/CD.

For this project, the state bucket will be the **first** resource the bootstrap module creates (Day 1).

## Terraform

_To be added on Day 1:_

- `modules/bootstrap/main.tf` — GCS bucket with versioning  
- `backend.tf.example` — remote backend configuration  
- Bootstrap flow: local apply → configure backend → `terraform init -migrate-state`  

Follow the Day 1 PR and copy code from the repo; do not rely on outdated snippets here.

## Interview Questions

**Q: Why not use local state?**  
A: Local state lacks locking and sharing. Concurrent applies or CI runs can corrupt state; remote backends (GCS, S3, Azure Blob) add locking and centralized access.

**Q: What happens if two people run `terraform apply` at the same time?**  
A: With a remote backend that supports locking (GCS does), the second apply waits until the first releases the lock. Without locking, last write wins and resources can be orphaned.

**Q: Should you commit `terraform.tfstate` to git?**  
A: No. Use remote state with access controls; state may contain sensitive values.

**Q: What's the difference between `terraform init` and `terraform init -migrate-state`?**  
A: `-migrate-state` copies existing local state into a newly configured remote backend.

**Q: How do you handle state for multiple environments?**  
A: Separate state per environment — different GCS prefixes or buckets, often paired with separate GCP projects as in [ADR 003](../decisions/003-separate-gcp-project-per-build.md).
