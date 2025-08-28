# Vercel Deployment Guide

## Issues Fixed

### 1. Configuration Issues
- ✅ Fixed `vercel.json` to use correct build paths
- ✅ Added proper route handling for API and static files
- ✅ Created `.vercelignore` to exclude unnecessary files
- ✅ Added `vercel-build` script to `package.json`

### 2. Build Configuration
- ✅ Updated Vite config for production builds
- ✅ Fixed TypeScript configuration
- ✅ Proper static file serving setup

## Deployment Steps

### 1. Environment Variables Setup
In your Vercel dashboard, add these environment variables:

```bash
NODE_ENV=production
PORT=3000
SESSION_SECRET=your-super-secret-session-key-here-min-32-chars
JWT_SECRET=your-jwt-secret-key-here-min-32-chars
LOG_LEVEL=info
ALLOWED_ORIGINS=https://your-domain.vercel.app,http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
MAX_FILE_SIZE=10485760
UPLOAD_DIR=./uploads
```

### 2. Database Configuration (Optional)
If using a database, add:
```bash
DATABASE_URL=your-database-connection-string
```

### 3. OpenAI Configuration (Optional)
If using AI features:
```bash
OPENAI_API_KEY=your-openai-api-key
```

## Build Process

The deployment uses a two-stage build:

1. **Client Build**: Vite builds the React app to `dist/public/`
2. **Server Build**: TypeScript compiles the server code

## Route Configuration

- `/api/*` → Serverless functions (API routes)
- `/health` → Health check endpoint
- `/assets/*` → Static assets
- `/*.js|css|png|jpg|etc` → Static files
- `/*` → SPA fallback to `index.html`

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check that all dependencies are in `package.json`
   - Ensure TypeScript compilation passes locally
   - Verify environment variables are set

2. **API Routes Not Working**
   - Check that `server/index.ts` exports properly
   - Verify route paths in `vercel.json`
   - Check server logs in Vercel dashboard

3. **Static Files Not Loading**
   - Ensure build outputs to `dist/public/`
   - Check route configuration in `vercel.json`
   - Verify file paths in HTML

4. **Environment Variables**
   - All required env vars must be set in Vercel dashboard
   - Check for typos in variable names
   - Ensure secrets are properly configured

### Debugging Steps

1. **Local Testing**
   ```bash
   npm run build
   npm run start:prod
   ```

2. **Check Build Logs**
   - Review Vercel build logs for errors
   - Check function logs for runtime errors

3. **Verify Routes**
   - Test API endpoints: `/api/health`
   - Test static files: `/assets/`
   - Test SPA routing: `/about`, `/contact`

## Performance Optimizations

- ✅ Static assets are cached
- ✅ API routes have 30s timeout
- ✅ Build excludes unnecessary files
- ✅ Client-side code splitting enabled

## Security Considerations

- ✅ Helmet.js security headers
- ✅ CORS properly configured
- ✅ Rate limiting enabled
- ✅ Environment variables for secrets

## Monitoring

- Health check endpoint: `/health`
- API logging enabled
- Error tracking in place

## Next Steps

1. Deploy to Vercel using GitHub integration
2. Set environment variables in Vercel dashboard
3. Test all routes and functionality
4. Monitor performance and errors
5. Set up custom domain if needed
