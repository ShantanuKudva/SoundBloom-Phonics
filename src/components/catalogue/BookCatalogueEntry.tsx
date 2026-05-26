"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { Book } from "../../lib/books";
import BookCoverMock from "../svg/BookCoverMock";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BookCatalogueEntry({
  book,
  index,
  onClick,
}: {
  book: Book;
  index: number;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const isInteractive = Boolean(onClick);
  const muted = !isInteractive;

  return (
    <motion.article
      className="flex flex-col items-center gap-3 py-6 px-4"
      style={{
        cursor: isInteractive ? "pointer" : "default",
        transform: isInteractive && hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.2s ease",
        opacity: muted ? 0.55 : 1,
        filter: muted ? "grayscale(0.45) saturate(0.65)" : "none",
      }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `Open details for ${book.title}` : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter") { onClick(); }
              if (e.key === " ") { e.preventDefault(); onClick(); }
            }
          : undefined
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.75, delay: index * 0.1, ease }}
    >
      <BookCoverMock size={160} book={book} />

      <p
        className="text-sm"
        style={{
          fontFamily: "var(--font-sans)",
          color: "var(--color-ink)",
          opacity: 0.7,
        }}
      >
        Book {book.id}
      </p>

      {book.id !== 1 && (
        <span
          className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full"
          style={{
            fontFamily: "var(--font-sans)",
            color: book.cardAccent,
            border: `1.5px dashed ${book.cardAccent}`,
            letterSpacing: "0.12em",
          }}
        >
          Coming soon
        </span>
      )}
    </motion.article>
  );
}
