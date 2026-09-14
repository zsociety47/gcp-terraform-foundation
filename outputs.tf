output "state_bucket_name" {
  description = "Name of the GCS bucket used for Terraform remote state."
  value       = module.bootstrap.state_bucket_name
}

output "project_id" {
  description = "GCP project ID."
  value       = var.project_id
}

output "environment" {
  description = "Deployment environment."
  value       = var.environment
}
