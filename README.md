# GitHub Workflows

<!--intro-start-->

<!-- TODO: change to release badge -->
![GitHub Workflow Status](https://github.com/tx-pts-dai/github-workflows/actions/workflows/gh-release-on-main.yaml/badge.svg)

Github Actions is a powerful tool for automating workflows in your repository. This repository contains a collection of GitHub workflows that are reusable across projects.

Reusable workflows will not suit all projects, but they can be a good starting point for projects that have similar requirements.

The state of these workflows are considered to be in alpha, and are subject to change to suit the needs of projects managed by DAI.

## Github Actions - Reusable Workflows

(Official Docs)[https://docs.github.com/en/actions/sharing-automations/reusing-workflows]

## Features

- Terraform orchestration
- Docker image management
- Lambda builds
- AWS secrets cloning across AWS accounts.

## Goals

The main goal is to have a single source of truth for all standard workflows, so that they can be easily maintained.

## When to use reusable workflows

- Terraform orchestration
- Simple docker workflows
- Running repeatable tasks across multiple projects e.g. Ad hoc scripts

## When not to use reusable workflows

- When you need to customize the workflow for your specific use case.
- Most of the time application builds and tests are unique to the project and should be maintained in the project repository.
- Secrets are required to be stored in the project repository. (We recommend using AWS Secrets Manager for workflow secrets)


## Usage

Create a `.github/workflows` directory in your repository and create workflows that reference the workflows in this repository.

```
name: My Workflow
on: push
jobs:
  my-job:
    uses: <org>/<repo>/.github/workflows/<workflow-name>.yaml@<ref>
    with:
      my-input: my-value
```

For more complete examples see the [examples](docs/examples/) page.

<!--intro-end-->

<!--usage-start-->

## Getting started with Reusable Workflows

To get started with using reusable workflows in your repository, follow these steps:

1. Create a `.github/workflows` directory in your repository if it doesn't already exist.

2. Copy an example workflow file from the reusable workflows repository into your `.github/workflows` directory. You can find the workflow example files in the [`docs/examples/`](https://github.com/tx-pts-dai/github-workflows/tree/main/docs/examples){:target="_blank"} folder of this repository.

3. Open the workflow file you just copied and customize it according to your needs. Each workflow file contains a set of jobs that define the tasks to be executed.

4. Make sure to set the required inputs for the workflow. These inputs are defined in the workflow file and can be customized to match your specific requirements. For example, you might need to provide values for environment variables, AWS credentials, or Docker image details.

5. Save the modified workflow file.

6. Commit and push the changes to your repository.

7. The workflow will now be triggered based on the specified events. For example, if you have configured the workflow to run on every push event, it will automatically start whenever you push changes to your repository.

That's it! You have successfully set up and customized a reusable workflow in your repository. Now you can benefit from the predefined tasks and automation provided by the workflow to streamline your development process.

<!--usage-end-->

## Maintained workflows

Each workflow has its own dedicated documentation. For a detailed understanding, you should go through the code and understand each step and how they interact with each other.

Most of the workflows do some "black magic", by getting values by default from your Github Environments, if set as `environment` input.

### Terraform Deployment

This workflow is responsible for deploying infrastructure using Terraform through dflook. For more information see [Terraform Deployment Documentation](docs/workflows/tf.md).

#### Feature branches deployment

A common use case is to have feature branches deployment to test changes before they reach the `main` branch. To achieve that you can use the `tf-feature` workflow. Remember to use the `tf-cleanup` workflow too once you're done with it so that Terraform can cleanup the dangling resources.

### Docker Build and Push to ECR

The `docker-build-push-ecr.yaml` builds a Docker image and pushes it to the Elastic Container Registry (ECR). It's triggered on a workflow_call event and accepts several inputs. For more information see [Docker build and push documentation](docs/workflows/docker-build-push.md).

### Release

This workflow handles the release process, including versioning and tagging. For more information see [Release Documentation](docs/workflows/gh-release.md).

### Lambda Build Node

This workflow is responsible for building the Lambda function using Node.js. For more information see [Lambda Build Node Documentation](docs/workflows/lambda-build-node.md).

## Development Guidelines

When modifying any of these workflows, ensure that you adhere to the following guidelines:

- **Inputs** : All inputs should be clearly defined at the top of the workflow. Each input should have a description, type, and whether it is required or not.

- **Jobs** : Each job should have a clear purpose and should be named accordingly.

- **Steps** : Each step within a job should be atomic, meaning it should do one thing and do it well.

- **Errors** : Ensure that any potential errors are handled gracefully and provide clear error messages.

## Documentation related to GitHub Actions

Documentation: [GitHub Actions - Documentation GitHub](https://docs.github.com/en/actions)

## Releases

Release pipeline is triggered on each PR merged to main, which creates a new release incrementing automatically minor version.

## Contributing

Before creating a new shared workflow, check if something similar already exists. If it does, consider updating the existing workflow instead of creating a new one.

If you want to create a new workflow, please follow these steps:

- Name the workflow files similar to the following `<tool/service>-<simple description>.yaml`.
- The less inputs, the better.
- Files uses dash-case and variables use snake_case.

### Testing

Each workflow should have a `test` job that runs the workflow with different inputs. This job should be triggered on when changes are detected and push to main.

Test workflows are prefixed with `_test-` and contain the workflow file name. One test workflow per workflow file which can contain multiple jobs.
