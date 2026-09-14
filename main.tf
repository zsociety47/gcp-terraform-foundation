module "bootstrap" {
  source = "./modules/bootstrap"

  project_id  = var.project_id
  region      = var.region
  environment = var.environment
}
