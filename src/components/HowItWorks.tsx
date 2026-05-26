"use client";

import { motion, useInView } from "motion/react";
import { useState, useRef } from "react";
import BookPageMock from "./svg/BookPageMock";

function PhoneMockup({ scanned }: { scanned: boolean }) {
  return (
    <svg
      viewBox="0 0 260 520"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[260px]"
      aria-label="Phone showing the SoundBloom Sounds app for the letter S"
    >
      {/* Phone body */}
      <rect x="2" y="2" width="256" height="516" rx="36" fill="#2A2419" stroke="#2A2419" strokeWidth="2" />
      <rect x="8" y="8" width="244" height="504" rx="30" fill="#1a1612" />
      <rect x="12" y="12" width="236" height="496" rx="26" fill="#FDF6EC" />

      {/* Notch */}
      <rect x="90" y="18" width="80" height="18" rx="9" fill="#2A2419" />

      {/* Status bar */}
      <text x="24" y="52" fontFamily="sans-serif" fontSize="11" fill="#2A2419" opacity="0.5">9:41</text>
      <circle cx="210" cy="48" r="3" fill="#2A2419" opacity="0.4" />

      {/* Wordmark */}
      <text x="130" y="80" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#2A2419" opacity="0.7" letterSpacing="1">SoundBloom Sounds</text>

      {/* Big S inside thick circle */}
      <circle cx="130" cy="185" r="66" fill="none" stroke="#2A2419" strokeWidth="4" />
      <text
        x="130" y="212"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="88"
        fontWeight="700"
        fill="#2A2419"
      >S</text>

      {/* S is for Sun label */}
      <text x="130" y="278" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#2A2419" opacity="0.8">S is for Sun</text>

      {/* Play button + sound wave bars */}
      <g transform="translate(68, 305)">
        {/* Ochre play circle */}
        <circle cx="22" cy="22" r="22" fill="#C89B5D" />
        <polygon points="16,13 34,22 16,31" fill="white" />

        {/* Sound wave bars */}
        <rect
          x="56" y="14" width="7" height="16" rx="3.5"
          fill="#2A2419"
          style={{ opacity: 0.5 }}
        />
        <rect
          x="67" y="10" width="7" height="24" rx="3.5"
          fill="#2A2419"
          style={{ opacity: 0.5 }}
        />
        <rect
          x="78" y="16" width="7" height="12" rx="3.5"
          fill="#2A2419"
          style={{ opacity: 0.5 }}
        />
      </g>

      {/* Prev/next chevrons */}
      <text x="36" y="385" fontFamily="sans-serif" fontSize="16" fill="#2A2419" opacity="0.35">&#x2039; R</text>
      <text x="186" y="385" fontFamily="sans-serif" fontSize="16" fill="#2A2419" opacity="0.35">T &#x203a;</text>

      {/* Footer URL */}
      <text x="130" y="420" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#2A2419" opacity="0.45">sounds.soundbloom.co/s</text>

      {/* Home indicator */}
      <rect x="95" y="490" width="70" height="4" rx="2" fill="#2A2419" opacity="0.3" />
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  { num: "1", caption: "Your child colours the page." },
  { num: "2", caption: "You point a phone at the QR code." },
  { num: "3", caption: "The SoundBloom Sounds app opens — straight to the right sound." },
];

export default function HowItWorks() {
  const [scanned, setScanned] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);

  function handleQRClick() {
    setScanned(true);
    setTimeout(() => setScanned(false), 1000);
  }

  return (
    <section
      className="py-24 px-8 md:px-16"
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
            how it works
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
            The QR moment.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 items-center gap-16">
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
          >
            {/* Tap-me label + clickable QR overlay */}
            <div className="relative inline-block">
              <motion.div
                className="absolute"
                style={{
                  bottom: "calc(30px + 8px + 36px)",
                  right: "16px",
                  fontFamily: "var(--font-hand)",
                  color: "var(--color-ochre)",
                  fontSize: "20px",
                  transform: "rotate(-6deg)",
                  pointerEvents: "none",
                  zIndex: 20,
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                tap me →
              </motion.div>
              <BookPageMock size={400} letter="S" word="Sun" illustration="sun" />
              {/* Clickable overlay over the QR region (bottom-right of 200×200 viewbox scaled to 400px) */}
              <div
                onClick={handleQRClick}
                style={{
                  position: "absolute",
                  right: "8px",
                  bottom: "8px",
                  width: "80px",
                  height: "80px",
                  cursor: "pointer",
                  zIndex: 10,
                  borderRadius: "4px",
                  boxShadow: scanned ? "0 0 0 3px #5C7C5E" : "none",
                  transition: "box-shadow 0.2s ease",
                }}
                role="button"
                aria-label="Tap to scan the QR code"
              />
            </div>
          </motion.div>

          <motion.div
            ref={phoneRef}
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            animate={scanned ? { scale: [1, 1.04, 1] } : {}}
          >
            <PhoneMockup scanned={scanned} />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
            >
              <span
                className="text-5xl leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  color: "var(--color-ochre)",
                  fontVariationSettings: "'opsz' 48",
                }}
              >
                {step.num}
              </span>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.8 }}
              >
                {step.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
