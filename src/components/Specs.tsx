"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "58",      label: "pages, Book 1" },
  { value: "8.5″ × 8.5″", label: "square trim — premium feel" },
  { value: "26",      label: "sound entries" },
  { value: "30 sec",  label: "average sound clip" },
  { value: "3",       label: "colours per page, never more" },
  { value: "0",       label: "ads, ever" },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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

        {/* Footer note */}
        <motion.p
          className="mt-14 text-center text-sm"
          style={{
            fontFamily: "var(--font-sans)",
            fontStyle: "italic",
            color: "var(--color-ink)",
            opacity: 0.5,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          Available on Amazon worldwide. Print-on-demand. Always in stock.
        </motion.p>
      </div>
    </section>
  );
}
