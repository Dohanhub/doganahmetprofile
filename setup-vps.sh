#!/bin/bash

# VPS Setup Script for Ahmet Dogan's Multi-Site Hosting
# This script sets up a complete web server environment

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting VPS Setup for Ahmet Dogan's Portfolio${NC}"
echo ""

# Update system
echo -e "${YELLOW}📦 Updating system packages...${NC}"
sudo apt update && sudo apt upgrade -y

# Install essential packages
echo -e "${YELLOW}📦 Installing essential packages...${NC}"
sudo apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release

# Install Node.js 18.x
echo -e "${YELLOW}📦 Installing Node.js 18.x...${NC}"
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
echo -e "${YELLOW}📦 Installing Nginx...${NC}"
sudo apt install -y nginx

# Install PM2 for process management
echo -e "${YELLOW}📦 Installing PM2...${NC}"
sudo npm install -g pm2

# Install Certbot for SSL
echo -e "${YELLOW}📦 Installing Certbot for SSL certificates...${NC}"
sudo apt install -y certbot python3-certbot-nginx

# Create web directory structure
echo -e "${YELLOW}📁 Creating directory structure...${NC}"
sudo mkdir -p /var/www/doganahmet.com
sudo mkdir -p /var/www/site2.doganahmet.com
sudo mkdir -p /var/www/site3.doganahmet.com
sudo mkdir -p /var/www/site4.doganahmet.com

# Set proper permissions
sudo chown -R $USER:$USER /var/www/
sudo chmod -R 755 /var/www/

# Create Nginx configuration
echo -e "${YELLOW}⚙️ Creating Nginx configuration...${NC}"
sudo tee /etc/nginx/sites-available/doganahmet.com > /dev/null <<EOF
server {
    listen 80;
    server_name doganahmet.com www.doganahmet.com;
    root /var/www/doganahmet.com;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/doganahmet.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Start Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Configure firewall
echo -e "${YELLOW}🔥 Configuring firewall...${NC}"
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable

echo -e "${GREEN}✅ VPS Setup Complete!${NC}"
echo ""
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "1. Point your domain (doganahmet.com) to this server's IP"
echo "2. Upload your website files to /var/www/doganahmet.com"
echo "3. Run: sudo certbot --nginx -d doganahmet.com -d www.doganahmet.com"
echo "4. Set up your Node.js application with PM2"
echo ""
echo -e "${GREEN}🔧 Server is ready for your 4 sites!${NC}"
echo -e "${YELLOW}💰 Cost: $12/month for all sites${NC}"
