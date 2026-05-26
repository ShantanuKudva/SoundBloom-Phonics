"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { books } from "../lib/books";
import BookCatalogueEntry from "./catalogue/BookCatalogueEntry";
import BookDetailModal from "./catalogue/BookDetailModal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Catalogue() {
  const [openBookId, setOpenBookId] = useState<1 | 2 | 3 | 4 | null>(null);
  const openBook = openBookId ? books.find((b) => b.id === openBookId) ?? null : null;

  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-paper)" }}
      id="catalogue"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-ochre)", fontFamily: "var(--font-sans)" }}
          >
            the catalogue
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 48",
            }}
          >
            Four books. Four kinds of structure.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-ink)",
              opacity: 0.7,
            }}
          >
            Each book in the SoundBloom series uses the same calm template — but a different
            organising principle. Letters first, then words, then patterns, then whole-word
            recognition.
          </p>
        </motion.div>

        {/* Entries — 2-col on mobile, 4-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {books.map((book, i) => (
            <BookCatalogueEntry
              key={book.id}
              book={book}
              index={i}
              onClick={book.id === 1 ? () => setOpenBookId(book.id as 1) : undefined}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {openBook && (
          <BookDetailModal
            key={openBook.id}
            book={openBook}
            onClose={() => setOpenBookId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
