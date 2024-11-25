# Generic Workflows deployment through TAM cli

Generic workflows can be deployed to your repository using the TAM CLI tool. This ensures that all required inputs and GitHub environments are correctly generated and added for you.

**Note**: TAM CLI is a tool designed to deploy various types of templates. The template for workflows can be selected during tool execution by choosing the option: _Addons/GithubWorkflows_

```
tam template init your-destination-repository

Enter team/account to include configurations (20minuten, dai, disco, discovery,
ness, pmd, sfmc, test, titan, unity): select the team/account
Enter the template to use [tx-pts-dai/templates]:
You've downloaded .cookiecutters/templates before.
Is it okay to delete and re-download it? [y/n] (y): y
Select a template
    1 - Bases (Cookiecutter templates for base repositories)
    2 - Addons (Cookiecutter templates for additional features)
    Choose from [1/2] (1): 2
Select a template
    1 - Flux CronJob Deployment (template for deploying a new SFMC cronjob)
    2 - Flux Service Deployment (template for deploying a new SFMC service)
    3 - MKDocs (Cookiecutter template for MKDocs)
    4 - GithubWorkflows (Cookiecutter template for github workflows)
    Choose from [1/2/3/4] (1): 4
  [1/9] Enter the project name (My Project):
  [2/9] project_slug (My Project):
  [3/9] Enter the Docker image name ():
  [4/9] Enter the path for Docker build context (.):
  [5/9] Enter the path for the Dockerfile (nodejs/Dockerfile):
  [6/9] Define whether the WFs rely on GitHub environments or not. [y/n] (y):
  [7/9] Defines whether the feature branch option is available. [y/n] (y):
  [8/9] github_repo ():
  [9/9] environments (default):
```

Once completed, a pull request is open in the destination repository.
