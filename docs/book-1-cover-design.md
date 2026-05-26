# Book 1 — Cover & branding asset prompts (#28–#30)

Three extra mascot-variant illustrations beyond the 27 in [`book-1-illustration-prompts.md`](book-1-illustration-prompts.md), specifically for the printed cover spread, the inside back-cover reward page, and the book spine.

**These are continuation prompts.** Use them in the same Gemini conversation where you generated #1–#27 — the style anchor is already established there. Do NOT start a fresh conversation: the model will lose the locked style and these three won't match the rest of the book.

If you've closed the original conversation, re-paste the [Step 1 style anchor from the interior prompts file](book-1-illustration-prompts.md#step-1--paste-this-as-your-first-message-in-a-fresh-gemini-conversation), wait for "Ready", then send these.

---

## #28 — Cover hero (mascot + floating letters)

```text
Illustration 28 of 30. Subject: SoundBloom cover hero illustration.

A richer composition for the front cover of the book. Following every rule above (line art only, no fills, no shading, no colour, bold uniform outlines, no background scenery), draw the SoundBloom seedling mascot (smiling seed at the base, straight stem, two rounded leaves at the top) centred in the canvas. Around the mascot — at a respectful distance, NOT overlapping it — float six capital letters of the alphabet drifting gently as if weightless: S, A, T, I, P, N. The letters are simple, bold, sans-serif, slightly tilted at different angles (no more than 15°), arranged in a loose ring around the mascot. The mascot is the visual centre; the letters are supporting accents. No connecting lines between elements, no background pattern. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 28-cover-hero.png" above the image so I can rename on download.
```

Used for: front cover hero behind the title block. Sits inside [`BookCoverMock.tsx`](../src/components/svg/BookCoverMock.tsx).

---

## #29 — End-of-book celebration (fully bloomed)

```text
Illustration 29 of 30. Subject: SoundBloom end-of-book celebration — the seedling fully bloomed.

A reward illustration for the very last page of the book, after the sticker chart. Following every rule above (line art only, no fills, no shading, no colour, bold uniform outlines), draw the SoundBloom mascot in its fully grown form: the same calm seed-face at the base, the straight stem rising up, but now the stem is taller and ends in a single open flower with five rounded petals around a small round centre. Two leaves spread symmetrically from the middle of the stem (lower than before, since the stem is taller). The seed-face is smiling more broadly than the small seedling version. No environment, no extra plants. The composition reads as "you bloomed" — a quiet, content reward, not a fireworks celebration. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 29-end-bloom.png" above the image so I can rename on download.
```

Used for: the last interior page of Book 1, after the sticker chart. Visual reward for finishing the book.

---

## #30 — Spine mark (simplified mascot)

```text
Illustration 30 of 30. Subject: SoundBloom spine mark — minimal mascot for book spine.

A very simple, compact version of the mascot for the narrow spine of the printed book (the spine will print at roughly 0.13 inches wide for a 58-page paperback, so this needs to read at a tiny size). Following every rule above (line art only, no fills, no shading, no colour, bold uniform outlines), draw just the head of the seedling: a single small round seed with two tiny dot eyes and a soft smile, with two short rounded leaves sprouting directly from the top of the seed (no stem this time — leaves emerge from the seed itself). The composition is more compressed and icon-like than the full mascot, designed to be readable at thumbnail / spine scale. Centre it in the canvas with plenty of margin. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 30-spine-mark.png" above the image so I can rename on download.
```

Used for: the printed spine of the KDP paperback (vertical, ~0.13″ wide for 58-page binding).

---

## After downloading

Drop the three PNGs in `~/Downloads/`, then ping me — I'll rename them to `28-cover-hero.png`, `29-end-bloom.png`, `30-spine-mark.png` and move them into [`public/illustrations/`](../public/illustrations/) alongside the other 27.

---

## Cover heroes for Books 2, 3, 4 (line-art, when ready)

The catalogue currently shows Book 1's cover hero (#28 with SATIPN letters) for every book — which is wrong, because Books 2–4 have different organising principles. Until these three covers exist, the BookCoverMock falls back to a generic inline mascot for the other books. Generating these unlocks book-specific covers in the catalogue.

Use the same Gemini conversation as the rest of the set so the style anchor holds.

### #31 — Book 2 cover hero (CVC word families)

```text
Illustration 31. Subject: SoundBloom Book 2 cover hero — mascot + floating CVC words.

Same composition rules as illustration #28 (the SoundBloom seedling mascot centred, floating type around it at respectful distance, no overlapping). This time the floating elements are six short CVC words instead of single letters: cat, sun, dog, pig, hat, bus. The words are simple, bold, lowercase, sans-serif, slightly tilted at different angles (no more than 15°), arranged in a loose ring around the mascot. The mascot is the visual centre; the words are supporting accents. No connecting lines, no background pattern. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 31-cover-hero-book2.png" above the image so I can rename on download.
```

### #32 — Book 3 cover hero (digraphs + blends)

```text
Illustration 32. Subject: SoundBloom Book 3 cover hero — mascot + floating digraphs.

Same composition rules as illustration #28. This time the floating elements are six two-letter digraphs/blends instead of single letters: sh, ch, th, fr, br, st. The pairs are simple, bold, lowercase, sans-serif, slightly tilted at different angles (no more than 15°), arranged in a loose ring around the mascot. The mascot is the visual centre. No connecting lines, no background pattern. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 32-cover-hero-book3.png" above the image so I can rename on download.
```

### #33 — Book 4 cover hero (sight words)

```text
Illustration 33. Subject: SoundBloom Book 4 cover hero — mascot + floating sight words.

Same composition rules as illustration #28. This time the floating elements are six common English sight words: the, and, is, was, you, said. The words are simple, bold, lowercase, sans-serif, slightly tilted at different angles (no more than 15°), arranged in a loose ring around the mascot. The mascot is the visual centre. No connecting lines, no background pattern. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 33-cover-hero-book4.png" above the image so I can rename on download.
```

When these land in `~/Downloads/`, ping me — I'll rename + move into `public/illustrations/` and wire each one's path into [`books.ts`](../src/lib/books.ts) under `coverHeroSrc` for the corresponding book.
