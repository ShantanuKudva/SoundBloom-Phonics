"use client";

import { phonicsGroups } from "../../lib/designTokens";

// phonicsGroups[6] = Dusty Rose
const dustyRose = phonicsGroups[6];

const sightWords = [
  "the", "and", "is", "was", "you", "said",
  "have", "they", "of", "to", "from", "were",
  "are", "be", "who", "what", "where", "when",
];

export default function Book4Features() {
  return (
    <div className="flex flex-wrap gap-2 justify-start">
      {sightWords.map((word) => (
        <span
          key={word}
          style={{
            backgroundColor: "rgba(255,255,255,0.55)",
            border: `1.5px solid ${dustyRose.accent}`,
            color: dustyRose.dark,
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: "14px",
            padding: "6px 12px",
            borderRadius: "999px",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
