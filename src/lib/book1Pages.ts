// Book 1 — per-page data for the dynamic print route at /print/book-1/page/[slug]
// Slug = the PNG filename stem in /public/illustrations/ (without extension).

export type SoundPage = {
  slug: string;       // e.g. "01-s-snake" — also the PNG filename stem
  letter: string;     // displayed letter, e.g. "S" or "Qu"
  word: string;       // object name displayed below illustration, e.g. "snake"
  sound: string;      // IPA-ish notation used by the SAY IT strip, e.g. "s", "kw"
  group: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  pageType?: string;  // defaults to "Colouring"
};

export const book1Pages: SoundPage[] = [
  // Group 1 — Sky Blue
  { slug: "01-s-snake",   letter: "S",  word: "snake",    sound: "s",  group: 1 },
  { slug: "02-a-ant",     letter: "A",  word: "ant",      sound: "a",  group: 1 },
  { slug: "03-t-tap",     letter: "T",  word: "tap",      sound: "t",  group: 1 },
  { slug: "04-i-insect",  letter: "I",  word: "insect",   sound: "i",  group: 1 },
  { slug: "05-p-pig",     letter: "P",  word: "pig",      sound: "p",  group: 1 },
  { slug: "06-n-nut",     letter: "N",  word: "nut",      sound: "n",  group: 1 },
  // Group 2 — Mint Green
  { slug: "07-c-cat",     letter: "C",  word: "cat",      sound: "k",  group: 2 },
  { slug: "08-k-kite",    letter: "K",  word: "kite",     sound: "k",  group: 2 },
  { slug: "09-e-egg",     letter: "E",  word: "egg",      sound: "e",  group: 2 },
  { slug: "10-h-hat",     letter: "H",  word: "hat",      sound: "h",  group: 2 },
  { slug: "11-r-rat",     letter: "R",  word: "rat",      sound: "r",  group: 2 },
  { slug: "12-m-moon",    letter: "M",  word: "moon",     sound: "m",  group: 2 },
  { slug: "13-d-dog",     letter: "D",  word: "dog",      sound: "d",  group: 2 },
  // Group 3 — Warm Peach
  { slug: "14-g-goat",    letter: "G",  word: "goat",     sound: "g",  group: 3 },
  { slug: "15-o-orange",  letter: "O",  word: "orange",   sound: "o",  group: 3 },
  { slug: "16-u-umbrella",letter: "U",  word: "umbrella", sound: "u",  group: 3 },
  { slug: "17-l-lion",    letter: "L",  word: "lion",     sound: "l",  group: 3 },
  { slug: "18-f-fish",    letter: "F",  word: "fish",     sound: "f",  group: 3 },
  { slug: "19-b-ball",    letter: "B",  word: "ball",     sound: "b",  group: 3 },
  // Group 4 — Soft Lavender (single letter j only; rest are digraphs reserved for Book 3)
  { slug: "23-j-jam",     letter: "J",  word: "jam",      sound: "j",  group: 4 },
  // Group 5 — Butter Yellow (zwv only)
  { slug: "20-z-zip",     letter: "Z",  word: "zip",      sound: "z",  group: 5 },
  { slug: "21-w-web",     letter: "W",  word: "web",      sound: "w",  group: 5 },
  { slug: "22-v-van",     letter: "V",  word: "van",      sound: "v",  group: 5 },
  // Group 6 — Leaf Green (yx only)
  { slug: "24-y-yarn",    letter: "Y",  word: "yarn",     sound: "y",  group: 6 },
  { slug: "25-x-box",     letter: "X",  word: "box",      sound: "ks", group: 6 },
  // Group 7 — Dusty Rose (qu only)
  { slug: "26-qu-queen",  letter: "Qu", word: "queen",    sound: "kw", group: 7 },
];

export const book1PageSlugs = ["cover", ...book1Pages.map(p => p.slug)] as const;
