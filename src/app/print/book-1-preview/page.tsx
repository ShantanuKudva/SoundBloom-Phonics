import BookPageMock from "../../../components/svg/BookPageMock";
import BookCoverMock from "../../../components/svg/BookCoverMock";
import { books } from "../../../lib/books";

const samplePages = [
  { letter: "S", word: "snake", src: "/illustrations/01-s-snake.png", group: 1, pageType: "Colouring" },
  { letter: "A", word: "ant",   src: "/illustrations/02-a-ant.png",   group: 1, pageType: "Colouring" },
  { letter: "M", word: "moon",  src: "/illustrations/12-m-moon.png",  group: 2, pageType: "Colouring" },
  { letter: "C", word: "cat",   src: "/illustrations/07-c-cat.png",   group: 2, pageType: "Colouring" },
  { letter: "D", word: "dog",   src: "/illustrations/13-d-dog.png",   group: 2, pageType: "Colouring" },
  { letter: "E", word: "egg",   src: "/illustrations/09-e-egg.png",   group: 2, pageType: "Colouring" },
  { letter: "F", word: "fish",  src: "/illustrations/18-f-fish.png",  group: 3, pageType: "Colouring" },
  { letter: "B", word: "ball",  src: "/illustrations/19-b-ball.png",  group: 3, pageType: "Colouring" },
];

export default function BookOnePreview() {
  return (
    <main
      style={{
        backgroundColor: "#FFFFFF",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        gap: 56,
        alignItems: "center",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
      }}
    >
      {/* Figma MCP capture script — only acts when the URL has the figmacapture hash param */}
      <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
      <header style={{ textAlign: "center", maxWidth: 600 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "#2A2419", margin: 0 }}>
          SoundBloom — Book 1 (Letter Sounds)
        </h1>
        <p style={{ fontSize: 14, color: "#2A2419", opacity: 0.7, marginTop: 8 }}>
          Print preview · cover + 8 sample pages · 8.5″ × 8.5″ trim
        </p>
      </header>

      <PreviewBlock label="Front cover (BookCoverMock — Book 1)">
        <BookCoverMock size={420} book={books[0]} />
      </PreviewBlock>

      {samplePages.map((p) => (
        <PreviewBlock
          key={p.letter}
          label={`Page · ${p.letter} for ${p.word} · Group ${p.group} · ${p.pageType}`}
        >
          <BookPageMock
            size={612}
            letter={p.letter}
            word={p.word}
            illustrationSrc={p.src}
            group={p.group}
            pageType={p.pageType}
          />
        </PreviewBlock>
      ))}
    </main>
  );
}

function PreviewBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "#2A2419",
          opacity: 0.6,
          margin: 0,
        }}
      >
        {label}
      </p>
      {children}
    </section>
  );
}
