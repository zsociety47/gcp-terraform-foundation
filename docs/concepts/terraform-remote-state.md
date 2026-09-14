# Terraform Remote State

## Why

Terraform tracks the mapping between your configuration and real infrastructure in a **state file**. By default this is a local `terraform.tfstate` file — fine for solo experiments, problematic for teams:

- **No locking** — two people running `apply` simultaneously corrupt state
- **No sharing** — teammates can't see what's deployed
- **No backup** — delete the file, lose track of all resources
- **Secrets in plaintext** — state files contain resource attributes including sensitive values

Remote state in GCS solves all four: centralized, versioned, access-controlled, with native locking.

For this project, the state bucket is the **first resource** the foundation module creates — anyone cloning the repo can bootstrap their own state independently.

## Terraform

### Bootstrap module (`modules/bootstrap/main.tf`)

```hcl
resource "google_storage_bucket" "terraform_state" {
  name     = "${var.project_id}-tfstate-${var.environment}"
  location = var.region
  project  = var.project_id

  uniform_bucket_level_access = true
  versioning { enabled = true }

  lifecycle_rule {
    condition { age = 90 }
    action    { type = "Delete" }
  }
}
```

### Backend configuration (`backend.tf.example`)

```hcl
terraform {
  backend "gcs" {
    bucket = "YOUR_PROJECT_ID-tfstate-dev"
    prefix = "foundation"
  }
}
```

### Bootstrap flow

```bash
# 1. Apply with local state (creates the bucket)
terraform apply -var-file=environments/dev/terraform.tfvars

# 2. Configure remote backend
cp backend.tf.example backend.tf
# Edit bucket name

# 3. Migrate state to GCS
terraform init -migrate-state
```

## Interview Questions

**Q: Why not use local state?**
A: Local state doesn't support locking, sharing, or versioning. In a team or CI/CD pipeline, concurrent applies will corrupt state. Remote backends (GCS, S3, Azure Blob) provide locking and centralized access.

**Q: What happens if two people run `terraform apply` at the same time?**
A: With a remote backend that supports locking (GCS does natively), the second apply blocks until the first completes and releases the lock. Without locking, both reads the same state, both apply changes, and the last write wins — potentially orphaning resources.

**Q: Should you commit `terraform.tfstate` to git?**
A: No. State files contain sensitive values (database passwords, API keys in resource attributes). Use remote state with access controls instead.

**Q: What's the difference between `terraform init` and `terraform init -migrate-state`?**
A: Regular `init` downloads providers and configures the backend. `-migrate-state` additionally copies existing local state into the newly configured remote backend, then deletes the local file.

**Q: How do you handle state for multiple environments?**
A: Separate state files per environment — either via different `prefix` values in the same bucket (`foundation/dev`, `foundation/staging`) or separate buckets entirely. This project uses separate GCP projects per environment with bucket naming `{project_id}-tfstate-{environment}`.
