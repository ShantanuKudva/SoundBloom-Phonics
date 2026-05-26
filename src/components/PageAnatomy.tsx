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
          {/* Desktop annotation layout */}
          <div className="hidden md:block relative" style={{ width: 500 }}>
            {/* Annotation lines SVG overlay — coordinates mapped to 500×500 container with 200×200 viewBox scaled to 500px */}
            <svg
              viewBox="0 0 700 500"
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
              style={{ zIndex: 2 }}
            >
              {/* Line to bg label (top-left) */}
              <line x1="97" y1="40" x2="8" y2="40" stroke="#5C7C5E" strokeWidth="1" />
              {/* Line to letter (top-right) */}
              <line x1="403" y1="125" x2="500" y2="55" stroke="#5C7C5E" strokeWidth="1" />
              {/* Line to sun outline (mid-right) */}
              <line x1="403" y1="275" x2="500" y2="235" stroke="#5C7C5E" strokeWidth="1" />
              {/* Line to colour dots (bottom-left) */}
              <line x1="97" y1="450" x2="8" y2="425" stroke="#5C7C5E" strokeWidth="1" />
              {/* Line to whole page centre */}
              <line x1="97" y1="250" x2="8" y2="260" stroke="#5C7C5E" strokeWidth="1" />
              {/* Line to QR (bottom-right) */}
              <line x1="403" y1="420" x2="500" y2="455" stroke="#5C7C5E" strokeWidth="1" />
            </svg>

            {/* Book page — 500×500 */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <BookPageMock size={500} letter="S" word="Sun" illustration="sun" />
            </div>

            {/* Annotation labels — absolutely positioned */}
            {/* Label 1 — background (top-left) */}
            <div
              className="absolute text-xs px-2 py-1 bg-white border border-current rounded"
              style={{
                top: "4%", left: "-220px", width: "200px",
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                borderColor: "rgba(42,36,25,0.2)", lineHeight: 1.4,
                zIndex: 3,
              }}
            >
              Cream background reduces glare and visual fatigue.
            </div>

            {/* Label 2 — letter (top-right) */}
            <div
              className="absolute text-xs px-2 py-1 bg-white border rounded"
              style={{
                top: "8%", right: "-220px", width: "200px",
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                borderColor: "rgba(42,36,25,0.2)", lineHeight: 1.4,
                zIndex: 3,
              }}
            >
              OpenDyslexic, 24pt minimum. Never serif fonts for the letter itself.
            </div>

            {/* Label 3 — sun outline (mid-right) */}
            <div
              className="absolute text-xs px-2 py-1 bg-white border rounded"
              style={{
                top: "44%", right: "-220px", width: "200px",
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                borderColor: "rgba(42,36,25,0.2)", lineHeight: 1.4,
                zIndex: 3,
              }}
            >
              Thick 4pt outlines — easier to colour inside with limited fine motor control.
            </div>

            {/* Label 4 — colour dots (bottom-left) */}
            <div
              className="absolute text-xs px-2 py-1 bg-white border rounded"
              style={{
                bottom: "12%", left: "-220px", width: "200px",
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                borderColor: "rgba(42,36,25,0.2)", lineHeight: 1.4,
                zIndex: 3,
              }}
            >
              Three colours, listed up front. No decision fatigue.
            </div>

            {/* Label 5 — whole page (mid-left) */}
            <div
              className="absolute text-xs px-2 py-1 bg-white border rounded"
              style={{
                top: "46%", left: "-220px", width: "200px",
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                borderColor: "rgba(42,36,25,0.2)", lineHeight: 1.4,
                zIndex: 3,
              }}
            >
              One object per page. No busy scenes.
            </div>

            {/* Label 6 — QR (bottom-right) */}
            <div
              className="absolute text-xs px-2 py-1 bg-white border rounded"
              style={{
                bottom: "6%", right: "-220px", width: "200px",
                fontFamily: "var(--font-sans)", color: "var(--color-ink)",
                borderColor: "rgba(42,36,25,0.2)", lineHeight: 1.4,
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
