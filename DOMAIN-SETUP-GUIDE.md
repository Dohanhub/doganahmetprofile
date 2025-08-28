# 🌐 Domain Setup Guide for Vercel Deployment

## 🚀 Deployment Steps

### 1. Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in/Sign up** with your GitHub account
3. **Import Repository**:
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your `doganahmetprofile` repository
   - Vercel will auto-detect the configuration

### 2. Configure Environment Variables

In your Vercel project settings, add these environment variables:

```bash
NODE_ENV=production
PORT=3000
SESSION_SECRET=your-super-secret-session-key-here-min-32-chars
JWT_SECRET=your-jwt-secret-key-here-min-32-chars
LOG_LEVEL=info
ALLOWED_ORIGINS=https://doganahmet.com,https://www.doganahmet.com,http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
MAX_FILE_SIZE=10485760
UPLOAD_DIR=./uploads
```

### 3. Initial Deployment

- Vercel will automatically build and deploy your project
- You'll get a URL like: `https://doganahmetprofile.vercel.app`
- Test the deployment to ensure everything works

## 🌐 Domain Configuration

### Option 1: Using Vercel's Domain Management (Recommended)

#### Step 1: Add Domains in Vercel

1. **Go to your Vercel project dashboard**
2. **Click "Settings" → "Domains"**
3. **Add both domains**:
   - `doganahmet.com`
   - `www.doganahmet.com`

#### Step 2: Configure DNS Records

You'll need to update your domain registrar's DNS settings:

**For `doganahmet.com` (Root Domain):**
```
Type: A
Name: @
Value: 76.76.19.19
```

**For `www.doganahmet.com` (WWW Subdomain):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Additional Records (Optional but recommended):**
```
Type: TXT
Name: @
Value: vc-domain-verify=doganahmet.com,<verification-code>
```

### Option 2: Using External DNS Provider

If you prefer to manage DNS externally:

1. **Get Vercel's nameservers** from your project settings
2. **Update your domain registrar** to use Vercel's nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```

## 🔧 Domain Verification

### Step 1: Verify Domain Ownership

1. **In Vercel dashboard**, go to "Settings" → "Domains"
2. **Add your domain**: `doganahmet.com`
3. **Vercel will provide DNS records** to add to your registrar
4. **Add the DNS records** at your domain registrar
5. **Wait for propagation** (can take up to 48 hours, usually 15-30 minutes)

### Step 2: Add WWW Subdomain

1. **Add `www.doganahmet.com`** in Vercel
2. **Configure CNAME record** at your registrar
3. **Vercel will automatically redirect** www to non-www (or vice versa)

## 🔄 Redirect Configuration

### Automatic Redirects

Vercel will automatically handle redirects between:
- `www.doganahmet.com` → `doganahmet.com`
- `doganahmet.com` → `www.doganahmet.com`

### Custom Redirect Rules (Optional)

If you want to customize redirects, add this to your `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/www.doganahmet.com",
      "destination": "https://doganahmet.com",
      "permanent": true
    }
  ]
}
```

## 🔒 SSL/HTTPS Configuration

Vercel automatically provides:
- ✅ **Free SSL certificates** for all domains
- ✅ **Automatic HTTPS redirects**
- ✅ **HSTS headers** for security
- ✅ **HTTP/2 support**

## 📊 Domain Analytics

### Enable Vercel Analytics

1. **Go to "Settings" → "Analytics"**
2. **Enable Web Analytics**
3. **Add tracking code** to monitor traffic

### Custom Analytics (Optional)

You can also add Google Analytics or other tracking services.

## 🧪 Testing Your Domains

### Test URLs

After setup, test these URLs:

- ✅ `https://doganahmet.com` - Main site
- ✅ `https://www.doganahmet.com` - WWW version
- ✅ `https://doganahmet.com/health` - Health check
- ✅ `https://doganahmet.com/api/contact` - API endpoint

### Functionality Tests

- [ ] Home page loads correctly
- [ ] Navigation works
- [ ] Contact form submits
- [ ] Theme switching works
- [ ] Mobile responsiveness
- [ ] SSL certificate is valid
- [ ] Redirects work properly

## 🔍 Troubleshooting

### Common Issues

1. **DNS Propagation**
   - Can take up to 48 hours
   - Use tools like `whatsmydns.net` to check

2. **SSL Certificate Issues**
   - Vercel handles this automatically
   - Wait 24-48 hours for full SSL setup

3. **Redirect Loops**
   - Check your `vercel.json` configuration
   - Ensure no conflicting redirect rules

4. **Domain Not Resolving**
   - Verify DNS records are correct
   - Check domain registrar settings

### DNS Check Commands

```bash
# Check A record
nslookup doganahmet.com

# Check CNAME record
nslookup www.doganahmet.com

# Check SSL certificate
openssl s_client -connect doganahmet.com:443 -servername doganahmet.com
```

## 📱 Mobile and SEO

### Mobile Optimization

- ✅ Responsive design already implemented
- ✅ Fast loading times
- ✅ PWA features available

### SEO Configuration

Update your `client/index.html` meta tags:

```html
<meta property="og:url" content="https://doganahmet.com" />
<meta property="og:site_name" content="Ahmet Dogan" />
<link rel="canonical" href="https://doganahmet.com" />
```

## 🎉 Success Checklist

- [ ] Project deployed to Vercel
- [ ] Environment variables configured
- [ ] `doganahmet.com` domain added
- [ ] `www.doganahmet.com` domain added
- [ ] DNS records configured
- [ ] SSL certificates active
- [ ] Both domains resolve correctly
- [ ] Redirects work properly
- [ ] All functionality tested
- [ ] Analytics enabled (optional)

## 📞 Support

If you encounter issues:

1. **Check Vercel documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Vercel support**: Available in your dashboard
3. **Domain registrar support**: Contact your domain provider

---

**Your site will be live at:**
- 🌐 **Main**: https://doganahmet.com
- 🌐 **WWW**: https://www.doganahmet.com

**Ready to go live! 🚀**
