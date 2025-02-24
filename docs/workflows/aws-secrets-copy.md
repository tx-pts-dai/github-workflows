---
title: AWS Secrets Copy
---

<!-- action-docs-header source=".github/workflows/aws-secrets-copy.yaml" -->
## AWS Secrets Copy
<!-- action-docs-header source=".github/workflows/aws-secrets-copy.yaml" -->

## Description

This workflow copies an AWS secret from one account to another.

<!-- action-docs-inputs source=".github/workflows/aws-secrets-copy.yaml" -->
### Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `source_aws_region` | <p>AWS region</p> | `string` | `true` | `""` |
| `source_aws_oidc_role_arn` | <p>AWS OIDC IAM role to assume</p> | `string` | `true` | `""` |
| `source_secret_name` | <p>AWS secret name to copy from</p> | `string` | `true` | `""` |
| `destination_aws_region` | <p>AWS region</p> | `string` | `true` | `""` |
| `destination_aws_oidc_role_arn` | <p>AWS OIDC IAM role to assume</p> | `string` | `true` | `""` |
| `destination_secret_name` | <p>AWS secret name to copy to (default to the source secret name)</p> | `string` | `false` | `""` |
| `secret_description` | <p>The description to attach to the AWS secret (default to the description of the source secret's description)</p> | `string` | `false` | `""` |
| `aws_tags` | <p>Tags to put on the created secret in the form '[{"Key":"key1", "Value":"value1"},{"Key":"key2", "Value":"value2"}] (default to no tags)'</p> | `string` | `false` | `""` |
<!-- action-docs-inputs source=".github/workflows/aws-secrets-copy.yaml" -->

<!-- action-docs-outputs source=".github/workflows/aws-secrets-copy.yaml" -->

<!-- action-docs-outputs source=".github/workflows/aws-secrets-copy.yaml" -->

<!-- action-docs-usage source=".github/workflows/aws-secrets-copy.yaml" project="tx-pts-dai/github-workflows/.github/workflows/aws-secrets-copy.yaml" version="v2" -->
### Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/aws-secrets-copy.yaml@v2
    with:
      source_aws_region:
      # AWS region
      #
      # Type: string
      # Required: true
      # Default: ""

      source_aws_oidc_role_arn:
      # AWS OIDC IAM role to assume
      #
      # Type: string
      # Required: true
      # Default: ""

      source_secret_name:
      # AWS secret name to copy from
      #
      # Type: string
      # Required: true
      # Default: ""

      destination_aws_region:
      # AWS region
      #
      # Type: string
      # Required: true
      # Default: ""

      destination_aws_oidc_role_arn:
      # AWS OIDC IAM role to assume
      #
      # Type: string
      # Required: true
      # Default: ""

      destination_secret_name:
      # AWS secret name to copy to (default to the source secret name)
      #
      # Type: string
      # Required: false
      # Default: ""

      secret_description:
      # The description to attach to the AWS secret (default to the description of the source secret's description)
      #
      # Type: string
      # Required: false
      # Default: ""

      aws_tags:
      # Tags to put on the created secret in the form '[{"Key":"key1", "Value":"value1"},{"Key":"key2", "Value":"value2"}] (default to no tags)'
      #
      # Type: string
      # Required: false
      # Default: ""
```
<!-- action-docs-usage source=".github/workflows/aws-secrets-copy.yaml" project="tx-pts-dai/github-workflows/.github/workflows/aws-secrets-copy.yaml" version="v2" -->

## Example

```yaml
on: [push, pull_request]
jobs:
  copy_secret:
    uses: ./.github/workflows/aws-secrets-copy.yaml
    with:
      source_aws_region: 'us-west-2'
      source_aws_oidc_role_arn: 'arn:aws:iam::123456789012:role/my-aws-role'
      source_secret_name: ' my-aws-secret'
      destination_aws_region: 'us-west-1'
      destination_aws_oidc_role_arn: 'arn:aws:iam::012345678901:role/my-aws-role'
```

## FAQ

**Q: What happen if the destination secret already exists ?**

A: The destination AWS secret value will be updated to the value of the source secret

## Workflow

There is a [validation workflow](../.github/workflows/_test-aws-secrets-copy.yaml) triggered when a pull request from a feature branch to `main` is created.
The workflow will create some temporary AWS secrets to validate that different use cases of the workflow will work:

- Copy of a secret to non existing secret
- Copy of a secret to an existing secret
- Copy of a secret with different input parameters

At the end, all secrets are deleted
