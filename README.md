# Arvanto

Arvanto's corporate website, built with Next.js, React, TypeScript, and Tailwind CSS. It includes the home page, service and industry pages, insights, company information, and contact routes.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build:next` | Create a standard Next.js production build |
| `npm run build` | Build the site for Cloudflare using OpenNext |
| `npm run preview` | Build and preview the Cloudflare deployment locally |
| `npm run deploy` | Build and deploy to Cloudflare |
| `npm run upload` | Build and upload the Cloudflare Worker |
| `npm run cf-typegen` | Generate Cloudflare environment types |

Cloudflare commands use the configuration in `wrangler.jsonc` and require a configured Wrangler environment.

## Project structure

- `src/app/` — Next.js routes and page layouts
- `src/components/` — shared and page-specific UI
- `src/data/` — structured site content
- `public/` — static assets, including images

Do not commit credentials or secrets. Configure runtime values through the appropriate local or Cloudflare environment.
