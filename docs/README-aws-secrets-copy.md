# Quick start guide

[aws-secrets-copy.yaml](../.github/workflows/aws-secrets-copy.yaml) is a GitHub Action Job designed to copy an AWS secret between two AWS accounts.

## Inputs

| Input                           | Description                                                                                                         | Required |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------- |
| source\_aws\_region             | AWS region                                                                                                          | Yes      |
| source\_aws\_oidc\_role\_arn    | AWS OIDC IAM role to assume                                                                                         | Yes      |
| source\_secret\_name            | AWS secret name to copy from                                                                                        | Yes      |
| destination\_aws\_region        | AWS region                                                                                                          | Yes      |
| destination_aws_oidc\_role\_arn | AWS OIDC IAM role to assume                                                                                         | No       |
| destination\_secret\_name       | AWS secret name to copy to (default to source secret name)                                                          | No       |
| secret\_description             | The description to attach to the AWS secret (default to source description)                                         | No       |
| aws\_tags                       | Tags to put on the created secret in the form '[{"Key":"key1", "Value":"value1"},{"Key":"key2", "Value":"value2"}]' | No       |

## Examples

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

## FAQs

**Q: What happen if the destination secret already exists ?**

A: The destination AWS secret value will be updated to the value of the source secret

## Workflow

There is a [validation workflow](./.github/workflows/_test-aws-secrets-copy.yaml) triggered when a pull request from a feature branch to `main` is created.
The workflow will create some temporary AWS secrets to validate that different use cases of the workflow will work:

- Copy of a secret to non existing secret
- Copy of a secret to an existing secret
- Copy of a secret with different input parameters

At the end, all secrets are deleted
