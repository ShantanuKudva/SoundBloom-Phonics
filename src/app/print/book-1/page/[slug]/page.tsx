import { notFound } from "next/navigation";
import BookPageMock from "../../../../../components/svg/BookPageMock";
import BookCoverMock from "../../../../../components/svg/BookCoverMock";
import { books } from "../../../../../lib/books";
import { book1Pages, book1PageSlugs } from "../../../../../lib/book1Pages";

export function generateStaticParams() {
  return book1PageSlugs.map(slug => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function BookOnePrintPage({ params }: Props) {
  const { slug } = await params;

  let body: React.ReactNode;
  let pageTitle: string;

  if (slug === "cover") {
    body = <BookCoverMock size={760} book={books[0]} />;
    pageTitle = "Cover — Book 1";
  } else {
    const sound = book1Pages.find(p => p.slug === slug);
    if (!sound) notFound();
    body = (
      <BookPageMock
        size={760}
        letter={sound.letter}
        word={sound.word}
        illustrationSrc={`/illustrations/${sound.slug}.png`}
        group={sound.group}
        sound={sound.sound}
        pageType={sound.pageType ?? "Colouring"}
      />
    );
    pageTitle = `Page ${sound.letter} — ${sound.word} · Group ${sound.group}`;
  }

  return (
    <main
      style={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        gap: 16,
        fontFamily: "var(--font-sans), system-ui, sans-serif",
      }}
    >
      {/* Figma MCP capture script — only acts when the URL has the figmacapture hash */}
      <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />

      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "#2A2419",
          opacity: 0.55,
          margin: 0,
        }}
      >
        {pageTitle}
      </p>
      {body}
    </main>
  );
}
