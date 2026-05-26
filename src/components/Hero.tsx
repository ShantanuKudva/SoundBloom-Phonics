"use client";

import { motion } from "motion/react";
import BookCoverMock from "./svg/BookCoverMock";
import { books } from "../lib/books";

function BookIllustration() {
  const book1 = books[0]; // Book 1
  return (
    <div
      className="relative"
      style={{
        filter: "drop-shadow(0 12px 28px rgba(42,36,25,0.18))",
      }}
    >
      <div style={{ transform: "rotate(-3deg)" }}>
        <BookCoverMock size={320} book={book1} />
      </div>
    </div>
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
            Book 1 — Letter Sounds · Groups 1–7 · Launching 2026
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
