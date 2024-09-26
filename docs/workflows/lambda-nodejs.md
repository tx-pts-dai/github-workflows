---
title: Build NodeJS Lambda
---

<!-- action-docs-header source=".github/workflows/lambda-nodejs.yaml" -->
# Build NodeJS Lambda
<!-- action-docs-header source=".github/workflows/lambda-nodejs.yaml" -->

## Description

Simple workflow to build a NodeJS Lambda function and upload the artifact to the GitHub artifact store.

All packages defined in the `package.json` file will be installed and packaged into a zip file.

<!-- action-docs-inputs source=".github/workflows/lambda-nodejs.yaml" -->
## Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `node_version` | <p>NodeJS version</p> | `string` | `false` | `20` |
| `source_dir` | <p>Directory of the Lambda source code</p> | `string` | `true` | `""` |
| `gh_artifact_name` | <p>Name of the artifact to upload</p> | `string` | `false` | `""` |
| `gh_artifact_path` | <p>A file, directory or wildcard pattern that describes what to upload</p> | `string` | `false` | `**/lambda.zip` |
| `gh_artifact_retention_days` | <p>Number of days to retain the artifact</p> | `number` | `false` | `30` |
<!-- action-docs-inputs source=".github/workflows/lambda-nodejs.yaml" -->

<!-- action-docs-outputs source=".github/workflows/lambda-nodejs.yaml" -->

<!-- action-docs-outputs source=".github/workflows/lambda-nodejs.yaml" -->

<!-- action-docs-usage source=".github/workflows/lambda-nodejs.yaml" project="tx-pts-dai/github-workflows/.github/workflows/lambda-nodejs.yaml" version="v1" -->
## Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/lambda-nodejs.yaml@v1
    with:
      node_version:
      # NodeJS version
      #
      # Type: string
      # Required: false
      # Default: 20

      source_dir:
      # Directory of the Lambda source code
      #
      # Type: string
      # Required: true
      # Default: ""

      gh_artifact_name:
      # Name of the artifact to upload
      #
      # Type: string
      # Required: false
      # Default: ""

      gh_artifact_path:
      # A file, directory or wildcard pattern that describes what to upload
      #
      # Type: string
      # Required: false
      # Default: **/lambda.zip

      gh_artifact_retention_days:
      # Number of days to retain the artifact
      #
      # Type: number
      # Required: false
      # Default: 30
```
<!-- action-docs-usage source=".github/workflows/lambda-nodejs.yaml" project="tx-pts-dai/github-workflows/.github/workflows/lambda-nodejs.yaml" version="v1" -->

# Example

```
name: Build

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    uses: tx-pts-dai/github-workflows/.github/workflows/lambda-nodejs.yaml@v1
    with:
      node_version: "20"
      source_dir: src/lambda
```

# FAQ
