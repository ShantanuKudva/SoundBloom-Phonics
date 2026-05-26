"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Author() {
  return (
    <section
      className="py-32 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease }}
        >
          <p
            className="text-2xl leading-snug mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 24, 'SOFT' 60",
            }}
          >
            A small independent project. No clinic, no claims, no expertise to sell.
          </p>
        </motion.div>

        <motion.p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.75 }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, delay: 0.15, ease }}
        >
          Every design choice in this book has a reason — the cream paper, the line weight, the empty space, the colour key. None of it is decorative. We made the book we&rsquo;d want for the kids in our own lives, and shared it because other people might want it too. We&rsquo;re not therapists. We&rsquo;re not making medical claims. We&rsquo;re just trying to make a good, calm, useful book.
        </motion.p>

        {/* Thin decorative rule */}
        <motion.div
          className="mt-16"
          style={{ height: "1px", backgroundColor: "var(--color-ochre)", opacity: 0.4 }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        />
      </div>
    </section>
  );
}
