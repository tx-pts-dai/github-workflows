resource "random_pet" "this" {
  prefix = "${var.environment}-${var.region}-${var.github_repo}-"
  length = 2
}

resource "random_id" "this" {
  byte_length = 4
}
