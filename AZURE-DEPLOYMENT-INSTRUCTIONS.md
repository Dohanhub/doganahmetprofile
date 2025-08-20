# Azure Deployment Instructions - Ready to Deploy

## Step 1: Download Your Project
1. Download all files from this Replit project to your local computer
2. Extract to a folder named `ahmet-dogan-portfolio`

## Step 2: One-Command Deployment (5 minutes)
Open terminal/command prompt in your project folder and run:

```bash
# Make script executable (Mac/Linux)
chmod +x deploy-to-azure.sh

# Run deployment script
./deploy-to-azure.sh
```

**Or for Windows:**
```cmd
# Install Azure CLI first
winget install Microsoft.AzureCLI

# Login to Azure
az login

# Deploy in one command
az webapp up --name ahmet-dogan-portfolio --resource-group ahmet-dogan-rg --location eastus --runtime "NODE:18-lts" --sku B1
```

## Step 3: Your Website Will Be Live
- **URL**: https://ahmet-dogan-portfolio.azurewebsites.net
- **SSL**: Automatically enabled
- **Cost**: $13-20/month

## What's Already Configured
✅ Enterprise security headers  
✅ Rate limiting (5 requests/15min)  
✅ Contact form with input sanitization  
✅ Professional chat agent  
✅ All your career data and achievements  
✅ LinkedIn integration  
✅ Health monitoring endpoint  
✅ Graceful shutdown handling  

## Custom Domain Setup (Optional)
After deployment, add your domain:
```bash
az webapp config hostname add --hostname doganahmet.com --resource-group ahmet-dogan-rg --webapp-name ahmet-dogan-portfolio
```

## Files Created for Azure
- `azure-deploy.md` - Complete deployment guide
- `deploy-to-azure.sh` - Automated deployment script
- `Dockerfile` - Container deployment option
- `web.config` - IIS configuration with security headers
- `iisnode.yml` - Node.js Azure settings
- `startup.js` - Production startup script
- `deploy.cmd` - Azure build commands

## Support
Your portfolio is production-ready with Vision 2030 alignment and executive-level presentation. All security and performance optimizations are implemented.