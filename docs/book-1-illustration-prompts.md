# Book 1 — Illustration prompt pack for Nano Banana Pro (Gemini)

Generate 27 illustrations (26 phonics letter objects + 1 brand mascot) for SoundBloom Book 1, then vectorise the PNGs to SVG for use in both [`BookPageMock.tsx`](../src/components/svg/BookPageMock.tsx) and the Figma master file.

**Important caveat**: Nano Banana Pro outputs PNG (raster), not SVG. The pipeline is generate → vectorise. See [Step 3](#step-3--vectorise-the-pngs-to-svg).

**Mapping correction**: [`docs/design.md`](design.md) §4 specifies Book 1 covers **26 sound entries (full alphabet, Jolly Phonics group order)** — that's the single letters plus `qu`, not the digraphs. The original Jolly mapping in [`PLAN.md`](../PLAN.md) included digraphs (AI, OA, IE, EE, OR, NG, OO, CH, SH, TH, OU, OI, UE, ER, AR) which actually belong to Book 3 (Sound Pairs). The list at [Step 2](#step-2--send-each-of-these-27-prompts-as-separate-messages-in-the-same-conversation) reflects the correct Book 1 scope.

---

## Step 1 — paste this as your FIRST message in a fresh Gemini conversation

Don't ask for an image yet. This is the **style anchor** that the model commits to for the rest of the session.

> You are creating illustrations for a children's phonics colouring book aimed at ages 3–7, designed specifically for neurodiverse readers (autism, dyslexia, ADHD, Down syndrome). I will ask for 27 illustrations in sequence — 26 letter objects plus 1 brand mascot. Every single illustration must follow the same visual style so the book reads as one coherent artefact, not 27 mismatched drawings.
>
> Style spec — apply this rigorously to every illustration:
>
> - **Output**: one single object, centred in the canvas, on a fully white `#FFFFFF` background, with no background scenery, no ground line, no environment, no shadow, no props beyond the named object. The frame is square and the object occupies roughly 65–75% of the area with even margin on all four sides.
> - **Line art only**. No fills, no shading, no gradients, no cross-hatching, no halftone, no colour at all. Pure black ink linework on white.
> - **Outline weight**: bold, uniform, and consistent across all 27 illustrations. Every primary stroke should look like a roughly 4-point ink pen at A4/300DPI print scale. Inner detail lines may be a touch thinner but never spidery or fading. Think of children's-book ink rather than fashion illustration.
> - **Stroke style**: smooth, slightly hand-drawn (not mechanical CAD), with rounded endcaps and rounded joins. Pencil-tight, not loose-sketchy. No tapered lines, no calligraphic flourishes.
> - **Subject silhouette**: instantly recognisable to a 5-year-old. Iconic interpretation, not realistic. The kind of illustration that appears in a children's primary phonics reader — a cat is recognisably a cat from twenty feet away.
> - **Interior detail**: minimum viable to make the object recognisable. A snake needs a head, an eye, and the hint of scale curves. A cat needs ears, eyes, whiskers, a tail. Stop there. Do not add bows, hats, sunglasses, scenery, or whimsy props.
> - **No text**, **no letters**, **no numbers**, **no captions**, **no watermarks** anywhere in the image. The book lays the letter on the page separately.
> - **Closed shapes only** — every line connects cleanly to another line so a child can colour inside without confusion. No floating dashes, no dotted lines, no implied edges.
> - **Eyes**: simple solid black dots or small filled ellipses. No iris detail, no glints, no eyelashes, no expressive eyebrows. Neutral or gently content expression only.
> - **Composition**: object faces forward or in three-quarter view, never extreme angles. Always upright, never tilted, never falling, never running off the frame.
>
> Style references in priority order:
>
> 1. **Jolly Phonics** classic illustrations — bold black outlines, friendly characters, white background.
> 2. **Dover Publications** coloring books for early readers.
> 3. **Sandra Boynton's** picture-book characters — friendly, rounded, gentle.
>
> What to NEVER include:
>
> - Backgrounds, scenery, ground lines, environments, weather, props beyond the named object.
> - Colour. Pure black-and-white line art only.
> - Shading, gradients, fills, hatching, stippling, halftone.
> - Text, letters, numbers, captions, watermarks, signatures.
> - Photorealism, painterly textures, brush effects, sketchy/loose linework.
> - Sharp teeth, weapons, angry expressions, anything frightening or ambiguous to a small child.
>
> Format: each output is a square PNG at 1024 × 1024 pixels (or the largest square your system supports), maximum line contrast.
>
> Reply with the single sentence "Ready for the 27 prompts." and nothing else. Then I will send each prompt one at a time.

---

## Step 2 — send each of these 27 prompts as separate messages in the same conversation

Template (each prompt follows the same shape so the model stays in the locked style):

> Illustration **{N}** of 27. Subject: **{OBJECT}**.
>
> One single {OBJECT}, centred, line art only, following every rule above. The {OBJECT} should be the canonical Jolly Phonics representation of the **/{IPA}/** sound (the {LETTER} sound). Composition guidance: {COMPOSITION HINT}. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Filled in for all 27:

| #   | Letter | /IPA/ | Object                    | Composition hint                                                                                                                                                                                                                                                                                                                              |
| --- | ------ | ----- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | S      | /s/   | snake                     | Coiled or in a gentle S-curve; head visible with a forked tongue (one V-line); eye as solid black dot.                                                                                                                                                                                                                                        |
| 2   | A      | /a/   | ant                       | Three clear body segments, six visible legs, two antennae; side profile; one eye visible.                                                                                                                                                                                                                                                     |
| 3   | T      | /t/   | tap (faucet)              | Old-style brass tap with cross-handle on top, spout pointing forward, single round drop of water falling from the spout.                                                                                                                                                                                                                      |
| 4   | I      | /i/   | insect (ladybird/ladybug) | Round dome shape, head plus body, six legs, six round polka dots; top view from above.                                                                                                                                                                                                                                                        |
| 5   | P      | /p/   | pig                       | Round body, snout forward, curly tail (one loop), four short legs, two eyes; standing in side profile.                                                                                                                                                                                                                                        |
| 6   | N      | /n/   | nut (acorn)               | Acorn shape — ovoid nut body with textured cap on top, small stem above the cap; vertical.                                                                                                                                                                                                                                                    |
| 7   | C      | /k/   | cat                       | Sitting upright, tail curled around the front feet, pointed triangular ears, whiskers, slit-pupil eye dots; three-quarter view.                                                                                                                                                                                                               |
| 8   | K      | /k/   | kite                      | Diamond kite with the central cross-strut visible inside the diamond, tail descending with three bow-tie ribbons spaced along it; no string going to a hand.                                                                                                                                                                                  |
| 9   | E      | /e/   | egg                       | Single oval egg standing vertically, with a tiny zigzag crack line about a third of the way down from the top; no shading.                                                                                                                                                                                                                    |
| 10  | H      | /h/   | hat (top hat)             | Classic stovepipe top hat with a banded brim where the hat meets the brim; three-quarter view.                                                                                                                                                                                                                                                |
| 11  | R      | /r/   | rat (friendly)            | Round body, long curving tail, large round ears, single visible eye, small whiskers; side profile; cute, not scary.                                                                                                                                                                                                                           |
| 12  | M      | /m/   | moon (crescent)           | Classic crescent moon shape — outer C-curve with the inner curve creating the moon's crescent. Optional single dot for an eye and a subtle gentle smile line.                                                                                                                                                                                 |
| 13  | D      | /d/   | dog                       | Sitting puppy, floppy ears, tongue sticking out a tiny bit, tail visible behind, four paws; friendly puppy proportions; front three-quarter view.                                                                                                                                                                                             |
| 14  | G      | /g/   | goat                      | Standing on four legs, small beard, two curled horns, four legs visible, short upright tail, single visible eye; side profile.                                                                                                                                                                                                                |
| 15  | O      | /o/   | orange                    | Single round orange fruit with one stem on top and one curved leaf attached to the stem; one or two faint segment lines on the front of the orange (no more).                                                                                                                                                                                 |
| 16  | U      | /u/   | umbrella                  | Open umbrella seen from the front, classic dome with seven or eight visible panel-lines radiating from the centre, curved handle ending in a hook below; held vertically.                                                                                                                                                                     |
| 17  | L      | /l/   | lion                      | Front-facing head only (no body), with a generous round mane drawn as a ring of ten to twelve pointed lobes, small face features inside (two dot eyes, a small triangular nose, gentle muzzle); calm expression, not roaring.                                                                                                                 |
| 18  | F      | /f/   | fish                      | Side view, oval body, single triangular tail fin on the right, a small dorsal fin on top, a curved gill line behind the eye, single round eye, a tiny "O" mouth.                                                                                                                                                                              |
| 19  | B      | /b/   | ball                      | Single sphere with two curved seam lines crossing on the front face (one horizontal arc, one vertical arc — like a beach ball or basketball seam).                                                                                                                                                                                            |
| 20  | Z      | /z/   | zip (zipper)              | Vertical zipper with closed interlocking teeth shown as alternating tabs along the centre line, a pull-tab at the top with a small loop; no fabric or garment around it.                                                                                                                                                                      |
| 21  | W      | /w/   | web (spider web)          | Round symmetric spider web — six or eight radial spokes plus three concentric rings connecting them; no spider; clean even spacing.                                                                                                                                                                                                           |
| 22  | V      | /v/   | van                       | Side view of a small cartoon van, simple boxy body with a slightly higher cab section in front, two round wheels, one rectangular side window, one door line; friendly proportions.                                                                                                                                                           |
| 23  | J      | /j/   | jam (jar of jam)          | Glass jar with a lid on top, a paper label across the middle, jam visible inside as a single curved fill-line about two-thirds up the jar (so it looks like jam level); no spoon.                                                                                                                                                             |
| 24  | Y      | /y/   | yarn (ball of yarn)       | Round ball of yarn with three or four crossing strand-lines wrapping around it, one loose strand-tail extending out to the side, optionally a tiny knitting needle stuck in.                                                                                                                                                                  |
| 25  | X      | /ks/  | box (cardboard box)       | Closed cardboard box seen in three-quarter view, top flap lines visible meeting in the centre of the lid, one strip of tape running across the top seam; no contents visible.                                                                                                                                                                 |
| 26  | QU     | /kw/  | queen                     | A simple crown by itself (no head, no royal portrait) — three pointed peaks each topped with a small circular jewel, a band across the bottom with two more small jewels in it; symmetrical.                                                                                                                                                  |
| 27  | —      | —     | SoundBloom mascot         | A small smiling seedling growing from a half-buried round seed: the seed at the bottom shows through with a horizontal ground-less hint, the stem rises straight, two rounded leaves spread symmetrically near the top, optional tiny dot eyes and a soft smile on the seed face. This is the brand mark used on the cover and sticker chart. |

---

## Step 2b — copy-paste-ready prompts (one per message)

Each block below is one Gemini message. Paste them one at a time in the same conversation after Gemini replies "Ready for the 27 prompts." Wait for each illustration before sending the next.

**Filename convention**: from prompt #10 onward each block ends with a "reply with filename" line so Gemini states the intended filename (e.g. `10-h-hat.png`) above the image. Use that to rename on download / Save Image As. Filenames sort numerically and self-describe by letter + object.

### #1 — S / snake

```text
Illustration 1 of 27. Subject: snake.

One single snake, centred, line art only, following every rule above. The snake should be the canonical Jolly Phonics representation of the /s/ sound (the S sound). Composition guidance: coiled or in a gentle S-curve; head visible with a forked tongue (one V-line); eye as solid black dot. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.
```

### #2 — A / ant

```text
Illustration 2 of 27. Subject: ant.

One single ant, centred, line art only, following every rule above. The ant should be the canonical Jolly Phonics representation of the /a/ sound (the A sound). Composition guidance: three clear body segments, six visible legs, two antennae; side profile; one eye visible. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.
```

### #3 — T / tap

```text
Illustration 3 of 27. Subject: tap (faucet).

One single tap, centred, line art only, following every rule above. The tap should be the canonical Jolly Phonics representation of the /t/ sound (the T sound). Composition guidance: old-style brass tap with a cross-handle on top, spout pointing forward, single round drop of water falling from the spout. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.
```

### #4 — I / insect (ladybird)

```text
Illustration 4 of 27. Subject: insect (ladybird / ladybug).

One single insect, centred, line art only, following every rule above. The insect should be the canonical Jolly Phonics representation of the /i/ sound (the I sound). Composition guidance: round dome shape, head plus body, six legs, six round polka dots on the back; top view from above. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.
```

### #5 — P / pig

```text
Illustration 5 of 27. Subject: pig.

One single pig, centred, line art only, following every rule above. The pig should be the canonical Jolly Phonics representation of the /p/ sound (the P sound). Composition guidance: round body, snout pointing forward, curly tail (one loop), four short legs, two eyes; standing in side profile. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.
```

### #6 — N / nut (acorn)

```text
Illustration 6 of 27. Subject: nut (acorn).

One single nut, centred, line art only, following every rule above. The nut should be the canonical Jolly Phonics representation of the /n/ sound (the N sound). Composition guidance: acorn shape — ovoid nut body with a textured cap on top, small stem above the cap; vertical orientation. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.
```

### #7 — C / cat

```text
Illustration 7 of 27. Subject: cat.

One single cat, centred, line art only, following every rule above. The cat should be the canonical Jolly Phonics representation of the /k/ sound (the C sound). Composition guidance: sitting upright, tail curled around the front feet, pointed triangular ears, whiskers, slit-pupil eye dots; three-quarter view. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.
```

### #8 — K / kite

```text
Illustration 8 of 27. Subject: kite.

One single kite, centred, line art only, following every rule above. The kite should be the canonical Jolly Phonics representation of the /k/ sound (the K sound). Composition guidance: diamond kite with the central cross-strut visible inside the diamond, tail descending with three bow-tie ribbons spaced along it; no string going to a hand. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.
```

### #9 — E / egg

```text
Illustration 9 of 27. Subject: egg.

One single egg, centred, line art only, following every rule above. The egg should be the canonical Jolly Phonics representation of the /e/ sound (the E sound). Composition guidance: single oval egg standing vertically, with a tiny zigzag crack line about a third of the way down from the top; no shading. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.
```

### #10 — H / hat (top hat)

```text
Illustration 10 of 27. Subject: hat (top hat).

One single hat, centred, line art only, following every rule above. The hat should be the canonical Jolly Phonics representation of the /h/ sound (the H sound). Composition guidance: classic stovepipe top hat with a banded brim where the hat meets the brim; three-quarter view. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 10-h-hat.png" above the image so I can rename on download.
```

### #11 — R / rat

```text
Illustration 11 of 27. Subject: rat (friendly).

One single rat, centred, line art only, following every rule above. The rat should be the canonical Jolly Phonics representation of the /r/ sound (the R sound). Composition guidance: round body, long curving tail, large round ears, single visible eye, small whiskers; side profile; cute and friendly, not scary. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 11-r-rat.png" above the image so I can rename on download.
```

### #12 — M / moon

```text
Illustration 12 of 27. Subject: moon (crescent).

One single moon, centred, line art only, following every rule above. The moon should be the canonical Jolly Phonics representation of the /m/ sound (the M sound). Composition guidance: classic crescent moon shape — outer C-curve with the inner curve creating the crescent. Optional single dot for an eye and a subtle gentle smile line. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 12-m-moon.png" above the image so I can rename on download.
```

### #13 — D / dog

```text
Illustration 13 of 27. Subject: dog.

One single dog, centred, line art only, following every rule above. The dog should be the canonical Jolly Phonics representation of the /d/ sound (the D sound). Composition guidance: sitting puppy, floppy ears, tongue sticking out a tiny bit, tail visible behind, four paws; friendly puppy proportions; front three-quarter view. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 13-d-dog.png" above the image so I can rename on download.
```

### #14 — G / goat

```text
Illustration 14 of 27. Subject: goat.

One single goat, centred, line art only, following every rule above. The goat should be the canonical Jolly Phonics representation of the /g/ sound (the G sound). Composition guidance: standing on four legs, small beard, two curled horns, four legs visible, short upright tail, single visible eye; side profile. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 14-g-goat.png" above the image so I can rename on download.
```

### #15 — O / orange

```text
Illustration 15 of 27. Subject: orange.

One single orange, centred, line art only, following every rule above. The orange should be the canonical Jolly Phonics representation of the /o/ sound (the O sound). Composition guidance: single round orange fruit with one stem on top and one curved leaf attached to the stem; one or two faint segment lines on the front of the orange (no more). Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 15-o-orange.png" above the image so I can rename on download.
```

### #16 — U / umbrella

```text
Illustration 16 of 27. Subject: umbrella.

One single umbrella, centred, line art only, following every rule above. The umbrella should be the canonical Jolly Phonics representation of the /u/ sound (the U sound). Composition guidance: open umbrella seen from the front, classic dome with seven or eight visible panel-lines radiating from the centre, curved handle ending in a hook below; held vertically. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 16-u-umbrella.png" above the image so I can rename on download.
```

### #17 — L / lion

```text
Illustration 17 of 27. Subject: lion.

One single lion, centred, line art only, following every rule above. The lion should be the canonical Jolly Phonics representation of the /l/ sound (the L sound). Composition guidance: front-facing head only (no body), with a generous round mane drawn as a ring of ten to twelve pointed lobes, small face features inside (two dot eyes, a small triangular nose, gentle muzzle); calm expression, not roaring. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 17-l-lion.png" above the image so I can rename on download.
```

### #18 — F / fish

```text
Illustration 18 of 27. Subject: fish.

One single fish, centred, line art only, following every rule above. The fish should be the canonical Jolly Phonics representation of the /f/ sound (the F sound). Composition guidance: side view, oval body, single triangular tail fin on the right, a small dorsal fin on top, a curved gill line behind the eye, single round eye, a tiny "O" mouth. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 18-f-fish.png" above the image so I can rename on download.
```

### #19 — B / ball

```text
Illustration 19 of 27. Subject: ball.

One single ball, centred, line art only, following every rule above. The ball should be the canonical Jolly Phonics representation of the /b/ sound (the B sound). Composition guidance: single sphere with two curved seam lines crossing on the front face (one horizontal arc, one vertical arc — like a beach ball or basketball seam). Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 19-b-ball.png" above the image so I can rename on download.
```

### #20 — Z / zip

```text
Illustration 20 of 27. Subject: zip (zipper).

One single zip, centred, line art only, following every rule above. The zip should be the canonical Jolly Phonics representation of the /z/ sound (the Z sound). Composition guidance: vertical zipper with closed interlocking teeth shown as alternating tabs along the centre line, a pull-tab at the top with a small loop; no fabric or garment around it. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 20-z-zip.png" above the image so I can rename on download.
```

### #21 — W / web

```text
Illustration 21 of 27. Subject: web (spider web).

One single web, centred, line art only, following every rule above. The web should be the canonical Jolly Phonics representation of the /w/ sound (the W sound). Composition guidance: round symmetric spider web — six or eight radial spokes plus three concentric rings connecting them; no spider; clean even spacing. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 21-w-web.png" above the image so I can rename on download.
```

### #22 — V / van

```text
Illustration 22 of 27. Subject: van.

One single van, centred, line art only, following every rule above. The van should be the canonical Jolly Phonics representation of the /v/ sound (the V sound). Composition guidance: side view of a small cartoon van, simple boxy body with a slightly higher cab section in front, two round wheels, one rectangular side window, one door line; friendly proportions. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 22-v-van.png" above the image so I can rename on download.
```

### #23 — J / jam

```text
Illustration 23 of 27. Subject: jam (jar of jam).

One single jar of jam, centred, line art only, following every rule above. The jar should be the canonical Jolly Phonics representation of the /j/ sound (the J sound). Composition guidance: glass jar with a lid on top, a blank paper label across the middle (NO TEXT on the label), jam visible inside as a single curved fill-line about two-thirds up the jar so the jam level reads; no spoon, no fruit on top. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 23-j-jam.png" above the image so I can rename on download.
```

### #24 — Y / yarn

```text
Illustration 24 of 27. Subject: yarn (ball of yarn).

One single ball of yarn, centred, line art only, following every rule above. The yarn should be the canonical Jolly Phonics representation of the /y/ sound (the Y sound). Composition guidance: round ball of yarn with three or four crossing strand-lines wrapping around it, one loose strand-tail extending out to the side, optionally a tiny knitting needle stuck in. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 24-y-yarn.png" above the image so I can rename on download.
```

### #25 — X / box

```text
Illustration 25 of 27. Subject: box (cardboard box).

One single box, centred, line art only, following every rule above. The box should be the canonical Jolly Phonics representation of the /ks/ sound (the X sound, which appears at the end of "box"). Composition guidance: closed cardboard box seen in three-quarter view, top flap lines visible meeting in the centre of the lid, one strip of tape running across the top seam; no contents visible, no labels, no text. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 25-x-box.png" above the image so I can rename on download.
```

### #26 — QU / queen (crown)

```text
Illustration 26 of 27. Subject: queen (represented by a crown).

A simple crown by itself, centred, line art only, following every rule above. The crown should be the canonical Jolly Phonics representation of the /kw/ sound (the QU digraph, the queen sound). Composition guidance: no head, no royal portrait — three pointed peaks each topped with a small circular jewel, a band across the bottom with two more small jewels in it; symmetrical, front-facing. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 26-qu-queen.png" above the image so I can rename on download.
```

### #27 — SoundBloom mascot

```text
Illustration 27 of 27. Subject: SoundBloom mascot — a small smiling seedling.

This is the brand mark used on the cover and the back-of-book sticker chart. Following every rule above, draw a small smiling seedling growing from a half-buried round seed: the seed sits at the bottom of the composition (no ground line, no soil — just the seed visible as a rounded shape), a straight stem rises from the top of the seed, and two rounded leaves spread symmetrically near the top of the stem. On the seed itself, add two tiny dot eyes and a soft gentle smile so the seed has a calm face. No environment, no extra plants, no flowers — just the single seedling. Output as a square PNG at 1024 × 1024 on pure white #FFFFFF background.

Reply with the line "Filename: 27-mascot-soundbloom.png" above the image so I can rename on download.
```

---

## Cover, spine, end-of-book assets

These three extra illustrations live in their own prompt file so the cover/branding work can move on its own track. See [`book-1-cover-design.md`](book-1-cover-design.md) for prompts #28–#30: cover hero, end-of-book celebration, spine mark.

---

## Step 3 — vectorise the PNGs to SVG

Nano Banana Pro gives you PNG. The website's [`BookPageMock.tsx`](../src/components/svg/BookPageMock.tsx) currently embeds inline SVG paths/circles/lines, so we want SVG for full vector fidelity. Three options:

| Tool                    | Cost              | Quality                                         | Effort                                                                                            |
| ----------------------- | ----------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **vtracer** (CLI)       | Free, open-source | Excellent for clean line art with high contrast | `vtracer --mode binary --filter-speckle 4 --color-precision 6 in.png out.svg` — run once per file |
| **Affinity Designer 2** | £54 one-time      | Excellent — manual cleanup possible             | Open PNG → Trace Image (Live) → tweak threshold → release vector → export SVG                     |
| **Adobe Illustrator**   | Subscription      | Excellent                                       | Same as Affinity (Image Trace → Expand → Save As SVG)                                             |

Recommended workflow: **vtracer** for a batch run, then if any specific output looks rough, redo just that one in Affinity. After vectorisation, drop the SVG paths into [`BookPageMock.tsx`](../src/components/svg/BookPageMock.tsx) by extending the `IllustrationName` union and adding a new inline-SVG component per object.

### vtracer batch script (zsh / macOS)

Drop all 27 PNGs into `book-design/illustrations/raw/` and run:

```bash
mkdir -p book-design/illustrations/svg
for f in book-design/illustrations/raw/*.png; do
  name=$(basename "$f" .png)
  vtracer \
    --input "$f" \
    --output "book-design/illustrations/svg/${name}.svg" \
    --mode binary \
    --filter-speckle 4 \
    --color-precision 6 \
    --corner-threshold 60 \
    --segment-length 4 \
    --splice-threshold 45
done
```

Install vtracer first: `brew install vtracer` (or `cargo install vtracer`).

---

## Practical tips for the Gemini session

- **Keep the same conversation open for all 27 prompts.** Don't open a fresh chat for each — the style anchor evaporates and the second drawing won't match the first.
- **If output #N drifts off-style**, don't argue with the model. Send: _"That's not in the locked style. Re-do this illustration following all the rules from the original spec exactly."_ Then re-send the prompt. Don't pile on caveats; just point at the spec.
- **Generate in batches of ~5**. Check the batch matches before continuing. Easier to catch style drift early than to redo 20 after the fact.
- **Save originals**. Even after vectorising, keep the PNGs in `book-design/illustrations/raw/` so you can re-vectorise at different thresholds later.
- **The mascot (#27) goes on the cover** — render it twice if you want versions in slightly different poses for the cover and the back-of-book sticker chart.

---

## After the assets land — wiring into the codebase

The existing [`BookPageMock.tsx`](../src/components/svg/BookPageMock.tsx) has 8 inline illustrations (sun, apple, ball, cat, dog, egg, fish, moon). Note that the old `sun` and `apple` were stand-ins — the real Jolly Phonics objects for `/s/` and `/a/` are **snake** and **ant**. When extending:

1. Extend the `IllustrationName` union to include all 27 objects:
   ```ts
   type IllustrationName =
     | "snake"
     | "ant"
     | "tap"
     | "insect"
     | "pig"
     | "nut" // Group 1
     | "cat"
     | "kite"
     | "egg"
     | "hat"
     | "rat"
     | "moon"
     | "dog" // Group 2
     | "goat"
     | "orange"
     | "umbrella"
     | "lion"
     | "fish"
     | "ball" // Group 3
     | "jam" // Group 4 (single letter)
     | "zip"
     | "web"
     | "van" // Group 5 (single letters)
     | "yarn"
     | "box" // Group 6 (single letters)
     | "queen" // Group 7 (qu)
     | "soundbloom-mascot"; // Cover + sticker chart
   ```
2. Add one new inline-SVG sub-component per object (matching the existing `Sun`, `Apple`, etc. pattern — receive `cx`, `cy` props, draw with `stroke="#2A2419"` `strokeWidth="2"` to stay consistent with the in-code mockup).
3. Update the `Illustration` dispatcher switch.
4. Update [`src/lib/books.ts`](../src/lib/books.ts) and the per-page data in the print preview to use the real Jolly objects in the right order (`s→snake, a→ant, t→tap, i→insect, p→pig, n→nut, …`).
5. Drop the original 8 stand-ins (`sun`, `apple`) — they aren't in the Book 1 spec.

Once that's done, the existing print preview at [`http://localhost:3000/print/book-1-preview/`](http://localhost:3000/print/book-1-preview/) will render the real Jolly Phonics objects, and a single `generate_figma_design` capture into the Figma file will refresh the visualisation with all 26 correct page layouts.
