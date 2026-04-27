# Vercel Deployment

## Project setup

This site is a Next.js 15 App Router project with Tailwind CSS v4, shadcn/ui conventions, Framer Motion, and `next/font`.

## Local checks

Run these before deploying:

```bash
npm run typecheck
npm run build
```

The build script runs `velite`, `next build`, and the `postbuild` sitemap generation.

## Vercel settings

- Framework preset: `Next.js`
- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`
- Node.js version: `22.x`

## Environment variables

Copy values from `.env.example` into Vercel project settings if the production site uses analytics, email, or API integrations.

## Deployment flow

1. Push the project to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Confirm the settings above.
4. Add production environment variables.
5. Deploy.
6. After deploy, verify the homepage, metadata preview, `robots.txt`, and `/sitemap.xml`.
