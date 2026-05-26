import type { Book } from "../../lib/books";
import { asset } from "../../lib/assetPath";

type Props = {
  size: number; // rendered width in pixels; height is size * 1.1 (portrait book aspect)
  book: Pick<
    Book,
    "id" | "title" | "subtitle" | "cardBg" | "cardAccent" | "cardDark" | "spineColor" | "coverHeroSrc"
  >;
};

// Fallback inline mascot — used when book.coverHeroSrc is not provided.
// 9 primitives total. Petals filled rgba(255,255,255,0.4) so they read light on tinted bg.
function InlineMascot({ cx, cy, dark }: { cx: number; cy: number; dark: string }) {
  const r = 9;
  const dist = 16;
  const petals = Array.from({ length: 5 }, (_, i) => {
    const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
    return { px: cx + dist * Math.cos(angle), py: cy + dist * Math.sin(angle) };
  });
  return (
    <g>
      <line x1={cx} y1={cy + 11} x2={cx} y2={cy + 36} stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      <path d={`M ${cx} ${cy + 26} C ${cx - 14} ${cy + 20} ${cx - 16} ${cy + 32} ${cx} ${cy + 30}`} fill="rgba(255,255,255,0.35)" stroke={dark} strokeWidth="2.5" strokeLinejoin="round" />
      <path d={`M ${cx} ${cy + 26} C ${cx + 14} ${cy + 20} ${cx + 16} ${cy + 32} ${cx} ${cy + 30}`} fill="rgba(255,255,255,0.35)" stroke={dark} strokeWidth="2.5" strokeLinejoin="round" />
      {petals.map(({ px, py }, i) => (
        <circle key={i} cx={px} cy={py} r={r} fill="rgba(255,255,255,0.4)" stroke={dark} strokeWidth="2.5" />
      ))}
      <circle cx={cx} cy={cy} r={11} fill="rgba(255,255,255,0.55)" stroke={dark} strokeWidth="2.5" />
    </g>
  );
}

export default function BookCoverMock({ size, book }: Props) {
  const subjectTitle = book.title.split(" — ")[1] ?? book.title;

  return (
    <svg
      viewBox="0 0 200 220"
      width={size}
      height={size * 1.1}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
      aria-label={book.title}
    >
      {/* Cover background */}
      <rect
        x="0"
        y="0"
        width="200"
        height="220"
        rx="3"
        fill={book.cardBg}
        stroke="#2A2419"
        strokeWidth="3"
      />

      {/* Top accent stripe */}
      <rect x="0" y="0" width="200" height="18" fill={book.cardAccent} />

      {/* Series mark inside stripe */}
      <text
        x="100"
        y="12"
        textAnchor="middle"
        fontSize="8"
        fontFamily="var(--font-sans), sans-serif"
        fontWeight="700"
        fill="white"
        letterSpacing="0.1em"
      >
        SoundBloom Phonics
      </text>

      {/* Cover hero — book-specific PNG when set (mix-blend-mode multiply so the
          white PNG background blends with this book's group-coloured card bg);
          falls back to the inline mascot for books without their own hero asset. */}
      {book.coverHeroSrc ? (
        <image
          href={asset(book.coverHeroSrc)}
          x="46"
          y="22"
          width="108"
          height="100"
          preserveAspectRatio="xMidYMid meet"
          style={{ mixBlendMode: "multiply" }}
        />
      ) : (
        <InlineMascot cx={100} cy={72} dark={book.cardDark} />
      )}

      {/* Big book label */}
      <text
        x="100"
        y="132"
        textAnchor="middle"
        fontFamily="var(--font-display), serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="22"
        fill={book.cardDark}
        style={{ fontVariationSettings: "'opsz' 24" }}
      >
        Book {book.id}
      </text>

      {/* Subject title */}
      <text
        x="100"
        y="156"
        textAnchor="middle"
        fontFamily="var(--font-display), serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="15"
        fill={book.cardDark}
      >
        {subjectTitle}
      </text>

      {/* Colouring-book line — KDP searchability requirement */}
      <text
        x="100"
        y="172"
        textAnchor="middle"
        fontFamily="var(--font-sans), sans-serif"
        fontSize="6"
        fill={book.cardDark}
        opacity="0.7"
        letterSpacing="0.08em"
      >
        A colouring book
      </text>

      {/* Age pill background */}
      <rect x="72" y="186" width="56" height="14" rx="7" fill={book.cardAccent} />

      {/* Age pill text */}
      <text
        x="100"
        y="195"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="white"
        fontFamily="var(--font-sans), sans-serif"
        letterSpacing="0.05em"
      >
        Ages 3–7
      </text>

      {/* Publisher mark */}
      <text
        x="100"
        y="212"
        textAnchor="middle"
        fontSize="6"
        fontFamily="var(--font-sans), sans-serif"
        fill={book.cardDark}
        opacity="0.55"
        letterSpacing="0.05em"
      >
        SoundBloom
      </text>
    </svg>
  );
}
