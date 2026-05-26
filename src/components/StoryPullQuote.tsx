"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function StoryPullQuote() {
  return (
    <section
      className="w-full py-32 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-paper)" }}
      id="the-story"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease }}
        >
          {/* Pull quote with hanging open-quote */}
          <blockquote className="relative">
            <span
              className="absolute -top-6 -left-6 md:-left-10 text-8xl md:text-9xl leading-none select-none"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-rose)",
                opacity: 0.7,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p
              className="text-3xl md:text-5xl leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--color-ink)",
                fontVariationSettings: "'opsz' 48, 'SOFT' 80",
              }}
            >
              Most phonics books are loud. Bright colours, busy pages, dense type. For autistic children, that&rsquo;s not learning — that&rsquo;s a sensory storm.
            </p>
          </blockquote>
        </motion.div>

        <motion.p
          className="text-lg leading-relaxed max-w-2xl mt-12"
          style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.8 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, delay: 0.15, ease }}
        >
          SoundBloom is what a phonics book looks like when it starts with the child. Cream pages instead of glaring white. One letter, one picture, lots of space. And because the hardest part of reading is{" "}
          <em style={{ color: "var(--color-moss)" }}>blending</em>{" "}
          the sounds, every page has a quiet QR code that plays a 30-second video of the sound made out loud — so a parent who has never taught phonics can still help.
        </motion.p>
      </div>
    </section>
  );
}
