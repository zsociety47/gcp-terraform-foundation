output "state_bucket_name" {
  description = "GCS bucket name for Terraform remote state."
  value       = google_storage_bucket.terraform_state.name
}

output "state_bucket_url" {
  description = "GCS URL for the Terraform state bucket."
  value       = google_storage_bucket.terraform_state.url
}

output "backups_bucket_name" {
  description = "GCS bucket name for automated backups."
  value       = google_storage_bucket.backups.name
}
