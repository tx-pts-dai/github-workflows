## Docker Build and Push Workflow

This GitHub Actions workflow is designed to build and push a Docker image to Amazon Elastic Container Registry (ECR). It can be triggered manually or by a workflow call.

### Inputs

- **environment**: The environment to run the build in.
- **aws_account_id**: The AWS Account ID.
- **aws_region**: The AWS Region.
- **aws_role_name**: The AWS Role Name.
- **aws_oidc_role_arn**: The AWS OIDC IAM role to assume.
- **image_name**: The name of the Docker image to build. Defaults to the repository name.
- **image_tag**: The tag of the Docker image to build.
- **docker_context**: The path to the build context. Defaults to the current directory.
- **dockerfile_path**: The path to the Dockerfile. If not defined, it will default to `{docker_context}/Dockerfile`.
- **docker_push**: Whether to push the image to ECR. Defaults to true.

### Workflow Steps

1. **Check out code**: Checks out the repository code.
2. **Set up Docker Buildx**: Sets up Docker Buildx for building multi-arch images.
3. **Configure AWS credentials**: Configures AWS credentials using the specified AWS Role or IAM user.
4. **Login to Amazon ECR**: Logs in to Amazon ECR using the configured AWS credentials.
5. **Build and export**: Builds the Docker image and exports it to the specified registry. It also supports caching and multi-arch builds.

### Example Usage

- name: Example Usage
  uses: /path/to/your/action
  with:
  environment: production
  aws_account_id: 1234567890
  aws_region: us-west-2
  aws_role_name: my-role
  aws_oidc_role_arn: arn:aws:iam::1234567890:role/my-oidc-role
  image_name: my-image
  image_tag: v1.0.0
  docker_context: .
  dockerfile_path: ./Dockerfile
  docker_push: true

## Create release

This GitHub Actions workflow is designed to build and push a Docker image to Amazon Elastic Container Registry (ECR). It can be triggered manually or by a workflow call.

### Inputs

None

### Workflow Steps

1. **Retrieve version**: Get release version from the tag. If not found, start with 0.0.1 as default.
2. **Create release**: Push a new release version.

### Example Usage

## Create release

This GitHub Actions workflow is designed to build and push a Docker image to Amazon Elastic Container Registry (ECR). It can be triggered manually or by a workflow call.

### Inputs

None

### Workflow Steps

1. **Retrieve version**: Get release version from the tag. If not found, start with 0.0.1 as default.
2. **Create release**: Push a new release version.

### Example Usage

# Lambda Build Node GitHub Action

This GitHub Action is designed to automate the process of building a Node.js AWS Lambda function. It's triggered on a `workflow_call` event and accepts several inputs.

## Inputs

- `source_dir`: The directory where the source code is located. Default is `src`.
- `build_dir`: The directory where the Lambda build artifacts are located. Default is `dist`.
- `artifact_retention_days`: Number of days to retain the artifact. Default is `5`.

## Jobs

The workflow consists of a single job named `build` that runs on the latest Ubuntu runner. The job has several steps:

1. **Checkout**: Checks out the repository using the `actions/checkout@v4` action.
2. **Build**: This step should contain the commands necessary to build your Node.js application. It's not fully defined in the provided excerpt.

## Usage

To use this action in your own workflow, include it as a step:

```yaml
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Lambda Build Node
        uses: ./.github/workflows/lambda-build-node.yaml
        with:
          source_dir: "src"
          build_dir: "dist"
          artifact_retention_days: 5
```

# Terraform Deploy Basic GitHub Action

This GitHub Action is designed to automate the process of deploying infrastructure using Terraform. It's triggered on a `workflow_call` event and accepts several inputs.

## Inputs

- `github_artifact_path`: The path to save the artifacts.
- `aws_account_id`: The AWS account ID.
- `aws_region`: The AWS region.
- `aws_role_name`: The name of the role to assume with OIDC.
- `environment`: The environment name.
- `tf_dir`: The directory where the Terraform files are located. Default is `.`.

## Jobs

The workflow consists of a single job named `terraform` that runs on the latest Ubuntu runner. The job has several steps:

1. **Checkout**: Checks out the repository using the `actions/checkout@v4` action.
2. **Configure AWS Credentials**: Configures AWS credentials using the `aws-actions/configure-aws-credentials@v4` action.
3. **Download Artifact**: Downloads a GitHub artifact if the `github_artifact_path` input is not empty.

## Usage

To use this action in your own workflow, include it as a step:

```yaml
on: [push, pull_request]

jobs:
  terraform:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Terraform Deploy Basic
        uses: ./.github/workflows/tf-deploy-basic.yaml
        with:
          github_artifact_path: "path/to/artifacts"
          aws_account_id: "your-aws-account-id"
          aws_region: "your-aws-region"
          aws_role_name: "your-aws-role-name"
          environment: "your-environment"
          tf_dir: "path/to/terraform/files"
```

## Dflook workflows

These workflows are based on dflook github actions. Official and latest documentation could be found here: https://github.com/dflook/terraform-github-actions
