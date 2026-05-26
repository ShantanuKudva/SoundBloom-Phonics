"use client";

import { motion } from "motion/react";
import { phonicsGroups } from "../../lib/designTokens";

const ease = [0.22, 1, 0.36, 1] as const;

const sampleWords: Record<number, string> = {
  1: "sat · pin · tap",
  2: "cat · hen · mad",
  3: "log · bug · fan",
  4: "rain · boat · pie",
  5: "zip · wing · moon",
  6: "yes · chip · ship",
  7: "queen · out · car",
};

export default function Book1Features() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {phonicsGroups.map((group, i) => (
        <motion.div
          key={group.id}
          className="rounded-xl flex flex-col gap-2 p-3"
          style={{
            backgroundColor: group.bg,
            borderTop: `3px solid ${group.accent}`,
            border: `1.5px solid ${group.accent}`,
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.05, ease }}
        >
          {/* Title */}
          <div>
            <p
              className="text-xs font-semibold uppercase"
              style={{
                color: group.dark,
                fontFamily: "var(--font-sans)",
                letterSpacing: "0.12em",
                fontVariant: "small-caps",
              }}
            >
              Group {group.id}
            </p>
          </div>

          {/* Letter pills */}
          <div className="flex flex-wrap gap-1">
            {group.letters.map((letter) => (
              <span
                key={letter}
                className="px-1.5 py-0.5 rounded text-xs"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: group.dark,
                  border: `1px solid ${group.accent}`,
                  backgroundColor: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.02em",
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Sample words */}
          <p
            className="text-xs leading-relaxed mt-auto"
            style={{
              fontFamily: "var(--font-sans)",
              color: group.dark,
              opacity: 0.75,
              fontStyle: "italic",
            }}
          >
            {sampleWords[group.id]}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
