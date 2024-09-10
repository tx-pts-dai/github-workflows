---
title: Terraform Preview Cleanup
---

<!-- action-docs-header source=".github/workflows/tf-cleanup.yaml" -->
# Terraform Preview Cleanup
<!-- action-docs-header source=".github/workflows/tf-cleanup.yaml" -->

# Description

This workflow cleans up the Terraform preview deployments.

<!-- action-docs-inputs source=".github/workflows/tf-cleanup.yaml" -->
## Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `environment` | <p>Environment to deploy</p> | `string` | `false` | `""` |
| `aws_account_id` | <p>The AWS account ID.</p> | `string` | `false` | `""` |
| `aws_region` | <p>The AWS region.</p> | `string` | `false` | `""` |
| `aws_role_name` | <p>The name of the role to assume with OIDC.</p> | `string` | `false` | `""` |
| `aws_oidc_role_arn` | <p>AWS OIDC IAM role to assume</p> | `string` | `false` | `""` |
| `tf_dir` | <p>Terraform directory</p> | `string` | `false` | `""` |
| `tf_backend_configs` | <p>Terraform backend config cli arguments</p> | `string` | `false` | `""` |
| `tf_backend_config_files` | <p>List of Terraform backend config files to use, one per line. Paths should be relative to the GitHub Actions workspace.</p> | `string` | `false` | `""` |
| `tf_var_files` | <p>New line separated list of terraform variable files</p> | `string` | `false` | `""` |
| `tf_vars` | <p>New line separated list of terraform variables</p> | `string` | `false` | `""` |
| `tf_pre_run` | <p>Command to run before Terraform is executed.</p> | `string` | `false` | `""` |
| `tf_workspace` | <p>Terraform workspace</p> | `string` | `false` | `""` |
<!-- action-docs-inputs source=".github/workflows/tf-cleanup.yaml" -->

<!-- action-docs-outputs source=".github/workflows/tf-cleanup.yaml" -->

<!-- action-docs-outputs source=".github/workflows/tf-cleanup.yaml" -->

<!-- action-docs-usage source=".github/workflows/tf-cleanup.yaml" project="tx-pts-dai/github-workflows/.github/workflows/tf-cleanup.yaml" version="v1" -->
## Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/tf-cleanup.yaml@v1
    with:
      environment:
      # Environment to deploy
      #
      # Type: string
      # Required: false
      # Default: ""

      aws_account_id:
      # The AWS account ID.
      #
      # Type: string
      # Required: false
      # Default: ""

      aws_region:
      # The AWS region.
      #
      # Type: string
      # Required: false
      # Default: ""

      aws_role_name:
      # The name of the role to assume with OIDC.
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

      tf_dir:
      # Terraform directory
      #
      # Type: string
      # Required: false
      # Default: ""

      tf_backend_configs:
      # Terraform backend config cli arguments
      #
      # Type: string
      # Required: false
      # Default: ""

      tf_backend_config_files:
      # List of Terraform backend config files to use, one per line. Paths should be relative to the GitHub Actions workspace.
      #
      # Type: string
      # Required: false
      # Default: ""

      tf_var_files:
      # New line separated list of terraform variable files
      #
      # Type: string
      # Required: false
      # Default: ""

      tf_vars:
      # New line separated list of terraform variables
      #
      # Type: string
      # Required: false
      # Default: ""

      tf_pre_run:
      # Command to run before Terraform is executed.
      #
      # Type: string
      # Required: false
      # Default: ""

      tf_workspace:
      # Terraform workspace
      #
      # Type: string
      # Required: false
      # Default: ""
```
<!-- action-docs-usage source=".github/workflows/tf-cleanup.yaml" project="tx-pts-dai/github-workflows/.github/workflows/tf-cleanup.yaml" version="v1" -->

# Example

# FAQ
