"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const LETTERS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const HEARD_COUNT = 5;

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <polyline points="2,7 6,11 12,3" stroke="#5C7C5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <line x1="3" y1="3" x2="11" y2="11" stroke="#D4827A" strokeWidth="2" strokeLinecap="round" />
      <line x1="11" y1="3" x2="3" y2="11" stroke="#D4827A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AppPhoneMockup() {
  const cols = 4;
  const chipR = 14;
  const chipSpacing = 38;
  const gridStartX = 26;
  const gridStartY = 120;

  return (
    <svg
      viewBox="0 0 280 560"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[280px]"
      aria-label="SoundBloom Sounds app home screen showing letter progress grid"
    >
      {/* Phone shell */}
      <rect x="2" y="2" width="276" height="556" rx="36" fill="#2A2419" stroke="#2A2419" strokeWidth="2" />
      <rect x="8" y="8" width="264" height="544" rx="30" fill="#1a1612" />
      <rect x="14" y="14" width="252" height="532" rx="26" fill="#FDF6EC" />

      {/* Notch */}
      <rect x="100" y="20" width="80" height="18" rx="9" fill="#2A2419" />

      {/* Status bar */}
      <text x="28" y="54" fontFamily="sans-serif" fontSize="11" fill="#2A2419" opacity="0.5">9:41</text>

      {/* Wordmark */}
      <text x="140" y="80" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fill="#2A2419" opacity="0.75" letterSpacing="0.5">SoundBloom Sounds</text>

      {/* Child name line */}
      <line x1="40" y1="90" x2="240" y2="90" stroke="#2A2419" strokeWidth="0.5" opacity="0.2" />
      <text x="140" y="108" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="16" fill="#C89B5D">for Leo</text>

      {/* Letter grid — 4 cols × 7 rows = 28 cells (26 letters + 2 empty) */}
      {LETTERS.map((letter, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = gridStartX + chipR + col * chipSpacing;
        const cy = gridStartY + chipR + row * chipSpacing;
        const heard = i < HEARD_COUNT;
        return (
          <g key={letter}>
            <circle
              cx={cx} cy={cy} r={chipR}
              fill={heard ? "#C89B5D" : "none"}
              stroke="#2A2419"
              strokeWidth={heard ? 0 : 1.5}
              opacity={heard ? 1 : 0.5}
            />
            <text
              x={cx} y={cy + 5}
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="14"
              fontWeight="700"
              fill={heard ? "white" : "#2A2419"}
              opacity={heard ? 1 : 0.6}
            >
              {letter}
            </text>
            {heard && (
              <polyline
                points={`${cx - 5},${cy - 4} ${cx - 1},${cy} ${cx + 6},${cy - 7}`}
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
            )}
          </g>
        );
      })}
      {/* Two empty placeholder chips */}
      {[26, 27].map((i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = gridStartX + chipR + col * chipSpacing;
        const cy = gridStartY + chipR + row * chipSpacing;
        return (
          <circle key={i} cx={cx} cy={cy} r={chipR} fill="none" stroke="#2A2419" strokeWidth="1" opacity="0.15" />
        );
      })}

      {/* Progress text */}
      <text x="140" y="390" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#2A2419" opacity="0.6">5 of 26 sounds heard</text>

      {/* Slower voice toggle */}
      <g transform="translate(50, 408)">
        {/* Pill outline */}
        <rect x="0" y="0" width="36" height="18" rx="9" fill="none" stroke="#2A2419" strokeWidth="1.5" opacity="0.4" />
        {/* Toggle circle — left position (off) */}
        <circle cx="10" cy="9" r="6" fill="#2A2419" opacity="0.25" />
        <text x="44" y="13" fontFamily="sans-serif" fontSize="10" fill="#2A2419" opacity="0.55">slower voice</text>
      </g>

      {/* Footer */}
      <text x="140" y="510" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#2A2419" opacity="0.4">stored on this device only</text>
      <text x="140" y="522" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#2A2419" opacity="0.4">no account · no ads</text>

      {/* Home indicator */}
      <rect x="105" y="536" width="70" height="4" rx="2" fill="#2A2419" opacity="0.25" />
    </svg>
  );
}

const doesItems = [
  "Plays one sound per screen, exactly when you ask.",
  "Remembers what your child has heard — stored on the device, never sent.",
  "Lets you set your child's name (shown on screen, stored locally).",
  "Has a \"slower voice\" toggle for new learners.",
  "Works offline once you've opened it once.",
  "Free, forever — every feature, every book.",
];

const doesntItems = [
  "Send any data anywhere. No analytics, no trackers, no cookies.",
  "Need an account, login, or email address.",
  "Show ads, recommendations, or \"up next\" suggestions.",
  "Have premium features, in-app purchases, or paywalls.",
  "Require an install — it's just a web link.",
  "Auto-play to the next thing — your child finishes when they finish.",
];

export default function InsideTheApp() {
  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-butter)" }}
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
            style={{ color: "var(--color-moss)", fontFamily: "var(--font-sans)" }}
          >
            the app
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 72, 'SOFT' 100",
            }}
          >
            Inside SoundBloom Sounds.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{
              fontFamily: "var(--font-sans)",
              fontStyle: "italic",
              color: "var(--color-ink)",
              opacity: 0.7,
            }}
          >
            A tiny web app. No install. No account. No data leaves the device. Every feature, every book, free — no exceptions, no premium tier.
          </p>
        </motion.div>

        {/* Body — two columns */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left — phone mockup */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
          >
            <AppPhoneMockup />
          </motion.div>

          {/* Right — DOES / DOESN'T lists */}
          <div className="flex flex-col gap-12">
            {/* DOES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-moss)", fontFamily: "var(--font-sans)" }}
              >
                Does
              </p>
              <ul className="flex flex-col gap-3">
                {doesItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.85 }}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease }}
                  >
                    <span className="mt-1"><CheckIcon /></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* DOESN'T */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-rose)", fontFamily: "var(--font-sans)" }}
              >
                {"Doesn't"}
              </p>
              <ul className="flex flex-col gap-3">
                {doesntItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.85 }}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease }}
                  >
                    <span className="mt-1"><CrossIcon /></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Pull-line */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <p
            className="text-2xl mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 24",
            }}
          >
            {"It's a small app. That's the point."}
          </p>
          <p
            className="text-base"
            style={{
              fontFamily: "var(--font-hand)",
              color: "var(--color-ochre)",
            }}
          >
            every feature, every book — free, no exceptions, no premium tier
          </p>
        </motion.div>
      </div>
    </section>
  );
}
