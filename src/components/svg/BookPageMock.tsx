type IllustrationName = "sun" | "apple" | "ball" | "cat" | "dog" | "egg" | "fish" | "moon";

type Props = {
  size: number;
  letter: string;
  word: string;
  illustration: IllustrationName;
  showColourKey?: boolean;
  showQR?: boolean;
  showLabel?: boolean;
  showRuledLines?: boolean;
  background?: "paper" | "butter";
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
  showColourKey = true,
  showQR = true,
  showLabel = true,
  showRuledLines = true,
  background = "paper",
}: Props) {
  const bgFill = background === "butter" ? "#F4E6C8" : "#FDF6EC";
  const ruledYs = [62, 74, 86, 98, 110, 122];
  const qrSize = 30;
  const qrX = 156;
  const qrY = 164;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: "100%", height: "auto", display: "block" }}
    >
      <rect x="0" y="0" width="200" height="200" rx="3" fill={bgFill} stroke="#2A2419" strokeWidth="2" />
      {showRuledLines && ruledYs.map((y, i) => (
        <line key={i} x1="10" y1={y} x2="190" y2={y} stroke="#2A2419" strokeWidth="0.6" opacity="0.06" />
      ))}
      <text
        x="14"
        y="50"
        fontFamily="Georgia, serif"
        fontSize="40"
        fontWeight="700"
        fill="#2A2419"
      >
        {letter}
      </text>
      <Illustration name={illustration} cx={100} cy={110} />
      {showLabel && (
        <text
          x="100"
          y="152"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="9"
          fill="#2A2419"
          opacity="0.8"
        >
          {letter} is for {word}
        </text>
      )}
      {showColourKey && (
        <>
          <circle cx="14" cy="180" r="4" fill="#D4827A" stroke="#2A2419" strokeWidth="1.2" />
          <circle cx="28" cy="180" r="4" fill="#C89B5D" stroke="#2A2419" strokeWidth="1.2" />
          <circle cx="42" cy="180" r="4" fill="#5C7C5E" stroke="#2A2419" strokeWidth="1.2" />
        </>
      )}
      {showQR && (
        <InlineQR x={qrX} y={qrY} qrSize={qrSize} />
      )}
    </svg>
  );
}
