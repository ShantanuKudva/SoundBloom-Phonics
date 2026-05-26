import type { ComponentType } from "react";
import { bookSpineColors, phonicsGroups } from "./designTokens";
import Book1Features from "../components/catalogue/Book1Features";
import Book2Features from "../components/catalogue/Book2Features";
import Book3Features from "../components/catalogue/Book3Features";
import Book4Features from "../components/catalogue/Book4Features";

export type Book = {
  id: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  status: string;
  scope: string;
  pages: number;
  sounds: number;
  prereq: string | null;
  spineColor: string;
  cardBg: string;
  cardAccent: string;
  cardDark: string;
  coverHeroSrc?: string;  // PNG path; if missing, BookCoverMock falls back to inline mascot
  Features: ComponentType;
  contentPerEntry?: readonly string[];
  endMatter?: readonly string[];
  teachingFocus?: string;
  newFeature?: string;
};

// Derive palette from phonicsGroups — no duplicated hex strings.
// Book 1 → phonicsGroups[0] (Sky Blue)
// Book 2 → phonicsGroups[2] (Warm Peach)
// Book 3 → phonicsGroups[5] (Leaf Green)
// Book 4 → phonicsGroups[6] (Dusty Rose)

export const books: Book[] = [
  {
    id: 1,
    title: "Book 1 — Letter Sounds",
    subtitle: "One calm page for every sound",
    status: "Launching 2026",
    scope:
      "Every letter in the alphabet, one calm page at a time, in Jolly Phonics order.",
    pages: 58,
    sounds: 26,
    prereq: null,
    spineColor: bookSpineColors[1],
    cardBg: phonicsGroups[0].bg,
    cardAccent: phonicsGroups[0].accent,
    cardDark: phonicsGroups[0].dark,
    coverHeroSrc: "/illustrations/28-cover-hero.png",
    Features: Book1Features,
    contentPerEntry: [
      "Parent guide",
      "Colouring page",
      "Upper/lowercase note",
      "Dot-to-dot writing (×2)",
      "Blend words page",
    ] as const,
    endMatter: [
      "4 free practice pages per group",
      "Sticker chart",
    ] as const,
  },
  {
    id: 2,
    title: "Book 2 — First Words",
    subtitle: "Three-letter words from the sounds you know",
    status: "Late 2026",
    scope:
      "CVC word blending — consonant-vowel-consonant. Word-level QR codes play the full word blended.",
    pages: 62,
    sounds: 40,
    prereq: "Builds on Book 1",
    spineColor: bookSpineColors[2],
    cardBg: phonicsGroups[2].bg,
    cardAccent: phonicsGroups[2].accent,
    cardDark: phonicsGroups[2].dark,
    coverHeroSrc: "/illustrations/31-cover-hero-book2.png",
    Features: Book2Features,
    teachingFocus: "CVC blending — consonant-vowel-consonant",
    newFeature: "Word-level QR codes play the full word blended, not just the letter sound.",
  },
  {
    id: 3,
    title: "Book 3 — Sound Pairs",
    subtitle: "Two letters, one sound",
    status: "Spring 2027",
    scope:
      "Digraphs and consonant blends. Split-reveal pages show the two letters separately, then together.",
    pages: 70,
    sounds: 50,
    prereq: "Builds on Books 1 + 2",
    spineColor: bookSpineColors[3],
    cardBg: phonicsGroups[5].bg,
    cardAccent: phonicsGroups[5].accent,
    cardDark: phonicsGroups[5].dark,
    coverHeroSrc: "/illustrations/32-cover-hero-book3.png",
    Features: Book3Features,
    teachingFocus: "Digraphs and consonant blends",
    newFeature: "Split-reveal pages — the two letters are shown separately, then together.",
  },
  {
    id: 4,
    title: "Book 4 — Sight Words",
    subtitle: "The 50 words every reader needs",
    status: "Late 2027",
    scope:
      "Whole-word recognition and irregular spelling patterns. Sentence-level QR codes play the word in a calm, short sentence.",
    pages: 76,
    sounds: 50,
    prereq: "Builds on the full series",
    spineColor: bookSpineColors[4],
    cardBg: phonicsGroups[6].bg,
    cardAccent: phonicsGroups[6].accent,
    cardDark: phonicsGroups[6].dark,
    coverHeroSrc: "/illustrations/33-cover-hero-book4.png",
    Features: Book4Features,
    teachingFocus: "Whole-word recognition + irregular spelling patterns",
    newFeature: "Sentence-level QR codes — hear the word used in a calm, short sentence.",
  },
];
