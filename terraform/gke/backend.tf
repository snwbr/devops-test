terraform {
  backend "gcs" {
    bucket      = "clevertech-terraform"
    prefix      = "clevertech"
    credentials = "../clevertech-sa.json"
  }
}
