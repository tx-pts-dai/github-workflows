---
title: Docker Build and Push to ECR
---

<!-- action-docs-header source=".github/workflows/docker-build-push-ecr-advanced.yaml" -->
# Docker Build and Push to ECR
<!-- action-docs-header source=".github/workflows/docker-build-push-ecr-advanced.yaml" -->

## Description

<!-- action-docs-inputs source=".github/workflows/docker-build-push-ecr-advanced.yaml" -->
## Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `environment` | <p>Environment to run the build in</p> | `string` | `false` | `""` |
| `aws_account_id` | <p>AWS Account ID</p> | `string` | `false` | `""` |
| `aws_region` | <p>AWS Region</p> | `string` | `false` | `""` |
| `aws_role_name` | <p>AWS Role Name</p> | `string` | `false` | `""` |
| `aws_oidc_role_arn` | <p>AWS OIDC IAM role to assume</p> | `string` | `false` | `""` |
| `image_tags` | <p>toJSON() string with full repo/image:tag list</p> | `string` | `true` | `""` |
| `image_labels` | <p>toJSON() JSON string with image labels</p> | `string` | `false` | `{}` |
| `docker_build_args` | <p>array string with build args</p> | `string` | `false` | `[]` |
| `docker_context` | <p>Path to the build context</p> | `string` | `false` | `""` |
| `dockerfile_path` | <p>Path to the Dockerfile. If not defined, will default to {docker_context}/Dockerfile</p> | `string` | `false` | `""` |
| `docker_push` | <p>Push Image to ECR</p> | `boolean` | `false` | `true` |
| `docker_target` | <p>Build target</p> | `string` | `false` | `""` |
| `artifact_name` | <p>Artifact name to be downloaded before building</p> | `string` | `false` | `""` |
| `artifact_path` | <p>Artifact target path</p> | `string` | `false` | `""` |
| `runner_labels` | <p>Runner that the main job should run on as JSON encoded list.</p> | `string` | `false` | ` ['ubuntu-latest'] ` |
<!-- action-docs-inputs source=".github/workflows/docker-build-push-ecr-advanced.yaml" -->

<!-- action-docs-outputs source=".github/workflows/docker-build-push-ecr-advanced.yaml" -->

<!-- action-docs-outputs source=".github/workflows/docker-build-push-ecr-advanced.yaml" -->

<!-- action-docs-usage source=".github/workflows/docker-build-push-ecr-advanced.yaml" project="tx-pts-dai/github-workflows/.github/workflows/docker-build-push-ecr-advanced.yaml" version="v1" -->
## Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/docker-build-push-ecr-advanced.yaml@v1
    with:
      environment:
      # Environment to run the build in
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

      image_tags:
      # toJSON() string with full repo/image:tag list
      #
      # Type: string
      # Required: true
      # Default: ""

      image_labels:
      # toJSON() JSON string with image labels
      #
      # Type: string
      # Required: false
      # Default: {}

      docker_build_args:
      # array string with build args
      #
      # Type: string
      # Required: false
      # Default: []

      docker_context:
      # Path to the build context
      #
      # Type: string
      # Required: false
      # Default: ""

      dockerfile_path:
      # Path to the Dockerfile. If not defined, will default to {docker_context}/Dockerfile
      #
      # Type: string
      # Required: false
      # Default: ""

      docker_push:
      # Push Image to ECR
      #
      # Type: boolean
      # Required: false
      # Default: true

      docker_target:
      # Build target
      #
      # Type: string
      # Required: false
      # Default: ""

      artifact_name:
      # Artifact name to be downloaded before building
      #
      # Type: string
      # Required: false
      # Default: ""

      artifact_path:
      # Artifact target path
      #
      # Type: string
      # Required: false
      # Default: ""

      runner_labels:
      # Runner that the main job should run on as JSON encoded list.
      #
      # Type: string
      # Required: false
      # Default:  ['ubuntu-latest'] 
```
<!-- action-docs-usage source=".github/workflows/docker-build-push-ecr-advanced.yaml" project="tx-pts-dai/github-workflows/.github/workflows/docker-build-push-ecr-advanced.yaml" version="v1" -->

# Example

# FAQ
