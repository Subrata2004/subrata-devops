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

Checkout → Setup Node → Setup Pages → Install → Lint → Test → Build → Upload Pages artifact → Deploy to GitHub Pages

Configure repository secrets (examples — create only what you use):

- `VITE_GITHUB_USERNAME`
- `VITE_GITHUB_URL`
- `VITE_LINKEDIN_URL`
- `VITE_EMAIL`

GitHub Pages does not require a custom server configuration for this app because the router uses a hash-based path format.

## Static hosting

Upload `dist/` to any static host, or publish from GitHub Pages using the workflow above.

Replace `YOUR_DOMAIN` in `public/robots.txt`, `public/sitemap.xml`, and the canonical tag in `index.html`.
