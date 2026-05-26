"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import BookPageMock from "./svg/BookPageMock";

const ease = [0.22, 1, 0.36, 1] as const;

const TOTAL_MS = 14400;

const BEATS = [
  { id: "open",   start: 0,     end: 3200,  caption: "Leo opens to S. Same paper, same place for the letter, same place for the picture. He knows where everything is." },
  { id: "point",  start: 3200,  end: 6800,  caption: "He points at the small square in the corner. He doesn't say anything. He doesn't have to." },
  { id: "play",   start: 6800,  end: 11200, caption: "The SoundBloom Sounds app opens. A warm voice says 'Sss... S is for Sun.' Three times, slowly. Leo whispers 'Sss' back the second time." },
  { id: "colour", start: 11200, end: 14400, caption: "The colour key told him three colours — yellow, orange, blue. No decision to make. He starts." },
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

      {/* Left page — butter-coloured placeholder */}
      <rect x="182" y="82" width="216" height="306" rx="4" fill="#F0E8D8" stroke="#2A2419" strokeWidth="2.5" />
      {[115, 132, 149, 166, 183, 200, 217, 234].map((y, i) => (
        <line key={i} x1="196" y1={y} x2="390" y2={y} stroke="#2A2419" strokeWidth="0.6" opacity="0.1" />
      ))}
      <text x="200" y="230" fontFamily="Georgia, serif" fontSize="64" fontWeight="700" fill="#2A2419" opacity="0.2">R</text>

      {/* Right page — BookPageMock at 220×220, positioned at x:400 y:82, settling animation */}
      <motion.g
        initial={{ rotate: -2 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        style={{ transformOrigin: "400px 390px" }}
      >
        <g transform="translate(396, 78)">
          <BookPageMock size={220} letter="S" word="Sun" illustration="sun" />
        </g>
      </motion.g>

      {/* Spine crease */}
      <rect x="395" y="82" width="10" height="306" fill="#2A2419" opacity="0.06" rx="1" />
      <line x1="400" y1="82" x2="400" y2="388" stroke="#2A2419" strokeWidth="1.5" opacity="0.25" />
    </motion.g>
  );
}

// Beat 2 — zoomed into QR corner; BookPageMock at size=520 offset so bottom-right is visible
function BeatPoint() {
  return (
    <motion.g
      key="point"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      {/* Page fill — colour matches BookPageMock paper */}
      <rect x="0" y="0" width="800" height="450" fill="#FDF6EC" />

      {/* BookPageMock at size=520, offset translate(140, -60) so bottom-right quadrant is centred */}
      <g transform="translate(140, -60)">
        <BookPageMock size={520} letter="S" word="Sun" illustration="sun" />
      </g>

      {/* Page border lines matching top/left edges of an over-cropped page */}
      <line x1="0" y1="3" x2="800" y2="3" stroke="#2A2419" strokeWidth="3" />
      <line x1="3" y1="0" x2="3" y2="450" stroke="#2A2419" strokeWidth="3" />

      {/* Scan arcs emanating from QR centre — QR at ~(156/200*520+140, 164/200*520-60) = ~(545, 366) */}
      {[0, 200, 400].map((delayMs, i) => (
        <motion.circle
          key={`arc-${i}`}
          cx={545} cy={366}
          fill="none"
          stroke="#5C7C5E"
          strokeWidth="2"
          initial={{ r: 0, opacity: 0.7 }}
          animate={{ r: 80, opacity: 0 }}
          transition={{
            duration: 1.0,
            delay: 1.5 + delayMs / 1000,
            repeat: 1,
            ease: "easeOut",
            times: [0, 1],
          }}
        />
      ))}

      {/* Child pointing hand — fist with extended index finger pointing up-left toward QR */}
      <motion.g
        initial={{ y: 80, opacity: 0.4 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0, ease }}
      >
        {/* Rotate whole hand ~-35deg so finger aims up-left toward QR at ~(545,366) */}
        <g transform="translate(660, 410) rotate(-35)">
          {/* Palm / back-of-hand ellipse */}
          <ellipse cx="0" cy="0" rx="24" ry="22" fill="#FDF6EC" stroke="#2A2419" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Extended index finger pointing upward (before rotation) */}
          <rect x="-7" y="-80" width="14" height="62" rx="7" fill="#FDF6EC" stroke="#2A2419" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Thumb stub on the left side of palm */}
          <ellipse cx="-20" cy="4" rx="8" ry="12" fill="#FDF6EC" stroke="#2A2419" strokeWidth="2.5" strokeLinejoin="round" transform="rotate(-25 -20 4)" />
          {/* Two small curled-finger bumps on the right edge of palm */}
          <path d="M 22 -8 Q 34 -2 22 6" fill="none" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 22 8 Q 34 14 22 20" fill="none" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </motion.g>

      {/* Adult hand from top-left holding phone */}
      <motion.g
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease }}
      >
        {/* Phone body */}
        <rect x="80" y="30" width="140" height="260" rx="18" fill="#2A2419" stroke="#2A2419" strokeWidth="2" />
        <rect x="88" y="38" width="124" height="244" rx="12" fill="#FDF6EC" />
        {/* Notch */}
        <rect x="125" y="44" width="50" height="10" rx="5" fill="#2A2419" />
        {/* Screen content */}
        <text x="150" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#2A2419" opacity="0.6">SoundBloom</text>
        <circle cx="150" cy="155" r="34" fill="none" stroke="#2A2419" strokeWidth="2.5" />
        <text x="150" y="172" textAnchor="middle" fontFamily="Georgia, serif" fontSize="44" fontWeight="700" fill="#2A2419">S</text>
        {/* Simplified grip: flat back-of-hand above phone top edge + four finger pads */}
        {/* Back-of-hand silhouette sitting just above phone top (phone top edge at y=30) */}
        <path
          d="M 82 28 Q 92 18 150 18 Q 208 18 218 28 Q 218 36 150 38 Q 82 36 82 28 Z"
          fill="#FDF6EC" stroke="#2A2419" strokeWidth="2.5" strokeLinejoin="round"
        />
        {/* Four finger pads descending from bottom of back-of-hand */}
        <rect x="95"  y="34" width="8" height="12" rx="4" fill="#FDF6EC" stroke="#2A2419" strokeWidth="2" />
        <rect x="115" y="34" width="8" height="12" rx="4" fill="#FDF6EC" stroke="#2A2419" strokeWidth="2" />
        <rect x="135" y="34" width="8" height="12" rx="4" fill="#FDF6EC" stroke="#2A2419" strokeWidth="2" />
        <rect x="155" y="34" width="8" height="12" rx="4" fill="#FDF6EC" stroke="#2A2419" strokeWidth="2" />
      </motion.g>
    </motion.g>
  );
}

