"use client";

import { motion } from "motion/react";
import BookPageMock from "./svg/BookPageMock";

const ease = [0.22, 1, 0.36, 1] as const;

const pages = [
  { letter: "S", word: "snake", src: "/illustrations/01-s-snake.png", label: "S is for snake" },
  { letter: "A", word: "ant",   src: "/illustrations/02-a-ant.png",   label: "A is for ant" },
  { letter: "C", word: "cat",   src: "/illustrations/07-c-cat.png",   label: "C is for cat" },
  { letter: "D", word: "dog",   src: "/illustrations/13-d-dog.png",   label: "D is for dog" },
  { letter: "E", word: "egg",   src: "/illustrations/09-e-egg.png",   label: "E is for egg" },
  { letter: "M", word: "moon",  src: "/illustrations/12-m-moon.png",  label: "M is for moon" },
  { letter: "F", word: "fish",  src: "/illustrations/18-f-fish.png",  label: "F is for fish" },
  { letter: "B", word: "ball",  src: "/illustrations/19-b-ball.png",  label: "B is for ball" },
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
            Twenty-six sounds. Fifty-eight pages. One calm template.
          </h2>
        </motion.div>

        {/* Gallery — horizontal scroll on mobile, grid on md+. Each cell is fluid; BookPageMock scales to fit. */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-4 lg:grid-cols-8 md:overflow-visible">
          {pages.map(({ letter, word, src, label }, i) => (
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
                illustrationSrc={src}
                showSayIt={false}
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
