"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const books = [
  {
    spineColor: "#C89B5D",
    status: "Launching 2026",
    title: "Book 1 — Letter Sounds",
    scope: "Every letter in the alphabet, one calm page at a time.",
    chips: ["A","B","C","D","E","S","M","Z"],
    pages: 58,
    sounds: 26,
    prereq: null,
  },
  {
    spineColor: "#D4827A",
    status: "Late 2026",
    title: "Book 2 — First Words",
    scope: "Three-letter words built only from letters in Book 1.",
    chips: ["cat","dog","sun","hat","pig","bus","mug","jam"],
    pages: 62,
    sounds: 40,
    prereq: "Builds on Book 1 →",
  },
  {
    spineColor: "#5C7C5E",
    status: "Spring 2027",
    title: "Book 3 — Sound Pairs",
    scope: "Digraphs and blends — two letters making one sound.",
    chips: ["sh","ch","th","fr","br","sp","st","cl"],
    pages: 70,
    sounds: 50,
    prereq: "Builds on Books 1 + 2 →",
  },
  {
    spineColor: "#6B8AAE",
    status: "Late 2027",
    title: "Book 4 — Sight Words",
    scope: "The 50 most common words a young reader needs at sight.",
    chips: ["the","and","is","was","you","said","have","they"],
    pages: 76,
    sounds: 50,
    prereq: "Builds on the full series →",
  },
];

const flowSteps = ["Letters","Words","Sound Pairs","Reading"];
const flowBooks = ["Book 1","Book 2","Book 3","Book 4"];

function SpineSVG({ color }: { color: string }) {
  return (
    <svg width="60" height="180" viewBox="0 0 60 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="52" height="172" rx="6" fill={color} stroke="#2A2419" strokeWidth="2" opacity="0.7" />
      <rect x="8" y="4" width="8" height="172" rx="4" fill="#2A2419" opacity="0.1" />
      <text
        x="30" y="92"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="11"
        fontWeight="600"
        fill="#2A2419"
        opacity="0.7"
        transform="rotate(-90, 30, 92)"
        letterSpacing="2"
      >
        SoundBloom
      </text>
    </svg>
  );
}

export default function Curriculum() {
  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-butter)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-moss)", fontFamily: "var(--font-sans)" }}
          >
            the arc
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 72, 'SOFT' 100",
            }}
          >
            Four books that carry each other.
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.7 }}
          >
            Each book uses the language of the one before it. Book 2 only uses letters introduced in Book 1. Books 3 and 4 build on both. The progression is the point.
          </p>
        </motion.div>

        {/* Book cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              className="flex flex-col gap-5 rounded-2xl p-8"
              style={{
                backgroundColor: "var(--color-paper)",
                border: "1px solid rgba(42,36,25,0.12)",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, delay: i * 0.15, ease }}
            >
              <SpineSVG color={book.spineColor} />

              {/* Status pill */}
              <span
                className="text-xs px-3 py-1 rounded-full self-start"
                style={{
                  border: "1px solid rgba(42,36,25,0.3)",
                  fontFamily: "var(--font-sans)",
                  color: "var(--color-ink)",
                  opacity: 0.7,
                }}
              >
                {book.status}
              </span>

              {/* Title */}
              <h3
                className="text-xl leading-snug"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--color-ink)",
                  fontVariationSettings: "'opsz' 24",
                }}
              >
                {book.title}
              </h3>

              {/* Scope */}
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.7 }}
              >
                {book.scope}
              </p>

              {/* Sample chips */}
              <div className="flex flex-wrap gap-2">
                {book.chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      border: "1px solid rgba(42,36,25,0.25)",
                      fontFamily: "var(--font-sans)",
                      color: "var(--color-ink)",
                      opacity: 0.8,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <p
                className="text-xs mt-auto"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.5 }}
              >
                {book.pages} pages · {book.sounds} sound entries
              </p>

              {/* Prereq */}
              {book.prereq && (
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "italic",
                    color: "var(--color-ink)",
                    opacity: 0.45,
                  }}
                >
                  {book.prereq}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative flex items-center justify-between" style={{ height: "80px" }}>
            {/* Connecting line */}
            <motion.div
              className="absolute"
              style={{
                top: "24px",
                left: "calc(12.5%)",
                right: "calc(12.5%)",
                height: "2px",
                backgroundColor: "var(--color-moss)",
                opacity: 0.5,
                originX: 0,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.6, ease }}
            />

            {flowSteps.map((step, i) => (
              <motion.div
                key={step}
                className="flex flex-col items-center gap-2 relative z-10"
                style={{ width: "25%" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-hand)",
                    color: "var(--color-ochre)",
                    fontSize: "13px",
                  }}
                >
                  {flowBooks[i]}
                </span>
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "var(--color-moss)" }}
                />
                <span
                  className="text-sm text-center"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.7 }}
                >
                  {step}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-sm mt-4"
            style={{
              fontFamily: "var(--font-sans)",
              fontStyle: "italic",
              color: "var(--color-ink)",
              opacity: 0.5,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 1.2, ease }}
          >
            The arc, in four steps.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
