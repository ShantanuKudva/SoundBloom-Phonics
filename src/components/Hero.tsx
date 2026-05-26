"use client";

import { motion } from "motion/react";
import BookPageMock from "./svg/BookPageMock";

function BookIllustration() {
  return (
    <svg
      viewBox="0 0 520 290"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[520px]"
      aria-label="Open phonics book showing the letter S with a sun illustration"
    >
      {/* Book shadow */}
      <ellipse cx="260" cy="278" rx="220" ry="8" fill="#2A2419" opacity="0.08" />

      {/* Left page — faded blank page, square, matching right-page dimensions */}
      <g transform="rotate(-2, 130, 140)">
        <rect x="10" y="20" width="240" height="240" rx="3" fill="#F4E6C8" stroke="#2A2419" strokeWidth="2" />
        {[55, 75, 95, 115, 135, 155, 175, 195, 215].map((y, i) => (
          <line key={i} x1="22" y1={y} x2="238" y2={y} stroke="#2A2419" strokeWidth="0.6" opacity="0.08" />
        ))}
        <text x="22" y="68" fontFamily="Georgia, serif" fontSize="44" fontWeight="700" fill="#2A2419" opacity="0.2">R</text>
      </g>

      {/* Right page — BookPageMock at matching 240×240 */}
      <g transform="rotate(2, 380, 140) translate(270, 20)">
        <BookPageMock size={240} letter="S" word="Sun" illustration="sun" />
      </g>

      {/* Book spine */}
      <rect x="250" y="10" width="20" height="260" rx="2" fill="#C89B5D" stroke="#2A2419" strokeWidth="1.5" />
      <line x1="260" y1="10" x2="260" y2="270" stroke="#2A2419" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 md:px-16 pt-8 pb-4 z-10">
        {/* Brand mark */}
        <div
          className="text-sm font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
        >
          S
          <span
            className="inline-block w-2 h-2 rounded-full mx-px align-middle"
            style={{ backgroundColor: "var(--color-ochre)", marginBottom: "2px" }}
          />
          undBl
          <span
            className="inline-block w-2 h-2 rounded-full mx-px align-middle"
            style={{ backgroundColor: "var(--color-ochre)", marginBottom: "2px" }}
          />
          om
        </div>

        {/* Nav links */}
        <ul
          className="hidden md:flex gap-8 text-sm"
          style={{ color: "var(--color-ink)", fontFamily: "var(--font-sans)" }}
        >
          {["The story", "How it works", "Series", "Notify me"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero content */}
      <div className="flex-1 grid md:grid-cols-2 items-center gap-12 px-8 md:px-16 py-12 md:py-20 max-w-7xl mx-auto w-full">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          {/* Pill badge */}
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium mb-10"
            style={{
              border: "1.5px solid var(--color-ochre)",
              color: "var(--color-ink)",
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.04em",
            }}
          >
            Book 1 — Letters A to Z · Launching 2026
          </div>

          {/* H1 */}
          <h1
            className="text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 72, 'SOFT' 100",
            }}
          >
            Phonics,{" "}
            <span style={{ color: "var(--color-moss)" }}>gently.</span>
          </h1>

          {/* Subhead */}
          <p
            className="text-xl md:text-2xl leading-relaxed max-w-lg"
            style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.8 }}
          >
            Phonics colouring books for every child — with sound built into every page, and the calm that helps kids who find busy books hard.
          </p>
        </motion.div>

        {/* Right column — book */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <BookIllustration />
        </motion.div>
      </div>
    </section>
  );
}
