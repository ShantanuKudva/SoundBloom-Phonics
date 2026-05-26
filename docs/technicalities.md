# SoundBloom Phonics — Technical Reference
> All the nuts, bolts, specs, and hard numbers. Built for Claude-Code continuation.

---

## Table of Contents
1. [Amazon KDP — File Specs](#1-amazon-kdp--file-specs)
2. [Book Interior Design Specs](#2-book-interior-design-specs)
3. [Cover Design Specs](#3-cover-design-specs)
4. [QR Code System](#4-qr-code-system)
5. [YouTube Channel Setup](#5-youtube-channel-setup)
6. [Video Production Pipeline](#6-video-production-pipeline)
7. [Royalty & Pricing Calculations](#7-royalty--pricing-calculations)
8. [Keyword Strategy](#8-keyword-strategy)
9. [Merch Technical Setup](#9-merch-technical-setup)
10. [Tools & Software Stack](#10-tools--software-stack)
11. [Launch Checklist](#11-launch-checklist)
12. [Claude-Code Prompt Bank](#12-claude-code-prompt-bank)
13. [Differentiating Factor — What Makes This Defensible](#13-differentiating-factor--what-makes-this-defensible)
14. [Pitfalls — What Will Actually Kill This](#14-pitfalls--what-will-actually-kill-this)

---

## 1. Amazon KDP — File Specs

### Account Setup
- URL: [kdp.amazon.com](https://kdp.amazon.com)
- Free to create; requires bank account + tax info (PAN for India)
- Publishing royalty paid in USD; KDP converts to INR via wire transfer

### Book Type
- **Format:** Paperback (print-on-demand)
- **Interior type:** Black & white interior (cheaper to print) OR full colour (higher cost, higher price point)
- **Recommendation for Book 1:** B&W interior — colouring books don't need pre-printed colour; kids add the colour

### Trim Size (Page Dimensions)
| Option | Dimensions | Best For |
|--------|-----------|----------|
| **Recommended** | 8.5" × 8.5" | Square — feels premium, works great for colouring |
| Alternative | 8.5" × 11" | Larger pages, more colouring space |
| Budget option | 6" × 9" | Standard — cheaper print cost but cramped for colouring |

### Interior PDF Requirements
- **File format:** PDF (PDF/X-1a preferred)
- **Resolution:** 300 DPI minimum for all images/illustrations
- **Colour space:** Greyscale for B&W interior
- **Bleed:** 0.125" (0.317 cm) on all sides if using full-bleed images
- **Safe zone:** Keep all critical content 0.25" from trim edge
- **Fonts:** Must be embedded in PDF
- **File size limit:** 650 MB max

### Page Count Rules
- Minimum: 24 pages
- Maximum: 828 pages
- **Recommended for Book 1:** 58 pages (26 letter pages + title + intro + how-to-use + back matter + QR index)
- Page count must be **even** (front + back)

### Interior Margins (for 8.5" × 8.5", 58 pages)
| Margin | Size |
|--------|------|
| Top | 0.5" |
| Bottom | 0.5" |
| Outside (left/right) | 0.5" |
| Inside (gutter) | 0.625" (increases with page count) |

> KDP gutter calculator: [kdp.amazon.com/en_US/help/topic/G201953020](https://kdp.amazon.com/en_US/help/topic/G201953020)

---

## 2. Book Interior Design Specs

### Autism-Friendly Design Rules (Non-Negotiable)
- **Font:** OpenDyslexic (free) or Arial — never serif fonts
- **Font size for labels:** 24pt minimum
- **Line weight for illustrations:** 3–5pt stroke — thick enough to colour inside
- **Background:** Soft cream (#FDF6EC) or light grey (#F5F5F5) — never pure white (#FFFFFF) — reduces glare
- **Max colours suggested per page:** 3–4 (listed in a colour key on each page)
- **Layout:** Same template every page — predictability reduces anxiety
- **White space:** Minimum 30% of each page must be empty space
- **Illustrations:** Simple, unambiguous line art — one object per page (no busy scenes)

### Page Template (Per Letter Page)
```
┌─────────────────────────────────┐
│  [LETTER large — top centre]    │  ← 20–25% of page height
│                                 │
│  [Illustration — centre]        │  ← 45–50% of page height
│                                 │
│  [Word label below illustration]│  ← e.g. "S is for Sun"
│                                 │
│  [Colour key: 3 colours]        │  ← bottom left
│  [QR code]                      │  ← bottom right
└─────────────────────────────────┘
```

### Canva Setup for Interior
- Create custom size: **8.5" × 8.5"** (2550px × 2550px at 300 DPI)
- Use Canva Pro for PDF export with bleed marks
- Export as: **PDF Print** → download with crop marks & bleed
- Flatten all transparency before export

### Affinity Publisher (Free Alternative to InDesign)
- Set document: 8.5" × 8.5", 300 DPI, CMYK colour space
- Export: PDF/X-1a via "Export as PDF" → Press Ready preset
- One-time purchase ~£54 — worth it for full control

### Illustration Options
| Option | Cost | Quality | Notes |
|--------|------|---------|-------|
| Hire Fiverr illustrator | $50–150/book | High | Search "children's coloring book illustration" |
| Adobe Firefly / Midjourney | Subscription | Medium | Needs clean-up in Illustrator |
| Canva illustrations | Free/Pro | Low-medium | Limited line art options |
| Procreate (iPad) | £10 one-time | High (if you draw) | Export as SVG then PDF |

---

## 3. Cover Design Specs

### KDP Cover Requirements
- **File format:** PDF or JPEG (PDF strongly recommended)
- **Resolution:** 300 DPI
- **Colour space:** RGB for digital, CMYK for print accuracy
- **Includes:** Front cover + spine + back cover — all one file

### Cover Dimensions Formula
```
Total width  = (trim width × 2) + spine width + (bleed × 2)
Total height = trim height + (bleed × 2)

Spine width  = (page count × paper thickness)
            = 58 pages × 0.002252" (white paper)
            = ~0.131"

Example (8.5" × 8.5", 58 pages, white paper):
Total width  = (8.5 × 2) + 0.131 + (0.125 × 2) = 17.381"
Total height = 8.5 + (0.125 × 2) = 8.75"
```

> Use KDP's cover calculator: [kdp.amazon.com/cover-calculator](https://kdp.amazon.com/en_US/cover-calculator)

### Cover Design Non-Negotiables
- Title clearly readable at thumbnail size (Amazon shows ~150px wide)
- Include "Colouring Book" in title for searchability
- Include "Ages 3–7" or target age on cover
- Author name on spine (even a first name works)
- ISBN barcode placeholder — KDP assigns free ISBN

---

## 4. QR Code System

### How It Works
```
Book page → QR Code → YouTube video URL → Child hears/sees sound blending
```

### QR Code Generation (Free Tools)
- **QR Code Generator:** [qr-code-generator.com](https://www.qr-code-generator.com) (free, static)
- **Better option:** [goqr.me](https://goqr.me) — downloadable SVG, high resolution
- **Best option:** [Flowcode](https://www.flowcode.com) — trackable clicks (free tier: 1 code)

### QR Code Specs for Print
- Minimum print size: **1.5cm × 1.5cm** (smaller = unreliable scan)
- Recommended: **2.5cm × 2.5cm** in the book
- Format: SVG or EPS for print (not PNG — pixelates when scaled)
- Error correction level: **H (High)** — survives if slightly damaged/smudged
- Test: scan with 3 different phones before finalising

### URL Strategy
- **Option A (Simple):** Direct YouTube video URL — free, but if you delete/rename the video, the QR breaks
- **Option B (Smart):** Use a redirect link (bit.ly or your own domain) → redirects to YouTube
  - e.g. `soundbloom.co/s-sound` → redirects to YouTube URL
  - Advantage: can change the destination without reprinting the book
  - Cost: bit.ly free tier works; custom domain ~₹800/year (Namecheap)

### QR Placement in Book
- Bottom-right corner of each letter page
- Include text beneath: "Scan to hear the sound! 🔊"
- Font: 8pt, italic — small but visible

---

## 5. YouTube Channel Setup

### Channel Structure
```
Channel: SoundBloom Phonics
├── Playlist: Book 1 — Letter Sounds (A–Z)
├── Playlist: Book 2 — CVC Words
├── Playlist: Book 3 — Digraphs & Blends
└── Playlist: Book 4 — Sight Words
```

### Channel Settings
- **Channel name:** SoundBloom Phonics (or your brand name)
- **Category:** Education
- **Audience:** "Yes, this channel is made for kids" → enables YouTube Kids distribution
- **Description:** Include "autism-friendly", "phonics", "neurodivergent" for search
- **Channel art size:** 2560 × 1440px (YouTube banner spec)

### Video URL Stability
- Once a video is published, the URL (`youtube.com/watch?v=XXXXXXXXXXX`) is permanent
- **Never delete videos** that are linked in a printed book — the QR breaks forever
- If a video needs updating: make it unlisted, upload new one, update your redirect link

---

## 6. Video Production Pipeline

### Per-Video Spec
- **Duration:** 30–60 seconds (YouTube Shorts format — maximum reach)
- **Aspect ratio:** 9:16 vertical (Shorts) AND save a 16:9 version for regular YouTube
- **Resolution:** 1080 × 1920px (Shorts) / 1920 × 1080px (regular)
- **Frame rate:** 30fps
- **Audio:** 48kHz stereo, no background noise

### Script Template (Per Letter)
```
[0:00–0:05]  Show letter (big, animated)
             Text: "The letter S"
             Voice: "This is the letter S"

[0:05–0:15]  Show picture (sun / snake / star)
             Text: "S is for Sun"
             Voice: "S is for... Sun!"

[0:15–0:30]  Sound blending demonstration
             Voice: "Can you say it with me? Sss... Sss... S!"
             (pause for child to repeat)

[0:30–0:45]  Reinforcement
             Voice: "Amazing! You said S! Now find S in your book and colour it!"

[0:45–0:60]  End card
             "Great job! 🌟 See you in the next video!"
```

### AI Voice Tools (No Need to Record Your Own Voice)
| Tool | Cost | Quality | Notes |
|------|------|---------|-------|
| ElevenLabs | Free tier: 10k chars/mo | Excellent | Best for warm, child-friendly voices |
| Murf.ai | Free tier limited | Good | Good UK/Indian accent options |
| Speechify | Subscription | Good | Easy to use |
| Google TTS | Free | Robotic | Not recommended for children's content |

### Video Creation Tools
| Tool | Cost | Use For |
|------|------|---------|
| Canva (video) | Free/Pro | Animated slides, text overlays, simple animation |
| CapCut | Free | Editing, adding captions, transitions |
| Adobe Express | Free tier | Quick animated videos |
| Pictory.ai | Subscription | Script-to-video automation |

### Batch Production Strategy
- Script all 26 letters in one session (Claude-Code can help)
- Generate all AI voiceovers in one session (upload all 26 scripts to ElevenLabs)
- Create a Canva template → duplicate 26 times, swap letter/image/text
- Edit all 26 in CapCut using the same template
- Upload all 26 as Shorts in one day, schedule over 26 days

---

## 7. Royalty & Pricing Calculations

### KDP Royalty Structure (Paperback)
```
Royalty = (List price × 0.60) − Printing cost
```

### Printing Cost Formula (KDP)
```
B&W interior:  $0.85 fixed + ($0.012 × page count)
Colour interior: $0.85 fixed + ($0.07 × page count)

Example — Book 1, 58 pages, B&W interior:
Printing cost = $0.85 + ($0.012 × 58) = $0.85 + $0.696 = $1.546
```

### Profit Per Book at Different Price Points
| List Price | 60% Royalty | Printing Cost (58pp B&W) | **Net Royalty** |
|-----------|-------------|--------------------------|-----------------|
| $9.99 | $5.99 | $1.55 | **$4.44** |
| $12.99 | $7.79 | $1.55 | **$6.24** |
| $14.99 | $8.99 | $1.55 | **$7.44** |
| $16.99 | $10.19 | $1.55 | **$8.64** |

> **Recommended price: $12.99** — competitive for the niche; ~$6.24/book royalty

### Monthly Revenue Projections (INR at $1 = ₹83)
| Monthly Sales | Per Book | Monthly USD | **Monthly INR** |
|--------------|----------|-------------|-----------------|
| 30 books | $6.24 | $187 | **₹15,500** |
| 60 books | $6.24 | $374 | **₹31,000** |
| 100 books | $6.24 | $624 | **₹51,800** |
| 200 books (all 4 books) | $6.24 | $1,248 | **₹1,03,600** |

> Target of ₹30,000–35,000/month = ~60 sales/month across all books. Achievable with 2–3 books live.

### KDP Payment Terms
- Paid monthly, ~60 days in arrears (sales in Jan → paid in March)
- Minimum payout: $100 USD (held until threshold is reached)
- Payment methods: Wire transfer (best for India), cheque, US bank transfer

---

## 8. Keyword Strategy

### Amazon Search Algorithm Basics
- 7 keyword fields in KDP backend (up to 50 chars each)
- Keywords in **title** and **subtitle** carry more weight than backend keywords
- Use **long-tail phrases**, not single words

### Recommended Keywords
```
Backend keyword slots (50 chars max each):
1. autism friendly phonics coloring book kids
2. neurodivergent learning resources children
3. sensory friendly reading activity book
4. SEN phonics coloring workbook preschool
5. GDD early literacy colouring activity
6. special needs alphabet learning book
7. phonics blending sounds coloring pages
```

### Title Formula
```
[Main Keyword] : [Benefit/Differentiator] — [Series indicator]

Example:
"Autism-Friendly Phonics Colouring Book: Letter Sounds A–Z with Interactive QR Audio — SoundBloom Book 1"
```

### Free Keyword Research Tools
- **Amazon search bar autocomplete** — type "autism phonics" and see suggestions
- **Publisher Rocket** — paid ($97 one-time) but very powerful
- **Google Keyword Planner** — free, shows search volume
- **Ubersuggest** — free tier, 3 searches/day
- **BookBeam** — KDP-specific, has free tier

### Categories (Pick 2 in KDP)
```
Primary:   Books > Children's Books > Education & Reference > Reading & Phonics
Secondary: Books > Children's Books > Activities, Crafts & Games > Coloring Books
```

---

## 9. Merch Technical Setup

### Platform Comparison
| Platform | Setup | Royalty | Best For |
|----------|-------|---------|----------|
| **Merch by Amazon** | Invite-only waitlist | 13–37% | Reach; passive |
| **Redbubble** | Instant | 20% (you set markup) | Easy start |
| **Printful + Etsy** | ~2 hrs setup | 30–40% | Personalised orders |
| **Printify + Shopify** | More complex | 40%+ | Scale later |

### Start With: Redbubble + Etsy/Printful
- **Redbubble:** Upload design → instant listing → they print & ship → you earn 20%
- **Etsy + Printful:** You control pricing; Printful fulfils automatically

### Design File Specs
| Product | File Size | Format | DPI |
|---------|-----------|--------|-----|
| T-shirt (front) | 4500 × 5400px | PNG (transparent bg) | 300 |
| Mug (11oz wrap) | 3300 × 1275px | PNG (transparent bg) | 300 |
| Tote bag | 4200 × 4200px | PNG (transparent bg) | 300 |
| Sticker | Varies | PNG or SVG | 300 |

### Canva Merch Workflow
1. Create design at correct pixel dimensions (see table above)
2. Export as PNG with transparent background
3. Upload to Redbubble / Printful
4. Set your price markup
5. Write SEO title + description (use "neurodivergent parent gift", "autism mama mug" etc.)

### Personalisation (Higher Margin Play)
- Etsy allows personalised orders — buyer submits child's name
- You add name to template in Canva → export → upload to Printful order manually
- Charge premium: £18–24 for personalised mug vs £12 for standard
- Tools: Canva + Printful + Etsy = full personalised merch pipeline

---

## 10. Tools & Software Stack

### Design
| Tool | Cost | Purpose |
|------|------|---------|
| Canva Pro | ₹3,999/yr | Book interiors, covers, merch designs, videos |
| Affinity Publisher 2 | ~£54 one-time | Professional PDF layout for KDP |
| Affinity Designer 2 | ~£54 one-time | Vector illustration clean-up |
| Adobe Illustrator | ₹1,675/mo | Alternative to Affinity (subscription) |

### Audio & Video
| Tool | Cost | Purpose |
|------|------|---------|
| ElevenLabs | Free / $5/mo | AI voiceover for YouTube videos |
| CapCut | Free | Video editing |
| Audacity | Free | Audio clean-up |
| OBS Studio | Free | Screen recording if needed |

### Publishing & Research
| Tool | Cost | Purpose |
|------|------|---------|
| KDP (Amazon) | Free | Publish & sell books |
| Publisher Rocket | $97 one-time | Keyword & category research |
| BookBeam | Free tier | KDP analytics |
| Canva QR generator | Free | Basic QR codes |
| goqr.me | Free | High-res QR codes for print |

### Merch
| Tool | Cost | Purpose |
|------|------|---------|
| Redbubble | Free | POD merch platform |
| Printful | Free | POD fulfilment for Etsy |
| Etsy | $0.20/listing | Marketplace for merch |

### Domain & Links
| Tool | Cost | Purpose |
|------|------|---------|
| Namecheap | ~₹800/yr | Custom domain (soundbloom.co etc.) |
| bit.ly | Free | Short/trackable QR redirect links |

---

## 11. Launch Checklist

### Pre-Launch (Weeks 1–4)
- [ ] Open KDP account at kdp.amazon.com
- [ ] Open YouTube channel — set to "Made for Kids"
- [ ] Choose brand name; buy domain (optional but smart)
- [ ] Set trim size — confirm 8.5" × 8.5"
- [ ] Design page template in Canva (one page → then duplicate)
- [ ] Create all 26 letter illustrations (hire or generate)
- [ ] Script all 26 YouTube videos
- [ ] Generate all 26 AI voiceovers (ElevenLabs batch)
- [ ] Produce all 26 videos in Canva + edit in CapCut
- [ ] Upload all 26 videos to YouTube (can be unlisted until book is live)
- [ ] Generate 26 QR codes (one per video URL)
- [ ] Insert QR codes into book pages
- [ ] Add intro pages (title, how-to-use, QR guide)
- [ ] Add back matter (about the author, series preview, QR index)
- [ ] Export interior as PDF (300 DPI, correct margins)
- [ ] Design cover in KDP Cover Creator or Canva
- [ ] Upload to KDP — preview in previewer tool
- [ ] Order a proof copy (~$5–10) — check print quality
- [ ] Set price ($12.99), categories, keywords
- [ ] Publish — goes live in 24–72 hours

### Post-Launch (Weeks 5–8)
- [ ] Publish YouTube videos (set to public, one per day)
- [ ] Share in 3 Facebook groups (autism parents, SEN teachers, KDP sellers)
- [ ] Post in Reddit: r/autism, r/specialeducation, r/selfpublish
- [ ] Set up 2 merch designs on Redbubble
- [ ] Request 5 honest reviews from network (can't incentivise on Amazon)
- [ ] Monitor KDP dashboard weekly
- [ ] Start scripting Book 2 content

---

## 12. Claude-Code Prompt Bank

Copy-paste these directly into Claude-Code:

### Research
```
Analyse the top 20 phonics coloring books on Amazon UK and US.
For each, note: price, page count, review score, top 3 complaints from reviews.
Identify the 3 biggest gaps in the market.
```

```
What are the evidence-based design guidelines for educational print materials
for autistic children aged 4–8? Include sources where possible.
Focus on: visual layout, typography, colour use, information density.
```

### Content Creation
```
Write scripts for YouTube Shorts (45 seconds each) for the letters A, B, C, D, E.
Audience: autistic children aged 4–7. Tone: calm, warm, repetitive, encouraging.
Format: timestamp + action + voiceover text.
Use this template: [letter reveal] → [picture] → [sound blending] → [child repeat pause] → [celebration].
```

```
Design a 58-page layout plan for a phonics coloring book (Book 1, letters A–Z).
Include: title page, how-to-use page, 26 letter pages, QR code index, back cover copy.
For each letter page, suggest: illustration idea, word, 3 colour suggestions.
```

### Amazon Listing
```
Write an Amazon product listing for an autism-friendly phonics coloring book.
Title, bullet points (5), and description.
Include these keywords naturally: autism phonics, neurodivergent, sensory friendly,
colouring book, letter sounds, QR code, interactive.
Audience: parents and teachers of autistic children aged 3–7.
```

### Merch
```
Generate 30 slogan ideas for mugs and t-shirts targeting parents of neurodivergent children.
Tone: empowering, warm, community-feeling, slightly witty.
Avoid inspiration porn. Avoid medical language.
Format: slogan | product type (mug/tee/both) | emotion it triggers.
```

### Pricing & Business
```
Calculate my Amazon KDP net royalty for a 58-page B&W interior paperback,
8.5" × 8.5" trim, priced at $12.99.
Then show a table: monthly sales 30/60/100/200 → monthly revenue in USD and INR (rate: 83).
```

---

## 13. Differentiating Factor — What Makes This Defensible

> Most KDP sellers copy what's already selling. This section is about why SoundBloom *cannot* be easily copied — and how to widen that moat over time.

---

### The Core Stack (What No One Else Has Combined)

| Layer | What It Is | Why It's Hard to Copy |
|-------|-----------|----------------------|
| **Psychology-backed design** | Autism-friendly layout grounded in actual SEN knowledge | Requires a real understanding of sensory processing, cognitive load, and neurodivergent learning — not just "clean design" |
| **Interactive QR audio** | Every page links to a YouTube video for sound blending | Requires producing 26+ videos per book; most KDP sellers won't bother |
| **Series architecture** | Books 1–4 build sequentially; buyers return | Lock-in through curriculum progression — not just aesthetic preference |
| **Niche specificity** | "Autism-friendly phonics" is a keyword cluster with real search intent and low competition | Generic phonics books can't claim this credibly |
| **Community trust** | Parents of neurodivergent kids vet resources carefully and share heavily in tight communities | Once you're trusted in these groups, word of mouth compounds organically |

---

### What Sets You Apart from Every Competitor

#### vs. Generic Phonics Colouring Books
- They have colourful illustrations. You have **sensory-calibrated design** (cream backgrounds, low clutter, thick stroke lines, predictable layout).
- They have letters. You have **sound blending via QR** — making the book multi-sensory without a parent needing to know phonics.
- They're a one-off purchase. You have a **series with curriculum progression** — a reason to come back.

#### vs. Expensive SEN Educational Resources
- Specialist SEN resources (from SENCO suppliers, therapy catalogues) cost £15–40 per activity pack.
- You're delivering **comparable educational value at $12.99**, on Amazon Prime, available instantly.
- You're not competing with therapists — you're filling the gap between therapy sessions, at home, affordably.

#### vs. Other KDP Sellers Who Try to Copy
- They can copy your trim size, layout, and colour palette.
- They **cannot** copy your YouTube library (26–100+ videos built over time).
- They cannot credibly claim a psychology background in their marketing.
- They cannot replicate an established series with reviews, community trust, and cross-book buyer history.

---

### Your Credentials as a Moat

This is not a soft differentiator — it is a **hard marketing asset**:

```
"Designed by a Psychology graduate specialising in neurodivergent learning"
```

Put this:
- On every book cover (back cover author bio)
- In every Amazon product description
- In your YouTube channel About section
- In every community post when you share the book

Parents of autistic children do not buy randomly. They read reviews obsessively, ask in groups, and trust credentials. A psychology background signals that your design choices are *intentional*, not decorative.

---

### The Compounding Moat (How the Edge Grows Over Time)

```
Book 1 published
    → Reviews accumulate
    → YouTube videos gain watch time & subscribers
    → Community shares drive organic traffic
    → Book 2 launches to a warm audience
        → Cross-selling: "If you liked Book 1, Book 2 is next"
        → Amazon "Frequently Bought Together" kicks in
            → Book 3, Book 4
                → Series bundle listing
                    → School/institutional bulk orders
```

Every book you publish makes the previous books sell better. A competitor starting today would need to build all of this from scratch.

---

### One Thing to Protect
**Never let the QR codes break.** Your entire differentiator relies on those videos being live. If a parent scans a QR code in a book they bought and gets a dead link, that is a 1-star review and a trust collapse. Use redirect links (bit.ly or your own domain) so you can always update the destination without reprinting.

---

## 14. Pitfalls — What Will Actually Kill This

> These are not theoretical risks. These are the specific, real things that stop KDP side hustles from working. Named honestly so you can avoid them.

---

### Pitfall 1 — Not Publishing Book 1

**The risk:** You plan all four books, design systems, branding, YouTube strategy — and never upload Book 1.

**Why it happens:** Perfectionism. Scope creep. Waiting until the illustrations are "good enough." Waiting until you have all 26 videos done.

**The fix:**
- Book 1 only needs to be *published*, not perfect. Version 1 can be updated on KDP after the fact.
- Set a hard deadline: Book 1 live within 6 weeks of starting, no matter what.
- Done and live beats perfect and invisible.

---

### Pitfall 2 — The QR Codes Break

**The risk:** You link QR codes directly to YouTube URLs. You later rename or delete a video. Every QR code in every printed book becomes a dead link — permanently, in books that are already sold.

**Why it's catastrophic:** You cannot recall or update printed books. That link is frozen in print forever.

**The fix:**
- Use a redirect service (bit.ly or your own domain) between the QR and the YouTube URL
- e.g. `bit.ly/soundbloom-s-sound` → `youtube.com/watch?v=XXXXX`
- If the YouTube URL changes, update the redirect — QR codes in all printed books still work
- Cost: free with bit.ly; ~₹800/year for a custom domain
- **Do this before you generate a single QR code**

---

### Pitfall 3 — Illustrations Are Too Complex

**The risk:** You use detailed, realistic, or heavily shaded illustrations. Autistic children and young children generally struggle to colour inside complex lines — it causes frustration, not engagement.

**Why it's a problem beyond usability:** If parents notice the illustrations don't match the "autism-friendly" promise on the cover, you get negative reviews on that specific point. It undercuts your core differentiator.

**The fix:**
- Line weight: minimum 3pt stroke, ideally 4–5pt
- Shapes: simple, closed, unambiguous outlines
- One object per page — not a scene
- Test: can a 4-year-old with limited fine motor control colour inside these lines comfortably?
- Get one page illustrated first, print it out, test with a child if possible

---

### Pitfall 4 — Ignoring the Amazon Algorithm Early On

**The risk:** You publish with a vague title, weak keywords, and wrong categories. Amazon never shows the book to anyone. Zero sales. You conclude "it doesn't work."

**Why it happens:** KDP setup feels like a form — people rush through it.

**The fix:**
- Title must contain the primary keyword: "Autism-Friendly Phonics Colouring Book" should be in the title, not just the subtitle
- Fill all 7 backend keyword slots with long-tail phrases (see Section 8)
- Pick categories carefully — "Coloring Books" is overcrowded; "Reading & Phonics" is more specific and less competitive
- The first 90 days after launch are critical — Amazon boosts new books briefly. Use that window.

---

### Pitfall 5 — YouTube Videos Are Low Quality

**The risk:** You produce 26 rushed, robotic-sounding videos with poor audio. Parents scan the QR, watch 5 seconds, close it. Children don't engage. The QR feature — your biggest differentiator — becomes a liability.

**Why it matters:** A bad video doesn't just fail to help — it actively damages trust. Parents share opinions in groups: "the QR video was weird and low quality."

**The fix:**
- Use ElevenLabs for warm, natural AI voice — not Google TTS
- Keep videos under 60 seconds — attention span is short
- Add visual movement: letter animates in, picture appears, sound pulses — not a static slide
- Test each video with a real child before publishing if possible
- Invest one extra hour per video on audio quality — it's worth it

---

### Pitfall 6 — Pricing Too Low Out of Fear

**The risk:** You price at $6.99 or $7.99 because you're scared no one will buy a more expensive book from an unknown author.

**Why it backfires:**
- Low price signals low quality on Amazon — parents see $6.99 and assume it's a generic rush job
- Lower price = lower royalty = you need 3× more sales to hit your target
- The niche (autism/SEN resources) has buyers who are *used to paying more* for quality specialised materials

**The fix:**
- Price at $12.99–$14.99 from day one
- Your psychology credential + QR interactivity justifies the premium
- Look at what SENCO catalogues charge (£15–40) — you're still cheap by comparison

---

### Pitfall 7 — Building in Isolation Without Community Feedback

**The risk:** You design the book entirely in private, publish it, then discover parents wanted something slightly different — different age range, different format, more or fewer pages per letter.

**Why it's fixable early but expensive late:** Changing a book after it has reviews is painful. Changing it before launch is easy.

**The fix:**
- Share 2–3 sample pages in Facebook groups (autism parents, SEN teachers) before publishing
- Ask: "Would you buy this for your child/classroom? What would make it better?"
- This also builds pre-launch awareness — people who give feedback often become first buyers
- Groups to find: "Autism Parents UK/US", "SEN Teachers Network", "Neurodivergent Families"

---

### Pitfall 8 — Merch Too Early

**The risk:** You spend weeks designing mugs and t-shirts before Book 1 is live. Merch with no community behind it sells nothing. You've wasted time that should've gone into the book.

**Why it's tempting:** Merch feels easier and more immediately satisfying than book production.

**The fix:**
- Book 1 first. Always.
- Merch launches *after* you have an audience — even a small one (100 followers, 10 reviews)
- Merch works best as an extension of community trust, not a cold sell
- Rule: no merch until Book 1 is live and has at least 5 reviews

---

### Pitfall 9 — Giving Up After Month 1

**The risk:** Book 1 goes live, sells 8 copies in month 1, earns $50. You feel deflated and stop.

**Why it happens:** KDP income is slow to start. The algorithm takes time to index your book. Reviews take time to accumulate. Month 1 is almost always the worst month.

**What the data actually looks like:**
```
Month 1:   8 sales    → $50
Month 2:   15 sales   → $94   (Book 2 live)
Month 3:   30 sales   → $187  (cross-selling kicks in)
Month 6:   70 sales   → $437  (3 books live, reviews accumulating)
Month 12:  150 sales  → $936  (series established, repeat buyers)
```

**The fix:**
- Commit to 6 months minimum before evaluating
- Track weekly, not daily — daily fluctuations mean nothing
- Focus on what you can control: publishing Book 2, improving keywords, building community

---

### Pitfall Summary Table

| Pitfall | Likelihood | Impact | Fix Difficulty |
|---------|-----------|--------|---------------|
| Never publish Book 1 | High | Fatal | Low — just ship it |
| QR codes break | Medium | Fatal | Low — use redirects from day 1 |
| Illustrations too complex | Medium | High | Medium — test early |
| Bad keyword setup | High | High | Low — research first |
| Low-quality videos | Medium | High | Medium — use good AI voice |
| Pricing too low | High | Medium | Low — trust the premium |
| No community feedback | Medium | Medium | Low — post in 2 groups |
| Merch before book | Medium | Medium | Low — book first, always |
| Quitting after month 1 | High | Fatal | Hard — mindset work |

---

*SoundBloom Phonics — Technical Reference v1.1*
*Created May 2026 | Updated with Pitfalls & Differentiators | Claude-assisted ideation*
