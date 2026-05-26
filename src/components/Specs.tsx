"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "58",           label: "pages, Book 1" },
  { value: "8.5″ × 8.5″", label: "square trim — premium feel" },
  { value: "7",            label: "phonics groups, each its own colour" },
  { value: "26",           label: "sound entries (Jolly Phonics order)" },
  { value: "4 pt",         label: "minimum outline weight" },
  { value: "0",            label: "ads, ever" },
];

export default function Specs() {
  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-moss)", fontFamily: "var(--font-sans)" }}
          >
            the book itself
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 72, 'SOFT' 100",
            }}
          >
            By the numbers.
          </h2>
        </motion.div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease }}
            >
              <span
                className="text-4xl md:text-5xl leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  color: "var(--color-ochre)",
                  fontVariationSettings: "'opsz' 48",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm leading-snug"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.6 }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Where to find it */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.2, ease }}
        >
          <p
            className="text-center text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: "var(--color-moss)", fontFamily: "var(--font-sans)" }}
          >
            where to find it
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.amazon.com/s?k=SoundBloom+Phonics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition-opacity duration-200 hover:opacity-80"
              style={{
                backgroundColor: "var(--color-ink)",
                color: "var(--color-paper)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              <span>Amazon — via KDP</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M4 10 L10 4 M10 4 L5.5 4 M10 4 L10 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://www.flipkart.com/search?q=SoundBloom+Phonics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition-colors duration-200 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
              style={{
                border: "1.5px solid var(--color-ink)",
                color: "var(--color-ink)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                letterSpacing: "0.02em",
                backgroundColor: "transparent",
              }}
            >
              <span>Flipkart — India</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M4 10 L10 4 M10 4 L5.5 4 M10 4 L10 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <p
            className="mt-6 text-center text-sm"
            style={{
              fontFamily: "var(--font-sans)",
              fontStyle: "italic",
              color: "var(--color-ink)",
              opacity: 0.55,
            }}
          >
            Coming to both stores in 2026. Print-on-demand via Amazon KDP — always in stock, worldwide. Flipkart through India distribution.
          </p>
          <p
            className="mt-2 text-center"
            style={{
              fontFamily: "var(--font-hand)",
              color: "var(--color-ochre)",
              fontSize: "14px",
            }}
          >
            links go live the day Book 1 launches
          </p>
        </motion.div>
      </div>
    </section>
  );
}
