import { phonicsGroups } from "../../lib/designTokens";
import { asset } from "../../lib/assetPath";

type IllustrationName = "sun" | "apple" | "ball" | "cat" | "dog" | "egg" | "fish" | "moon";

type Props = {
  size: number;
  letter: string;
  word: string;
  illustration?: IllustrationName;
  illustrationSrc?: string;     // optional PNG path; if set, overrides inline illustration
  showColourKey?: boolean;
  showQR?: boolean;
  showLabel?: boolean;
  background?: "paper" | "butter";
  // New props
  group?: number;
  sound?: string;
  pageType?: string;
  showHeader?: boolean;
  showSayIt?: boolean;
  showFooter?: boolean;
};

const groupOf = (letter: string): number => {
  const upper = letter.toUpperCase();
  const idx = phonicsGroups.findIndex(g => (g.letters as readonly string[]).includes(upper));
  return idx >= 0 ? idx + 1 : 1;
};

const QR_PATTERN: number[][] = [
  [1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0],
  [0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0],
  [1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1],
  [0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0],
  [1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1],
  [0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0],
  [0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0],
  [1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1],
  [1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0],
  [1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1],
  [1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0],
  [1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1],
];

function InlineQR({ x, y, qrSize }: { x: number; y: number; qrSize: number }) {
  const cell = qrSize / 21;
  const border = 2;
  return (
    <g>
      <rect
        x={x - border}
        y={y - border}
        width={qrSize + border * 2}
        height={qrSize + border * 2}
        fill="white"
        stroke="#2A2419"
        strokeWidth="1.5"
        rx="2"
      />
      {QR_PATTERN.map((row, r) =>
        row.map((v, c) =>
          v ? (
            <rect
              key={`${r}-${c}`}
              x={x + c * cell}
              y={y + r * cell}
              width={cell}
              height={cell}
              fill="#2A2419"
            />
          ) : null
        )
      )}
    </g>
  );
}

function Sun({ cx, cy }: { cx: number; cy: number }) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <>
      <circle cx={cx} cy={cy} r="22" fill="none" stroke="#2A2419" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="12" fill="#F4E6C8" stroke="#2A2419" strokeWidth="1.5" />
      {rays.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={cx + Math.cos(rad) * 27}
            y1={cy + Math.sin(rad) * 27}
            x2={cx + Math.cos(rad) * 34}
            y2={cy + Math.sin(rad) * 34}
            stroke="#2A2419"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </>
  );
}

function Apple({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r="22" fill="none" stroke="#2A2419" strokeWidth="2" />
      <line x1={cx} y1={cy - 22} x2={cx} y2={cy - 30} stroke="#2A2419" strokeWidth="2.5" strokeLinecap="round" />
      <path d={`M ${cx} ${cy - 30} C ${cx} ${cy - 30} ${cx + 10} ${cy - 38} ${cx + 12} ${cy - 34}`} stroke="#2A2419" strokeWidth="2" strokeLinecap="round" fill="none" />
    </>
  );
}

function Ball({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r="22" fill="none" stroke="#2A2419" strokeWidth="2" />
      <path d={`M ${cx - 22} ${cy} C ${cx - 8} ${cy - 16} ${cx + 8} ${cy - 16} ${cx + 22} ${cy}`} fill="none" stroke="#2A2419" strokeWidth="2" strokeLinecap="round" />
    </>
  );
}

function Cat({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r="22" fill="none" stroke="#2A2419" strokeWidth="2" />
      <polygon points={`${cx - 16},${cy - 14} ${cx - 26},${cy - 34} ${cx - 6},${cy - 14}`} fill="none" stroke="#2A2419" strokeWidth="2" strokeLinejoin="round" />
      <polygon points={`${cx + 16},${cy - 14} ${cx + 26},${cy - 34} ${cx + 6},${cy - 14}`} fill="none" stroke="#2A2419" strokeWidth="2" strokeLinejoin="round" />
      <circle cx={cx - 8} cy={cy - 4} r="2.5" fill="#2A2419" />
      <circle cx={cx + 8} cy={cy - 4} r="2.5" fill="#2A2419" />
      <polygon points={`${cx},${cy + 5} ${cx - 3},${cy + 10} ${cx + 3},${cy + 10}`} fill="#2A2419" opacity="0.75" />
      <line x1={cx - 20} y1={cy + 8} x2={cx - 6} y2={cy + 7} stroke="#2A2419" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1={cx - 20} y1={cy + 12} x2={cx - 6} y2={cy + 11} stroke="#2A2419" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1={cx + 20} y1={cy + 8} x2={cx + 6} y2={cy + 7} stroke="#2A2419" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1={cx + 20} y1={cy + 12} x2={cx + 6} y2={cy + 11} stroke="#2A2419" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </>
  );
}

