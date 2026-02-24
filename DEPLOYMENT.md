# Cloudflare deployment – fix blank screen

If you see a **blank screen** and a console error about `main.tsx` or `application/octet-stream`, the site is serving the **source** files instead of the **built** output. Fix it as follows.

## 1. Use the built output (required)

In **Cloudflare Dashboard** → **Workers & Pages** → **pavansuryachintada** → **Settings** → **Builds & deployments**:

| Setting | Value |
|--------|--------|
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |

The **Build output directory** must be exactly **`dist`**. If it is empty or anything else, Cloudflare will not serve the built app and you will get a blank screen.

## 2. If you use a custom deploy command

If you have a **Custom deploy command** (e.g. `npx wrangler deploy`):

- Keep **Build command**: `npm run build` (so `dist/` is created).
- The deploy step will upload the contents of `dist/` (see `wrangler.toml`).

Do not remove the build step or point the deploy at the repo root.

## 3. After changing settings

- Save the settings.
- Trigger a new deployment (e.g. **Deployments** → **Create deployment** or push a new commit).
- Wait for the build to finish, then open the site (and do a hard refresh: Ctrl+Shift+R or Cmd+Shift+R).

This repo is already set up so that `npm run build` produces the correct files in `dist/`. The blank screen is fixed by making Cloudflare serve that `dist` folder.
