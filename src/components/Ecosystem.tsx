"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

function IconPhone() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="6" width="44" height="68" rx="8" stroke="#2A2419" strokeWidth="3" fill="none" />
      <rect x="22" y="14" width="36" height="48" rx="4" stroke="#2A2419" strokeWidth="2" fill="none" />
      <polygon points="34,31 50,38 34,45" fill="#2A2419" opacity="0.7" />
      <rect x="32" y="68" width="16" height="3" rx="1.5" fill="#2A2419" opacity="0.4" />
    </svg>
  );
}

function IconRedirect() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Arrow loop / redirect */}
      <path d="M20 50 C20 32 28 20 46 20 L54 20" stroke="#2A2419" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M46 12 L56 20 L46 28" stroke="#2A2419" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M60 30 C60 48 52 60 34 60 L26 60" stroke="#2A2419" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M34 68 L24 60 L34 52" stroke="#2A2419" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function IconDotGrid() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* 5x5 grid of dots, first row filled */}
      {[0,1,2,3,4].map((row) =>
        [0,1,2,3,4].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={16 + col * 12}
            cy={24 + row * 12}
            r={4}
            fill={row === 0 ? "#5C7C5E" : "#2A2419"}
            opacity={row === 0 ? 0.8 : 0.2}
          />
        ))
      )}
    </svg>
  );
}

const cards = [
  {
    Icon: IconPhone,
    heading: "An app made just for the books.",
    body: "Every QR opens the SoundBloom Sounds app — a tiny ad-free web app that plays just that sound. No install. No account. No tracking. No 'up next' to pull your child into a tunnel. One sound per screen, that's the whole product.",
  },
  {
    Icon: IconRedirect,
    heading: "Future-proof QR codes.",
    body: "Every QR in every book points to a redirect link we own. If a sound ever needs replacing or moving, the redirect updates and the book still works. The link your child scans today will still work in 2040.",
  },
  {
    Icon: IconDotGrid,
    heading: "Completion you can feel.",
    body: "A sticker chart at the back of every book. One sticker per page completed. The chart fills up as your child progresses — completion as a felt, visible thing.",
  },
];

export default function Ecosystem() {
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
            around the books
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
            The book is the centre. These hold it up.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.heading}
              className="flex flex-col gap-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, delay: i * 0.12, ease }}
            >
              <card.Icon />
              <h3
                className="text-xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--color-ink)",
                  fontVariationSettings: "'opsz' 24",
                }}
              >
                {card.heading}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.75 }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* YouTube note */}
        <motion.p
          className="mt-16 text-center text-sm"
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
          The sounds are also mirrored on a free YouTube channel — for parents who prefer their child meet the content there.
        </motion.p>
      </div>
    </section>
  );
}
