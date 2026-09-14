variable "project_id" {
  description = "GCP project ID where foundation resources will be created."
  type        = string
}

variable "region" {
  description = "Primary GCP region for foundation resources."
  type        = string
  default     = "us-central1"
}

variable "environment" {
  description = "Deployment environment (dev, staging, prod)."
  type        = string
  default     = "dev"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be one of: dev, staging, prod."
  }
}

variable "billing_account" {
  description = "GCP billing account ID (required for project creation during bootstrap)."
  type        = string
  default     = ""
}

variable "org_id" {
  description = "GCP organization ID (optional — used for org-level IAM bindings)."
  type        = string
  default     = ""
}
