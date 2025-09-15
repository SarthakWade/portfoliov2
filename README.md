# Sarthak Wadegaonkar · Portfolio

A minimal, performant portfolio built with Next.js (App Router), TypeScript, and Tailwind. Features glass UI, pixel-font accents, responsive sections, and static export for GitHub Pages with a custom domain.

Live: https://sarthak-wadegaonkar.me

## Tech Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- next/font (Geist, Jersey_10 as `--font-pixel`)
- Bun for dependency installation and CI
- GitHub Actions → GitHub Pages (static export)

## Features
- Responsive hero, skills, projects, about, and contact sections
- Optimized images for static export; lazy-loading where possible
- Accessibility-minded (focus-visible, reduced motion fallback)
- Custom social icons and pixel-style headings
- Resume modal with PDF embed and fallback open/download

## Development

Install dependencies (Bun recommended):
```bash
bun install
```

Run the dev server:
```bash
bun dev
# or
npm run dev
```

Open http://localhost:3000

## Scripts
- `dev` – start dev server (Turbopack)
- `build` – Next.js production build
- `build:export` – production build (static export is emitted automatically to `out/` via `output: "export"`)
- `lint` – run ESLint

## Project Structure
```
src/
  app/              # App Router, layout, global styles
  components/       # UI components (Hero, Section, ProjectCard, etc.)
  lib/              # data loaders (reads public/*.json)
public/
  assets/langs/     # logos for skills
  *.json            # data files (languages, projects)
  *.gif|*.png|*.jpg # static assets
```

## Performance Notes
- Static export (`next.config.ts`: `output: "export"`) with `images.unoptimized = true` for GitHub Pages
- Limited image variants (`deviceSizes`, `imageSizes`) to reduce export size
- `LangToggleImage` uses JPG on small screens and when `prefers-reduced-motion` is set, falling back to GIF only on desktop
- Global initial loader (`InitialLoader`) to avoid jank on first paint

## Deployment (GitHub Pages)

This repo contains a GitHub Actions workflow: `.github/workflows/deploy.yml`.

Pipeline (default branch pushes):
1. Checkout
2. Setup Bun + Node
3. `bun install --frozen-lockfile`
4. `bun run build:export` → emits `out/`
5. Upload and deploy to GitHub Pages with `actions/deploy-pages@v4`

Static Export settings (`next.config.ts`):
- `output: "export"`
- Auto `basePath`/`assetPrefix` on CI for repo Pages (disabled if a `public/CNAME` is present)
- `images.unoptimized = true`

### Custom Domain

Custom domain is configured via `public/CNAME`:
```
sarthak-wadegaonkar.me
```

DNS records (at your DNS provider):
- A records (apex/root): 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- Optional: `www` → CNAME to `<username>.github.io`

GitHub → Repo Settings → Pages:
- Source: GitHub Actions
- Custom domain: sarthak-wadegaonkar.me
- Enforce HTTPS: enabled

## Editing Content
- Skills & language logos: `public/languages.json` or `public/lang.json`
- Projects: `public/projects.json`
- Text content: mostly in `src/app/page.tsx` and component files

## License
MIT
