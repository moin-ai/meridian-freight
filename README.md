# Corporate / Logistics Website Template

A production-ready, fully animated marketing + lite-app website built with **Next.js 16 (App Router) · TypeScript · Tailwind v4 · shadcn (Base UI) · GSAP**. Currently themed for **Alpha Paradigm**, but designed to be re-skinned for any client by editing **two files**.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Node 20.17+ / 22.9+ / 24 required.

## Reuse for another client — edit only these two files

### 1. `src/content/site.ts` — all words, links, people, services, jobs, media
This is the single source of truth. Replace the values in the `site` object:
company info, contact details, social links, nav, hero copy, stats, about/values,
founder, board, leadership, countries, **services** (each becomes its own
`/services/[slug]` page automatically), jobs, offices, quote dropdown options.
The `MEDIA` map at the top holds every image URL — swap these to change all imagery.

### 2. `src/app/globals.css` — the brand palette
Edit the tokens under the `:root` comment block:
- `--brand` — primary ink (deep colour)
- `--gold` — signature accent
- `--radius` — corner roundness
- fonts are set in `src/app/layout.tsx` (`Inter` body, `Sora` headings)

Everything else (layout, sections, animations, forms, routing, API) reads from
those two files — **no component edits needed** for a content/brand swap.

## What's included

- **Pages:** Home, Who We Are, What We Do, dynamic Service detail (×N), Get a Quote,
  Track Shipment, Careers, Contact — plus `sitemap.xml` and `robots.txt`.
- **Backend (Route Handlers):** `/api/contact`, `/api/quote`, `/api/careers`,
  `/api/track`. Each validates with shared Zod schemas (`src/lib/schemas.ts`).
  The `TODO` comments mark where to plug in email/CRM. `track` returns a
  deterministic **placeholder** timeline — swap in a real carrier API there.
- **Animation:** GSAP + ScrollTrigger via `@gsap/react` `useGSAP`. Reusable
  primitives in `src/components/motion.tsx` (`Reveal`, `Stagger`, `Counter`,
  `Parallax`) — all respect `prefers-reduced-motion`.
- **Icons:** live Google Material Symbols via `<Icon name="..." />`
  (`src/components/icon.tsx`). No emojis.
- **UI:** shadcn components (Base UI flavour) in `src/components/ui`.

## Key folders

```
src/content/site.ts        ← content (edit me)
src/app/globals.css        ← brand tokens (edit me)
src/app/                   ← routes + /api route handlers
src/components/sections/   ← home page sections
src/components/forms/      ← interactive client forms
src/components/motion.tsx  ← GSAP primitives
src/lib/schemas.ts         ← shared validation
```

## Notes

- `next.config.ts` allow-lists remote image hosts. Add a client's image host there
  if you point `MEDIA` at a new domain.
- Forms post to the API routes and show toasts (`sonner`). Wire real delivery
  before launch (search for `TODO`).
- Live shipment tracking is stubbed by design — connect your carrier/forwarder API
  in `src/app/api/track/route.ts`.
