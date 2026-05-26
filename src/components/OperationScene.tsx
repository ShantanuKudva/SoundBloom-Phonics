"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import BookPageMock from "./svg/BookPageMock";
import PhoneFrame from "./svg/PhoneFrame";
import AppSoundScreen from "./svg/AppSoundScreen";

const ease = [0.22, 1, 0.36, 1] as const;

const TOTAL_MS = 14400;

const BEATS = [
  { id: "open",   start: 0,     end: 3600,  caption: "Leo opens to S. Same paper, same place for the letter, same place for the picture. He knows where everything is." },
  { id: "play",   start: 3600,  end: 9600,  caption: "Leo scans the QR with the phone. The SoundBloom Sounds app opens. A warm voice says 'Sss... S is for Sun.' Three times, slowly. Leo whispers 'Sss' back the second time." },
  { id: "colour", start: 9600,  end: 14400, caption: "The colour key told him three colours — yellow, orange, blue. No decision to make. He starts." },
] as const;

type BeatId = typeof BEATS[number]["id"];

function getActiveBeat(elapsed: number): BeatId {
  for (const beat of BEATS) {
    if (elapsed >= beat.start && elapsed < beat.end) return beat.id;
  }
  return "colour";
}

// Beat 1 — open book on table
function BeatOpen() {
  return (
    <motion.g
      key="open"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      {/* Table edge */}
      <line x1="0" y1="400" x2="800" y2="400" stroke="#2A2419" strokeWidth="3" strokeLinecap="round" />
      <rect x="0" y="402" width="800" height="3" fill="#2A2419" opacity="0.08" />

      {/* Book shadow on table */}
      <ellipse cx="400" cy="402" rx="220" ry="7" fill="#2A2419" opacity="0.07" />

      {/* Left page — A is for Apple, faded so focus stays on the right page */}
      <g transform="translate(184, 78)" opacity="0.6">
        <BookPageMock size={220} letter="A" word="ant" illustrationSrc="/illustrations/02-a-ant.png" />
      </g>

      {/* Right page — BookPageMock at 220×220, positioned at x:400 y:82, settling animation */}
      <motion.g
        initial={{ rotate: -2 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        style={{ transformOrigin: "400px 390px" }}
      >
        <g transform="translate(396, 78)">
          <BookPageMock size={220} letter="S" word="snake" illustrationSrc="/illustrations/01-s-snake.png" />
        </g>
      </motion.g>

    </motion.g>
  );
}

// Beat 2 — phone centred, large, with app UI and sound ripples
function BeatPlay() {
  const phoneCx = 400;
  const phoneCy = 225;
  return (
    <motion.g
      key="play"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      {/* Sound ripple circles BEHIND phone */}
      {[0, 700, 1400].map((delayMs, i) => (
        <motion.circle
          key={`ripple-${i}`}
          cx={phoneCx}
          cy={phoneCy}
          fill="none"
          stroke="#C89B5D"
          strokeWidth="1.5"
          initial={{ r: 80, opacity: 0.5 }}
          animate={{ r: 180, opacity: 0 }}
          transition={{
            duration: 1.8,
            delay: delayMs / 1000,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Phone body — scale-in entrance */}
      <motion.g
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        style={{ transformOrigin: `${phoneCx}px ${phoneCy}px` }}
      >
        <PhoneFrame x={306} y={30} width={188}>
          <AppSoundScreen screenX={314} screenY={42} screenWidth={172} />
        </PhoneFrame>
      </motion.g>
    </motion.g>
  );
}

// Beat 3 — book page centred, yellow scribble animates on top
function BeatColour() {
  return (
    <motion.g
      key="colour"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      {/* BookPageMock centred — 380×380, positioned at translate(210, 35) */}
      <g transform="translate(210, 35)">
        <BookPageMock size={380} letter="S" word="snake" illustrationSrc="/illustrations/01-s-snake.png" />
      </g>

      {/* Yellow crayon strokes — repositioned onto the snake's coiled body
          (lower third of the PNG, world y ≈ 175–215, where the snake's body
          curves are densest and horizontal sweeps read as "colouring inside"). */}

      {/* Stroke 1 — top of coils */}
      <motion.path
        d="M 458 175 Q 487 173 516 177"
        stroke="#F2C744" strokeWidth="6" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      />

      {/* Stroke 2 — through middle coil */}
      <motion.path
        d="M 454 190 Q 487 192 520 188"
        stroke="#F2C744" strokeWidth="6" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      />

      {/* Stroke 3 — lower coil */}
      <motion.path
        d="M 458 204 Q 487 206 518 202"
        stroke="#F2C744" strokeWidth="6" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
      />

      {/* Stroke 4 — bottom fill */}
      <motion.path
        d="M 462 216 Q 487 218 512 214"
        stroke="#F2C744" strokeWidth="6" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
      />

      {/* Crayon — tip now lands inside the coils (~487, 199); body angled up-right.
          translate(429, 130) + rotate(40) → tip at (487, 199). */}
      <g transform="translate(429, 130) rotate(40)">
        <rect x="-9" y="0" width="18" height="70" rx="3" fill="#F2C744" stroke="#2A2419" strokeWidth="2.5" />
        <rect x="-9" y="20" width="18" height="12" fill="#E8B832" stroke="#2A2419" strokeWidth="1" />
        <path d="M -9 70 L 0 90 L 9 70 Z" fill="#F2C744" stroke="#2A2419" strokeWidth="2" strokeLinejoin="round" />
        <path d="M -4 80 L 0 90 L 4 80 Z" fill="#F2C744" strokeWidth="0" />
      </g>

    </motion.g>
  );
}

export default function OperationScene() {
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const hasStarted = useRef(false);

  const inView = useInView(sectionRef, { once: true, margin: "-200px" });

  useEffect(() => {
    if (inView && !hasStarted.current) {
      hasStarted.current = true;
      setPlaying(true);
    }
  }, [inView]);

  useEffect(() => {
    if (!playing) {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimeRef.current = null;
      return;
    }

    function tick(timestamp: number) {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      setElapsed((prev) => {
        const next = prev + delta;
        if (next >= TOTAL_MS) {
          setPlaying(false);
          setCompleted(true);
          return TOTAL_MS;
        }
        return next;
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [playing]);

  function handleReplay() {
    setElapsed(0);
    setCompleted(false);
    lastTimeRef.current = null;
    setPlaying(true);
  }

  function handlePlayPause() {
    if (completed) {
      handleReplay();
    } else {
      setPlaying((p) => !p);
    }
  }

  const activeBeat = getActiveBeat(elapsed);
  const activeCaption = BEATS.find((b) => b.id === activeBeat)?.caption ?? "";
  const progress = Math.min(elapsed / TOTAL_MS, 1);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-butter)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-moss)", fontFamily: "var(--font-sans)" }}
          >
            an example
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
            A Saturday morning with Leo.
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{
              fontFamily: "var(--font-sans)",
              fontStyle: "italic",
              color: "var(--color-ink)",
              opacity: 0.6,
            }}
          >
            Leo is five. He&rsquo;s been with the book for two weeks. This is what one minute looks like — in fourteen seconds.
          </p>
        </motion.div>

        {/* Scene canvas */}
        <div
          className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden"
          style={{
            aspectRatio: "16/9",
            border: "1px solid rgba(42,36,25,0.15)",
            backgroundColor: "var(--color-paper)",
            position: "relative",
          }}
        >
          <svg
            viewBox="0 0 800 450"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-label="Animated scene showing Leo using the SoundBloom book"
          >
            <AnimatePresence mode="wait">
              {activeBeat === "open"   && <BeatOpen   key="open"   />}
              {activeBeat === "play"   && <BeatPlay   key="play"   />}
              {activeBeat === "colour" && <BeatColour key="colour" />}
            </AnimatePresence>
          </svg>
        </div>

        {/* Progress bar */}
        <div
          className="max-w-4xl mx-auto mt-6"
          style={{ height: "2px", backgroundColor: "rgba(92,124,94,0.2)", borderRadius: "1px", overflow: "hidden" }}
        >
          <motion.div
            style={{
              height: "100%",
              backgroundColor: "var(--color-moss)",
              transformOrigin: "left",
              scaleX: progress,
            }}
          />
        </div>

        {/* Caption */}
        <div className="max-w-3xl mx-auto mt-8 min-h-[4rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeBeat}
              className="text-lg leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--color-ink)",
                opacity: 0.8,
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease }}
            >
              {activeCaption}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePlayPause}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              border: "1.5px solid rgba(42,36,25,0.35)",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="2" width="4" height="12" rx="1.5" fill="#2A2419" />
                <rect x="9" y="2" width="4" height="12" rx="1.5" fill="#2A2419" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <polygon points="3,2 13,8 3,14" fill="#2A2419" />
              </svg>
            )}
          </button>

          {completed && (
            <motion.button
              onClick={handleReplay}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              style={{
                fontFamily: "var(--font-hand)",
                color: "var(--color-ochre)",
                fontSize: "18px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 8px",
              }}
            >
              Replay
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
