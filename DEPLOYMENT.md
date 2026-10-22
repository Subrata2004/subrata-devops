# Deployment

## Local preview of the production bundle

```bash
npm run build
npm run preview
```

## Container

```bash
docker compose up --build
```

## GitHub Actions

`.github/workflows/deploy.yml` runs:

Checkout → Install → Lint → Test → Build → Docker Build → Deployment Placeholder

Configure repository secrets (examples — create only what you use):

- `VITE_GITHUB_USERNAME`
- `VITE_GITHUB_URL`
- `VITE_LINKEDIN_URL`
- `VITE_EMAIL`
- `DEPLOY_HOST` (placeholder)
- `DEPLOY_USER` (placeholder)
- `DEPLOY_KEY` (placeholder)

The deploy job prints a placeholder on purpose. Wire it to S3+CloudFront, Nginx, or another host after you have credentials.

## Static hosting

Upload `dist/` to any static host. Configure SPA fallback so unknown paths serve `index.html`.

Replace `YOUR_DOMAIN` in `public/robots.txt`, `public/sitemap.xml`, and the canonical tag in `index.html`.
