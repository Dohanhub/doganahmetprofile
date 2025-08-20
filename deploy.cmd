@echo off

:: Azure App Service Deployment Script
echo Starting deployment...

:: Install Node.js dependencies
call npm ci
if errorlevel 1 goto error

:: Install client dependencies
cd client
call npm ci
if errorlevel 1 goto error
cd ..

:: Build the application
call npm run build
if errorlevel 1 goto error

echo Deployment completed successfully.
goto end

:error
echo Deployment failed with error code %errorlevel%.
exit /b %errorlevel%

:end