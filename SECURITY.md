# Security

This repository is a public frontend. Treat everything under `src/` and `VITE_*` as visible to the browser.

## Never commit

- AWS access keys or session tokens
- Database passwords
- JWT secrets
- Private GitHub tokens
- Terraform state with secrets
- `.env` (ignored; use `.env.example`)

## Contact form

The form uses `mailto:` when `VITE_EMAIL` is a real address. It does not send mail through a backend, so no server secret is required.

## GitHub API

Only public, unauthenticated endpoints are used. If you add a token later, keep it on the server — never in Vite.

## Docker

The production image is Nginx serving static files. It does not include Node, credentials, or a shell user for application secrets.
