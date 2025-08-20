# Download and Deploy Guide

## How to Download Your Project from Replit

### Method 1: Direct Download (Recommended)
1. **Click the three dots menu** (⋯) in the Replit file explorer
2. **Select "Download as ZIP"**
3. **Extract the ZIP file** to your local machine
4. **Rename the folder** to `ahmet-dogan-portfolio`

### Method 2: Git Clone (Alternative)
```bash
git clone https://github.com/your-username/replit-project-name.git
cd replit-project-name
```

## Deploy to Azure (5 Minutes)

### Prerequisites
- Azure account (free tier available)
- Local computer with internet connection

### One-Command Deployment
1. **Open terminal/command prompt** in your project folder
2. **Run deployment script**:

**Mac/Linux:**
```bash
chmod +x deploy-to-azure.sh
./deploy-to-azure.sh
```

**Windows:**
```cmd
deploy-to-azure.sh
```

### Manual Deployment (Alternative)
```bash
# Install Azure CLI
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# Login to Azure
az login

# Deploy your portfolio
az webapp up --name ahmet-dogan-portfolio --resource-group ahmet-dogan-rg --location eastus --runtime "NODE:18-lts" --sku B1
```

## After Deployment

### Your Live Website
- **URL**: https://ahmet-dogan-portfolio.azurewebsites.net
- **SSL Certificate**: Automatically enabled
- **Global CDN**: Worldwide fast loading
- **Uptime**: 99.95% SLA guarantee

### Add Custom Domain (Optional)
```bash
# Add your professional domain
az webapp config hostname add --hostname doganahmet.com --resource-group ahmet-dogan-rg --webapp-name ahmet-dogan-portfolio
```

### Monitor Your Website
- **Azure Portal**: https://portal.azure.com
- **Application Insights**: Automatic performance monitoring
- **Health Check**: https://ahmet-dogan-portfolio.azurewebsites.net/api/health

## What's Already Configured
- Enterprise security headers
- Contact form with rate limiting
- Professional chat agent
- All career achievements and credentials
- LinkedIn integration
- Vision 2030 alignment
- Executive-level presentation

## Monthly Costs
- **B1 Basic**: $13/month (recommended)
- **S1 Standard**: $56/month (high traffic)
- **Custom domain**: Free SSL certificate included

Your portfolio is production-ready for executive positioning.