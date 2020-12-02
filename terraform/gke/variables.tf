variable "project" {
  default = "clevertech-297410"
}

variable "region" {
  default = "us-east1"
}

variable "zone" {
  default = "us-east1-d"
}

variable "app_name" {
  default = "clevertech-test"
}

variable "cluster" {
  default = "clevertech-gke"
}

variable "credentials" {
  default = "../clevertech-sa.json"
}

variable "kubernetes_min_ver" {
  default = "latest"
}

variable "kubernetes_max_ver" {
  default = "latest"
}

variable "machine_type" {
  default = "e2-small"
}
