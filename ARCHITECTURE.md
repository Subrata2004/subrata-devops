# Architecture

Static React SPA. Vite builds HTML/JS/CSS. Nginx (or any static host) serves `dist/`.

```
Browser
  → Nginx (SPA fallback)
    → React Router
      → Home sections / project case studies
GitHub REST API (optional)
  → public profile + repositories when VITE_GITHUB_USERNAME is set
```

## Source layout

```
src/
  components/   UI sections (hero, skills, pipeline, …)
  pages/        Home, case study, 404
  data/         Factual content only
  hooks/        Theme, GitHub, resume probe
  lib/          Env, GitHub client, placeholders
  assets/       Local media (optional)
```

## Design constraints

- No fake metrics, logos, certifications, or live-system claims.
- Project GitHub/demo buttons are disabled while URLs are `YOUR_*`.
- Terraform and AWS diagrams are labeled as labs unless you supply a real deployment.

## Delivery topology (reference, not live)

Internet → Route 53 → load balancer → application on EC2/Docker → database / S3, with CloudWatch off the request path. See the Architecture section in the UI.
