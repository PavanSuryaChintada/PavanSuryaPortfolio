# Hyperreal Folio

A fast, modern portfolio site showcasing my work. Built from scratch with Vite, React, TypeScript, shadcn/ui, and Tailwind CSS.

## Tech Stack

- **Vite** for lightning-fast dev/build
- **React 18** + **TypeScript**
- **shadcn/ui** (Radix Primitives) for accessible components
- **Tailwind CSS** for styling
- **React Router** for routing
- **TanStack Query** for data fetching/cache

## Requirements

- Node.js 18+ and npm

## Getting Started

```bash
# 1) Install dependencies
npm install

# 2) Start the dev server
npm run dev

# 3) Build for production
npm run build

# 4) Preview the production build locally
npm run preview

# 5) Lint the project
npm run lint
```

## Available Scripts

- `npm run dev` – Start Vite dev server
- `npm run build` – Build production assets
- `npm run build:dev` – Build in development mode
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint

## Project Structure

Common structure for a Vite + React + TS app. Key directories:

- `src/` – Application source code
- `src/components/` – UI components
- `src/routes/` or `src/pages/` – Route components
- `src/lib/` – Utilities/helpers
- `public/` – Static assets

## Styling

- Tailwind CSS is configured for utility-first styling.
- shadcn/ui components are composed on top of Radix for accessibility.

## Deployment

Any static host works (the app builds to `dist/`). Options:

- **Vercel**: Import repo → Framework Preset: Vite → Build: `npm run build` → Output: `dist`
- **Netlify**: Build command `npm run build` → Publish directory `dist`
- **GitHub Pages**: Serve the `dist/` output (via actions or manual upload)

## License

MIT
