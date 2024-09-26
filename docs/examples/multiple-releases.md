# Terraform Stack with Multiple Releases

This example demonstrates how to deploy multiple Terraform stacks with different releases and environments.

The matrix will produce the following jobs:

- platform-v0-dev
- platform-v0-prod
- platform-v1-dev
- platform-v1-prod

A common use case for creating a new stack release is to provide a way to deploy a new version of the stack without affecting the existing stack. This is useful for testing new features or changes before deploying to production.

~~~yaml
{% include "examples/multiple-releases.yaml" %}
~~~
