<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Grace Basket 2026

Grace Basket 2026 is a static React site built with Vite.

## Run locally

**Prerequisites:** Node.js 22.12.0 or later and npm

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Create a production build with `npm run build`.

## Deploy to Vercel

1. Import this repository into Vercel and select the repository root as the root directory.
2. Vercel uses the included `vercel.json` to build with `npm run build`, publish `dist`, and serve the app entry point for client-side routes.
3. Deploy. The current site does not require environment variables.

The site is a static frontend; it does not run an Express server or call Gemini from the browser. Do not add private API keys as `VITE_*` variables, since Vite embeds those values in public client-side assets.
