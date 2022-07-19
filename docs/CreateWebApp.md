# Create Static Web App in Azure

## Sign In
az login

## Create a resource group
az group create \
    --name www-meallen-rg \
    --location "eastus2"

## Create a variable with GitHub user name
GITHUB_USER_NAME=mattheweallen


## Create a new static web app from your repository
az staticwebapp create \
    --name www-meallen-web-app \
    --resource-group www-meallen-rg \
    --source https://github.com/$GITHUB_USER_NAME/literate-doodle \
    --location "eastus2" \
    --branch main \
    --app-location "/"  \
    --output-location "build"  \
    --login-with-github

## Navigate to https://github.com/login/device to login

## List the url of the repo
az staticwebapp show \
  --name  www-meallen-web-app \
  --query "repositoryUrl"

## query website url
az staticwebapp show \
  --name www-meallen-web-app \
  --query "defaultHostname"

## clean up resources
az group delete \
  --name www-meallen-rg



https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-cli?tabs=react
https://docs.microsoft.com/en-us/azure/static-web-apps/custom-domain