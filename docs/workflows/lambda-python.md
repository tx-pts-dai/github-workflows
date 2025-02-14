---
title: Build Python Lambda
---

<!-- action-docs-header source=".github/workflows/lambda-python.yaml" -->
## Build Python Lambda
<!-- action-docs-header source=".github/workflows/lambda-python.yaml" -->

## Description

Simple workflow to prepare a zip file with the python code an dependent libraries defined in `requirements.txt`.
The zip file will be saved as a github artifact.

Usefull to deploy an AWS lambda function or layer.

<!-- action-docs-inputs source=".github/workflows/lambda-python.yaml" -->
### Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `python_version` | <p>Python version. Check https://github.com/actions/setup-python for valid values</p> | `string` | `false` | `3.12` |
| `source_dir` | <p>Directory of the Python source code. Should contain the requirements.txt file</p> | `string` | `true` | `""` |
| `zip_filename` | <p>The zip file to create. It's relativ to the repository root</p> | `string` | `false` | `python_package.zip` |
| `gh_artifact_name` | <p>Name of the artifact to upload</p> | `string` | `true` | `""` |
| `gh_artifact_retention_days` | <p>Number of days to retain the artifact</p> | `number` | `false` | `30` |
<!-- action-docs-inputs source=".github/workflows/lambda-python.yaml" -->

<!-- action-docs-outputs source=".github/workflows/lambda-python.yaml" -->

<!-- action-docs-outputs source=".github/workflows/lambda-python.yaml" -->

<!-- action-docs-usage source=".github/workflows/lambda-python.yaml" project="tx-pts-dai/github-workflows/.github/workflows/lambda-python.yaml" version="v2" -->
### Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/lambda-python.yaml@v2
    with:
      python_version:
      # Python version. Check https://github.com/actions/setup-python for valid values
      #
      # Type: string
      # Required: false
      # Default: 3.12

      source_dir:
      # Directory of the Python source code. Should contain the requirements.txt file
      #
      # Type: string
      # Required: true
      # Default: ""

      zip_filename:
      # The zip file to create. It's relativ to the repository root
      #
      # Type: string
      # Required: false
      # Default: python_package.zip

      gh_artifact_name:
      # Name of the artifact to upload
      #
      # Type: string
      # Required: true
      # Default: ""

      gh_artifact_retention_days:
      # Number of days to retain the artifact
      #
      # Type: number
      # Required: false
      # Default: 30
```
<!-- action-docs-usage source=".github/workflows/lambda-python.yaml" project="tx-pts-dai/github-workflows/.github/workflows/lambda-python.yaml" version="v2" -->

## Example

```yaml
name: Build

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    uses: tx-pts-dai/github-workflows/.github/workflows/lambda-python.yaml@v2
    with:
      python_version: "3.12"
      source_dir: lambdas/first_lambda
      zip_filename: first_lambda.zip
      gh_artifact_name: first_lambda
```

## FAQ
