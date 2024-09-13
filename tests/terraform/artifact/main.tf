output "file" {
  value = file("${path.module}/${var.file_path}")
}

variable "var1" {
  type = string
}

variable "file_path" {
  type = string
}
