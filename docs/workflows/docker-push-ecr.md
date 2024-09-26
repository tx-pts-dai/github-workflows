---
title: Docker Push to ECR
---

<!-- action-docs-header source=".github/workflows/docker-push-ecr.yaml" -->
# Docker Push to ECR
<!-- action-docs-header source=".github/workflows/docker-push-ecr.yaml" -->

## Description

This workflow pushes a Docker artifact to an ECR repository.

<!-- action-docs-inputs source=".github/workflows/docker-push-ecr.yaml" -->
## Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `environment` | <p>Environment to deploy</p> | `string` | `false` | `""` |
| `aws_account_id` | <p>AWS Account ID</p> | `string` | `false` | `""` |
| `aws_region` | <p>AWS Region</p> | `string` | `false` | `""` |
| `aws_role_name` | <p>AWS Role Name</p> | `string` | `false` | `""` |
| `aws_oidc_role_arn` | <p>AWS OIDC IAM role to assume</p> | `string` | `false` | `""` |
| `image_name` | <p>Name of the Docker image to build</p> | `string` | `false` | `""` |
| `image_tag` | <p>Tag of the Docker image to build</p> | `string` | `false` | `${{ github.sha }}` |
<!-- action-docs-inputs source=".github/workflows/docker-push-ecr.yaml" -->

<!-- action-docs-outputs source=".github/workflows/docker-push-ecr.yaml" -->

<!-- action-docs-outputs source=".github/workflows/docker-push-ecr.yaml" -->

<!-- action-docs-usage source=".github/workflows/docker-push-ecr.yaml" project="tx-pts-dai/github-workflows/.github/workflows/docker-push-ecr.yaml" version="v1" -->
## Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/docker-push-ecr.yaml@v1
    with:
      environment:
      # Environment to deploy
      #
      # Type: string
      # Required: false
      # Default: ""

      aws_account_id:
      # AWS Account ID
      #
      # Type: string
      # Required: false
      # Default: ""

      aws_region:
      # AWS Region
      #
      # Type: string
      # Required: false
      # Default: ""

      aws_role_name:
      # AWS Role Name
      #
      # Type: string
      # Required: false
      # Default: ""

      aws_oidc_role_arn:
      # AWS OIDC IAM role to assume
      #
      # Type: string
      # Required: false
      # Default: ""

      image_name:
      # Name of the Docker image to build
      #
      # Type: string
      # Required: false
      # Default: ""

      image_tag:
      # Tag of the Docker image to build
      #
      # Type: string
      # Required: false
      # Default: ${{ github.sha }}
```
<!-- action-docs-usage source=".github/workflows/docker-push-ecr.yaml" project="tx-pts-dai/github-workflows/.github/workflows/docker-push-ecr.yaml" version="v1" -->

# Example

# FAQ
