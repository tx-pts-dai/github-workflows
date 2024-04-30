# Quick start guide

The `lambda-build-node.yaml` is a GitHub Action workflow designed to automate the process of building a Node.js AWS Lambda function. It's triggered on a `workflow_call` event and accepts several inputs.

## Inputs

| Input                     | Description                                                | Required | Default |
| ------------------------- | ---------------------------------------------------------- | -------- | ------- |
| `node_version`            | The Node.js version to use                                 | No       | 20      |
| `source_dir`              | The directory where the Lambda source code is located      | No       | src     |
| `build_dir`               | The directory where the Lambda build artifacts are located | No       | dist    |
| `artifact_retention_days` | Number of days to retain the artifact                      | No       | 5       |

## Examples

```
on: [push, pull_request]
jobs:
  build:
    uses: ./.github/workflows/lambda-build-node.yaml
    with:
      node_version: "20"
      source_dir: "src"
      build_dir: "dist"
      artifact_retention_days: 5
```

## FAQs

**Q: How do I specify the Node.js version?**

A: The Node.js version is specified using the node_version input. By default, it uses version 20.

**Q: How do I specify the source directory?**

A: The source directory is specified using the source_dir input. By default, it is set to src.

**Q: How do I specify the build directory?**

A: The build directory is specified using the build_dir input. By default, it is set to dist.

**Q: How do I specify the artifact retention days?**

A: The number of days to retain the artifact is specified using the artifact_retention_days input. By default, it is set to 5 days.
