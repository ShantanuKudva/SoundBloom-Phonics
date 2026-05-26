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
          <div className="hidden md:block relative" style={{ width: 940, height: 500 }}>
            {/* Book page — centred horizontally in the 940-wide container, x:220–720 */}
            <div style={{ position: "absolute", left: 220, top: 0, width: 500, height: 500, zIndex: 1 }}>
              <BookPageMock size={500} letter="S" word="Sun" illustration="sun" />
            </div>

            {/* Annotation lines SVG overlay — 940×500, coords 1:1 with container */}
            <svg
              viewBox="0 0 940 500"
              width="940"
              height="500"
              preserveAspectRatio="none"
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 2 }}
            >
              {/* All lines: stop at the book's outer edge (x=220 left edge, x=720 right edge),
                  never crossing into the book interior */}

              {/* L1 background — top-left corner */}
              <line x1="200" y1="38"  x2="220" y2="38"  stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="220" cy="38"  r="2.5" fill="#5C7C5E" />

              {/* L2 letter — left edge at letter's vertical position (~y=125) */}
              <line x1="200" y1="130" x2="220" y2="130" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="220" cy="130" r="2.5" fill="#5C7C5E" />

              {/* L4 colour dots — bottom-left edge near dots (~y=450) */}
              <line x1="200" y1="450" x2="220" y2="450" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="220" cy="450" r="2.5" fill="#5C7C5E" />

              {/* L5 whole page (one object) — right edge top corner area */}
              <line x1="720" y1="60"  x2="740" y2="60"  stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="720" cy="60"  r="2.5" fill="#5C7C5E" />

              {/* L3 sun outlines — right edge at sun centre (~y=275) */}
              <line x1="720" y1="275" x2="740" y2="275" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="720" cy="275" r="2.5" fill="#5C7C5E" />

              {/* L6 QR / layout — bottom-right edge near QR (~y=440) */}
              <line x1="720" y1="440" x2="740" y2="440" stroke="#5C7C5E" strokeWidth="1" />
              <circle cx="720" cy="440" r="2.5" fill="#5C7C5E" />
            </svg>

            {/* Labels — left gutter (x:0–200) */}
            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 22, left: 0, width: 190,
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
                top: 114, left: 0, width: 190,
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
                top: 434, left: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              Three colours, listed up front. No decision fatigue.
            </div>

            {/* Labels — right gutter (x:740–940) */}
            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 44, right: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              One object per page. No busy scenes.
            </div>

            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 259, right: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              Thick 4pt outlines — easier to colour inside with limited fine motor control.
            </div>

            <div
              className="absolute text-xs px-3 py-2 bg-white rounded"
              style={{
                top: 424, right: 0, width: 190,
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                border: "1px solid rgba(42,36,25,0.18)", lineHeight: 1.45,
                zIndex: 3,
              }}
            >
              Same layout every page. Predictability lowers anxiety.
            </div>
          </div>

          {/* Mobile: book page + list below */}
          <div className="md:hidden flex flex-col items-center gap-8 w-full max-w-sm">
            <BookPageMock size={340} letter="S" word="Sun" illustration="sun" />

            <ol className="flex flex-col gap-4 w-full">
              {[
                "Cream background reduces glare and visual fatigue.",
                "OpenDyslexic, 24pt minimum. Never serif fonts for the letter itself.",
                "Thick 4pt outlines — easier to colour inside with limited fine motor control.",
                "Three colours, listed up front. No decision fatigue.",
                "One object per page. No busy scenes.",
                "Same layout every page. Predictability lowers anxiety.",
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