function Dog({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r="20" fill="none" stroke="#2A2419" strokeWidth="2" />
      <ellipse cx={cx - 22} cy={cy + 8} rx="9" ry="18" fill="none" stroke="#2A2419" strokeWidth="2" />
      <ellipse cx={cx + 22} cy={cy + 8} rx="9" ry="18" fill="none" stroke="#2A2419" strokeWidth="2" />
      <circle cx={cx - 7} cy={cy - 4} r="2.5" fill="#2A2419" />
      <circle cx={cx + 7} cy={cy - 4} r="2.5" fill="#2A2419" />
      <ellipse cx={cx} cy={cy + 12} rx="5" ry="3.5" fill="#2A2419" opacity="0.75" />
    </>
  );
}

function Egg({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <ellipse cx={cx} cy={cy} rx="18" ry="24" fill="none" stroke="#2A2419" strokeWidth="2" />
      <polyline
        points={`${cx - 10},${cy - 12} ${cx - 6},${cy - 6} ${cx - 10},${cy}`}
        fill="none"
        stroke="#2A2419"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </>
  );
}

function Fish({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <ellipse cx={cx - 4} cy={cy} rx="24" ry="14" fill="none" stroke="#2A2419" strokeWidth="2" />
      <polygon
        points={`${cx + 20},${cy} ${cx + 36},${cy - 14} ${cx + 36},${cy + 14}`}
        fill="none"
        stroke="#2A2419"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx={cx - 22} cy={cy - 4} r="3" fill="none" stroke="#2A2419" strokeWidth="2" />
      <circle cx={cx - 22} cy={cy - 4} r="1.2" fill="#2A2419" />
      <path d={`M ${cx - 14} ${cy - 10} C ${cx - 10} ${cy - 2} ${cx - 10} ${cy + 10} ${cx - 14} ${cy + 16}`} fill="none" stroke="#2A2419" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </>
  );
}

function Moon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <path
      d={`M ${cx} ${cy - 22} A 22 22 0 1 0 ${cx} ${cy + 22} A 14 14 0 1 1 ${cx} ${cy - 22} Z`}
      fill="none"
      stroke="#2A2419"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  );
}

function Illustration({ name, cx, cy }: { name: IllustrationName; cx: number; cy: number }) {
  switch (name) {
    case "sun":   return <Sun cx={cx} cy={cy} />;
    case "apple": return <Apple cx={cx} cy={cy} />;
    case "ball":  return <Ball cx={cx} cy={cy} />;
    case "cat":   return <Cat cx={cx} cy={cy} />;
    case "dog":   return <Dog cx={cx} cy={cy} />;
    case "egg":   return <Egg cx={cx} cy={cy} />;
    case "fish":  return <Fish cx={cx} cy={cy} />;
    case "moon":  return <Moon cx={cx} cy={cy} />;
  }
}

