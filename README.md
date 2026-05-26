# SoundBloom Phonics

A phonics colouring book series for children aged 3–7 — designed for calm, readability, and the kids who find most books too loud. QR-linked sound playback through a tiny in-house web app.

This repo contains the **concept marketing site** (a Next.js mockup of how the product will be presented) and the **technical reference document** for the books themselves. The books are not yet published — Book 1 is targeted at 2026.

---

## What is SoundBloom?

Most phonics colouring books are loud — bright colours, busy pages, dense type. Some kids breeze through that. Others shut down before they've started.

SoundBloom starts from the child:

- **Sensory-calibrated print design.** Cream paper instead of glaring white. Thick outlines to colour inside. One letter, one picture, generous whitespace. The same layout on every page so it's predictable.
- **Sound built into every page.** Each page carries a small QR code. Scanning it opens the **SoundBloom Sounds** web app to that exact letter — a warm voice says the sound, three times, slowly. No install, no account, no data sent anywhere.
- **A series, not a one-off.** Four books that carry each other: Letter Sounds → First Words (CVC) → Sound Pairs (digraphs & blends) → Sight Words.

---

## What's in this repo

```
.
├── README.md                       # You are here
├── CLAUDE.md                       # Claude Code routing policy (loads AGENTS.md)
├── AGENTS.md                       # Codebase-agnostic rules (Next.js 16 — read docs first)
├── PLAN.md                         # Live implementation tracker
├── docs/
│   ├── design.md                   # Product design doc — the canonical brief
│   └── technicalities.md           # Technical reference: KDP specs, royalty math,
│                                   #   video pipeline, launch checklist, pitfalls
├── src/                            # Next.js 16 marketing/concept site source
├── public/                         #   ↳ static assets
├── next.config.ts                  #   ↳ configured for static export to GitHub Pages
├── package.json
└── .github/workflows/deploy.yml    # Auto-deploys to GitHub Pages on push to main
```

[`docs/design.md`](docs/design.md) is the canonical product brief — physical book spec, multi-sensory approach, app feature spec, reward system, neurodiverse-first rules. [`docs/technicalities.md`](docs/technicalities.md) is the technical reference (KDP, QR codes, royalty math, launch checklist). The Next.js app at the repo root is the public-facing marketing site — it does not collect any data.

---

## Running the marketing site locally

Requires Node 20+ and npm 10+.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Production build (static export)

```bash
NODE_ENV=production npm run build
```

Static HTML is written to `out/`. The build applies a `/SoundBloom-Phonics` basePath in production so it serves correctly under `https://shantanukudva.github.io/SoundBloom-Phonics/`. In `npm run dev` the basePath is empty, so dev runs at `http://localhost:3000/`.

### Deploying to GitHub Pages

The repo includes `.github/workflows/deploy.yml`. To enable:

1. Push to `main`.
2. In repo Settings → Pages, set **Source** to **GitHub Actions**.
3. The workflow builds and deploys on every push to `main`.

Live URL once deployed: `https://shantanukudva.github.io/SoundBloom-Phonics/`

---

## The marketing site, section by section

The site is a single page that walks through the full end-to-end story:

1. **Hero** — the concept in one breath: _"Phonics, gently."_
2. **Story pull-quote** — frames the problem with most phonics books.
3. **Three pillars** — what makes SoundBloom different.
4. **How it works** — interactive: tap the QR on a book page mockup to see the sound app respond.
5. **Page anatomy** — every design choice on a page, annotated.
6. **Inside Book 1** — eight sample pages from A to S, showing template consistency.
7. **A Saturday morning with Leo** — a fourteen-second animated scene of a real one-minute use.
8. **Personas** — how parents and teachers imagine using it.
9. **A typical week** — five mornings, five letters.
10. **The curriculum** — full per-book breakdown of all four books.
11. **The ecosystem** — the app, future-proof QR codes, the progress chart.
12. **Inside SoundBloom Sounds** — what the app does, what it never does, why nothing is gatekept.
13. **Author** — the design intent and the publisher's posture.
14. **Specs** — the book by the numbers.
15. **FAQ** — six questions parents ask, answered honestly.
16. **CTA + footer** — sign up to be notified when Book 1 launches.

---

## Aesthetic & technical notes

The site is intentionally **calm, editorial, picture-book** — the visual experience of opening one of the books, not a SaaS landing page. Bouncy springy SaaS animations would betray the promise the product makes.

- **Typography:** Fraunces (display, italic), Atkinson Hyperlegible (body — designed for low vision, on-brand for an accessibility-first product), Caveat (handwriting accents, sparingly).
- **Palette:** warm cream paper `#FDF6EC`, soft butter `#F4E6C8`, cocoa-warm ink `#2A2419`. Accents in dusty rose, forest green, ochre, soft denim.
- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind v4 · `motion/react` (Framer Motion).
- **Illustrations:** all inline SVG. No external image assets. The book-page mockup and QR-code mockup are single canonical components used everywhere they appear, so dimensions and patterns are consistent across the site.

### Notable design decisions

- **Square pages** (8.5″ × 8.5″) match the real KDP book spec.
- **QR codes never link directly to YouTube** — they point to redirect links the project owns, so the destination can change without invalidating already-printed books. This is the single most load-bearing rule of the whole product.
- **The SoundBloom Sounds app** is a static web app — no backend, no accounts, no analytics, no cookies. Progress is stored locally on the device. Everything is free, no premium tier, nothing gatekept.

---

## Status

- Marketing site: complete as a concept mockup.
- Book 1 (Letter Sounds A–Z): planned launch 2026.
- Book 2 (First Words / CVC): late 2026.
- Book 3 (Sound Pairs): spring 2027.
- Book 4 (Sight Words): late 2027.
- SoundBloom Sounds app: planned alongside Book 1.

---

## A note on framing

SoundBloom is a small independent project. No organisation behind it yet, no clinical credentials being claimed, no medical claims of any kind. It's a book and a tiny app, designed with care for how kids actually read.

The marketing site was scaffolded with Claude Code, with Opus handling design/planning/audit and Sonnet handling implementation.
