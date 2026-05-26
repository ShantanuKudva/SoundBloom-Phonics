"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

function IconEye() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Eye outline */}
      <path
        d="M6 28 C12 16 20 12 28 12 C36 12 44 16 50 28 C44 40 36 44 28 44 C20 44 12 40 6 28Z"
        stroke="#2A2419" strokeWidth="2.5" fill="none" strokeLinejoin="round"
      />
      {/* Iris */}
      <circle cx="28" cy="28" r="7" stroke="#2A2419" strokeWidth="2.5" fill="none" />
      {/* Pupil */}
      <circle cx="28" cy="28" r="2.5" fill="#2A2419" />
    </svg>
  );
}

function IconSpeaker() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Speaker body */}
      <path
        d="M10 22 L10 34 L18 34 L30 44 L30 12 L18 22 Z"
        stroke="#2A2419" strokeWidth="2.5" fill="none" strokeLinejoin="round"
      />
      {/* Sound waves */}
      <path d="M36 20 C39 23 39 33 36 36" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M41 15 C47 21 47 35 41 41" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconPencilHand() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Pencil */}
      <path
        d="M34 10 L46 22 L22 46 L10 46 L10 34 Z"
        stroke="#2A2419" strokeWidth="2.5" fill="none" strokeLinejoin="round"
      />
      {/* Pencil tip */}
      <path d="M10 34 L10 46 L22 46" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Pencil shaft divider */}
      <line x1="40" y1="16" x2="28" y2="28" stroke="#2A2419" strokeWidth="2" strokeLinecap="round" />
      {/* Curved scribble line beneath */}
      <path d="M12 50 Q20 46 28 50 Q36 54 44 50" stroke="#2A2419" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconMouth() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Face outline */}
      <circle cx="28" cy="26" r="18" stroke="#2A2419" strokeWidth="2.5" fill="none" />
      {/* Eyes */}
      <circle cx="22" cy="22" r="2" fill="#2A2419" />
      <circle cx="34" cy="22" r="2" fill="#2A2419" />
      {/* Open mouth — lips */}
      <path
        d="M20 31 Q24 36 28 36 Q32 36 36 31"
        stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M20 31 Q28 28 36 31"
        stroke="#2A2419" strokeWidth="2" strokeLinecap="round" fill="none"
      />
      {/* Sound lines from mouth */}
      <path d="M30 44 Q32 48 30 52" stroke="#2A2419" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M34 43 Q38 48 36 52" stroke="#2A2419" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IconDotPath() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Dotted curved path */}
      <path
        d="M10 42 C14 30 22 14 28 12 C34 10 42 22 46 42"
        stroke="#2A2419" strokeWidth="2" strokeLinecap="round" fill="none"
        strokeDasharray="3 5"
      />
      {/* Dots along path */}
      <circle cx="10" cy="42" r="3" fill="#2A2419" />
      <circle cx="18" cy="26" r="3" fill="#2A2419" />
      <circle cx="28" cy="12" r="3" fill="#2A2419" />
      <circle cx="38" cy="24" r="3" fill="#2A2419" />
      <circle cx="46" cy="42" r="3" fill="#2A2419" />
      {/* Arrow at end */}
      <path d="M42 40 L46 42 L44 46" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

const channels = [
  {
    Icon: IconEye,
    name: "Visual",
    body: "The big colourable letter, the object beside it, and the group colour. The child sees the same layout every page, so they don't have to relearn where things live.",
  },
  {
    Icon: IconSpeaker,
    name: "Auditory",
    body: "Each QR code plays the sound on demand, in a warm voice — slower if you toggle it. Nothing autoplays.",
  },
  {
    Icon: IconPencilHand,
    name: "Tactile-Motor",
    body: "Colouring the letter and the picture activates fine motor learning. Thick 4-point outlines, never thin lines.",
  },
  {
    Icon: IconMouth,
    name: "Phonological",
    body: "The SAY IT strip cues the sound three times. No spoken response is ever required — pointing counts.",
  },
  {
    Icon: IconDotPath,
    name: "Kinaesthetic",
    body: "Dot-to-dot tracing pages let the child write the shape of the letter, building muscle memory while they hear the sound.",
  },
];

export default function MultiSensory() {
  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-butter)" }}
      id="multi-sensory"
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
            style={{ color: "var(--color-moss)", fontFamily: "var(--font-sans)" }}
          >
            the approach
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 48",
            }}
          >
            Five channels, one page.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-ink)",
              opacity: 0.7,
            }}
          >
            A child learns a sound more durably when it arrives through more than one sense at the same time. Every SoundBloom page is designed to activate at least three.
          </p>
        </motion.div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {channels.map((channel, i) => (
            <motion.div
              key={channel.name}
              className="flex flex-col gap-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, delay: i * 0.08, ease }}
            >
              <channel.Icon />
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-moss)", fontFamily: "var(--font-sans)" }}
              >
                {channel.name}
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.75 }}
              >
                {channel.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
