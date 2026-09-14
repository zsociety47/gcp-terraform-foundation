variable "project_id" {
  type = string
}

variable "environment" {
  type = string
}

variable "regions" {
  description = "GCP regions for multi-region subnet deployment."
  type        = list(string)
}
