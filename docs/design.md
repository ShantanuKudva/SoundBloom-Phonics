# SoundBloom — Product Design Document

**Version:** 1.0  
**Date:** May 2026  
**Status:** In Progress  
**Product:** SoundBloom Phonics — Books + App Ecosystem

---

## Table of Contents

1. [Product Vision](#1-product-vision)
2. [The Book Series — Design Specification](#2-the-book-series--design-specification)
3. [Multi-Sensory Approach](#3-multi-sensory-approach)
4. [Upcoming Books Roadmap](#4-upcoming-books-roadmap)
5. [SoundBloom App — Feature Specification](#5-soundbloom-app--feature-specification)
6. [Reward & Progression System](#6-reward--progression-system)
7. [Per-Child Personalisation](#7-per-child-personalisation)
8. [Duolingo-Style Learning Engine](#8-duolingo-style-learning-engine)
9. [Neurodiverse-First Design Principles](#9-neurodiverse-first-design-principles)
10. [Technical Architecture Overview](#10-technical-architecture-overview)
11. [What the App Does Not Do](#11-what-the-app-does-not-do)
12. [Open Questions](#12-open-questions)

---

## 1. Product Vision

SoundBloom is a phonics learning ecosystem built from the ground up for children who find most learning materials too much.

The core product is a physical colouring book — calm pages, thick outlines, one sound per page, QR codes that play the sound on demand. Around that book sits a growing ecosystem: a companion app, a reward system, a digital learning layer, and a series of books that build on each other.

**The founding insight:** most phonics books are designed for neurotypical children learning in optimal conditions. SoundBloom is designed for every child — and specifically calibrated so the children who find busy, loud, unpredictable materials hard can use it exactly as well as everyone else.

**Who it is for:**

- Children aged 3–8 learning to read
- Children with autism, ADHD, Down syndrome, dyslexia, GDD, and other learning differences
- Minimally verbal children — the book works through sound, colour, and visuals, not spoken response
- Neurotypical children who simply benefit from calm, structured learning
- Parents who don't know phonics themselves and need the book to do the teaching
- Teachers and special educators looking for accessible classroom materials

**What success looks like:** A child completes a module, earns a medal, hears their name read back to them, and asks to do another one. Not because it's gamified pressure — because it felt calm and they felt capable.

---

## 2. The Book Series — Design Specification

### 2.1 Physical Book Specification

| Property       | Specification                                                                 |
| -------------- | ----------------------------------------------------------------------------- |
| Trim size      | 8.5" × 8.5" square (premium feel, sits open flat)                             |
| Page count     | 58 pages (Book 1), 62–76 pages (Books 2–4)                                    |
| Interior       | Full colour preferred; cream/off-white background (#FAF8F0), never pure white |
| Cover          | Full colour, soft illustrated, character-driven                               |
| Binding        | Paperback (KDP standard) + Hardcover option for durability                    |
| Font (body)    | Atkinson Hyperlegible or OpenDyslexic — minimum 24pt for letter display       |
| Outline weight | 4pt minimum on all colouring elements                                         |
| Distribution   | Amazon KDP (worldwide), Flipkart (India)                                      |

### 2.2 Page Layout — The Template (Never Changes)

Every page in every book follows the same spatial layout. This is not a design constraint — it is the primary accessibility feature. A child who knows where the letter lives on page 3 knows where to find it on page 53.

```
┌─────────────────────────────────────────────────┐
│  HEADER BAR  — Book title · Group number        │
├─────────────────────────────────────────────────┤
│                                                 │
│   ┌──────────────┐    ┌──────────────────────┐  │
│   │              │    │                      │  │
│   │  BIG LETTER  │    │   OBJECT ILLUSTRATION│  │
│   │  (colourable)│    │   (thick outline,    │  │
│   │              │    │    large, colourable)│  │
│   │   /sound/    │    │                      │  │
│   └──────────────┘    └──────────────────────┘  │
│                                                 │
│   ┌─────────────────────────────────────────┐   │
│   │  SAY IT:  /s/ · /s/ · /s/               │   │
│   │  Point to the picture each time         │   │
│   └─────────────────────────────────────────┘   │
│                                                 │
│   QR CODE (bottom right, 1.5cm × 1.5cm)  [■■]  │
│                                                 │
├─────────────────────────────────────────────────┤
│  FOOTER BAR  — Group · Sound · Page type        │
└─────────────────────────────────────────────────┘
```

**Layout rules:**

- Letter box: always top-left
- Illustration: always top-right, same size as letter box
- Sound instruction strip: always directly below both boxes
- QR code: always bottom-right corner
- Colour palette: maximum 3 suggested colours listed at bottom, never more
- No text anywhere on the page except: the letter, the sound in IPA notation, the object name, and the sound instruction strip

### 2.3 Colour System

Each phonics group has its own colour identity — used consistently across every page in that group, in both the physical book and the app.

| Group                       | Colour Name   | Background Hex | Accent Hex | Dark Hex  |
| --------------------------- | ------------- | -------------- | ---------- | --------- |
| Group 1 (S,A,T,I,P,N)       | Sky Blue      | `#D6EAFA`      | `#5BA8E0`  | `#1A5F8A` |
| Group 2 (C,K,E,H,R,M,D)     | Mint Green    | `#C8F0DC`      | `#4DBF8A`  | `#1A6B45` |
| Group 3 (G,O,U,L,F,B)       | Warm Peach    | `#FAD9C8`      | `#F0946A`  | `#8A3A18` |
| Group 4 (AI,J,OA,IE,EE,OR)  | Soft Lavender | `#E0D8F8`      | `#9B8DE0`  | `#4A3D8A` |
| Group 5 (Z,W,NG,V,OO)       | Butter Yellow | `#FAF0C0`      | `#E8C840`  | `#7A6010` |
| Group 6 (Y,X,CH,SH,TH)      | Leaf Green    | `#E8F8D0`      | `#7AC842`  | `#3A6010` |
| Group 7 (QU,OU,OI,UE,ER,AR) | Dusty Rose    | `#F8D8E0`      | `#E8789A`  | `#8A2848` |

**Rule:** Colours are always used at 20–30% opacity for backgrounds. Never full saturation. The palette must be reproducible exactly in the app to create visual continuity between the physical book and the digital experience.

### 2.4 Typography Rules

| Element            | Font                                 | Size      | Weight  |
| ------------------ | ------------------------------------ | --------- | ------- |
| Display letter     | Atkinson Hyperlegible / OpenDyslexic | 120–140pt | Bold    |
| Sound notation /x/ | Atkinson Hyperlegible                | 22–28pt   | Bold    |
| Object name        | Atkinson Hyperlegible                | 18–24pt   | Regular |
| Instruction strip  | Atkinson Hyperlegible                | 14–16pt   | Regular |
| Parent guide text  | Atkinson Hyperlegible                | 11–13pt   | Regular |
| Footer/header      | Atkinson Hyperlegible                | 9–10pt    | Regular |

**Rules that must not be broken:**

- Never use a serif font for the letter display itself
- Never drop below 11pt anywhere in the book
- Never use justified text alignment — always left-align body text
- Letter spacing: +5% minimum on all instructional text

---

## 3. Multi-Sensory Approach

SoundBloom is explicitly built on the multi-sensory learning principle: a child learns a sound more durably when they encounter it through multiple channels simultaneously. Every page is designed to activate at least three channels.

### 3.1 The Five Channels

| Channel           | How it's activated                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------- |
| **Visual**        | The large colourable letter + the object illustration + the group colour                 |
| **Auditory**      | QR code → app plays the sound out loud (warm voice, optional slow version)               |
| **Tactile/Motor** | Colouring the letter and illustration — fine motor engagement                            |
| **Phonological**  | The sound instruction strip prompts the child (or parent) to say the sound aloud 3 times |
| **Kinaesthetic**  | Dot-to-dot letter tracing on the writing practice pages                                  |

### 3.2 Why Each Channel Matters for Neurodiverse Learners

**For autistic children:**  
Auditory + visual together, with consistent layout = lower cognitive load. The child doesn't have to figure out where things are — the same layout every page means prediction, which reduces anxiety.

**For children with dyslexia:**  
Motor tracing of the letter shape while hearing the sound simultaneously is one of the most evidence-cited approaches for dyslexic learners. The dot-to-dot pages directly serve this. Upper and lowercase are shown together but children are explicitly encouraged to master one at a time.

**For minimally verbal children:**  
No spoken response is ever required. The child can point, colour, look, listen, or simply sit with the page. All of these count. The QR sound works whether or not the child says anything back.

**For children with ADHD:**  
Short engagement units (one page = one sound = one session). Visual variety within a consistent structure. The reward sticker at the end of each page provides immediate positive reinforcement.

**For children with Down syndrome:**  
Visual learning strength is served by the large, clear, uncluttered illustrations. Repetitive structure builds familiarity and confidence. The colour-coded groups create a visual map of progress.

### 3.3 What Multi-Sensory Looks Like in the App

The app mirrors and extends the multi-sensory approach of the book:

- Hearing the sound (audio playback)
- Seeing the letter animate on screen
- Tracing the letter with a finger (touch interaction)
- Earning a visible reward (visual + emotional response)
- Hearing their name spoken when they complete a module (personalised audio)

---

## 4. Upcoming Books Roadmap

All books follow the same layout template, colour system, and Jolly Phonics teaching sequence. Each book builds only on sounds introduced in previous books.

### Book 1 — Letter Sounds (Launching 2026)

**Subtitle:** One calm page for every sound  
**Pages:** 58  
**Sound entries:** 26 (full alphabet, Jolly Phonics group order)  
**Groups covered:** Groups 1–7 (S through AR)  
**Content per letter:** Parent guide · Colouring page · Upper/lowercase note · Dot-to-dot writing (×2) · Blend words page  
**End matter:** 4 free practice pages per group · Sticker chart

### Book 2 — First Words (Late 2026)

**Subtitle:** Three-letter words from the sounds you know  
**Pages:** 62  
**Sound entries:** 40 CVC words (cat, dog, sun, hat, pig, bus, mug, jam…)  
**Teaching focus:** CVC blending — consonant-vowel-consonant  
**New feature:** Word-level QR codes play the full word blended, not just the letter sound  
**Builds on:** Book 1 entirely — only uses letters from Groups 1–4

### Book 3 — Sound Pairs (Spring 2027)

**Subtitle:** Two letters, one sound  
**Pages:** 70  
**Sound entries:** 50 (sh, ch, th, fr, br, sp, st, cl, and more)  
**Teaching focus:** Digraphs and consonant blends  
**New feature:** Split-reveal pages — the two letters are shown separately, then together  
**Builds on:** Books 1 + 2

### Book 4 — Sight Words (Late 2027)

**Subtitle:** The 50 words every reader needs  
**Pages:** 76  
**Sound entries:** 50 high-frequency sight words (the, and, is, was, you, said, have, they…)  
**Teaching focus:** Whole-word recognition + irregular spelling patterns  
**New feature:** Sentence-level QR codes — hear the word used in a calm, short sentence  
**Builds on:** Full series

### Future consideration (2028+)

- **Book 5 — Long Vowels:** Magic E rule, vowel pairs
- **Book 6 — Indian English Edition:** Same phonics sequence, examples drawn from Indian English vocabulary and cultural context
- **Teacher Edition:** Classroom-adapted version with group activity suggestions, IEP-compatible progress notes
- **Tamil / Hindi parallel editions** — same design system, different sound sets

---

## 5. SoundBloom App — Feature Specification

The app exists to do what a printed page cannot: play sound on demand, track progress, personalise the experience, and reward completion. It is a companion to the books — never a replacement.

### 5.1 Core Philosophy

- **No account required** to start. A local profile is enough.
- **No ads.** Ever. No premium tier. Every feature available to every user.
- **No data leaves the device** unless the user explicitly opts into cloud backup.
- **No autoplay.** The child finishes when they finish. The app does not pull them to the next thing.
- **Works offline** once content has been opened once.

### 5.2 App Sections

#### Home Screen

- Child's name and avatar (customisable)
- Current streak (days in a row)
- Today's suggested module (one sound, one session)
- Medal showcase — 3 most recently earned medals displayed
- Quick access to current group

#### Sound Player (QR destination)

- Opens directly to the correct sound when QR is scanned
- Large letter display (same hex colours as the physical book)
- Play button — prominent, single tap
- "Slower voice" toggle — available at all times
- No navigation away — child finishes, then returns to the book
- Works without an account or profile set up

#### Module View (structured learning session)

Each module = one phonics group (e.g., Group 1: S, A, T, I, P, N)

A module session contains:

1. **Hear it** — listen to each sound in the group
2. **See it** — animated letter reveal with group colour
3. **Trace it** — finger trace the letter on screen (haptic feedback on supported devices)
4. **Say it** — microphone prompt (optional, never forced; can be skipped)
5. **Find it** — tap the correct letter from 2–3 options (not a test; supportive framing)
6. **Blend it** — hear a short CVC word, tap the letters in order
7. **Celebrate** — module complete screen + medal awarded

Session length: approximately 5–8 minutes per module. Sessions can be paused and resumed at any point.

#### Progress Dashboard (for parents/teachers)

- Sounds heard today / this week / total
- Time spent per session
- Which letters have been heard 1×, 3×, 5×+ (spaced repetition tracker)
- Module completion history
- Streak calendar (like Duolingo's streak view)
- Downloadable progress summary (PDF) — useful for IEP documentation

---

## 6. Reward & Progression System

The reward system is built on one principle: **completion feels good, not pressured.** Every reward is for doing, not for being correct. There are no wrong answers that block progress.

### 6.1 Medal System

Medals are collected per module completed. Each medal is visually distinct, group-coloured, and has a name.

| Medal             | Earned by                                                         | Colour               | Name                        |
| ----------------- | ----------------------------------------------------------------- | -------------------- | --------------------------- |
| 🌱 Seed Medal     | Completing any single sound                                       | Group colour         | "First Sound"               |
| ⭐ Star Medal     | Completing a full group (e.g., all of SATIPN)                     | Group colour         | e.g., "Blue Star — Group 1" |
| 🌸 Bloom Medal    | Completing an entire book's worth of groups                       | Gold + group colours | "Sound Bloomer"             |
| 🔥 Streak Medal   | 3 days in a row                                                   | Warm orange          | "3-Day Streak"              |
| 🏅 Gold Medal     | 7 days in a row                                                   | Gold                 | "Week Champion"             |
| 💎 Diamond Medal  | Completing all 4 books                                            | Multi-colour         | "Full Bloom"                |
| 🌙 Quiet Medal    | Completing a session in quiet mode (no audio prompts)             | Soft silver          | "Silent Learner"            |
| 🤝 Together Medal | Session completed with a parent/teacher present (parent marks it) | Warm purple          | "We Did It"                 |

**Rules:**

- Medals are never taken away
- Missing a day does not remove a streak medal already earned
- Every medal has a short, warm description: _"You finished Group 1. That's 6 sounds you know now."_
- Medals are visible in a dedicated "My Medals" gallery — visual, tactile, celebratory

### 6.2 Medal Display

- Displayed as a physical-looking badge in the app (slight shadow, slight gloss)
- Locked medals shown as faint outlines — visible but not taunting; framed as "coming soon" not "you haven't done this yet"
- Can be shared as an image by the parent (not the child — privacy default)

### 6.3 Sticker Chart (Book ↔ App Bridge)

- Physical sticker chart in the back of each book: one sticker space per page completed
- The app mirrors this: when a QR is scanned for a letter, the app marks that letter as "heard" in a visual chart
- Visual continuity between physical and digital: the chart looks the same in both

---

## 7. Per-Child Personalisation

### 7.1 Profile Setup

- Child's name (shown on screen, stored locally, optionally synced)
- Avatar selection — 8 illustrated characters, inclusive in representation
- Preferred voice: Voice A (warm, female) / Voice B (warm, male) / Voice C (calm, neutral)
- Speed preference: Standard / Slower / Slowest
- Colour theme: follows the book's group colours, or can be set to a single preferred colour for the whole app
- Notification preference: on / off / parent-only

### 7.2 Multiple Children

- Up to 4 child profiles on one device, no account needed
- Each profile has completely separate progress, medals, streaks
- Switching profiles: large avatar tap on home screen, no password needed for child profiles

### 7.3 Adaptive Pacing

The app notices — without ever telling the child — which sounds they engage with most and which they skip or repeat:

- If a sound is scanned 5+ times, the app gently surfaces it in the next session as a "you're getting really good at this one"
- If a module is started and abandoned 3+ times, the parent dashboard flags it quietly as "might need more support here"
- No negative feedback to the child. Ever.

### 7.4 Parent/Teacher Controls (accessible from settings only)

- Lock to current module (prevents jumping ahead)
- Enable/disable microphone activities
- Set daily session length limit (5 / 10 / 15 / 20 minutes)
- Download progress PDF
- Reset progress (with confirmation prompt)
- Enable "classroom mode" — shows all children's progress on one screen, anonymised by avatar

---

## 8. Duolingo-Style Learning Engine

SoundBloom borrows the best of spaced repetition and streak-based motivation from Duolingo — and leaves behind everything that creates anxiety or pressure.

### 8.1 What We Take from Duolingo

| Feature           | Duolingo version                           | SoundBloom version                                              |
| ----------------- | ------------------------------------------ | --------------------------------------------------------------- |
| Daily streak      | Pressure to maintain, resets on missed day | Celebrated when active, silently paused when missed, never lost |
| XP / points       | Competitive leaderboard                    | Private — child sees only their own count                       |
| Skill levels      | Locked until mastered                      | Always visible, accessible when ready                           |
| Hearts / lives    | Lose hearts for wrong answers              | No lives, no wrong answers — only attempts                      |
| Spaced repetition | Algorithmic, invisible                     | Gentle surface ("Let's visit S again today")                    |
| Daily goal        | Fixed target                               | Flexible — today's goal is whatever the child does today        |

### 8.2 Daily Learning Flow

```
App opens
    ↓
"Good morning, Leo" (child's name, time-aware greeting)
    ↓
"Yesterday you learned /s/ and /a/. Today, let's meet /t/."
    ↓
Module begins (Hear → See → Trace → Find → Blend)
    ↓
Module complete → medal awarded → celebrate
    ↓
"Want to do another one, or are you done for today?"
    (Two equally sized buttons — no visual pressure toward continuing)
    ↓
Child chooses
```

### 8.3 Progress Tracking — What the App Measures

- Sounds heard (count per letter, total)
- Modules completed (per group, per book)
- Time spent (per session, per day, cumulative)
- Streak (current, longest ever)
- Letters traced (count)
- QR scans (which letters, how often)

### 8.4 Progress Visualisation

- **For the child:** A "sound garden" — each sound learned is a flower that blooms in the garden. Group 1 flowers are blue, Group 2 green, etc. The garden fills as sounds are learned. No numbers, no percentages — just a growing garden.
- **For the parent:** A clean weekly summary — sounds heard, time spent, modules completed, any flags from adaptive pacing. Shown as a simple bar chart by day of the week.
- **For teachers (classroom mode):** Class-wide view — how many children have completed each group, anonymous by avatar. No individual child data visible to the group.

---

## 9. Neurodiverse-First Design Principles

These are non-negotiable. Every screen, every interaction, every word of copy must pass these.

### 9.1 The Eight Rules

1. **This book — and this app — is for sounds and writing them on paper.** That is the whole purpose. Every feature either serves that purpose or does not belong here.

2. **Calm comes first.** Cream/off-white backgrounds. Muted, soft colours. No flashing. No auto-playing audio. No unexpected sounds. The child controls all sound.

3. **One thing per screen.** Never two activities competing for attention. Never a notification badge while a session is running.

4. **Consistent layout.** The position of the letter, the play button, the continue button — they do not move between sessions, between books, between updates. A child who learned the layout in January should find it in December.

5. **No failure states visible to the child.** Wrong answers are met with gentle re-prompting ("Let's try that one again"), never red X marks, never sound effects that signal failure, never loss of progress.

6. **Optional everything.** Microphone: optional. Colouring: optional. Sound: optional (visual-only mode available). Speed: adjustable. The child can engage with whatever channel works for them today.

7. **Minimally verbal by design.** No activity requires the child to speak. Pointing, tapping, colouring, and listening are equally valid forms of engagement throughout.

8. **Praise is for doing, not for being correct.** "You finished that" not "You got it right." "You heard 3 sounds today" not "You scored 3/3." The difference matters for children whose experience of school has been dominated by getting things wrong.

### 9.2 Language Guidelines (Copy Style)

- Always warm, never clinical
- Never use the word "test," "score," "correct," "wrong," "fail," or "mistake" in any user-facing text
- Use "Try again" not "Incorrect"
- Use "You're learning" not "You haven't learned this yet"
- Disability language: identity-first where applicable (autistic children) and person-first where appropriate — follow community guidance per context
- Never frame a learning difference as a deficit in any copy

---

## 10. Technical Architecture Overview

_High-level only — for detailed technical specification see separate TDD._

### 10.1 App Stack (Proposed)

- **Frontend:** React Native (iOS + Android parity) or progressive web app (PWA) for zero-install access
- **Audio:** Pre-recorded WAV files, served locally after first open
- **Storage:** AsyncStorage (local) for profiles and progress; optional iCloud/Google Drive sync
- **QR:** Deep link format `sounds.soundbloom.co/{letter}` → redirect to app or web fallback
- **Offline:** Full offline capability after first load — no network dependency for core features

### 10.2 QR Link Architecture

```
Physical book QR
    ↓
sounds.soundbloom.co/s  (redirect layer — we own this)
    ↓
If app installed → opens app directly to /s screen
If app not installed → opens web version of sound player
    ↓
Redirect can be updated without reprinting books
```

### 10.3 Privacy Architecture

- No user accounts required
- No data transmitted from device without explicit opt-in
- No analytics on child behaviour
- No third-party SDKs in the child-facing app
- COPPA / GDPR-Kids compliant by design (data minimisation principle)
- Progress PDF export: generated on-device, never server-side

---

## 11. What the App Does Not Do

Included here because these constraints are as important as the features.

| Does not                     | Why                                                                          |
| ---------------------------- | ---------------------------------------------------------------------------- |
| Show ads                     | Incompatible with the trust of parents of neurodiverse children              |
| Have a premium tier          | Would make the tool inaccessible to the families who need it most            |
| Autoplay to the next sound   | Respects the child's pace; prevents overstimulation                          |
| Show leaderboards            | Competitive comparison is harmful to children who learn differently          |
| Send data to servers         | Privacy is not a feature; it is the baseline                                 |
| Require a login to start     | Friction at the start of a session is a barrier for the children this serves |
| Take away rewards            | A medal earned is earned. Always.                                            |
| Use red to indicate error    | Red signals danger/failure; incompatible with the emotional design           |
| Lock content behind progress | Every sound is always accessible; gating is a pressure mechanism             |
| Make noise without consent   | Every audio event requires a tap. No exceptions.                             |

---

## 12. Open Questions

These are decisions not yet made — flagged here for the team to resolve before development begins.

| Question                                                                 | Context                                                                         | Priority |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | -------- |
| App or PWA first?                                                        | React Native gives better offline/haptic; PWA gives zero-install                | High     |
| Cloud sync: opt-in or opt-out?                                           | Privacy default = opt-out; but families may want cross-device progress          | High     |
| "Say it" microphone activity — keep or remove?                           | Optional but some parents will worry about audio recording children             | High     |
| Teacher classroom mode — separate app or same app?                       | Classroom mode needs safeguards neurotypical child mode doesn't need            | Medium   |
| India-specific edition — same app, language toggle, or separate product? | Indian English phonics has different considerations                             | Medium   |
| Credential display on cover — how to frame 1 year special ed experience? | Authentic but needs framing that doesn't overclaim                              | Medium   |
| Sticker chart bridge — physical sticker vs app-only?                     | Some families will use book without app; chart needs to work standalone         | Low      |
| Sound garden visual — 2D illustration or simple animation?               | Animation is more engaging but heavier to build and potentially overstimulating | Low      |

---

_This document is a living spec. All sections marked "proposed" are subject to change. Design decisions not captured here should be raised before implementation, not after._

_SoundBloom is a book and an app. It is not a therapy tool, a clinical product, or a substitute for professional assessment. Nothing in this document constitutes a medical claim._

---

**Document owner:** SoundBloom core team  
**Last updated:** May 2026  
**Next review:** Before app development sprint 1
