---
title: Docker Build
---

<!-- action-docs-header source=".github/workflows/docker-build.yaml" -->
# Docker Build
<!-- action-docs-header source=".github/workflows/docker-build.yaml" -->

# Description

This workflow builds a Docker image and the artifact is uploaded to the GitHub artifact store.

<!-- action-docs-inputs source=".github/workflows/docker-build.yaml" -->
## Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `environment` | <p>Environment to deploy</p> | `string` | `false` | `""` |
| `image_name` | <p>Name of the Docker image to build</p> | `string` | `false` | `""` |
| `docker_context` | <p>Path to the build context</p> | `string` | `false` | `""` |
| `artifact_retention_days` | <p>Number of days to retain the artifact</p> | `number` | `false` | `""` |
| `docker_target` | <p>Build target</p> | `string` | `false` | `""` |
<!-- action-docs-inputs source=".github/workflows/docker-build.yaml" -->

<!-- action-docs-outputs source=".github/workflows/docker-build.yaml" -->

<!-- action-docs-outputs source=".github/workflows/docker-build.yaml" -->

<!-- action-docs-usage source=".github/workflows/docker-build.yaml" project="tx-pts-dai/github-workflows/.github/workflows/docker-build.yaml" version="v1" -->
## Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/docker-build.yaml@v1
    with:
      environment:
      # Environment to deploy
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

      docker_context:
      # Path to the build context
      #
      # Type: string
      # Required: false
      # Default: ""

      artifact_retention_days:
      # Number of days to retain the artifact
      #
      # Type: number
      # Required: false
      # Default: ""

      docker_target:
      # Build target
      #
      # Type: string
      # Required: false
      # Default: ""
```
<!-- action-docs-usage source=".github/workflows/docker-build.yaml" project="tx-pts-dai/github-workflows/.github/workflows/docker-build.yaml" version="v1" -->

# Example

# FAQ

