# GitHub Workflows

<!--intro-start-->

<!-- TODO: change to release badge -->

![GitHub Workflow Status](https://github.com/tx-pts-dai/github-workflows/actions/workflows/gh-release-on-main.yaml/badge.svg)

Github Actions is a powerful tool for automating workflows in your repository. This repository contains a collection of GitHub workflows that are reusable across projects.

Reusable workflows will not suit all projects, but they can be a good starting point for projects that have similar requirements.

The state of these workflows are considered to be in alpha, and are subject to change to suit the needs of projects managed by DAI.

## Github Actions - Reusable Workflows

[Official Docs](https://docs.github.com/en/actions/sharing-automations/reusing-workflows)

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

## Getting started with Reusable Workflows

<!--usage-start-->

To get started with using reusable workflows in your repository, follow these steps:

1. Create a .github/workflows directory in your repository if it doesn't already exist. This is where all your workflow files will be stored.

2. Choose an Example Workflow
   Browse the docs/examples/ folder in the reusable workflows repository and select an example workflow that suits your needs. Copy the file into your .github/workflows directory.

3. Open the copied workflow file and tailor it to your project. Each workflow includes a set of jobs that define tasks to be executed. Adjust these tasks, steps, and settings as needed.

4. Ensure all required inputs are set correctly. These inputs may include environment variables, AWS credentials, or Docker image details. The workflow file will specify which inputs are necessary, and you can modify them to match your project’s requirements.

5. Once you've customized the workflow, commit and push your changes to the repository.

6. The workflow will automatically run based on the event triggers defined in the file (e.g., push, pull_request). Ensure the events are configured as needed for your use case.

That's it! You have successfully set up and customized a reusable workflow in your repository. Now you can benefit from the predefined tasks and automation provided by the workflow to streamline your development process.

### Deploy workflows through [Tam CLI tool](https://github.com/DND-IT/tam-cli)

Generic workflows can be seamlessly deployed to your repository using the [Tam CLI tool](https://github.com/DND-IT/tam-cli).
This tool simplifies the process by automatically creating a pull request in your repository, ensuring that all required inputs and GitHub environments are generated and configured for you.
Tam CLI leverages templates defined in the [Templates](https://github.com/DND-IT/templates/tree/main/addons/github-workflows) repository.
For more details refer to the [Tam CLI](docs/getting-started/tam-cli.md) page.

<!--usage-end-->

## Maintained workflows

Each workflow has its own dedicated documentation. For a detailed understanding, you should go through the code and understand each step and how they interact with each other.

Most of the workflows do some "black magic", by getting values by default from your Github Environments, if set as `environment` input.

## Development Guidelines

When modifying any of these workflows, ensure that you adhere to the following guidelines:

- **Inputs** : All inputs should be clearly defined at the top of the workflow. Each input should have a description, type, and whether it is required or not.

- **Jobs** : Each job should have a clear purpose and should be named accordingly.

- **Steps** : Each step within a job should be atomic, meaning it should do one thing and do it well.

- **Errors** : Ensure that any potential errors are handled gracefully and provide clear error messages.

## Documentation related to GitHub Actions

Documentation: [GitHub Actions - Documentation GitHub](https://docs.github.com/en/actions)

## Releases

Release pipeline is triggered on each PR merged to main. Depending on the commit message (see [Conventional Commit Message](https://www.conventionalcommits.org/en/v1.0.0/)) a new github release will be created.

If the commit message starts with:

- `feat!:`, a new major release will be created
- `feat:`, a new minor release will be created
- `fix:`, a new patch release will be created

otherwise no new release will be created.

## Contributing

Before creating a new shared workflow, check if something similar already exists. If it does, consider updating the existing workflow instead of creating a new one.

If you want to create a new workflow, please follow these steps:

- Name the workflow files similar to the following `<tool/service>-<simple description>.yaml`.
- The less inputs, the better.
- Files uses dash-case and variables use snake_case.

### Testing

Each workflow should have a `test` job that runs the workflow with different inputs. This job should be triggered on when changes are detected and push to main.

Test workflows are prefixed with `_test-` and contain the workflow file name. One test workflow per workflow file which can contain multiple jobs.
