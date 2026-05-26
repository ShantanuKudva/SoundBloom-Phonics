"use client";

import { motion } from "motion/react";
import BookPageMock from "./svg/BookPageMock";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageAnatomy() {
  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-butter)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-ochre)", fontFamily: "var(--font-sans)" }}
          >
            the design
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 48",
            }}
          >
            Every choice on the page has a reason.
          </h2>
        </motion.div>

        {/* Annotated book page */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease }}
        >
          {/* Desktop annotation layout — wider container so labels sit in gutters, lines touch book edge only */}
          {/* Height 580 — footer annotation at y=480 fits comfortably */}
          <div className="hidden md:block relative" style={{ width: 940, height: 580 }}>
            {/* Book page — centred horizontally in the 940-wide container, x:220–720 */}
            <div style={{ position: "absolute", left: 220, top: 0, width: 500, height: 500, zIndex: 1 }}>
              <BookPageMock size={500} letter="S" word="snake" illustrationSrc="/illustrations/01-s-snake.png" />
            </div>

            {/* Annotation lines SVG overlay — 940×580, coords 1:1 with container */}
            {/*
              Scale: size=500, viewBox=200, so 1 SVG unit = 2.5 screen px.
              Book left edge at x=220, right edge at x=720.
              Screen y for SVG y: screenY = svgY * 2.5

              Elements:
                Header bar (svgY=0–14):      screenY=0–35
                Letter box (svgY=22–102):    screenY=55–255
                Letter text (svgY=76):       screenY=190
                IPA (svgY=94):               screenY=235
                Illustration box (svgY=22–102): screenY=55–255
                Illustration centre (svgY=56): screenY=140
                SAY IT strip (svgY=112–134): screenY=280–335
                Colour dots (svgY=158):      screenY=395
                QR (svgY=142–178):           screenY=355–445
                Footer bar (svgY=186–200):   screenY=465–500
            */}
            <svg
              viewBox="0 0 940 580"
              width="940"
              height="580"
              preserveAspectRatio="none"
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 2 }}
            >
              {/* All lines: stop at the book's outer edge (x=220 left edge, x=720 right edge),
                  never crossing into the book interior */}

              {/* L1 cream background — top-left of page, y=25 */}
              <line x1="200" y1="25"  x2="220" y2="25"  stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="220" cy="25"  r="2.5" fill="#5C7C5E" />

              {/* L2 letter typography — letter text at screenY=190 */}
              <line x1="200" y1="190" x2="220" y2="190" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="220" cy="190" r="2.5" fill="#5C7C5E" />

              {/* L3 IPA notation — IPA at screenY=235 */}
              <line x1="200" y1="235" x2="220" y2="235" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="220" cy="235" r="2.5" fill="#5C7C5E" />

              {/* L4 SAY IT strip — strip centre at screenY=300 */}
              <line x1="200" y1="300" x2="220" y2="300" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="220" cy="300" r="2.5" fill="#5C7C5E" />

              {/* L5 colour dots — screenY=395 */}
              <line x1="200" y1="395" x2="220" y2="395" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="220" cy="395" r="2.5" fill="#5C7C5E" />

              {/* R1 header bar — screenY=10 */}
              <line x1="720" y1="10"  x2="740" y2="10"  stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="720" cy="10"  r="2.5" fill="#5C7C5E" />

              {/* R2 illustration — illustration centre at screenY=140 */}
              <line x1="720" y1="140" x2="740" y2="140" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="720" cy="140" r="2.5" fill="#5C7C5E" />

              {/* R3 outline weight — illustration box bottom edge at screenY=240 */}
              <line x1="720" y1="240" x2="740" y2="240" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="720" cy="240" r="2.5" fill="#5C7C5E" />

              {/* R4 QR code — QR area at screenY=395 */}
              <line x1="720" y1="395" x2="740" y2="395" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="720" cy="395" r="2.5" fill="#5C7C5E" />

              {/* R5 footer bar — footer centre at screenY=480 */}
              <line x1="720" y1="480" x2="740" y2="480" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="720" cy="480" r="2.5" fill="#5C7C5E" />
            </svg>

            {/* Labels — left gutter (x:0–200) */}
            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 5, left: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              Cream background reduces glare and visual fatigue.
            </div>

            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 170, left: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              OpenDyslexic, 24pt minimum. Never serif fonts for the letter itself.
            </div>

            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 250, left: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              The sound in IPA — not the letter name. A child learns /s/, not &lsquo;ess&rsquo;.
            </div>

            {/* SAY IT strip */}
            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 318, left: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              Say it three times. Builds the sound in the body, not just the eye.
            </div>

            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 390, left: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              Three colours, listed up front. No decision fatigue.
            </div>

            {/* Labels — right gutter (x:740–940) */}

            {/* Header bar */}
            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 2, right: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              Book title · Group number — same place, every page.
            </div>

            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 60, right: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              One object per page. No busy scenes.
            </div>

            {/* Outline weight */}
            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 156, right: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              Thick 4pt outlines — easier to colour inside with limited fine motor control.
            </div>

            {/* QR code */}
            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 360, right: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              QR code — 1.5 cm in print. Same layout every page. Predictability lowers anxiety.
            </div>

            {/* Footer bar */}
            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 456, right: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              Group · sound · page type — orientation without clutter.
            </div>
          </div>

          {/* Mobile: book page + list below */}
          <div className="md:hidden flex flex-col items-center gap-8 w-full max-w-sm">
            <BookPageMock size={340} letter="S" word="snake" illustrationSrc="/illustrations/01-s-snake.png" />

            <ol className="flex flex-col gap-4 w-full">
              {[
                "Cream background reduces glare and visual fatigue.",
                "Book title · Group number — same place, every page.",
                "OpenDyslexic, 24pt minimum. Never serif fonts for the letter itself.",
                "The sound in IPA — not the letter name. A child learns /s/, not 'ess'.",
                "One object per page. No busy scenes.",
                "Thick 4pt outlines — easier to colour inside with limited fine motor control.",
                "Say it three times. Builds the sound in the body, not just the eye.",
                "Three colours, listed up front. No decision fatigue.",
                "QR code — 1.5 cm in print. Same layout every page. Predictability lowers anxiety.",
                "Group · sound · page type — orientation without clutter.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)" }}
                >
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: "var(--color-moss)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="opacity-80">{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