// Beat 3 — phone centred, large, with app UI and sound ripples
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
        {/* Outer phone shell */}
        <rect x="280" y="30" width="240" height="390" rx="28" fill="#2A2419" />
        {/* Screen */}
        <rect x="292" y="42" width="216" height="366" rx="20" fill="#FDF6EC" />
        {/* Notch */}
        <rect x="370" y="48" width="60" height="8" rx="4" fill="#2A2419" />

        {/* Wordmark */}
        <text x={phoneCx} y="84" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#2A2419" opacity="0.65" letterSpacing="0.5">SoundBloom Sounds</text>

        {/* Big S in thick circle */}
        <circle cx={phoneCx} cy="210" r="72" fill="none" stroke="#2A2419" strokeWidth="4" />
        <text x={phoneCx} y="246" textAnchor="middle" fontFamily="Georgia, serif" fontSize="96" fontWeight="700" fill="#2A2419">S</text>

        {/* S is for Sun label */}
        <text x={phoneCx} y="310" textAnchor="middle" fontFamily="sans-serif" fontSize="15" fill="#2A2419" opacity="0.8">S is for Sun</text>

        {/* Play button — ochre filled triangle */}
        <circle cx="356" cy="352" r="22" fill="#C89B5D" />
        <polygon points="349,342 373,352 349,362" fill="white" />

        {/* Sound wave bars — three animated vertical rects */}
        <motion.rect
          x="388" y="344" width="7" height="16" rx="3" fill="#2A2419"
          animate={{ scaleY: [1, 1.7, 1, 0.6, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0, ease: "easeInOut" }}
          style={{ transformOrigin: "391.5px 352px" }}
        />
        <motion.rect
          x="399" y="340" width="7" height="24" rx="3" fill="#2A2419"
          animate={{ scaleY: [1, 0.5, 1, 1.8, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
          style={{ transformOrigin: "402.5px 352px" }}
        />
        <motion.rect
          x="410" y="346" width="7" height="20" rx="3" fill="#2A2419"
          animate={{ scaleY: [1, 1.5, 0.7, 1, 1.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.6, ease: "easeInOut" }}
          style={{ transformOrigin: "413.5px 356px" }}
        />

        {/* Prev/next chevrons */}
        <text x="300" y="390" fontFamily="sans-serif" fontSize="16" fill="#2A2419" opacity="0.3">&#x2039; R</text>
        <text x="468" y="390" fontFamily="sans-serif" fontSize="16" fill="#2A2419" opacity="0.3">T &#x203a;</text>

        {/* Footer URL */}
        <text x={phoneCx} y="408" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#2A2419" opacity="0.4">sounds.soundbloom.co/s</text>

        {/* Home indicator */}
        <rect x="358" y="415" width="84" height="5" rx="2.5" fill="#2A2419" opacity="0.25" />
      </motion.g>
    </motion.g>
  );
}

// Beat 4 — book page centred, crayon-holding hand, yellow scribble animates on top
function BeatColour() {
  const sunCx = 400;
  const sunCy = 220;
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
        <BookPageMock size={380} letter="S" word="Sun" illustration="sun" />
      </g>

      {/* Yellow zigzag scribble inside sun inner circle — on top, animates path length */}
      {/* Sun centre in world coords: 210 + (100/200)*380 = 400, 35 + (110/200)*380 = 244 */}
      <motion.path
        d="M 372 230 L 428 235 L 372 243 L 428 249 L 372 256 L 428 262 L 372 269"
        stroke="#F2C744"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 1 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.3, ease: "easeInOut" }}
      />

      {/* Crayon — positioned at top-right with tip near sun edge */}
      <g transform="translate(536, 100) rotate(40)">
        <rect x="-9" y="0" width="18" height="70" rx="3" fill="#F2C744" stroke="#2A2419" strokeWidth="2.5" />
        <rect x="-9" y="20" width="18" height="12" fill="#E8B832" stroke="#2A2419" strokeWidth="1" />
        <path d="M -9 70 L 0 90 L 9 70 Z" fill="#F2C744" stroke="#2A2419" strokeWidth="2" strokeLinejoin="round" />
        <path d="M -4 80 L 0 90 L 4 80 Z" fill="#F2C744" strokeWidth="0" />
      </g>

      {/* Crayon-holding hand — simple stylised fist at top end of crayon */}
      {/* Crayon anchored at translate(536,100) rotate(40); fist sits near (536,95) */}
      <g transform="translate(536, 92)">
        {/* Back of closed fist — near-circle ellipse */}
        <ellipse cx="0" cy="0" rx="22" ry="24" fill="#FDF6EC" stroke="#2A2419" strokeWidth="2.5" />
        {/* Three knuckle hint lines on top of fist */}
        <line x1="-12" y1="-14" x2="-6"  y2="-18" stroke="#2A2419" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-2"  y1="-20" x2="4"   y2="-23" stroke="#2A2419" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9"   y1="-18" x2="15"  y2="-14" stroke="#2A2419" strokeWidth="1.5" strokeLinecap="round" />
        {/* Thumb arc wrapping around the right side */}
        <path d="M 18,-8 Q 26,4 18,16" fill="none" stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" />
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
              {activeBeat === "point"  && <BeatPoint  key="point"  />}
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
