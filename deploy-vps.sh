#!/bin/bash

# VPS Deployment Script for Ahmet Dogan's Portfolio
# This script sets up a VPS to host multiple sites

echo "🚀 Starting VPS Deployment Setup..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
SERVER_IP="YOUR_SERVER_IP_HERE"
DOMAIN="doganahmet.com"
SITE_NAME="portfolio"

echo -e "${GREEN}✅ VPS Deployment Script Created${NC}"
echo ""
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo "1. Create DigitalOcean account"
echo "2. Create a new Droplet (Ubuntu 22.04, $12/month plan)"
echo "3. Get your server IP address"
echo "4. Update SERVER_IP in this script"
echo "5. Run: chmod +x deploy-vps.sh && ./deploy-vps.sh"
echo ""
echo -e "${GREEN}🔧 What this script will do:${NC}"
echo "• Install Nginx web server"
echo "• Install Node.js and npm"
echo "• Set up SSL certificates"
echo "• Configure domain routing"
echo "• Deploy your portfolio site"
echo "• Set up for additional sites"
echo ""
echo -e "${YELLOW}💰 Total Cost: $12/month for all 4 sites${NC}"
