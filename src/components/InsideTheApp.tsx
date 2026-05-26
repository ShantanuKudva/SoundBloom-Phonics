"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import PhoneFrame from "./svg/PhoneFrame";

const ease = [0.22, 1, 0.36, 1] as const;

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

// SATIPN = Group 1 sounds — first 6 the child will meet
const GROUP1_SOUNDS = ["S", "A", "T", "I", "P", "N"] as const;

// ─────────────────────────────────────────────
// Screen 1 — Home
// ─────────────────────────────────────────────
function ScreenHome() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          1. GREETING BAR  (y = 44–80)
      ══════════════════════════════════════════════════ */}

      {/* Avatar circle */}
      <circle cx="42" cy="62" r="14" fill="#F0946A" stroke="#2A2419" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="38" cy="60" r="1.2" fill="#2A2419" />
      <circle cx="46" cy="60" r="1.2" fill="#2A2419" />
      {/* Smile — breathing animation */}
      <motion.g
        animate={{ scaleY: [1, 0.8, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "42px 64px" }}
      >
        <path d="M38,64 Q42,67 46,64" fill="none" stroke="#2A2419" strokeWidth="1.2" strokeLinecap="round" />
      </motion.g>

      {/* Greeting text */}
      <text x="66" y="58" fontFamily="sans-serif" fontSize="9" fill="#2A2419" opacity="0.55">Good morning,</text>
      <text x="66" y="72" fontFamily="var(--font-display), Georgia, serif" fontSize="14" fontStyle="italic" fill="#2A2419">Leo</text>

      {/* Streak badge */}
      <rect x="198" y="54" width="56" height="20" rx="10" fill="rgba(232,120,90,0.15)" stroke="#E6785A" strokeWidth="1.2" />
      <text x="226" y="68" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#A04420">&#9733; 3 days</text>

      {/* ══════════════════════════════════════════════════
          2. DIVIDER LINE  (y = 92)
      ══════════════════════════════════════════════════ */}
      <line x1="18" y1="92" x2="262" y2="92" stroke="#2A2419" strokeWidth="0.5" opacity="0.08" />

      {/* ══════════════════════════════════════════════════
          3. TODAY'S SOUND CARD  (y = 104–284)
      ══════════════════════════════════════════════════ */}

      {/* Outer card */}
      <rect x="30" y="104" width="220" height="180" rx="18" fill="rgba(214,234,250,0.55)" stroke="#5BA8E0" strokeWidth="1.5" />

      {/* Eyebrow "TODAY" */}
      <text x="46" y="124" fontFamily="sans-serif" fontSize="9" fontWeight="600" letterSpacing="0.1em" fill="#1A5F8A">TODAY</text>

      {/* Big letter "S" */}
      <text x="140" y="210" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontSize="80" fontWeight="700" fill="#1A5F8A">S</text>

      {/* Play hint text */}
      <text x="140" y="240" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#1A5F8A" opacity="0.65" letterSpacing="0.05em">Tap to hear /s/</text>

      {/* Play triangle */}
      <polygon points="133,250 152,260 133,270" fill="#5BA8E0" stroke="#1A5F8A" strokeWidth="1.2" />

      {/* ══════════════════════════════════════════════════
          4. SOUNDS YOU'VE MET STRIP  (y = 304–344)
      ══════════════════════════════════════════════════ */}

      {/* Eyebrow */}
      <text x="30" y="312" fontFamily="sans-serif" fontSize="8" letterSpacing="0.12em" opacity="0.55" fill="#2A2419">SOUNDS YOU&apos;VE MET</text>

      {/* 6 letter pills — SATIPN, first 5 heard (filled), 6th (N) outlined */}
      {GROUP1_SOUNDS.map((letter, i) => {
        const cx = 42 + i * 38;
        const cy = 330;
        const heard = i < 5;
        return (
          <g key={letter}>
            <circle
              cx={cx} cy={cy} r="12"
              fill={heard ? "#C89B5D" : "none"}
              stroke={heard ? "none" : "#2A2419"}
              strokeWidth={heard ? 0 : 1.2}
              opacity={heard ? 1 : 0.4}
            />
            <text
              x={cx} y={cy + 4}
              textAnchor="middle"
              fontFamily="sans-serif"
              fontSize="11"
              fontWeight="700"
              fill={heard ? "white" : "#2A2419"}
              opacity={heard ? 1 : 0.4}
            >
              {letter}
            </text>
          </g>
        );
      })}

      {/* ══════════════════════════════════════════════════
          5. MEDALS SHOWCASE  (y = 362–420)
      ══════════════════════════════════════════════════ */}

      {/* Eyebrow */}
      <text x="30" y="370" fontFamily="sans-serif" fontSize="8" letterSpacing="0.12em" opacity="0.55" fill="#2A2419">MEDALS EARNED</text>

      {/* Seed Medal — gold */}
      <circle cx="60" cy="394" r="14" fill="#C89B5D" stroke="#2A2419" strokeWidth="1.5" />
      <text x="60" y="398" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="white">S</text>

      {/* Star Medal — sky blue */}
      <circle cx="110" cy="394" r="14" fill="#5BA8E0" stroke="#2A2419" strokeWidth="1.5" />
      <text x="110" y="398" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="white">&#9733;</text>

      {/* Streak Medal — orange */}
      <circle cx="160" cy="394" r="14" fill="#E68A5B" stroke="#2A2419" strokeWidth="1.5" />
      <text x="160" y="398" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="white">3</text>

      {/* Caption */}
      <text x="30" y="420" fontFamily="sans-serif" fontSize="8" fill="#2A2419" opacity="0.55">3 medals · keep going</text>

      {/* ══════════════════════════════════════════════════
          6. SLOWER-VOICE TOGGLE  (y = 448–470)
      ══════════════════════════════════════════════════ */}

      {/* Pill outline */}
      <rect x="110" y="448" width="40" height="18" rx="9" fill="none" stroke="#2A2419" strokeWidth="1.5" opacity="0.4" />
      {/* Toggle circle — left/off */}
      <circle cx="120" cy="457" r="6" fill="#2A2419" opacity="0.25" />
      {/* Label */}
      <text x="156" y="461" fontFamily="sans-serif" fontSize="10" fill="#2A2419" opacity="0.55">slower voice</text>

      {/* ══════════════════════════════════════════════════
          7. FOOTER TEXT  (y = 496)
      ══════════════════════════════════════════════════ */}
      <text x="140" y="496" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#2A2419" opacity="0.4">stored on this device · no ads · no account</text>
    </>
  );
}

