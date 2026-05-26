"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const books = [
  {
    title: "Letter Sounds",
    subtitle: "A to Z",
    book: "Book 1",
    fill: "#D4827A",
    fillOpacity: 0.35,
  },
  {
    title: "First Words",
    subtitle: "CVC",
    book: "Book 2",
    fill: "#C89B5D",
    fillOpacity: 0.35,
  },
  {
    title: "Sound Pairs",
    subtitle: "Digraphs & Blends",
    book: "Book 3",
    fill: "#5C7C5E",
    fillOpacity: 0.35,
  },
  {
    title: "Sight Words",
    subtitle: "",
    book: "Book 4",
    fill: "#6B8AAE",
    fillOpacity: 0.35,
  },
];

function BookSpine({
  title,
  subtitle,
  book,
  fill,
  fillOpacity,
  delay,
}: {
  title: string;
  subtitle: string;
  book: string;
  fill: string;
  fillOpacity: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      <svg
        width="80"
        height="320"
        viewBox="0 0 80 320"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`${title} — ${book}`}
      >
        {/* Book body */}
        <rect
          x="4" y="4" width="72" height="312"
          rx="4"
          fill={fill}
          fillOpacity={fillOpacity}
          stroke="#2A2419"
          strokeWidth="2.5"
        />
        {/* Binding highlight */}
        <rect x="4" y="4" width="10" height="312" rx="3" fill="#2A2419" fillOpacity="0.08" />
        {/* Top label */}
        <text
          x="40"
          y="30"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="9"
          fill="#2A2419"
          opacity="0.5"
          letterSpacing="1"
        >
          {book.toUpperCase()}
        </text>
        {/* Rotated title */}
        <text
          transform="rotate(90, 40, 160)"
          x="0"
          y="0"
          textAnchor="middle"
          fontFamily="var(--font-display), Georgia, serif"
          fontSize="15"
          fontWeight="400"
          fill="#2A2419"
          dominantBaseline="middle"
        >
          {title}
          {subtitle ? ` · ${subtitle}` : ""}
        </text>
      </svg>
    </motion.div>
  );
}

export default function Series() {
  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-butter)" }}
      id="series"
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
            the arc
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
            Four books that carry each other.
          </h2>
        </motion.div>

        {/* Bookshelf */}
        <div className="flex flex-col items-center">
          {/* Spines row */}
          <div className="flex items-end gap-3 md:gap-6">
            {books.map((book, i) => (
              <BookSpine
                key={book.book}
                {...book}
                delay={i * 0.1}
              />
            ))}
          </div>

          {/* Shelf line */}
          <motion.div
            className="w-full max-w-md mt-0"
            style={{ height: "3px", backgroundColor: "var(--color-moss)", opacity: 0.5 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          />

          {/* Caption */}
          <motion.p
            className="text-sm leading-relaxed max-w-lg text-center mt-8"
            style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.65 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            Each book uses the language of the one before it. Vocabulary in Book 2 only uses letters from Book 1. Books 3 and 4 build on both.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
