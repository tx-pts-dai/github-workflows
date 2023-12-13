terraform {
  backend "s3" {}
  required_version = "1.5.7"

  required_providers {
    random = {
      source = "hashicorp/random"
    }
  }
}

resource "random_pet" "this" {
  length = 2
}

resource "random_id" "this" {
  byte_length = 4
}

output "random_pet" {
  value = random_pet.this.id
}

output "random_id" {
  value = random_id.this.id
}
