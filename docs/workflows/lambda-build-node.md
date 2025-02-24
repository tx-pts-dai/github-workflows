---
title: Build Lambda Layer
---

<!-- action-docs-header source=".github/workflows/lambda-build-node.yaml" -->
## Build Lambda Layer
<!-- action-docs-header source=".github/workflows/lambda-build-node.yaml" -->

## Description

This workflow builds a Lambda Layer and the artifact is uploaded to the GitHub artifact store.

<!-- action-docs-inputs source=".github/workflows/lambda-build-node.yaml" -->
### Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `environment` | <p>Environment to deploy.</p> | `string` | `false` | `""` |
| `node_version` | <p>The Node.js version to use</p> | `string` | `false` | `20` |
| `source_dir` | <p>The directory where the Lambda source code is located</p> | `string` | `false` | `""` |
| `build_dir` | <p>The directory where the Lambda build artifacts are located</p> | `string` | `false` | `""` |
| `artifact_retention_days` | <p>Number of days to retain the artifact</p> | `number` | `false` | `""` |
<!-- action-docs-inputs source=".github/workflows/lambda-build-node.yaml" -->

<!-- action-docs-outputs source=".github/workflows/lambda-build-node.yaml" -->

<!-- action-docs-outputs source=".github/workflows/lambda-build-node.yaml" -->

<!-- action-docs-usage source=".github/workflows/lambda-build-node.yaml" project="tx-pts-dai/github-workflows/.github/workflows/lambda-build-node.yaml" version="v2" -->
### Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/lambda-build-node.yaml@v2
    with:
      environment:
      # Environment to deploy.
      #
      # Type: string
      # Required: false
      # Default: ""

      node_version:
      # The Node.js version to use
      #
      # Type: string
      # Required: false
      # Default: 20

      source_dir:
      # The directory where the Lambda source code is located
      #
      # Type: string
      # Required: false
      # Default: ""

      build_dir:
      # The directory where the Lambda build artifacts are located
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
```
<!-- action-docs-usage source=".github/workflows/lambda-build-node.yaml" project="tx-pts-dai/github-workflows/.github/workflows/lambda-build-node.yaml" version="v2" -->

## Example

```yaml
on: [push, pull_request]
jobs:
  build:
    uses: ./.github/workflows/lambda-build-node.yaml
    with:
      node_version: "20"
      source_dir: "src"
      build_dir: "dist"
      artifact_retention_days: 5
```

## FAQ

**Q: How do I specify the Node.js version?**

A: The Node.js version is specified using the node_version input. By default, it uses version 20.

**Q: How do I specify the source directory?**

A: The source directory is specified using the source_dir input. By default, it is set to src.

**Q: How do I specify the build directory?**

A: The build directory is specified using the build_dir input. By default, it is set to dist.

**Q: How do I specify the artifact retention days?**

A: The number of days to retain the artifact is specified using the artifact_retention_days input. By default, it is set to 5 days.
