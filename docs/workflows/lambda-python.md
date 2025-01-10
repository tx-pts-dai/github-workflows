---
title: Build Python Lambda
---

<!-- action-docs-header source=".github/workflows/lambda-python.yaml" -->
# Build Python Lambda
<!-- action-docs-header source=".github/workflows/lambda-python.yaml" -->

## Description

Simple workflow to prepare a zip file with the python code an dependent libraries defined in `requirements.txt`.
The zip file will be saved as a github artifact.

Usefull to deploy a lambda function.

<!-- action-docs-inputs source=".github/workflows/lambda-python.yaml" -->
## Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `python_version` | <p>Python version</p> | `string` | `false` | `3.12` |
| `source_dir` | <p>Directory of the Lambda source code</p> | `string` | `true` | `""` |
| `gh_artifact_name` | <p>Name of the artifact to upload</p> | `string` | `false` | `""` |
| `gh_artifact_path` | <p>A file, directory or wildcard pattern that describes what to upload</p> | `string` | `false` | `**/*.zip` |
| `gh_artifact_retention_days` | <p>Number of days to retain the artifact</p> | `number` | `false` | `30` |
<!-- action-docs-inputs source=".github/workflows/lambda-python.yaml" -->

<!-- action-docs-outputs source=".github/workflows/lambda-python.yaml" -->

<!-- action-docs-outputs source=".github/workflows/lambda-python.yaml" -->

<!-- action-docs-usage source=".github/workflows/lambda-python.yaml" project="tx-pts-dai/github-workflows/.github/workflows/lambda-python.yaml" version="v1" -->
## Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/lambda-python.yaml@v1
    with:
      python_version:
      # Python version
      #
      # Type: string
      # Required: false
      # Default: 3.12

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
      # Default: **/*.zip

      gh_artifact_retention_days:
      # Number of days to retain the artifact
      #
      # Type: number
      # Required: false
      # Default: 30
```
<!-- action-docs-usage source=".github/workflows/lambda-python.yaml" project="tx-pts-dai/github-workflows/.github/workflows/lambda-python.yaml" version="v1" -->

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
    uses: tx-pts-dai/github-workflows/.github/workflows/lambda-python.yaml@v1
    with:
      python_version: "3.12"
      source_dir: lambdas/first_lambda
```

# FAQ