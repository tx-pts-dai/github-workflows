---
title: Terraform Preview Deployment
---

<!-- action-docs-header source=".github/workflows/tf-feature.yaml" -->
# Terraform Preview Deployment
<!-- action-docs-header source=".github/workflows/tf-feature.yaml" -->

## Description

This workflow deploys a Terraform configuration to a preview environment.

<!-- action-docs-inputs source=".github/workflows/tf-feature.yaml" -->
## Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `environment` | <p>Environment to deploy</p> | `string` | `false` | `""` |
| `aws_region` | <p>AWS region</p> | `string` | `false` | `""` |
| `aws_oidc_role_arn` | <p>AWS OIDC IAM role to assume</p> | `string` | `false` | `""` |
| `aws_account_id` | <p>The AWS account ID.</p> | `string` | `false` | `""` |
| `gh_artifact_path` | <p>Path to download artifacts to. If unset, default action workspace is used. If both 'gh<em>artifact</em>path' and 'gh<em>artifact</em>name' are unset, artifacts are not downloaded.</p> | `string` | `false` | `""` |
| `gh_artifact_name` | <p>Name of the artifact to download. If only 'gh<em>artifact</em>path' is set, then all artifacts are downloaded. If both 'gh<em>artifact</em>path' and 'gh<em>artifact</em>name' are unset, artifacts are not downloaded.</p> | `string` | `false` | `""` |
<<<<<<< HEAD
| `gh_checkout_ref` | <p>The branch, tag or SHA to checkout.</p> | `string` | `false` | `""` |
=======
| `gh_artifact_pattern` | <p>A glob pattern to the artifacts that should be downloaded. Ignored if name is specified.</p> | `string` | `false` | `""` |
| `gh_artifact_merge_multiple` | <p>When multiple artifacts are matched, this changes the behavior of the destination directories. If true, the downloaded artifacts will be in the same directory specified by path. If false, the downloaded artifacts will be extracted into individual named directories within the specified path. Optional. Default is 'false'.</p> | `boolean` | `false` | `""` |
>>>>>>> e4f901b (docs)
| `tf_dir` | <p>Terraform directory</p> | `string` | `false` | `""` |
| `tf_backend_configs` | <p>Terraform backend config cli arguments</p> | `string` | `false` | `""` |
| `tf_backend_config_files` | <p>List of Terraform backend config files to use, one per line. Paths should be relative to the GitHub Actions workspace.</p> | `string` | `false` | `""` |
| `tf_var_files` | <p>New line separated list of terraform variable files</p> | `string` | `false` | `""` |
| `tf_vars` | <p>New line separated list of terraform variables</p> | `string` | `false` | `""` |
| `tf_pre_run` | <p>Command to run before Terraform is executed.</p> | `string` | `false` | `""` |
| `tf_workspace` | <p>Terraform workspace</p> | `string` | `false` | `""` |
<!-- action-docs-inputs source=".github/workflows/tf-feature.yaml" -->

<!-- action-docs-outputs source=".github/workflows/tf-feature.yaml" -->
## Outputs

| name | description |
| --- | --- |
| `tf_outputs` | <p>List of Terraform outputs captured.</p> |
<!-- action-docs-outputs source=".github/workflows/tf-feature.yaml" -->

<!-- action-docs-usage source=".github/workflows/tf-feature.yaml" project="tx-pts-dai/github-workflows/.github/workflows/tf-feature.yaml" version="v1" -->
## Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/tf-feature.yaml@v1
    with:
      environment:
      # Environment to deploy
      #
      # Type: string
      # Required: false
      # Default: ""

      aws_region:
      # AWS region
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

      aws_account_id:
      # The AWS account ID.
      #
      # Type: string
      # Required: false
      # Default: ""

      gh_artifact_path:
      # Path to download artifacts to. If unset, default action workspace is used. If both 'gh_artifact_path' and 'gh_artifact_name' are unset, artifacts are not downloaded.
      #
      # Type: string
      # Required: false
      # Default: ""

      gh_artifact_name:
      # Name of the artifact to download. If only 'gh_artifact_path' is set, then all artifacts are downloaded. If both 'gh_artifact_path' and 'gh_artifact_name' are unset, artifacts are not downloaded.
      #
      # Type: string
      # Required: false
      # Default: ""

<<<<<<< HEAD
      gh_checkout_ref:
      # The branch, tag or SHA to checkout.
=======
      gh_artifact_pattern:
      # A glob pattern to the artifacts that should be downloaded. Ignored if name is specified.
>>>>>>> e4f901b (docs)
      #
      # Type: string
      # Required: false
      # Default: ""

<<<<<<< HEAD
=======
      gh_artifact_merge_multiple:
      # When multiple artifacts are matched, this changes the behavior of the destination directories. If true, the downloaded artifacts will be in the same directory specified by path. If false, the downloaded artifacts will be extracted into individual named directories within the specified path. Optional. Default is 'false'.
      #
      # Type: boolean
      # Required: false
      # Default: ""

>>>>>>> e4f901b (docs)
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
<!-- action-docs-usage source=".github/workflows/tf-feature.yaml" project="tx-pts-dai/github-workflows/.github/workflows/tf-feature.yaml" version="v1" -->

# Example

# FAQ