// ─────────────────────────────────────────────
// Screen 2 — Lesson (/s/ articulation)
// ─────────────────────────────────────────────
function ScreenLesson() {
  const steps = ["Hear", "See", "Trace", "Find", "Blend", "Cel."];
  return (
    <g transform="translate(0, 10)">
      {/* Eyebrow */}
      <text x="140" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="9" letterSpacing="0.15em" fill="#2A2419" opacity="0.5">LESSON · STEP 2 OF 6</text>

      {/* Title */}
      <text x="140" y="78" textAnchor="middle" fontFamily="var(--font-display), Georgia, serif" fontSize="26" fontStyle="italic" fill="#2A2419">Watch &amp; listen</text>

      {/* Step progress pills */}
      {steps.map((label, i) => {
        const cx = 42 + i * 39.2;
        const cy = 108;
        const isDone = i < 2;
        const isCurrent = i === 2;
        const isFuture = i >= 3;
        // Connector line before each step (except the first)
        const connectorStart = 42 + (i - 1) * 39.2;
        return (
          <g key={label}>
            {i > 0 && (
              <line
                x1={connectorStart + (isDone || i === 2 ? 5 : 5)}
                y1={cy}
                x2={cx - (isCurrent ? 6 : 5)}
                y2={cy}
                stroke={i <= 2 ? "#5C7C5E" : "#2A2419"}
                strokeWidth="1"
                opacity={i <= 2 ? 1 : 0.2}
              />
            )}
            {isDone && (
              <circle cx={cx} cy={cy} r={5} fill="#5C7C5E" />
            )}
            {isCurrent && (
              <circle cx={cx} cy={cy} r={6} fill="none" stroke="#5C7C5E" strokeWidth="1.8" />
            )}
            {isFuture && (
              <circle cx={cx} cy={cy} r={5} fill="none" stroke="#2A2419" strokeWidth="1" opacity="0.3" />
            )}
            <text
              x={cx} y={cy + 17}
              textAnchor="middle"
              fontFamily="sans-serif"
              fontSize="7"
              fill="#2A2419"
              opacity={isCurrent ? 1 : 0.5}
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* Big circular face — head outline */}
      <circle cx="140" cy="240" r="68" fill="rgba(214,234,250,0.4)" stroke="#2A2419" strokeWidth="2" />

      {/* Eyes (calm closed-eye arcs) */}
      <path d="M118 222 Q124 228 130 222" stroke="#2A2419" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M150 222 Q156 228 162 222" stroke="#2A2419" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Cheeks */}
      <circle cx="108" cy="252" r="4" fill="#E68A5B" opacity="0.35" />
      <circle cx="172" cy="252" r="4" fill="#E68A5B" opacity="0.35" />

      {/* ── Mouth — animated for /s/ articulation ── */}
      <motion.g
        animate={{ scaleX: [1, 1.05, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "140px 264px" }}
      >
        {/* Mouth interior — warm dark tone */}
        <path
          d="M 108 264 Q 124 252 140 254 Q 156 252 172 264 Q 156 280 140 280 Q 124 280 108 264 Z"
          fill="#6B2B26"
          stroke="#2A2419"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Teeth strip — visible between lips for /s/ */}
        <rect x="116" y="260" width="48" height="6" rx="0.8" fill="#FDF6EC" stroke="#2A2419" strokeWidth="0.6" />
        {/* Subtle tooth dividers */}
        <line x1="128" y1="260" x2="128" y2="266" stroke="#2A2419" strokeWidth="0.4" opacity="0.45" />
        <line x1="140" y1="260" x2="140" y2="266" stroke="#2A2419" strokeWidth="0.4" opacity="0.45" />
        <line x1="152" y1="260" x2="152" y2="266" stroke="#2A2419" strokeWidth="0.4" opacity="0.45" />

        {/* Tongue hint — sits at bottom of mouth */}
        <ellipse cx="140" cy="273" rx="14" ry="3" fill="#E68A5B" opacity="0.7" />

        {/* Upper lip — pink curve, with subtle cupid's bow at center */}
        <path
          d="M 108 264 Q 122 254 132 256 Q 136 252 140 253 Q 144 252 148 256 Q 158 254 172 264"
          stroke="#C8584A"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Lower lip — fuller curve */}
        <path
          d="M 108 264 Q 124 280 140 280 Q 156 280 172 264"
          stroke="#C8584A"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Animated "Sss" wisps emanating to the right of mouth */}
      {[0, 0.5, 1.0].map((delay, i) => (
        <motion.text
          key={`wisp-${i}`}
          x="172" y="266"
          fontFamily="var(--font-display), Georgia, serif"
          fontSize="11"
          fontStyle="italic"
          fill="#5BA8E0"
          animate={{ opacity: [0, 0.9, 0], x: [172, 192, 220] }}
          transition={{ duration: 1.8, delay, repeat: Infinity, ease: "easeOut" }}
        >
          s
        </motion.text>
      ))}

      {/* Caption */}
      <text x="140" y="345" textAnchor="middle" fontFamily="var(--font-display), Georgia, serif" fontSize="22" fontStyle="italic" fill="#2A2419">&ldquo;Sss...&rdquo;</text>

      {/* Helper line */}
      <text x="140" y="368" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#2A2419" opacity="0.6">say it with me — three slow breaths</text>

      {/* Replay button */}
      <g transform="translate(120, 400)">
        <circle cx="20" cy="20" r="20" fill="#C89B5D" stroke="#2A2419" strokeWidth="1.5" />
        {/* Curved arrow */}
        <path d="M 12 20 A 8 8 0 1 1 20 28" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <polygon points="18,28 22,28 20,32" fill="white" />
      </g>

      {/* Bottom hint */}
      <text x="140" y="475" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#2A2419" opacity="0.5">tap to hear again · slower voice in settings</text>
    </g>
  );
}

// ─────────────────────────────────────────────
// Screen 3 — Medal (celebration)
// ─────────────────────────────────────────────
function ScreenMedal() {
  return (
    <g transform="translate(0, 10)">
      {/* Eyebrow */}
      <text x="140" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="9" letterSpacing="0.18em" fill="#C89B5D" fontWeight="600">YOU EARNED A MEDAL</text>

      {/* Title */}
      <text x="140" y="96" textAnchor="middle" fontFamily="var(--font-display), Georgia, serif" fontSize="32" fontStyle="italic" fill="#2A2419">Well done, Leo.</text>

      {/* Medal with scale-in entrance and orbiting sparkles */}
      <motion.g
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        style={{ transformOrigin: "140px 240px" }}
      >
        {/* Sparkles — 6 small dots arranged around the medal */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const sx = 140 + Math.cos(rad) * 78;
          const sy = 240 + Math.sin(rad) * 78;
          return (
            <motion.circle
              key={`sparkle-${i}`}
              cx={sx} cy={sy} r="3" fill="#C89B5D"
              animate={{ opacity: [0, 1, 0], scale: [0.6, 1.3, 0.6] }}
              transition={{ duration: 1.8, delay: i * 0.25, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}

        {/* Medal ribbon — two triangular tails */}
        <polygon points="105,290 95,360 125,330" fill="#E6785A" stroke="#2A2419" strokeWidth="1.5" />
        <polygon points="175,290 185,360 155,330" fill="#D9624A" stroke="#2A2419" strokeWidth="1.5" />

        {/* Outer medal ring */}
        <circle cx="140" cy="240" r="56" fill="#C89B5D" stroke="#2A2419" strokeWidth="2.5" />
        {/* Inner decorative ring */}
        <circle cx="140" cy="240" r="44" fill="none" stroke="#2A2419" strokeWidth="1" opacity="0.35" />
        {/* Seed shape — teardrop-ish leaf in the center */}
        <path d="M 140 215 Q 158 235 140 268 Q 122 235 140 215 Z" fill="#FDF6EC" stroke="#2A2419" strokeWidth="1.5" />
        <line x1="140" y1="222" x2="140" y2="262" stroke="#2A2419" strokeWidth="1" opacity="0.4" />
      </motion.g>

      {/* Medal name + reason */}
      <text x="140" y="395" textAnchor="middle" fontFamily="var(--font-display), Georgia, serif" fontSize="20" fontStyle="italic" fill="#2A2419">Seed Medal</text>
      <text x="140" y="416" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#2A2419" opacity="0.65">for meeting your first sound</text>

      {/* Hand-written encouragement */}
      <text x="140" y="450" textAnchor="middle" fontFamily="var(--font-hand)" fontSize="15" fill="#C89B5D">keep blooming</text>

      {/* Continue pill */}
      <rect x="100" y="470" width="80" height="26" rx="13" fill="none" stroke="#2A2419" strokeWidth="1.4" opacity="0.55" />
      <text x="140" y="488" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#2A2419" opacity="0.75">Continue</text>
    </g>
  );
}

// ─────────────────────────────────────────────
// Screen 4 — Progress dashboard
// ─────────────────────────────────────────────
function ScreenMetrics() {
  const letters = ["S", "A", "T", "I", "P", "N"] as const;
  const barData = [2, 3, 1, 4, 2, 0, 0];
  return (
    <g transform="translate(0, 10)">
      {/* Eyebrow */}
      <text x="140" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="9" letterSpacing="0.15em" fill="#2A2419" opacity="0.55">LEO&apos;S PROGRESS</text>

      {/* Title */}
      <text x="140" y="76" textAnchor="middle" fontFamily="var(--font-display), Georgia, serif" fontSize="26" fontStyle="italic" fill="#2A2419">This week</text>

      {/* Big featured number */}
      <text x="140" y="148" textAnchor="middle" fontFamily="var(--font-display), Georgia, serif" fontSize="72" fontWeight="700" fill="#5C7C5E">5</text>
      <text x="140" y="172" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#2A2419" opacity="0.6">sounds met</text>

      {/* Three small stat columns */}
      <g>
        {/* Streak */}
        <text x="68" y="218" textAnchor="middle" fontFamily="var(--font-display), Georgia, serif" fontSize="22" fontStyle="italic" fill="#E6785A">3</text>
        <text x="68" y="234" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#2A2419" opacity="0.55" letterSpacing="0.05em">day streak</text>

        {/* Minutes */}
        <text x="140" y="218" textAnchor="middle" fontFamily="var(--font-display), Georgia, serif" fontSize="22" fontStyle="italic" fill="#5BA8E0">12</text>
        <text x="140" y="234" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#2A2419" opacity="0.55" letterSpacing="0.05em">mins total</text>

        {/* Medals */}
        <text x="212" y="218" textAnchor="middle" fontFamily="var(--font-display), Georgia, serif" fontSize="22" fontStyle="italic" fill="#C89B5D">3</text>
        <text x="212" y="234" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#2A2419" opacity="0.55" letterSpacing="0.05em">medals</text>
      </g>

      {/* Divider */}
      <line x1="30" y1="260" x2="250" y2="260" stroke="#2A2419" strokeWidth="0.5" opacity="0.1" />

      {/* Sounds met — Group 1 row */}
      <text x="30" y="280" fontFamily="sans-serif" fontSize="8" letterSpacing="0.12em" fill="#2A2419" opacity="0.55">GROUP 1 · S A T I P N</text>

      {/* 6 letter cards */}
      {letters.map((letter, i) => {
        const cx = 42 + i * 38;
        const heard = i < 5;
        return (
          <g key={letter}>
            <rect x={cx - 13} y={294} width={26} height={32} rx={5}
              fill={heard ? "#C89B5D" : "none"}
              stroke={heard ? "none" : "#2A2419"}
              strokeWidth={heard ? 0 : 1.2}
              opacity={heard ? 1 : 0.35}
            />
            <text x={cx} y={315} textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="700"
              fill={heard ? "white" : "#2A2419"} opacity={heard ? 1 : 0.4}>{letter}</text>
          </g>
        );
      })}

      {/* Mini chart label */}
      <text x="30" y="360" fontFamily="sans-serif" fontSize="8" letterSpacing="0.12em" fill="#2A2419" opacity="0.55">DAILY MINS · LAST 7 DAYS</text>

      {/* Bar chart — 7 bars */}
      {barData.map((mins, i) => {
        const x = 44 + i * 30;
        const barH = mins * 8 + (mins > 0 ? 2 : 1);
        const baseY = 422;
        return (
          <g key={`bar-${i}`}>
            <rect x={x - 7} y={baseY - barH} width={14} height={barH} rx={2}
              fill="#5C7C5E" opacity={mins > 0 ? 0.7 : 0.18} />
            <text x={x} y={438} textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#2A2419" opacity="0.55">{"MTWTFSS"[i]}</text>
          </g>
        );
      })}

      {/* Footer / privacy note */}
      <text x="140" y="478" textAnchor="middle" fontFamily="sans-serif" fontStyle="italic" fontSize="9" fill="#2A2419" opacity="0.5">stored on this device · no account · no sharing</text>
    </g>
  );
}

// ─────────────────────────────────────────────
// Slideshow phone mockup
// ─────────────────────────────────────────────
const SLIDE_LABELS = ["Home", "Lesson", "Medal", "Progress"] as const;

function AppPhoneMockup() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % 4), 5000);
    return () => clearInterval(id);
  }, [slide]); // restart timer when user manually jumps

  const screens = [<ScreenHome key="home" />, <ScreenLesson key="lesson" />, <ScreenMedal key="medal" />, <ScreenMetrics key="metrics" />];

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 280 560"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-70"
        aria-label="SoundBloom Sounds app screens"
      >
        <PhoneFrame x={6} y={2} width={268}>
          <AnimatePresence mode="wait">
            <motion.g
              key={slide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              {screens[slide]}
            </motion.g>
          </AnimatePresence>
        </PhoneFrame>
      </svg>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center gap-2" role="tablist" aria-label="App screens">
        {SLIDE_LABELS.map((label, i) => (
          <button
            key={label}
            onClick={() => setSlide(i)}
            role="tab"
            aria-selected={slide === i}
            aria-label={label}
            style={{
              width: slide === i ? 22 : 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: slide === i ? "var(--color-ink)" : "rgba(42,36,25,0.2)",
              transition: "width 0.35s cubic-bezier(0.22,1,0.36,1), background-color 0.3s",
              cursor: "pointer",
              border: "none",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide label */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          color: "var(--color-ink)",
          opacity: 0.55,
          marginTop: 8,
          fontStyle: "italic",
        }}
      >
        {SLIDE_LABELS[slide]}
      </p>
    </div>
  );
}

const doesItems = [
  "Plays sounds from a QR scan — warm voice, three repetitions, optional slower speed.",
  "Runs short calm modules: Hear → See → Trace → Find → Blend → Celebrate, ~5–8 minutes.",
  "Awards medals — Seed, Star, Bloom, Streak, Gold, Diamond, Quiet, Together. Never taken away.",
  "Lets up to 4 child profiles share one device — no account needed.",
  "Adapts pacing gently — notices which sounds your child engages with most.",
  "Weekly summary + downloadable progress PDF, useful for IEP documentation.",
  "Works offline once a sound has been opened. Free, forever — every feature, every book.",
];

const doesntItems = [
  "Send data without explicit opt-in. Cloud sync is opt-in only.",
  "Require an account, login, or email to start.",
  "Show ads, recommendations, or \"up next\" suggestions.",
  "Have premium tiers, in-app purchases, or paywalls.",
  "Autoplay between sounds — your child finishes when they finish.",
  "Show leaderboards or compare children to anyone else.",
  "Use red marks or \"wrong\" indicators — no failure states for the child.",
  "Make sounds without consent — every audio event requires a tap.",
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
            Inside the SoundBloom app.
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
            A companion to the books — never a replacement. Plays sounds from a QR scan, runs short calm modules, awards medals that can&apos;t be taken away, and tracks progress on the device. No account, no ads, no data sent anywhere unless you explicitly turn on sync.
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
            {"As much as the child needs. Never more than that."}
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

        <motion.div
          className="mt-16 max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-ochre)", fontFamily: "var(--font-sans)" }}
          >
            What&apos;s next
          </p>
          <p
            className="text-base leading-relaxed"
            style={{
              fontFamily: "var(--font-sans)",
              fontStyle: "italic",
              color: "var(--color-ink)",
              opacity: 0.65,
            }}
          >
            Opt-in cloud sync across devices. Classroom mode for teachers, with anonymised group views. Tamil and Hindi editions in the same calm design system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
