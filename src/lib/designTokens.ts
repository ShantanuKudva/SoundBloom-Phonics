// Shared contract between the website and the Figma book templates.

export const phonicsGroups = [
  { id: 1, name: "Sky Blue",      letters: ["S","A","T","I","P","N"],              bg: "#D6EAFA", accent: "#5BA8E0", dark: "#1A5F8A" },
  { id: 2, name: "Mint Green",    letters: ["C","K","E","H","R","M","D"],           bg: "#C8F0DC", accent: "#4DBF8A", dark: "#1A6B45" },
  { id: 3, name: "Warm Peach",    letters: ["G","O","U","L","F","B"],               bg: "#FAD9C8", accent: "#F0946A", dark: "#8A3A18" },
  { id: 4, name: "Soft Lavender", letters: ["AI","J","OA","IE","EE","OR"],          bg: "#E0D8F8", accent: "#9B8DE0", dark: "#4A3D8A" },
  { id: 5, name: "Butter Yellow", letters: ["Z","W","NG","V","OO"],                 bg: "#FAF0C0", accent: "#E8C840", dark: "#7A6010" },
  { id: 6, name: "Leaf Green",    letters: ["Y","X","CH","SH","TH"],                bg: "#E8F8D0", accent: "#7AC842", dark: "#3A6010" },
  { id: 7, name: "Dusty Rose",    letters: ["QU","OU","OI","UE","ER","AR"],         bg: "#F8D8E0", accent: "#E8789A", dark: "#8A2848" },
] as const;

export const bookSpineColors: Record<1 | 2 | 3 | 4, string> = {
  1: phonicsGroups[0].accent,
  2: phonicsGroups[2].accent,
  3: phonicsGroups[5].accent,
  4: phonicsGroups[6].accent,
};

export const typeScale = {
  displayLetter:          "120-140pt",
  soundNotation:          "22-28pt",
  objectName:             "18-24pt",
  instructionStrip:       "14-16pt",
  parentGuide:            "11-13pt",
  footerHeader:           "9-10pt",
} as const;

export const OUTLINE_MIN_PT = 4;
export const PAGE_BG_CREAM = "#FAF8F0";
export const BG_OPACITY_RANGE = [0.2, 0.3] as const;
export const LETTER_SPACING_INSTRUCTIONAL_PCT = 5;
