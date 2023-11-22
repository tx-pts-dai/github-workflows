# GitHub Workflows

This repository contains a collection of GitHub workflows that are reusable across projects.

The main goal is to have a single source of truth for all workflows, so that they can be easily updated and reused.

## Usage

Create a `.github/workflows` directory in your repository and create workflows that reference the workflows in this repository.

```
name: My Workflow
on: push
jobs:
  my-job:
    uses: <org>/<repo>/.github/workflows/<workflow-name>.yaml@<ref>
```

## Releases

TODO: Create a release pipeline that automatically creates a new release with each PR merged to main.

## Testing

Each workflow should have a `test` job that runs the workflow with all inputs set. This job should be triggered on each PR.

## Contributing

Before creating a new shared workflow, check if something similar already exists. If it does, consider updating the existing workflow instead of creating a new one.

If you want to create a new workflow, please follow these steps:

- Name the workflow files similar to the following `<tool/service>-<verb>-<simple description>.yaml`.
- The less inputs, the better.
- Files uses dash-case and variables use snake_case.
