---
title: Github Release
---

<!-- action-docs-header source=".github/workflows/gh-release.yaml" -->
## Github Release
<!-- action-docs-header source=".github/workflows/gh-release.yaml" -->

## Description

This workflow creates a release based on the tag.

<!-- action-docs-inputs source=".github/workflows/gh-release.yaml" -->
### Inputs

| name | description | type | required | default |
| --- | --- | --- | --- | --- |
| `tag` | <p>The tag to release</p> | `string` | `true` | `""` |
<!-- action-docs-inputs source=".github/workflows/gh-release.yaml" -->

<!-- action-docs-outputs source=".github/workflows/gh-release.yaml" -->

<!-- action-docs-outputs source=".github/workflows/gh-release.yaml" -->

<!-- action-docs-usage source=".github/workflows/gh-release.yaml" project="tx-pts-dai/github-workflows/.github/workflows/gh-release.yaml" version="v2" -->
### Usage

```yaml
jobs:
  job1:
    uses: tx-pts-dai/github-workflows/.github/workflows/gh-release.yaml@v2
    with:
      tag:
      # The tag to release
      #
      # Type: string
      # Required: true
      # Default: ""
```
<!-- action-docs-usage source=".github/workflows/gh-release.yaml" project="tx-pts-dai/github-workflows/.github/workflows/gh-release.yaml" version="v2" -->

# Example

# FAQ
