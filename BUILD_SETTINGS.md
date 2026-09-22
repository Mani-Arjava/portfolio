# Cloudflare Pages - Quick Build Settings

Copy these settings into Cloudflare Pages dashboard:

## Build Configuration

| Setting | Value |
|---------|-------|
| **Framework** | Next.js |
| **Build Command** | `npm run build` |
| **Build Output Directory** | `out` |
| **Root Directory** | `/` |
| **Node.js Version** | 20.x (recommended) or 18.x+ |

## GitHub Integration

| Setting | Value |
|---------|-------|
| **Repository** | Mani-Arjava/portfolio |
| **Production Branch** | main |
| **Auto-publish** | ✓ Enabled |

## Environment Variables (Optional)

```
NEXT_PUBLIC_SITE_URL=https://mani-rr.pages.dev
```

## Sites & Deployment

| Item | Value |
|------|-------|
| **Default URL** | https://[project-name].pages.dev |
| **Custom Domain** | (optional) your-domain.com |
| **SSL/TLS** | Automatic (free) |

## Deployment URL

Once deployed, your site will be live at:
```
https://mani-rr.pages.dev
```

## Local Testing Before Deploy

```bash
# Build locally
npm run build

# Check output folder
ls -la out/

# Deploy manually (if needed)
npm install -g wrangler
wrangler login
wrangler pages deploy out
```

## Auto-Deploy Process

1. ✓ Push code to `main` branch
2. ✓ Cloudflare detects change (webhook)
3. ✓ Runs: `npm run build`
4. ✓ Deploys `out/` folder
5. ✓ Live within 1-2 minutes

## Rollback

If anything goes wrong:
- Cloudflare → Pages → Deployments
- Select previous deployment
- Click "Rollback to this deployment"
- Instant restoration (no downtime)

---

**Setup Time**: ~5 minutes  
**Cost**: FREE (Cloudflare Pages is free)  
**Deploys**: Auto on every push to main
