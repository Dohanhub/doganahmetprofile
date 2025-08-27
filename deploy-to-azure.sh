#!/bin/bash

# Azure Deployment Script for Ahmet Doğan Portfolio
# Run this script from your local machine after downloading the project

echo "🚀 Starting Azure deployment for Ahmet Doğan Portfolio..."

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI not found. Installing..."
    curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
fi

# Login to Azure
echo "🔐 Logging into Azure..."
az login

# Set variables
RESOURCE_GROUP="ahmet-dogan-rg"
APP_NAME="ahmet-dogan-portfolio"
LOCATION="eastus"
RUNTIME="NODE:18-lts"
SKU="B1"

echo "📦 Creating resource group: $RESOURCE_GROUP"
az group create --name $RESOURCE_GROUP --location $LOCATION

echo "🏗️ Creating App Service plan..."
az appservice plan create \
    --name "${APP_NAME}-plan" \
    --resource-group $RESOURCE_GROUP \
    --location $LOCATION \
    --sku $SKU \
    --is-linux

echo "🌐 Creating web app: $APP_NAME"
az webapp create \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --plan "${APP_NAME}-plan" \
    --runtime $RUNTIME

echo "⚙️ Configuring app settings..."
az webapp config appsettings set \
    --resource-group $RESOURCE_GROUP \
    --name $APP_NAME \
    --settings NODE_ENV=production WEBSITE_NODE_DEFAULT_VERSION=~18

echo "📤 Deploying application..."
az webapp up \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP

echo "✅ Deployment complete!"
echo "🔗 Your website is live at: https://${APP_NAME}.azurewebsites.net"
echo ""
echo "Next steps:"
echo "1. Visit your website to verify deployment"
echo "2. Configure custom domain (optional): https://portal.azure.com"
echo "3. SSL certificate will be automatically generated for custom domains"
echo ""
echo "💰 Estimated cost: $13-20/month for B1 plan"
echo "📊 Monitor your app: https://portal.azure.com"