export default function BookPageMock({
  size,
  letter,
  word,
  illustration,
  illustrationSrc,
  showColourKey = true,
  showQR = true,
  showLabel = true,
  background = "paper",
  group,
  sound,
  pageType = "Colouring",
  showHeader = true,
  showSayIt = true,
  showFooter = true,
}: Props) {
  // Derive defaults for new props
  const resolvedGroup = group ?? groupOf(letter);
  const resolvedSound = sound ?? letter.toLowerCase();
  // Page background: group-tinted when we know the group, else fall back to the
  // generic paper/butter palette. The group bg hex values are already in the
  // 20–30% opacity range per docs/design.md §2.3 — used at full saturation here.
  const groupBg = phonicsGroups[resolvedGroup - 1]?.bg;
  const bgFill = groupBg ?? (background === "butter" ? "#F4E6C8" : "#FAF8F0");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: "100%", height: "auto", display: "block" }}
    >
      {/* Page background */}
      <rect x="0" y="0" width="200" height="200" rx="3" fill={bgFill} stroke="#2A2419" strokeWidth="3" />

      {/* Header bar */}
      {showHeader && (
        <>
          <rect x="0" y="0" width="200" height="14" fill="rgba(42,36,25,0.08)" />
          <text
            x="100"
            y="9.5"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="6"
            fill="#2A2419"
            opacity="0.6"
          >
            SoundBloom · Group {resolvedGroup}
          </text>
        </>
      )}

      {/* Letter box — top-left per §2.2 */}
      <rect x="14" y="22" width="80" height="80" rx="2" fill="none" stroke="#2A2419" strokeWidth="2.5" />

      {/* Big display letter inside box — sans-serif per §2.4 */}
      <text
        x="54"
        y="76"
        textAnchor="middle"
        fontFamily="var(--font-sans), sans-serif"
        fontSize="44"
        fontWeight="700"
        fill="#2A2419"
      >
        {letter}
      </text>

      {/* IPA notation below letter inside box */}
      <text
        x="54"
        y="94"
        textAnchor="middle"
        fontFamily="var(--font-sans), sans-serif"
        fontSize="5.5"
        fill="#2A2419"
        opacity="0.55"
      >
        /{resolvedSound}/
      </text>

      {/* Illustration box — top-right, same size as letter box per §2.2 */}
      <rect x="106" y="22" width="80" height="80" rx="2" fill="none" stroke="#2A2419" strokeWidth="2.5" />

      {/* Centred + scaled so illustration fits box (146,62) with margin.
          If illustrationSrc is set, render the PNG instead of the named inline SVG. */}
      {illustrationSrc ? (
        <image
          href={asset(illustrationSrc)}
          x={108}
          y={24}
          width={76}
          height={76}
          preserveAspectRatio="xMidYMid meet"
          style={{ mixBlendMode: "multiply" }}
        />
      ) : illustration ? (
        <g transform="translate(146, 62) scale(0.85)">
          <Illustration name={illustration} cx={0} cy={0} />
        </g>
      ) : null}

      {/* Object name below illustration inside box */}
      {showLabel && (
        <text
          x="146"
          y="97"
          textAnchor="middle"
          fontFamily="var(--font-sans), sans-serif"
          fontSize="6.5"
          fill="#2A2419"
          opacity="0.7"
        >
          {word}
        </text>
      )}

      {/* SAY IT instruction strip — directly below both boxes per §2.2 */}
      {showSayIt && (
        <>
          <rect
            x="14"
            y="112"
            width="172"
            height="22"
            rx="3"
            fill="none"
            stroke="#2A2419"
            strokeWidth="1"
            opacity="0.4"
          />
          <text
            x="100"
            y="121"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="6.5"
            fill="#2A2419"
            opacity="0.7"
          >
            SAY IT: /{resolvedSound}/ · /{resolvedSound}/ · /{resolvedSound}/
          </text>
          <text
            x="100"
            y="129"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="4.5"
            fill="#2A2419"
            opacity="0.5"
          >
            Point to the picture each time
          </text>
        </>
      )}

      {/* Colour palette dots */}
      {showColourKey && (
        <>
          <circle cx="20" cy="158" r="5" fill="#D4827A" stroke="#2A2419" strokeWidth="1.2" />
          <circle cx="36" cy="158" r="5" fill="#C89B5D" stroke="#2A2419" strokeWidth="1.2" />
          <circle cx="52" cy="158" r="5" fill="#5C7C5E" stroke="#2A2419" strokeWidth="1.2" />
        </>
      )}

      {/* QR code — bottom-right corner per §2.2 */}
      {showQR && (
        <InlineQR x={150} y={142} qrSize={36} />
      )}

      {/* Footer bar */}
      {showFooter && (
        <>
          <rect x="0" y="186" width="200" height="14" fill="rgba(42,36,25,0.08)" />
          <text
            x="100"
            y="195"
            textAnchor="middle"
            fontFamily="var(--font-sans), sans-serif"
            fontSize="5"
            fill="#2A2419"
            opacity="0.55"
          >
            Group {resolvedGroup} · /{resolvedSound}/ · {pageType}
          </text>
        </>
      )}
    </svg>
  );
}
