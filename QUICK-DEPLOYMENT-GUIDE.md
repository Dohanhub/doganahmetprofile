# 🚀 Quick Deployment Guide - Ahmet Dogan Portfolio

## **Step 1: Create DigitalOcean Droplet**

1. **Go to**: https://cloud.digitalocean.com/droplets/new
2. **Login** with: `ahmet.dogan@doganhub.com`
3. **Settings**:
   - Image: Ubuntu 22.04 LTS
   - Plan: Basic
   - Size: $12/month (2GB RAM)
   - Datacenter: Frankfurt 1
   - Authentication: Password
   - Hostname: `doganahmet-vps`
4. **Click "Create Droplet"**

---

## **Step 2: Get Your Server IP**

1. Wait 1-2 minutes for creation
2. Go to your Droplets list
3. **Copy the IP address** (looks like: 123.456.789.012)
4. **Save the root password** from email

---

## **Step 3: Connect to Your Server**

**Option A: Using Windows Terminal/PowerShell**
```powershell
ssh root@YOUR_SERVER_IP
# Enter the password when prompted
```

**Option B: Using PuTTY (if you have it)**
- Host: YOUR_SERVER_IP
- Port: 22
- Username: root
- Password: (from email)

---

## **Step 4: Run Server Setup**

Once connected to your server, run:
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PM2
sudo npm install -g pm2

# Create web directory
sudo mkdir -p /var/www/doganahmet.com
sudo chown -R $USER:$USER /var/www/
```

---

## **Step 5: Upload Your Files**

**From your Windows machine:**
```powershell
# Upload the deployment package
scp portfolio-deploy.tar.gz root@YOUR_SERVER_IP:/tmp/
```

---

## **Step 6: Deploy on Server**

**On your server:**
```bash
# Extract files
cd /tmp
tar -xzf portfolio-deploy.tar.gz

# Copy to web directory
sudo cp -r dist/public/* /var/www/doganahmet.com/

# Install dependencies
npm install --production

# Start the app
pm2 start dist/server/index.js --name portfolio
pm2 save
pm2 startup

# Configure Nginx
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
}
EOF

# Enable site
sudo ln -sf /etc/nginx/sites-available/doganahmet.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo systemctl reload nginx
```

---

## **Step 7: Point Your Domain**

1. Go to your domain registrar
2. Update DNS:
   - A Record: `@` → YOUR_SERVER_IP
   - A Record: `www` → YOUR_SERVER_IP
3. Wait 24-48 hours

---

## **Step 8: Set Up SSL (Free)**

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d doganahmet.com -d www.doganahmet.com
```

---

## **✅ Done!**

Your site will be live at:
- http://YOUR_SERVER_IP (immediately)
- https://doganahmet.com (after DNS + SSL)

---

## **💰 Cost: $12/month for all 4 sites**

---

## **🔧 Management Commands**

```bash
# Check status
pm2 status
sudo systemctl status nginx

# View logs
pm2 logs portfolio

# Restart
pm2 restart portfolio
sudo systemctl restart nginx
```

---

**🎉 Your portfolio is now live!**
