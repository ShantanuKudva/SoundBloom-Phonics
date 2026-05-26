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
              Most phonics books are loud. Bright colours, busy pages, dense type. Some kids breeze through that. Others — and there are many — shut down before they&rsquo;ve started.
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
          SoundBloom is what a phonics book looks like when calm comes first. Cream pages instead of glaring white. One letter, one picture, lots of space. Every page has a small QR code that plays the sound out loud — so the hardest part of reading,{" "}
          <em style={{ color: "var(--color-moss)" }}>blending</em>{" "}
          the sounds, doesn&rsquo;t depend on a parent already knowing phonics. It works for any child. It works especially well for the ones who find regular books too much.
        </motion.p>
      </div>
    </section>
  );
}
