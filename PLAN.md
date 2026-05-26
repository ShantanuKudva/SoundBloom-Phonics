# SoundBloom Website — Implementation Plan

Tracks the rebuild of the marketing site to match `docs/design.md`. Items are struck through (`~~like this~~`) as they complete. Owner roles per `CLAUDE.md` model routing policy: Opus dispatches and audits, Sonnet writes the code.

## Phase 1 — Design system foundation ✅

- [x] ~~Create `src/lib/designTokens.ts` — 7 group palettes (Sky Blue / Mint Green / Warm Peach / Soft Lavender / Butter Yellow / Leaf Green / Dusty Rose) with bg/accent/dark hex per group + letter members; book-spine colour assignment (Book 1 → Group 1 accent, Book 2 → Group 3 accent, Book 3 → Group 6 accent, Book 4 → Group 7 accent); type scale; cream background `#FAF8F0`; outline-weight minimum 4pt.~~
- [x] ~~[Series.tsx](src/components/Series.tsx) — read book spine colours from `designTokens`.~~
- [x] ~~[Curriculum.tsx](src/components/Curriculum.tsx) — read book spine colours from `designTokens`.~~

## Phase 2 — Existing sections brought to spec ✅

- [x] ~~[Hero.tsx](src/components/Hero.tsx) — pill copy: "Book 1 — Letter Sounds · Groups 1–7 · Launching 2026".~~
- [x] ~~[Specs.tsx](src/components/Specs.tsx) — refresh tiles: 58 pages, 8.5″×8.5″, 7 groups, 26 sounds, Atkinson Hyperlegible / OpenDyslexic, 4pt outlines, 0 ads.~~
- [x] ~~[InsideBook1.tsx](src/components/InsideBook1.tsx) — gallery samples reordered to start with SATIPN (Group 1), then taste from other groups. Headline reframed: "26 sounds across 58 pages".~~
- [x] ~~[PageAnatomy.tsx](src/components/PageAnatomy.tsx) — annotations added for: SAY IT strip, header bar (title · group #), footer bar (group · sound · page type), IPA notation, QR at 1.5cm.~~
- [x] ~~[BookPageMock.tsx](src/components/svg/BookPageMock.tsx) — render header bar + SAY IT strip + footer bar so every gallery instance reflects the locked template.~~

## Phase 3 — New sections ✅

- [x] ~~New `PhonicsGroups.tsx` — 7 cards, one per group, showing colour swatch, letter members, sample word.~~
- [x] ~~New `MultiSensory.tsx` — 5 channels (visual / auditory / tactile / phonological / kinaesthetic), brief copy on why each matters for neurodiverse learners.~~
- [x] ~~[Pillars.tsx](src/components/Pillars.tsx) — add a fourth pillar (or compact sub-strip) surfacing the Eight Neurodiverse Rules.~~
- [x] ~~[page.tsx](src/app/page.tsx) — wire `PhonicsGroups` (before [InsideBook1.tsx](src/components/InsideBook1.tsx)) and `MultiSensory` (between [Pillars.tsx](src/components/Pillars.tsx) and [HowItWorks.tsx](src/components/HowItWorks.tsx)).~~

## Phase 4 — App scope (minimal, no overclaiming) ✅

- [x] ~~[InsideTheApp.tsx](src/components/InsideTheApp.tsx) — keep "Sounds" framing as the launch product. Add a small "What's next" callout listing modules, medals, sound garden as roadmap (not promised launch features).~~

## Phase 6 — Token alignment (book-strict) ✅

- [x] ~~[globals.css](src/app/globals.css) — `--color-paper` switched from `#FDF6EC` to `#FAF8F0` (the locked cream from `docs/design.md` §2.1 / `PAGE_BG_CREAM` in `designTokens.ts`).~~

## Phase 7 — Catalogue restructure (book-strict) ✅

- [x] ~~Create `src/lib/books.ts` — single source of truth (id, title, status, scope, pages, sounds, prereq, spineColor, cardBg/Accent/Dark from `phonicsGroups`, `Features` component reference).~~
- [x] ~~Create `src/components/catalogue/Book1Features.tsx` — 7-group palette (content lifted from `PhonicsGroups.tsx`).~~
- [x] ~~Create `src/components/catalogue/Book2Features.tsx` — CVC word families (-at, -ig, -un, -et, -op, -an).~~
- [x] ~~Create `src/components/catalogue/Book3Features.tsx` — Digraphs (sh, ch, th, ph, wh, ng) + blends (fr, br, cl, sp, st, pl, gr, sl, tr, sw).~~
- [x] ~~Create `src/components/catalogue/Book4Features.tsx` — sight words chip cloud.~~
- [x] ~~Create `src/components/catalogue/BookCatalogueEntry.tsx` — generic per-book card (cover + status pill + title + scope + stat strip + divider + `<Features />`).~~
- [x] ~~Create `src/components/Catalogue.tsx` — section wrapper.~~
- [x] ~~Update [page.tsx](src/app/page.tsx) — drop Series/Curriculum/PhonicsGroups imports, add Catalogue.~~
- [x] ~~Delete `src/components/PhonicsGroups.tsx`, `src/components/Series.tsx`, `src/components/Curriculum.tsx`.~~

## Phase 8 — Redesign every book-page reference per §2.2 ✅

- [x] ~~[BookPageMock.tsx](src/components/svg/BookPageMock.tsx) — restructured SVG to two-box top half: letter box `x=14 y=22 80×80`, illustration box `x=106 y=22 80×80`. SAY IT strip below both. Letter font sans, IPA below letter inside box. Object name below illustration inside box (just word, not "X is for Word"). Ruled lines dropped. Outer stroke up to 3 (echoes 4pt rule).~~
- [x] ~~[Hero.tsx](src/components/Hero.tsx) — bespoke left "R" page replaced with a second `BookPageMock` instance (A/Apple) so both pages of the open book follow the locked template.~~
- [x] ~~[PageAnatomy.tsx](src/components/PageAnatomy.tsx) — re-calibrated all 10 annotation positions for the new two-box layout.~~
- [x] ~~[InsideBook1.tsx](src/components/InsideBook1.tsx) — `showSayIt={false}` on each thumbnail to keep them clean at 180px.~~
- [x] ~~`showRuledLines` prop removed from BookPageMock + all callers (none found).~~
- [x] ~~Audited HowItWorks, OperationScene, Personas, StoryPullQuote, Ecosystem for inline book-page SVGs. Only OperationScene's BeatOpen had a bespoke left page (fixed in Phase 11).~~

## Phase 9 — Cover design ✅

- [x] ~~Create `src/components/svg/BookCoverMock.tsx` — generic cover SVG (200×220 viewBox, Sound Bloom character motif, title block, age badge, group-colour wash).~~
- [x] ~~Update [BookCatalogueEntry.tsx](src/components/catalogue/BookCatalogueEntry.tsx) — replaced `BookSpineSmall` with `BookCoverMock`.~~

## Phase 10 — Remove colour-name jargon ✅

- [x] ~~[Book1Features.tsx](src/components/catalogue/Book1Features.tsx) — card titles now render "Group 1" only. No other surfaces rendered the names; comments left as internal docs.~~

## Phase 11 — Fix "A Saturday morning with Leo" scene ✅

- [x] ~~Beat 1 — bespoke R-page replaced with `BookPageMock` (A/Apple) at size 220.~~
- [x] ~~Beat 2 — child-pointing-hand removed; adult-hand parts removed (phone body retained).~~
- [x] ~~Beat 4 — crayon-holding-hand removed (crayon retained). Unused `sunCx`/`sunCy` vars removed.~~

## TypicalWeek

- [x] ~~Removed [TypicalWeek.tsx](src/components/TypicalWeek.tsx) (deleted) and stripped from [page.tsx](src/app/page.tsx). User flagged content as not accurate.~~

## Phase 12 — Books 2/3/4 as "Coming soon" ✅

- [x] ~~[BookCatalogueEntry.tsx](src/components/catalogue/BookCatalogueEntry.tsx) — gated on `book.id === 1`. Books 2-4 render a "Coming soon" placeholder in place of the features panel.~~

## Phase 13 — Drop the QR-point moment from the animated scene ✅

- [x] ~~[OperationScene.tsx](src/components/OperationScene.tsx) — `BeatPoint` removed, `BEATS` array now 3 entries (open / play / colour), new timings 0–3600 / 3600–9600 / 9600–14400, `play` caption updated to fold in the scan act.~~

## Phase 24 — Modal as book-with-page-turns ✅

- [x] ~~[BookDetailModal.tsx](src/components/catalogue/BookDetailModal.tsx) — paginated; useState page index + direction; build `pages` array dynamically; AnimatePresence slide between pages; prev/next nav + indicator dots; cover + title pinned in modal header; arrow keys + ESC supported.~~

## Phase 26 — Inside SoundBloom app — per docs/design.md §5 ✅

- [x] ~~[InsideTheApp.tsx](src/components/InsideTheApp.tsx) — heading "Inside the SoundBloom app", expanded subhead, medals row in mockup, DOES list reflects full feature set (modules / medals / multi-child / adaptive pacing / progress PDF), DOESN'T list per §11, pull-line + "What's next" refocused.~~

## Phase 31 — Sync video phone aspect to InsideTheApp phone

User: "same aspect ratio of phone done for soundbloom should be done in the video". Phase 28 left a 0.5% aspect gap (video 0.477 vs InsideTheApp 0.482). Close it.

- [ ] [OperationScene.tsx](src/components/OperationScene.tsx) `BeatPlay` — outer phone width 186 → 188 (x 307 → 306); screen rect width 170 → 172 (x 315 → 314). Dynamic Island, home indicator, inner content unchanged.

## Phase 29 — Redesign the app mockup (Home screen per §5.2) ✅

- [x] ~~[InsideTheApp.tsx](src/components/InsideTheApp.tsx) `AppPhoneMockup` — letter grid replaced with a 7-section Home Screen (greeting + avatar + streak / divider / Today's sound card / sounds-met strip / medals showcase / slower-voice toggle / footer). Unused `LETTERS`/`HEARD_COUNT` constants removed.~~

## Phase 31 — Sync video phone aspect to InsideTheApp phone ✅

- [x] ~~[OperationScene.tsx](src/components/OperationScene.tsx) `BeatPlay` — outer 188×390 (aspect 0.482, matches InsideTheApp exactly). Inner content unchanged.~~

## Phase 28 — Standardise phones to iPhone 16 Pro ✅

- [x] ~~[OperationScene.tsx](src/components/OperationScene.tsx) `BeatPlay` — phone 186×390 (aspect 0.477), Dynamic Island pill replaces wide notch, home indicator narrowed.~~
- [x] ~~[InsideTheApp.tsx](src/components/InsideTheApp.tsx) — phone 268×556 (aspect 0.482), Dynamic Island pill replaces wide notch.~~

## Phase 30 — Merge sparse modal pages ✅

- [x] ~~[BookDetailModal.tsx](src/components/catalogue/BookDetailModal.tsx) — merged Overview + Features into one first page; modal went from 5 → 4 pages.~~

## Phase 27 — Modal physical specs + persona benefits ✅

- [x] ~~[BookDetailModal.tsx](src/components/catalogue/BookDetailModal.tsx) — added two new pages: "The book itself" (trim, binding, font, outline, paper, distribution) and "Why it works" (five channels + per-learner benefits from §3.1/§3.2).~~

## Phase 25 — Coming-soon books: greyed + not clickable ✅

- [x] ~~[Catalogue.tsx](src/components/Catalogue.tsx) — only Book 1 gets `onClick`.~~
- [x] ~~[BookCatalogueEntry.tsx](src/components/catalogue/BookCatalogueEntry.tsx) — non-interactive entries get `opacity 0.55 + filter grayscale(0.45) saturate(0.65)`, no cursor pointer, no hover lift.~~

## Phase 22 — Phone inner content scaled for narrower shell ✅

- [x] ~~[OperationScene.tsx](src/components/OperationScene.tsx) `BeatPlay` — big-S `r=72→56`, big-S text `96→78`, label `15→13`, play button `r=22→18`, sound bars `7→6` + heights, chevron / footer fontSizes nudged.~~

## Phase 23 — Enrich modal with docs/design.md §4 detail ✅

- [x] ~~[books.ts](src/lib/books.ts) — added `contentPerEntry / endMatter / teachingFocus / newFeature` (optional). Populated per §4.~~
- [x] ~~[BookDetailModal.tsx](src/components/catalogue/BookDetailModal.tsx) — conditional blocks for the new fields.~~

## Phase 21 — Compact catalogue entries (covers only) ✅

- [x] ~~[BookCatalogueEntry.tsx](src/components/catalogue/BookCatalogueEntry.tsx) — slimmed to cover + "Book N" label + Coming-soon pill for non-Book-1. Hover lift via local state. `ComingSoonPlaceholder` removed.~~
- [x] ~~[Catalogue.tsx](src/components/Catalogue.tsx) — grid widened to `grid-cols-2 md:grid-cols-4`.~~

## Phase 17 — Click-to-expand book modal ✅

- [x] ~~Create `src/components/catalogue/BookDetailModal.tsx` — full-viewport overlay with ESC + backdrop click + scroll lock + `role="dialog"`. Renders large cover, title/subtitle/scope, stat strip, divider, `<book.Features />`. Books 2–4 get a dashed "Coming soon — preview of what's planned" banner above the features.~~
- [x] ~~[BookCatalogueEntry.tsx](src/components/catalogue/BookCatalogueEntry.tsx) — accepts `onClick`; root article is now a clickable button with role/tabIndex/Enter/Space handlers.~~
- [x] ~~[Catalogue.tsx](src/components/Catalogue.tsx) — tracks `openBookId` state, renders modal inside `<AnimatePresence>`.~~

## Phase 18 — Hero: closed cover instead of broken open-book ✅

- [x] ~~[Hero.tsx](src/components/Hero.tsx) — open-book SVG (shadow + spine + two pages) replaced with `<BookCoverMock size={320} book={books[0]} />` wrapped in a `−3°` tilt + soft drop shadow. `BookPageMock` import removed; `BookCoverMock` + `books` imported.~~

## Phase 19 — Phone aspect ratio in the animated scene ✅

- [x] ~~[OperationScene.tsx](src/components/OperationScene.tsx) `BeatPlay` — phone shell narrowed from 240×390 → 190×390 (aspect ~0.49). Outer rect, screen rect, notch, home indicator all repositioned around centre `x=400`. Prev/next chevrons shifted inward to stay within new screen bounds.~~

## Phase 20 — "By the numbers" — stop forcing non-numeric facts ✅

- [x] ~~[Specs.tsx](src/components/Specs.tsx) — non-numeric tiles ("Atkinson", "#FAF8F0") removed. Remaining 6 truly numeric tiles (58, 8.5″×8.5″, 7, 26, 4 pt, 0) now sit in a 2×3 grid on lg.~~

## Book 1 production plan

### Locked decisions

| Item | Value |
|---|---|
| Interior colour | **Full colour** (group-tint backgrounds at 20–30% opacity) |
| Cream hex | **`#FAF8F0`** |
| Body font | **Atkinson Hyperlegible** (OpenDyslexic kept as user-selectable alt where the design system applies) |
| Outline weight | **4 pt** minimum on every colouring element |
| Trim | 8.5″ × 8.5″ square |
| Bleed | 0.125″ on all sides |
| Inside gutter | 0.625″ (per KDP calculator for 58-page paperback) |
| Outer / top / bottom margin | 0.5″ |
| Total pages | 58 |

### Proposed 58-page breakdown

`docs/design.md` §4 lists 6 content types "per letter" but 6 × 26 = 156, not 58. Reading "per letter" as "per group" gives a clean 58:

| Section | Pages | Cumulative |
|---|---|---|
| Title page + how-to-use spread | 2 | 2 |
| Group divider + parent guide (×7 groups) | 14 | 16 |
| Colouring page (1 per sound × 26) | 26 | 42 |
| Group-end spread: upper/lower + dot-to-dot + blend words (2 pages × 7 groups) | 14 | 56 |
| Sticker chart back-matter | 2 | 58 |

Free-practice pages from `design.md` §4 ("4 per group") fit inside the group-end spread, not as separate pages. Confirm before locking templates.

### Jolly Phonics letter→object mapping

| Group | Letters → Objects |
|---|---|
| 1 (Sky Blue) | S→snake, A→ant, T→tap, I→insect, P→pig, N→nut |
| 2 (Mint Green) | C→cat, K→kite, E→egg, H→hat, R→rat, M→moon, D→dog |
| 3 (Warm Peach) | G→goat, O→orange, U→umbrella, L→lion, F→fish, B→ball |
| 4 (Soft Lavender) | AI→rain, J→jam, OA→boat, IE→pie, EE→sheep, OR→fork |
| 5 (Butter Yellow) | Z→zip, W→web, NG→ring, V→van, OO→boot (avoids collision with M→moon in Group 2) |
| 6 (Leaf Green) | Y→yarn, X→box, CH→chips, SH→shell, TH→thumb |
| 7 (Dusty Rose) | QU→queen, OU→cloud, OI→coin, UE→glue, ER→letter, AR→star |

(Standard Jolly Phonics mappings — confirm any swaps.)

### Stages

- [x] ~~**A — Figma file setup**: master `SoundBloom — Book 1` (file key `ttFdTuNCgoa6cpdNlutGUI`, [open](https://www.figma.com/design/ttFdTuNCgoa6cpdNlutGUI)) — created.~~
- [x] ~~**Phase 1 — Foundations**: 61 variables + 7 text styles created. Primitives (23) + Semantic (24 aliased) + Spacing/Outline (14 FLOAT). Atkinson Hyperlegible only — OpenDyslexic absent from Figma's catalog.~~

⚠️ **Blocked at Phase 2**: Starter-plan MCP tool-call quota exhausted. **Revised layout (when unblocked): single Figma page**, divided into 6 named section frames (Foundations / Atoms / Templates / Book 1 Pages / Cover Spread / Export) arranged in a row. No need for multiple pages — Starter plan's 3-page cap is irrelevant once we stop trying to use separate pages as section dividers.

To resume: wait for quota reset (typically 24h) **or** upgrade to Professional. Components in Phase 3 will bind to the variables already created.
- [ ] **B — Design system in Figma**: components for Page background, group wash, header, footer, letter box, illustration box, SAY IT strip, QR placeholder, colour key, sticker.
- [ ] **C — Per-page templates**: title, how-to-use, parent guide, colouring (the §2.2 master), upper/lower, dot-to-dot, blend words, sticker chart.
- [ ] **D — Content production**: 26 vectorised object illustrations (4pt strokes, single object, no busy detail). Sourcing: Fiverr hire or generate + clean.
- [ ] **E — Cover**: front + spine + back as single PDF; spine width = `58 × 0.002252″ = 0.131″`; total cover `17.381″ × 8.75″` per KDP calculator.
- [ ] **F — QR + audio pipeline**: buy `soundbloom.co`; redirect layer (`soundbloom.co/{letter}` → unlisted YouTube); 26 QR codes (SVG, error correction H, 1.5cm); 26 sound clips (ElevenLabs); 26 YouTube videos (unlisted until launch).
- [ ] **G — Export & proof**: Figma → Affinity Publisher → PDF/X-1a Press Ready; KDP Previewer; printed proof; 3-phone QR scan test.
- [ ] **H — Submit & launch**: KDP listing (categories, keywords via Publisher Rocket); $12.99 price; videos public on launch day.

## Phase 14 — Series as expanded modal/page

Promoted to Phase 17 above.


## Phase 15 — Fix BeatColour sketching positioning ✅

- [x] ~~[OperationScene.tsx](src/components/OperationScene.tsx) `BeatColour` — single zigzag replaced with 4 short curved quadratic strokes layered vertically inside the sun, each staggered (0.2, 0.6, 1.0, 1.4 s) for a hand-drawn crayon-fill feel. Crayon transform updated to `translate(430, 70) rotate(40)` so the tip lands at sun centre (~(488, 139)).~~

## Phase 16 — Centre the illustration in its box ✅

User: "the right box where the image content exists, its not centred and is overflowing".

- [x] ~~[BookPageMock.tsx](src/components/svg/BookPageMock.tsx) — illustration wrapped in `<g transform="translate(146, 62) scale(0.85)">`. Box centre is (146, 62); scale 0.85 shrinks worst-case Sun rays (r=34 → 28.9) leaving ~11 units of margin on every side. Word label `y` moved 94 → 97 to clear the scaled sun's bottom edge.~~

## TypicalWeek

- [x] ~~Removed [TypicalWeek.tsx](src/components/TypicalWeek.tsx) (deleted) and stripped from [page.tsx](src/app/page.tsx). User flagged content as not accurate.~~

## Evals (autonomy gate) ✅

- [x] ~~`npm run lint` — clean (0 errors, 2 pre-existing warnings in [HowItWorks.tsx](src/components/HowItWorks.tsx) unrelated to this work)~~
- [x] ~~`npx tsc --noEmit` — clean (after one-line fix: `fontVariationSettings` moved from attribute to `style` in [BookCoverMock.tsx](src/components/svg/BookCoverMock.tsx))~~
- [x] ~~`npm run build` — clean static export~~

## Phase 5 — Docs organisation ✅

- [x] ~~Create `docs/` directory.~~
- [x] ~~Move `DESIGN_DOC.md` → `docs/design.md`.~~
- [x] ~~Move `SoundBloom_Technicalities.md` → `docs/technicalities.md` (via `git mv` to preserve history).~~
- [x] ~~Update [README.md](README.md) — tree diagram updated + prose references re-pointed at the new paths.~~
- [x] ~~Update [PLAN.md](PLAN.md) references throughout.~~
- [x] ~~Kept at root: `README.md`, `CLAUDE.md`, `AGENTS.md`, `PLAN.md` (convention files + live tracker).~~

## Evals (gate on returning to user)

- [ ] `npm run lint` clean
- [ ] `npx tsc --noEmit` clean
- [ ] `npm run build` clean

## Book design — out of repo

Page templates are produced in Figma. `src/lib/designTokens.ts` is the shared contract: same hex values, type sizes, and outline weights as the Figma master.
