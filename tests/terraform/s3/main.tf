terraform {
  backend "s3" {
    dynamodb_table = "terraform-lock"
    region         = "eu-central-1"
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

variable "var1" {
  type = string
}

variable "var2" {
  type    = string
  default = "baz"
}
