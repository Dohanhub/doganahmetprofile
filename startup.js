// Azure App Service startup script
// This ensures proper environment setup before starting the Node.js application

// Set production environment
process.env.NODE_ENV = 'production';

// Set the port that Azure expects
process.env.PORT = process.env.PORT || 8080;
console.log('Starting application with PORT:', process.env.PORT);

// Import and start the main application
import('./dist/server/index.js').catch(err => {
    console.error('Failed to start application:', err);
    process.exit(1);
});