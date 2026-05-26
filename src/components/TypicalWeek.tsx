"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const days = [
  {
    day: "MON",
    letter: "A",
    body: "First time today. Mum scans the QR. Leo listens twice. Colours the apple slowly. One sticker on the back-of-book chart.",
  },
  {
    day: "TUE",
    letter: "B",
    body: "Same routine. Already familiar. He scans the QR himself this time, pointing where it should go. Mum just holds the phone.",
  },
  {
    day: "WED",
    letter: "C",
    body: "He hums 'kuh' while colouring. Goes back to A unprompted and looks at it for a minute.",
  },
  {
    day: "THU",
    letter: "D",
    body: "Five minutes today. Quick. Mum reads the colour key out loud. Leo doesn't need her to.",
  },
  {
    day: "FRI",
    letter: "E",
    body: "Five letters, five sounds, five stickers. The chart is a visual map of the week — and the rest of the book.",
  },
];

export default function TypicalWeek() {
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
            style={{ color: "var(--color-ochre)", fontFamily: "var(--font-sans)" }}
          >
            a typical week
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
            Five letters, five mornings.
          </h2>
        </motion.div>

        {/* Timeline track */}
        <div className="relative mb-10 hidden md:block" style={{ height: "24px" }}>
          {/* Horizontal rule */}
          <motion.div
            className="absolute top-1/2 left-0 right-0"
            style={{ height: "2px", backgroundColor: "var(--color-moss)", originX: 0, opacity: 0.5 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease }}
          />
          {/* Five dots */}
          {days.map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{
                left: `calc(${(i / 4) * 100}% - 6px)`,
                backgroundColor: "var(--color-moss)",
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 1 + i * 0.1, ease }}
            />
          ))}
        </div>

        {/* Day cards */}
        <div className="grid md:grid-cols-5 gap-6">
          {days.map((day, i) => (
            <motion.div
              key={day.day}
              className="flex flex-col gap-4 p-6 rounded-2xl"
              style={{
                backgroundColor: "var(--color-butter)",
                border: "1px solid rgba(42,36,25,0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 1.1 + i * 0.1, ease }}
            >
              {/* Day name */}
              <span
                className="text-sm tracking-widest"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariant: "small-caps",
                  color: "var(--color-ochre)",
                  fontWeight: 600,
                }}
              >
                {day.day}
              </span>

              {/* Letter pill */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  border: "2px solid rgba(42,36,25,0.3)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                  }}
                >
                  {day.letter}
                </span>
              </div>

              {/* Body */}
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--color-ink)",
                  opacity: 0.75,
                }}
              >
                {day.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <motion.p
          className="mt-12 text-center text-base"
          style={{
            fontFamily: "var(--font-sans)",
            fontStyle: "italic",
            color: "var(--color-ink)",
            opacity: 0.55,
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          Six weeks gets you to Z. Then Book 2 is waiting.
        </motion.p>
      </div>
    </section>
  );
}
