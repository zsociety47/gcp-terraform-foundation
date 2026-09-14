resource "google_storage_bucket" "terraform_state" {
  name     = "${var.project_id}-tfstate-${var.environment}"
  location = var.region
  project  = var.project_id

  uniform_bucket_level_access = true
  force_destroy               = var.environment == "dev"

  versioning {
    enabled = true
  }

  lifecycle_rule {
    condition {
      age = 90
    }
    action {
      type = "Delete"
    }
  }

  labels = {
    purpose     = "terraform-state"
    environment = var.environment
    managed_by  = "gcp-terraform-foundation"
  }
}

resource "google_storage_bucket" "backups" {
  name     = "${var.project_id}-backups-${var.environment}"
  location = var.region
  project  = var.project_id

  uniform_bucket_level_access = true
  force_destroy               = var.environment == "dev"

  versioning {
    enabled = true
  }

  lifecycle_rule {
    condition {
      age = 30
    }
    action {
      type          = "SetStorageClass"
      storage_class = "NEARLINE"
    }
  }

  lifecycle_rule {
    condition {
      age = 90
    }
    action {
      type          = "SetStorageClass"
      storage_class = "ARCHIVE"
    }
  }

  labels = {
    purpose     = "backups"
    environment = var.environment
    managed_by  = "gcp-terraform-foundation"
  }
}
