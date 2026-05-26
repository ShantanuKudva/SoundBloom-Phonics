"use client";

import { phonicsGroups } from "../../lib/designTokens";

// phonicsGroups[5] = Leaf Green
const leafGreen = phonicsGroups[5];

const digraphs = ["sh", "ch", "th", "ph", "wh", "ng"];
const blends   = ["fr", "br", "cl", "sp", "st", "pl", "gr", "sl", "tr", "sw"];

function ChipColumn({ heading, chips }: { heading: string; chips: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p
        className="uppercase"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: "12px",
          letterSpacing: "0.15em",
          color: leafGreen.dark,
        }}
      >
        {heading}
      </p>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              border: `1.5px solid ${leafGreen.accent}`,
              color: leafGreen.dark,
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "14px",
              padding: "6px 10px",
              borderRadius: "6px",
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Book3Features() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <ChipColumn heading="Digraphs" chips={digraphs} />
      <ChipColumn heading="Blends"   chips={blends} />
    </div>
  );
}
