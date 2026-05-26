"use client";
import React from "react";
import { motion } from "motion/react";

const REF_WIDTH = 172;

export type AppSoundScreenProps = {
  screenX: number;
  screenY: number;
  screenWidth: number;
  letter?: string;
  word?: string;
  prevLetter?: string;
  nextLetter?: string;
};

export default function AppSoundScreen({
  screenX,
  screenY,
  screenWidth,
  letter = "S",
  word = "Sun",
  prevLetter = "R",
  nextLetter = "T",
}: AppSoundScreenProps) {
  const s = screenWidth / REF_WIDTH;
  const cx = screenX + screenWidth / 2;
  // All offsets below are expressed in the REF_WIDTH=172 coordinate space
  // (matching OperationScene's existing Beat 2 layout at screenX=314, screenY=42, screenWidth=172).
  const px = (x: number) => screenX + x * s;
  const py = (y: number) => screenY + y * s;

  return (
    <g>
      {/* Wordmark */}
      <text
        x={cx}
        y={py(42)}
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize={11 * s}
        fill="#2A2419"
        opacity="0.65"
        letterSpacing={0.5 * s}
      >
        SoundBloom Sounds
      </text>

      {/* Big letter inside thick circle */}
      <circle
        cx={cx}
        cy={py(168)}
        r={56 * s}
        fill="none"
        stroke="#2A2419"
        strokeWidth={3.5 * s}
      />
      <text
        x={cx}
        y={py(196)}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize={78 * s}
        fontWeight="700"
        fill="#2A2419"
      >
        {letter}
      </text>

      {/* "X is for Y" label */}
      <text
        x={cx}
        y={py(253)}
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize={13 * s}
        fill="#2A2419"
        opacity="0.8"
      >
        {letter} is for {word}
      </text>

      {/* Play button — ochre circle with white triangle */}
      <circle cx={px(46)} cy={py(310)} r={18 * s} fill="#C89B5D" />
      <polygon
        points={`${px(39)},${py(301)} ${px(57)},${py(310)} ${px(39)},${py(319)}`}
        fill="white"
      />

      {/* Animated sound-wave bars */}
      <motion.rect
        x={px(68)}
        y={py(304)}
        width={6 * s}
        height={13 * s}
        rx={3 * s}
        fill="#2A2419"
        animate={{ scaleY: [1, 1.7, 1, 0.6, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0, ease: "easeInOut" }}
        style={{ transformOrigin: `${px(71)}px ${py(310)}px` }}
      />
      <motion.rect
        x={px(78)}
        y={py(300)}
        width={6 * s}
        height={20 * s}
        rx={3 * s}
        fill="#2A2419"
        animate={{ scaleY: [1, 0.5, 1, 1.8, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
        style={{ transformOrigin: `${px(81)}px ${py(310)}px` }}
      />
      <motion.rect
        x={px(88)}
        y={py(306)}
        width={6 * s}
        height={16 * s}
        rx={3 * s}
        fill="#2A2419"
        animate={{ scaleY: [1, 1.5, 0.7, 1, 1.3] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.6, ease: "easeInOut" }}
        style={{ transformOrigin: `${px(91)}px ${py(314)}px` }}
      />

      {/* Prev/next chevrons */}
      <text
        x={px(11)}
        y={py(333)}
        fontFamily="sans-serif"
        fontSize={14 * s}
        fill="#2A2419"
        opacity="0.3"
      >
        {`‹ ${prevLetter}`}
      </text>
      <text
        x={px(158)}
        y={py(333)}
        fontFamily="sans-serif"
        fontSize={14 * s}
        fill="#2A2419"
        opacity="0.3"
      >
        {`${nextLetter} ›`}
      </text>

      {/* Footer URL */}
      <text
        x={cx}
        y={py(348)}
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize={9 * s}
        fill="#2A2419"
        opacity="0.4"
      >
        sounds.soundbloom.co/{letter.toLowerCase()}
      </text>
    </g>
  );
}
