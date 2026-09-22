# Cloudflare Pages Deployment Guide

## Overview
This portfolio is configured for deployment on **Cloudflare Pages** — a fast, globally distributed static hosting platform with zero downtime deployments.

## Build Configuration

### Current Settings (next.config.ts)
```typescript
output: "export"           // Static export
images.unoptimized: true   // No image optimization (use static assets)
```

### Build Command
```bash
npm run build  # Outputs to ./out directory
```

### Output Directory
```
./out  # Static files ready for Cloudflare
```

## Deployment Steps

### Option 1: GitHub Integration (Recommended)
This is the easiest and most automated approach.

1. **Push to GitHub** (already done)
   ```bash
   git push origin main
   ```

2. **Connect to Cloudflare**
   - Go to https://dash.cloudflare.com/
   - Pages → Create a project
   - Select "Connect to Git"
   - Choose GitHub repository: `Mani-Arjava/portfolio`
   - Select branch: `main`

3. **Build Settings**
   - **Framework**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: 18.x or higher (recommended 20.x)
   - **Root directory**: `/` (default)

4. **Environment Variables** (if needed)
   - Add any `.env.production` variables in Cloudflare dashboard

5. **Deploy**
   - Cloudflare will auto-build and deploy on each push to `main`

### Option 2: Manual Deployment
Use Wrangler CLI for manual control.

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   wrangler pages deploy out
   ```

## Cloudflare Pages Dashboard Settings

### Branch Deployments
- **Production branch**: `main`
- **Preview branches**: All other branches
- **Auto-publish production branch**: ✓ Enabled

### Custom Domain
1. Cloudflare dashboard → Pages → Your project
2. Settings → Custom domains
3. Add custom domain: `mani-rr.pages.dev` (default)
4. Or use your own domain (requires DNS setup)

## Build Environment Variables

Cloudflare Pages automatically provides:
```
CLOUDFLARE_PAGES=true
CLOUDFLARE_PAGES_URL=https://mani-rr.pages.dev
CI=true
```

## Performance Optimizations

### Already Configured
- ✓ Static export (no server-side rendering)
- ✓ Optimized Tailwind CSS (v4)
- ✓ Minimal dependencies
- ✓ Image optimization disabled (static images)

### Cloudflare Benefits
- Global CDN (~200+ data centers)
- Automatic gzip/brotli compression
- HTTP/3 support
- DDoS protection
- Auto-minification

## Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] Connected to Cloudflare Pages
- [ ] Build command set to: `npm run build`
- [ ] Output directory set to: `out`
- [ ] Node version ≥ 18.x selected
- [ ] Environment variables added (if any)
- [ ] Custom domain configured (optional)
- [ ] Initial deployment successful
- [ ] Test site at: https://mani-rr.pages.dev

## Troubleshooting

### Build Fails
1. Check build logs in Cloudflare dashboard
2. Run locally: `npm run build`
3. Verify `next.config.ts` has `output: "export"`
4. Check Node.js version (must be ≥ 18)

### Images Not Loading
1. Images must be in `/public` directory
2. Use relative paths: `/images/profile.png`
3. Verify images exist after build in `out/` folder

### Performance Issues
1. Check Cloudflare Analytics → Performance
2. Enable Caching → Set cache TTL
3. Use Cloudflare Workers for API routes (if needed)

## Environment Variables (if needed)

Create `.env.production` for production variables:
```env
NEXT_PUBLIC_SITE_URL=https://mani-rr.pages.dev
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

Then add to Cloudflare dashboard:
- Settings → Environment variables → Add variable

## SSL/TLS Certificate
Cloudflare automatically provides:
- ✓ Free SSL/TLS certificate
- ✓ Auto-renewal
- ✓ Universal SSL
- ✓ Full strict mode available

## Monitoring & Analytics

### Cloudflare Dashboard
1. Pages → Your project → Analytics
2. View: Page views, unique visitors, errors
3. Performance: Core Web Vitals, load times

### Custom Domain Analytics
- Go to your custom domain DNS settings
- Enable Cloudflare analytics proxy

## Rollback & Recovery

### Automatic Rollbacks
- Cloudflare keeps deployment history
- Pages → Project → Deployments
- Click any previous deployment to restore

### Manual Rollback
1. Click desired deployment in history
2. Click "Rollback to this deployment"
3. Confirm (live within seconds)

## Next Steps

1. **Initial Deploy**: Follow Option 1 or 2 above
2. **Verify**: Visit https://mani-rr.pages.dev
3. **Custom Domain**: (Optional) Add your own domain
4. **Analytics**: Monitor in Cloudflare dashboard
5. **CI/CD**: Future pushes auto-deploy

## Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Pricing](https://pages.cloudflare.com/)
