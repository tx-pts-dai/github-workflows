# GitHub Workflows

This repository contains a collection of GitHub workflows that are reusable across projects.

The main goal is to have a single source of truth for all workflows, so that they can be easily updated and reused.

Features include, but are not limited to:

- terraform management
- aws authentication
- docker image management
- lambda builds

The state of these workflows are considered to be in alpha, and are subject to change to suit the needs of projects managed by DAI.

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

For more usage examples please look for the `_test-*` workflow definition in the [`.github/workflows/`](.github/workflows/) folder.

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
