@echo off
echo 🚀 Deploying Ahmet Dogan's Portfolio to VPS
echo.

echo 📦 Building the application...
call npm run build

echo.
echo ✅ Build completed successfully!
echo.
echo 📋 Next Steps:
echo 1. Create DigitalOcean Droplet (Ubuntu 22.04, $12/month)
echo 2. Get your server IP address
echo 3. Upload portfolio-deploy.tar.gz to your server
echo 4. Run the setup script on your server
echo.
echo 💰 Total Cost: $12/month for all 4 sites
echo.
pause
