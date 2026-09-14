variable "project_id" {
  type = string
}

variable "environment" {
  type = string
}

variable "service_accounts" {
  description = "Map of service account definitions keyed by service name."
  type = map(object({
    display_name = string
    description  = string
    roles        = list(string)
  }))
  default = {}
}
