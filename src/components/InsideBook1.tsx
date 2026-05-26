"use client";

import { motion } from "motion/react";
import BookPageMock from "./svg/BookPageMock";

const ease = [0.22, 1, 0.36, 1] as const;

const pages = [
  { letter: "A", word: "Apple", illustration: "apple" as const, label: "A is for Apple" },
  { letter: "B", word: "Ball",  illustration: "ball"  as const, label: "B is for Ball" },
  { letter: "C", word: "Cat",   illustration: "cat"   as const, label: "C is for Cat" },
  { letter: "D", word: "Dog",   illustration: "dog"   as const, label: "D is for Dog" },
  { letter: "E", word: "Egg",   illustration: "egg"   as const, label: "E is for Egg" },
  { letter: "F", word: "Fish",  illustration: "fish"  as const, label: "F is for Fish" },
  { letter: "M", word: "Moon",  illustration: "moon"  as const, label: "M is for Moon" },
  { letter: "S", word: "Sun",   illustration: "sun"   as const, label: "S is for Sun" },
];

export default function InsideBook1() {
  return (
    <section
      className="py-24 px-8 md:px-16 overflow-hidden"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      <div className="max-w-6xl mx-auto">
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
            inside book 1
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
            Twenty-six pages. One calm template.
          </h2>
        </motion.div>

        {/* Gallery — horizontal scroll on mobile, grid on md+. Each cell is fluid; BookPageMock scales to fit. */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-4 lg:grid-cols-8 md:overflow-visible">
          {pages.map(({ letter, word, illustration, label }, i) => (
            <motion.div
              key={label}
              className="shrink-0 w-[160px] md:w-full md:min-w-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <BookPageMock
                size={180}
                letter={letter}
                word={word}
                illustration={illustration}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--color-ink)",
            opacity: 0.75,
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
        >
          The template never changes. A is the same shape on the page as Z. After three pages, your child knows where to look. After ten, they know what to expect. That predictability is the point.
        </motion.p>
      </div>
    </section>
  );
}
