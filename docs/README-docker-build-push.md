# Quick start guide

The `docker-build-push-ecr.yaml` is a GitHub Action workflow designed to automate the process of building a Docker image and pushing it to Amazon ECR. It's triggered on a `workflow_call` event and accepts several inputs.

## Inputs

| Input             | Description                           | Required | Default                     |
| ----------------- | ------------------------------------- | -------- | --------------------------- |
| environment       | The environment to run the build in   | Yes      |                             |
| aws_account_id    | The AWS Account ID                    | Yes      |                             |
| aws_region        | The AWS Region                        | Yes      |                             |
| aws_role_name     | The AWS Role Name                     | Yes      |                             |
| aws_oidc_role_arn | The AWS OIDC IAM role to assume       | Yes      |                             |
| image_name        | The name of the Docker image to build | No       | The repository name         |
| image_tag         | The tag of the Docker image to build  | Yes      |                             |
| docker_context    | The path to the build context         | No       | .                           |
| dockerfile_path   | The path to the Dockerfile            | No       | {docker_context}/Dockerfile |
| docker_push       | Whether to push the image to ECR      | No       | true                        |

## Examples

```yaml
on: [push, pull_request]
jobs:
  docker_build_push_ecr:
    uses: ./.github/workflows/docker-build-push-ecr.yaml
    with:
      environment: 'production'
      aws_account_id: '123456789012'
      aws_region: 'us-west-2'
      aws_role_name: 'my-aws-role'
      aws_oidc_role_arn: 'arn:aws:iam::123456789012:role/my-aws-role'
      image_name: 'my-docker-image'
      image_tag: 'latest'
      docker_context: '.'
      dockerfile_path: 'Dockerfile'
      docker_push: 'true'
```

## FAQs

**Q: How do I specify the AWS credentials?**

A: The AWS credentials are specified using the aws_account_id, aws_region, aws_role_name, and aws_oidc_role_arn inputs.

**Q: How do I specify the Docker image name and tag?**

A: The Docker image name and tag are specified using the image_name and image_tag inputs. By default, the image name is the repository name.

**Q: How do I specify the build context and Dockerfile path?**

A: The build context and Dockerfile path are specified using the docker_context and dockerfile_path inputs. By default, the build context is . and the Dockerfile path is {docker_context}/Dockerfile.

**Q: How do I control whether the image is pushed to ECR?**

A: Whether the image is pushed to ECR is controlled using the docker_push input. By default, it is set to true.

**Q: Can I only build or only push ?**

A: Yes you can call separately the workflows docker-build.yaml and docker-push-ecr.yaml. Please refer to each individual workflow for informations about inputs.
