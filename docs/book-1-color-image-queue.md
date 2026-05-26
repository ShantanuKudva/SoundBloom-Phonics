# Book 1 — Colour image generation queue

These are colour (filled, painted) versions of illustrations needed for the Figma design system, the printed book cover, and the marketing site brand mark. They're separate from the 30 line-art PNGs ([`book-1-illustration-prompts.md`](book-1-illustration-prompts.md) + [`book-1-cover-design.md`](book-1-cover-design.md)) — those are for the colouring-book interior where the child adds colour.

**Status**: Queued. Generate tomorrow (or whenever convenient). I won't block on these — Figma capture work proceeds with the line-art PNGs as-is. Once these land, drop into `public/illustrations/color/` and I'll wire them in.

**Style anchor**: same Gemini conversation as the line-art set. Add a brief styling instruction at the start of each colour prompt — see "Colour style note" below.

---

## Colour style note (prepend to each colour prompt)

> Continuing the SoundBloom set, but this time **with full colour** in a soft, calm, hand-painted style. Maintain the same bold black outlines from the line-art versions. Fill colours with flat or very lightly textured fills — no photoreal shading, no airbrush, no harsh gradients. Use the SoundBloom palette where applicable (sky blue `#5BA8E0`, mint `#4DBF8A`, peach `#F0946A`, lavender `#9B8DE0`, butter yellow `#E8C840`, leaf green `#7AC842`, dusty rose `#E8789A`, cream background `#FAF8F0`, ink `#2A2419`). Background is the cream `#FAF8F0`, not pure white. The object should still be the primary subject; colours are gentle and reassuring, never loud.

---

## Priority 1 — printed cover assets

The KDP printed cover is **full colour** (per `docs/technicalities.md` §3). Need coloured versions for the cover spread.

### #C1 — Cover hero (colour version of #28)

```text
Colour illustration C1 of [N]. Subject: SoundBloom cover hero — coloured version of illustration #28 (the seedling mascot surrounded by floating S A T I P N letters).

Recreate illustration #28 exactly (same composition, same poses, same letters, same friendly mascot), but now fill with soft hand-painted colour in the SoundBloom palette:
- Mascot seed: warm peach (#FAD9C8) fill with darker peach (#F0946A) outline.
- Mascot leaves: leaf green (#E8F8D0) fill with deeper green (#7AC842) outline.
- Mascot stem: deeper green (#7AC842).
- The six floating letters (S, A, T, I, P, N): each in a different group accent colour — S in sky blue (#5BA8E0), A in mint (#4DBF8A), T in warm peach (#F0946A), I in lavender (#9B8DE0), P in butter yellow (#E8C840), N in dusty rose (#E8789A). Each letter remains line-art with that colour as its fill or outline tint.
- Background: cream #FAF8F0 (NOT pure white).

Output as a square PNG at 1024 × 1024.

Reply with "Filename: C1-cover-hero-color.png" above the image.
```

### #C2 — Back-cover mascot (colour version of #27)

```text
Colour illustration C2 of [N]. Subject: SoundBloom mascot — coloured version of illustration #27 (the small smiling seedling).

Recreate illustration #27 exactly (same composition: round smiling seed at base, straight stem, two symmetrical rounded leaves at top, gentle dot eyes and smile), but fill with the same soft hand-painted SoundBloom palette as #C1:
- Seed: warm peach fill (#FAD9C8) with darker peach outline (#F0946A). Tiny dot eyes and smile in dark ink (#2A2419).
- Leaves: leaf green fill (#E8F8D0) with deeper green outline (#7AC842).
- Stem: deeper green (#7AC842).
- Background: cream #FAF8F0.

Output as a square PNG at 1024 × 1024.

Reply with "Filename: C2-mascot-color.png" above the image.
```

### #C3 — End-of-book celebration (colour version of #29)

```text
Colour illustration C3 of [N]. Subject: SoundBloom end-of-book celebration — coloured version of illustration #29 (the seedling fully bloomed into a flower).

Recreate illustration #29 exactly (same composition: seed face at base, tall stem, two leaves mid-stem, single open flower with five rounded petals around a small round centre at the top), but coloured with the soft SoundBloom palette:
- Seed face: warm peach (#FAD9C8) fill, darker peach outline (#F0946A).
- Stem + leaves: deep green (#7AC842) on lighter green fill (#E8F8D0).
- Flower petals: alternate two colours — three petals in dusty rose (#F8D8E0 fill, #E8789A outline) and two petals in butter yellow (#FAF0C0 fill, #E8C840 outline).
- Flower centre: butter yellow (#E8C840) fill with peach (#F0946A) outline.
- Background: cream #FAF8F0.

Output as a square PNG at 1024 × 1024.

Reply with "Filename: C3-end-bloom-color.png" above the image.
```

---

## Priority 2 — marketing site brand mark

The website's [Hero.tsx](../src/components/Hero.tsx) currently renders the closed book cover via [BookCoverMock](../src/components/svg/BookCoverMock.tsx). The cover uses the **line-art** #28 as the hero. For the printed cover that ships to KDP, we want the colour version. For the marketing site we can pick either (line-art looks calmer; colour looks more "real product" preview). Keeping the option open.

### #C4 — Brand mark only (just the mascot, no letters, square logo)

Useful for the favicon, the site nav, the publisher mark, etc. Smaller than #C2 — just the mascot head + a single leaf, clean and compact.

```text
Colour illustration C4 of [N]. Subject: SoundBloom brand mark — minimal, logo-sized mascot.

Following the SoundBloom colour style note above, create a clean, compact brand mark suitable for use as a logo, favicon, and site nav element. Composition: a round seed face (peach fill, darker peach outline) with a single small leaf sprouting from the top centre (leaf green fill, deeper green outline). Eyes are two tiny dark ink dots, mouth is a soft smile. No stem visible. The composition is more icon-like and condensed than the full mascot — designed to read at 32 × 32 pixel size. Background: pure cream #FAF8F0 (we'll trim or knock out for transparent variants later).

Output as a square PNG at 1024 × 1024.

Reply with "Filename: C4-brand-mark-color.png" above the image.
```

---

## How to use this doc

1. **Open the same Gemini conversation** where you generated #1–#30 (so the style anchor persists).
2. Paste the "Colour style note" once at the start of the colour batch.
3. Paste each #C-prompt in sequence (or just the first one — Gemini will infer the style for the rest as long as you're in the same conversation).
4. Download each PNG. Ping me with "colour batch done" and I'll rename + move into `public/illustrations/color/`.

I'll add more colour prompts to this doc as Figma capture / cover layout work surfaces concrete needs.
