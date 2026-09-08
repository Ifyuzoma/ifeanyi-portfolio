# Ifeanyi Uzoma — Portfolio

Production implementation of the portfolio designed in Claude Design (`Ifeanyi's portfolio wireframes` handoff), built with Next.js 16, TypeScript and Tailwind CSS 4.

## Pages

- `/` — Home
- `/about` — About
- `/fun` — Fun (side projects)
- `/work/pantrypal`, `/work/ceo-creative`, `/work/tripwise`, `/work/lumina-clinic`, `/work/sticky`, `/work/spacem-online` — case studies
- `/work/pantrypal/reel` — interactive screen-by-screen flip through the PantryPal prototype

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## Structure

- `src/lib/case-studies/*.ts` — content for each case study (facts, chapters, decisions, closers), kept separate from layout so the copy can be edited without touching JSX
- `src/components/case-study/` — shared case-study building blocks (hero, facts grid, chapter/decision sections, media layouts)
- `src/components/` — site-wide header/footer/clock/screen-reel
- `public/uploads/` — every image, video and screenshot from the design handoff

## Notes

- Fonts: Satoshi (via Fontshare) for display type, Geist + Geist Mono (via `next/font/google`) for body and mono text — matching the original design system.
- All case-study copy is transcribed verbatim from the Claude Design handoff; nothing was rewritten.
- `public/uploads/` is large (~240MB, mostly prototype `.mp4` thumbnails) — consider moving videos to a CDN before deploying if that matters for your host's limits.
