"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

function IconPaperLeaf() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Stack of paper */}
      <rect x="10" y="24" width="36" height="30" rx="2" stroke="#2A2419" strokeWidth="3" fill="none" />
      <rect x="14" y="20" width="36" height="30" rx="2" stroke="#2A2419" strokeWidth="3" fill="#FDF6EC" />
      <rect x="18" y="16" width="36" height="30" rx="2" stroke="#2A2419" strokeWidth="3" fill="#FDF6EC" />
      {/* Leaf on top page */}
      <path d="M36 26 C36 26 44 22 44 30 C44 38 36 36 36 36 C36 36 28 38 28 30 C28 22 36 26 36 26Z"
        stroke="#5C7C5E" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <line x1="36" y1="26" x2="36" y2="36" stroke="#5C7C5E" strokeWidth="2" />
    </svg>
  );
}

function IconSoundBubble() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Speech bubble */}
      <path d="M8 12 Q8 8 12 8 L52 8 Q56 8 56 12 L56 40 Q56 44 52 44 L32 44 L22 56 L22 44 L12 44 Q8 44 8 40 Z"
        stroke="#2A2419" strokeWidth="3" fill="none" strokeLinejoin="round" />
      {/* Sound waves */}
      <line x1="22" y1="32" x2="22" y2="20" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="36" x2="30" y2="16" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="30" x2="38" y2="22" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="46" y1="34" x2="46" y2="18" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IconBookSpines() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Four book spines */}
      <rect x="6"  y="12" width="10" height="44" rx="2" stroke="#2A2419" strokeWidth="3" fill="none" />
      <rect x="20" y="18" width="10" height="38" rx="2" stroke="#2A2419" strokeWidth="3" fill="none" />
      <rect x="34" y="10" width="10" height="46" rx="2" stroke="#2A2419" strokeWidth="3" fill="none" />
      <rect x="48" y="15" width="10" height="41" rx="2" stroke="#2A2419" strokeWidth="3" fill="none" />
      {/* Shelf line */}
      <line x1="4" y1="58" x2="60" y2="58" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

const pillars = [
  {
    Icon: IconPaperLeaf,
    label: "Sensory-calibrated design",
    title: "Sensory-calibrated design",
    body: "Cream paper instead of glaring white. Thick outlines you can colour inside. One thing on every page. The same layout from page 1 to page 58 — calm and predictable, which makes the book easier for every child and especially for kids who find busy pages hard.",
  },
  {
    Icon: IconSoundBubble,
    label: "Sound built in",
    title: "Sound built in",
    body: "Every page has a small QR code. Point a phone at it and the SoundBloom Sounds app opens straight to that letter — no install, no account, no ads. A warm voice says the sound. That's all the app does.",
  },
  {
    Icon: IconBookSpines,
    label: "A series, not a one-off",
    title: "A series, not a one-off",
    body: "Four books that carry each other. Letter sounds. First words. Sound pairs. Sight words. Each one a step further, with the same language and the same calm.",
  },
];

export default function Pillars() {
  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-butter)" }}
      id="how-it-works"
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
            what it is
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
            Three quiet ideas, doing the heavy lifting.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              className="flex flex-col gap-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: i * 0.12, ease }}
            >
              <pillar.Icon />
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-moss)", fontFamily: "var(--font-sans)" }}
              >
                {pillar.label}
              </p>
              <h3
                className="text-2xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  fontVariationSettings: "'opsz' 24",
                }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.75 }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
