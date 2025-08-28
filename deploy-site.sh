#!/bin/bash

# Deploy Ahmet Dogan's Portfolio to VPS
# This script builds and deploys the current site

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Deploying Ahmet Dogan's Portfolio to VPS${NC}"
echo ""

# Configuration
SERVER_IP="YOUR_SERVER_IP_HERE"
SITE_DIR="/var/www/doganahmet.com"

# Build the application
echo -e "${YELLOW}📦 Building the application...${NC}"
npm run build

# Create deployment package
echo -e "${YELLOW}📦 Creating deployment package...${NC}"
tar -czf portfolio-deploy.tar.gz dist/ package.json package-lock.json

# Upload to server (you'll need to run this manually)
echo -e "${YELLOW}📤 Uploading to server...${NC}"
echo "Run this command (replace YOUR_SERVER_IP):"
echo "scp portfolio-deploy.tar.gz root@${SERVER_IP}:/tmp/"

# Server deployment commands
echo ""
echo -e "${BLUE}🔧 Server Deployment Commands:${NC}"
echo "SSH into your server and run:"
echo ""
echo "1. Extract files:"
echo "   tar -xzf /tmp/portfolio-deploy.tar.gz -C /tmp/"
echo ""
echo "2. Copy to web directory:"
echo "   sudo cp -r /tmp/dist/public/* ${SITE_DIR}/"
echo ""
echo "3. Install dependencies:"
echo "   cd /tmp && npm install --production"
echo ""
echo "4. Start the Node.js app with PM2:"
echo "   pm2 start /tmp/dist/server/index.js --name portfolio"
echo "   pm2 save"
echo "   pm2 startup"
echo ""
echo "5. Reload Nginx:"
echo "   sudo systemctl reload nginx"
echo ""
echo -e "${GREEN}✅ Deployment script ready!${NC}"
echo -e "${YELLOW}💰 Total cost: $12/month for all 4 sites${NC}"
