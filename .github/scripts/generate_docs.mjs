import fs from 'fs';
import path from 'path';
import { generateActionMarkdownDocs } from 'action-docs';

// Define the path to your GitHub Actions workflows
const workflowsPath = path.resolve('.github', 'workflows');

// Define the output directory for the documentation
const outputDir = path.resolve('docs', 'workflows');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to generate docs for each workflow file
async function generateDocs() {
  try {
    // Read all files in the workflows directory and filter out those starting with '_'
    const workflowFiles = fs.readdirSync(workflowsPath).filter(file => !file.startsWith('_'));

    for (const file of workflowFiles) {
      const workflowFilePath = path.join(workflowsPath, file);

      const outputFilePath = path.join(outputDir, `${path.basename(file, '.yaml')}.md`);

      if (!fs.existsSync(outputFilePath)) {
        fs.writeFileSync(outputFilePath, content);
        console.log(`Generated documentation for ${file} at ${outputFilePath}`);
      }

      await generateActionMarkdownDocs({
        sourceFile: workflowFilePath,
        tocLevel: 2,
        updateReadme: true,
        readmeFile: outputFilePath
      });

      console.log(`Generated documentation for ${file} at ${outputFilePath}`);
    }
  } catch (error) {
    console.error('Error generating documentation:', error);
  }
}

// Execute the script
generateDocs();
