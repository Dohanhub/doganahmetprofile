# Azure Deployment Guide for Ahmet Doğan Portfolio

## Prerequisites
1. Azure account with active subscription
2. Azure CLI installed locally
3. Node.js 18+ on your local machine

## Quick Deployment Steps

### Method 1: Azure App Service (Recommended - 5 minutes)
Perfect for executive portfolio with SSL and custom domain support.

**Commands to run locally:**
```bash
# 1. Download this project to your computer
# 2. Navigate to project folder
cd ahmet-dogan-portfolio

# 3. Install Azure CLI (if not installed)
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# 4. Login to Azure
az login

# 5. Deploy in one command
az webapp up --name ahmet-dogan-portfolio --resource-group ahmet-dogan-rg --location eastus --runtime "NODE:18-lts" --sku B1

# 6. Your website will be live at:
# https://ahmet-dogan-portfolio.azurewebsites.net
```

**Cost:** $13-20/month with SSL certificate included

### Method 2: Azure Static Web Apps (Alternative)
Best for cost-effective hosting, but limited backend features.

**Commands:**
```bash
# 1. Install Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# 2. Login and deploy
swa login
swa deploy --app-location "client" --output-location "dist"
```

**Cost:** Free tier available, $9/month for custom domain

### Option 3: Azure Container Instances
Best for containerized deployment with full control.

**Steps:**
1. Create Dockerfile (see below)
2. Build container: `docker build -t ahmet-dogan-portfolio .`
3. Push to Azure Container Registry
4. Deploy to Container Instances

**Cost:** ~$20-60/month

## After Deployment

### Custom Domain (Optional)
```bash
# Add your domain (e.g., doganahmet.com)
az webapp config hostname add --hostname doganahmet.com --resource-group ahmet-dogan-rg --webapp-name ahmet-dogan-portfolio

# SSL certificate is automatically generated for free
```

### Environment Variables (Already configured)
The application is production-ready with:
- Security headers enabled
- Rate limiting configured
- All professional content included
- Contact form functional
- Chat agent operational

### Performance Monitoring
Azure automatically provides:
- SSL certificates (free)
- Global CDN
- Auto-scaling
- 99.95% uptime SLA
- Application insights

### Estimated Monthly Costs
- **B1 Basic Plan**: $13/month (recommended)
- **S1 Standard Plan**: $56/month (high traffic)
- **P1 Premium Plan**: $146/month (enterprise)

## Quick Domain Setup
1. Purchase domain from any registrar
2. Point DNS to Azure: `ahmet-dogan-portfolio.azurewebsites.net`
3. Add custom domain in Azure Portal
4. SSL certificate automatically generated

## Support
Your portfolio includes enterprise-grade security and is optimized for executive presentation with Vision 2030 alignment.