"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

// Abstract line-drawn portrait — just hair silhouette + face oval
function Portrait1() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Face oval */}
      <ellipse cx="40" cy="46" rx="20" ry="24" stroke="#2A2419" strokeWidth="2.5" fill="#FDF6EC" />
      {/* Hair — shoulder-length */}
      <path d="M20 46 C20 28 24 18 40 18 C56 18 60 28 60 46" stroke="#2A2419" strokeWidth="2.5" fill="#C89B5D" opacity="0.6" />
      {/* Hair side strands */}
      <path d="M20 46 C18 52 20 60 22 66" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M60 46 C62 52 60 60 58 66" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Hint of eyes */}
      <circle cx="34" cy="46" r="2" fill="#2A2419" opacity="0.5" />
      <circle cx="46" cy="46" r="2" fill="#2A2419" opacity="0.5" />
    </svg>
  );
}

function Portrait2() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Face oval */}
      <ellipse cx="40" cy="48" rx="18" ry="22" stroke="#2A2419" strokeWidth="2.5" fill="#FDF6EC" />
      {/* Short hair */}
      <path d="M22 44 C22 28 28 18 40 18 C52 18 58 28 58 44"
        stroke="#2A2419" strokeWidth="2.5" fill="#5C7C5E" opacity="0.5" />
      {/* Glasses */}
      <rect x="28" y="44" width="10" height="7" rx="3" stroke="#2A2419" strokeWidth="2" fill="none" />
      <rect x="42" y="44" width="10" height="7" rx="3" stroke="#2A2419" strokeWidth="2" fill="none" />
      <line x1="38" y1="47" x2="42" y2="47" stroke="#2A2419" strokeWidth="1.5" />
    </svg>
  );
}

function Portrait3() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Face oval */}
      <ellipse cx="40" cy="48" rx="19" ry="22" stroke="#2A2419" strokeWidth="2.5" fill="#FDF6EC" />
      {/* Bun hair */}
      <path d="M21 42 C21 28 27 20 40 20 C53 20 59 28 59 42"
        stroke="#2A2419" strokeWidth="2.5" fill="#D4827A" opacity="0.5" />
      <circle cx="40" cy="16" r="8" stroke="#2A2419" strokeWidth="2.5" fill="#D4827A" opacity="0.5" />
      <path d="M32 20 C35 16 45 16 48 20" stroke="#2A2419" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Hint of smile */}
      <path d="M35 55 Q40 60 45 55" stroke="#2A2419" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

const personas = [
  {
    Portrait: Portrait1,
    name: "Priya",
    role: "Parent of a 5-year-old",
    quote: "I'd given up on phonics books. My son would shut down within a minute. SoundBloom is the first one he asks for.",
  },
  {
    Portrait: Portrait2,
    name: "Mr. Davies",
    role: "Year 1 SEN teacher",
    quote: "I keep a stack in the calm corner. The QR videos mean a child can self-direct without me hovering.",
  },
  {
    Portrait: Portrait3,
    name: "Anna",
    role: "Speech and language therapist",
    quote: "I send the QR links to parents between sessions. It bridges the home practice gap better than any worksheet.",
  },
];

export default function Personas() {
  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-paper)" }}
      id="in-use"
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
            in use
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 48",
            }}
          >
            How we imagine it being used.
          </h2>
          <p
            className="text-sm"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-ink)",
              opacity: 0.55,
              fontStyle: "italic",
            }}
          >
            (These voices are imagined — Book 1 launches in 2026. We&rsquo;re sharing how we hope it will fit into real days.)
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.name}
              className="flex flex-col gap-5 p-8 rounded-2xl"
              style={{
                backgroundColor: "var(--color-butter)",
                border: "1.5px solid rgba(42,36,25,0.08)",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: i * 0.12, ease }}
            >
              <persona.Portrait />
              <div>
                <p
                  className="text-base font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-ink)",
                    fontVariant: "small-caps",
                    letterSpacing: "0.04em",
                  }}
                >
                  {persona.name}
                </p>
                <p
                  className="text-sm opacity-60"
                  style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)" }}
                >
                  {persona.role}
                </p>
              </div>
              <blockquote>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "italic",
                    color: "var(--color-ink)",
                    opacity: 0.8,
                  }}
                >
                  &ldquo;{persona.quote}&rdquo;
                </p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
