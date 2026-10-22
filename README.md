# Subrata Dey — DevOps & Cloud Engineer Portfolio

Production-oriented personal site for **Subrata Dey**. Dark, terminal-inspired UI. Data lives in `src/data`; missing links stay placeholders (`YOUR_EMAIL`, `YOUR_GITHUB`, …) instead of invented facts.

## Commands

```bash
npm install
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

## Environment variables

Copy `.env.example` to `.env`:

| Variable | Purpose |
| --- | --- |
| `VITE_GITHUB_USERNAME` | Public GitHub login used to fetch real repos |
| `VITE_GITHUB_URL` | Profile URL (`YOUR_GITHUB` until set) |
| `VITE_LINKEDIN_URL` | LinkedIn URL (`YOUR_LINKEDIN` until set) |
| `VITE_EMAIL` | Contact address (`YOUR_EMAIL` until set) |

Never put AWS keys, JWTs, or database passwords in Vite env vars — they are bundled into the client.

## Docker

```bash
docker compose up --build
```

App listens on `http://localhost:8080`.

```bash
docker build -t subrata-portfolio .
docker run --rm -p 8080:80 subrata-portfolio
```

## GitHub

1. Create a repository and add the remote.
2. Set `VITE_GITHUB_USERNAME` to your login if you want live repo cards.
3. Add GitHub Actions secrets listed in `DEPLOYMENT.md`.

## Resume

Place the PDF at `public/resume/Subrata_Dey_Resume.pdf`. Until that file exists, Download/View stay disabled.

## Placeholders you still need to replace

- `YOUR_EMAIL`
- `YOUR_LINKEDIN`
- `YOUR_GITHUB`
- `YOUR_GITHUB_URL` (per project)
- `YOUR_LIVE_DEMO_URL` (per project)
- `YOUR_DOMAIN` in `public/robots.txt` and `public/sitemap.xml`
- Canonical URL in `index.html`
