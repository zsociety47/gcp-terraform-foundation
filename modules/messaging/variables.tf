variable "project_id" {
  type = string
}

variable "environment" {
  type = string
}

variable "topics" {
  description = "Pub/Sub topic definitions."
  type = map(object({
    subscriptions = list(string)
  }))
  default = {}
}
