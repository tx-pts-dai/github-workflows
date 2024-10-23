resource "random_pet" "this" {
  length = 2
}

resource "random_id" "this" {
  byte_length = 4

  keepers = {
    null_resource_id = null_resource.test.id
  }
}

resource "null_resource" "test" {
  triggers = {
    always_run = "${timestamp()}"
  }
}

variable "var1" {
  type = string
}

variable "var2" {
  type    = string
  default = "baz"
}

output "random_pet" {
  value = random_pet.this.id
}

output "random_id" {
  value = random_id.this.id
}

output "map_map" {
  value = {
    foo = {
      bar = "baz"
    }
  }
}

output "map_array" {
  value = {
    foo = ["bar", "baz"]
  }
}
