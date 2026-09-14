# Root module — composes all foundation child modules.
# Day 0: bootstrap (state bucket) only. Additional modules wired in during the sprint.

module "bootstrap" {
  source = "./modules/bootstrap"

  project_id  = var.project_id
  region      = var.region
  environment = var.environment
}

# Uncomment as modules are built during the sprint:
#
# module "network" {
#   source      = "./modules/network"
#   project_id  = var.project_id
#   environment = var.environment
#   regions     = ["us-central1", "us-east1"]
# }
#
# module "identity" {
#   source      = "./modules/identity"
#   project_id  = var.project_id
#   environment = var.environment
# }
#
# module "messaging" {
#   source      = "./modules/messaging"
#   project_id  = var.project_id
#   environment = var.environment
# }
