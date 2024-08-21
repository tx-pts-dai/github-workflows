#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Paths and constants
const workflowsPath = path.resolve('.github', 'workflows');
const staticWorkflowsPath = '.github/workflows';
const outputDir = path.resolve('docs', 'workflows');
const githubOrg = 'tx-pts-dai';
const githubRepo = 'github-workflows';
const currentMajorVersion = 'v1';

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Template function to generate the content
function generateMarkdownContent(workflowName, workflowFilePath) {
  return `---
title: ${workflowName}
---

<!-- action-docs-header source="${workflowFilePath}" -->

# Description

<!-- action-docs-inputs source="${workflowFilePath}" -->

<!-- action-docs-outputs source="${workflowFilePath}" -->

<!-- action-docs-usage source="${workflowFilePath}" project="${githubOrg}/${githubRepo}/${workflowFilePath}" version="${currentMajorVersion}" -->

# Example

# FAQ
`;
}

async function generateDocs() {
  try {
    const workflowFiles = fs.readdirSync(workflowsPath).filter(file => !file.startsWith('_'));

    // Dynamically import the action-docs module (ESM)
    const { generateActionMarkdownDocs } = await import('action-docs');

    for (const file of workflowFiles) {
      console.log(`Generating documentation for ${file}`);

      const filePath = path.join(workflowsPath, file);
      const fileContents = fs.readFileSync(filePath, 'utf-8');

      // Only generate documentation for reusable workflows
      if (!fileContents.includes('workflow_call:')) {
        console.log(`Skipping ${file} as it does not contain 'workflow_call:'`);
        continue;
      }

      let workflowYaml;
      try {
        workflowYaml = yaml.load(fileContents);
      } catch (err) {
        console.error(`Failed to parse YAML for ${file}:`, err.message);
        continue;
      }

      const workflowName = workflowYaml.name || 'Unnamed Workflow';
      const workflowFilePath = path.join(staticWorkflowsPath, file);
      const outputFilePath = path.join(outputDir, `${path.basename(file, '.yaml')}.md`);

      // Generate the content
      const content = generateMarkdownContent(workflowName, workflowFilePath);

      // Write the markdown file if it doesn't exist
      if (!fs.existsSync(outputFilePath)) {
        fs.writeFileSync(outputFilePath, content);
        console.log(`Generated documentation for ${file} at ${outputFilePath}`);
      }

      // Generate the action documentation
      try {
        console.log(`Generating action documentation for ${file}`);
        await generateActionMarkdownDocs({
          sourceFile: workflowFilePath,
          tocLevel: 1,
          updateReadme: true,
          readmeFile: outputFilePath,
          includeNameHeader: true,
        });
        console.log(`Updated documentation for ${file} at ${outputFilePath}`);
      } catch (error) {
        console.error(`Error generating action docs for ${file}:`, error.message);
      }
    }
  } catch (error) {
    console.error('Error generating documentation:', error.message);
  }
}

generateDocs();
