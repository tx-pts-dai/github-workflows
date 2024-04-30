### dflook workflows

[dflook](https://github.com/dflook/terraform-github-actions) actions are an externally maintained set of actions that are used in the workflows.
The decision to use [dflook](https://github.com/dflook/terraform-github-actions) actions was made to reduce the maintenance burden of the workflows and reuse actions that are well tested and reliable.

Each reusable workflow should contain related tasks to reduce any duplication of tasks across workflows. eg. `plan` runs validate and format before the plan to catch any issues early and not have to rely on creating extra workflows to run these tasks.

Assumptions when using dflook actions:

- the environment input is set for all actions.
- inputs are either passed directly to the action or are set as environment variables.

## Releases

Release pipeline is triggered on each PR merged to main, which creates a new release incrementing automatically minor version.

## Testing

Each workflow should have a `test` job that runs the workflow with different inputs. This job should be triggered on when changes are detected and push to main.

Test workflows are prefixed with `_test-` and contain the workflow file name. One test workflow per workflow file which can contain multiple jobs.

## Contributing

Before creating a new shared workflow, check if something similar already exists. If it does, consider updating the existing workflow instead of creating a new one.

If you want to create a new workflow, please follow these steps:

- Name the workflow files similar to the following `<tool/service>-<simple description>.yaml`.
- The less inputs, the better.
- Files uses dash-case and variables use snake_case.

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


## Docker Build and Push Workflow

This GitHub Actions workflow is designed to build and push a Docker image to Amazon Elastic Container Registry (ECR). It can be triggered manually or by a workflow call.

### Inputs
NONE

### Workflow Steps
1. **Check out code**: Checks out the repository code.
2. **Set up Docker Buildx**: Sets up Docker Buildx for building multi-arch images.
3. **Configure AWS credentials**: Configures AWS credentials using the specified AWS Role or IAM user.
4. **Login to Amazon ECR**: Logs in to Amazon ECR using the configured AWS credentials.
5. **Build and export**: Builds the Docker image and exports it to the specified registry. It also supports caching and multi-arch builds.

### Example Usage

