// Azure App Service startup script
const { spawn } = require('child_process');
const path = require('path');

// Set production environment
process.env.NODE_ENV = 'production';
process.env.PORT = process.env.PORT || 8080;

// Start the application
const server = spawn('node', [path.join(__dirname, 'dist', 'index.js')], {
  stdio: 'inherit',
  env: process.env
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  process.exit(code);
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  server.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully');
  server.kill('SIGINT');
});