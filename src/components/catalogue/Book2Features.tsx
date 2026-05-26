"use client";

import { phonicsGroups } from "../../lib/designTokens";

// Group indexes: 0 = Sky Blue, 1 = Mint Green, 2 = Warm Peach
const families = [
  { pattern: "-at", words: "cat · hat · mat · sat · fat", groupIndex: 0 },
  { pattern: "-ig", words: "pig · big · dig · jig",       groupIndex: 1 },
  { pattern: "-un", words: "sun · run · fun · bun",        groupIndex: 2 },
  { pattern: "-et", words: "pet · get · wet · net",        groupIndex: 1 },
  { pattern: "-op", words: "hop · top · pop · mop",        groupIndex: 2 },
  { pattern: "-an", words: "can · man · pan · ran",        groupIndex: 0 },
];

export default function Book2Features() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {families.map(({ pattern, words, groupIndex }) => {
        const group = phonicsGroups[groupIndex];
        return (
          <div
            key={pattern}
            className="rounded-xl p-3 flex flex-col gap-2"
            style={{
              backgroundColor: group.bg,
              borderTop: `3px solid ${group.accent}`,
              border: `1.5px solid ${group.accent}`,
            }}
          >
            {/* Rime pattern header */}
            <p
              className="text-2xl leading-none"
              style={{
                fontFamily: "var(--font-display), serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: group.dark,
              }}
            >
              {pattern}
            </p>
            {/* Sample words */}
            <p
              className="text-sm"
              style={{
                fontFamily: "var(--font-sans)",
                color: group.dark,
                opacity: 0.75,
              }}
            >
              {words}
            </p>
          </div>
        );
      })}
    </div>
  );
}
