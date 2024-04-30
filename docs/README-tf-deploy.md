# Quick start guide

## dflook workflows

[dflook](https://github.com/dflook/terraform-github-actions) actions are an externally maintained set of actions that are used in the workflows.
The decision to use [dflook](https://github.com/dflook/terraform-github-actions) actions was made to reduce the maintenance burden of the workflows and reuse actions that are well tested and reliable.

Each reusable workflow should contain related tasks to reduce any duplication of tasks across workflows. eg. `plan` runs validate and format before the plan to catch any issues early and not have to rely on creating extra workflows to run these tasks.

Assumptions when using dflook actions:

- the environment input is set for all actions.
- inputs are either passed directly to the action or are set as environment variables.
