# Quick start guide
[dflook](https://github.com/dflook/terraform-github-actions) actions are an externally maintained set of actions that are used in the workflows.
The decision to use [dflook](https://github.com/dflook/terraform-github-actions) actions was made to reduce the maintenance burden of the workflows and reuse actions that are well tested and reliable.

## Inputs for dflook workflows

Each reusable workflow should contain related tasks to reduce any duplication of tasks across workflows. eg. `plan` runs validate and format before the plan to catch any issues early and not have to rely on creating extra workflows to run these tasks. For an updated list of inputs, see directly the [dflook](https://github.com/dflook/terraform-github-actions) repository.


Assumptions when using dflook actions:

- the environment input is set for all actions.
- inputs are either passed directly to the action or are set as environment variables.

## Examples 
```yaml
on:
  pull_request:
    branches:
      - main
    paths:
      - '.github/workflows/_test-tf.yaml'
      - '.github/workflows/tf-*.yaml'
      - 'tests/terraform/**'
  push:
    branches:
      - main

jobs:
  test_tf_plan:
    uses: ./.github/workflows/tf-plan.yaml
    with:
      environment: sandbox

  test_tf_apply:
    needs: test_tf_dflook_plan
    uses: ./.github/workflows/tf-apply.yaml
    with:
      environment: sandbox
      tf_pre_run:
        curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip -qq awscliv2.zip && ./aws/install

  test_tf_feature:
    uses: ./.github/workflows/tf-feature.yaml
    with:
      environment: sandbox

  test_tf_cleanup:
    needs: test_tf_feature
    uses: ./.github/workflows/tf-cleanup.yaml
    with:
      environment: sandbox
```

