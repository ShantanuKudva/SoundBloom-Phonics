"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Book } from "../../lib/books";
import BookCoverMock from "../svg/BookCoverMock";

type Props = {
  book: Book;
  onClose: () => void;
};

// ─── Page sub-components (file-local) ────────────────────────────────────────

function OverviewFeaturesPage({ book }: { book: Book }) {
  return (
    <>
      {/* Status pill */}
      <span
        className="inline-block text-xs px-3 py-1 rounded-full mb-5"
        style={{
          border: `1.5px solid ${book.cardAccent}`,
          color: book.cardDark,
          fontFamily: "var(--font-sans)",
          backgroundColor: "rgba(255,255,255,0.4)",
        }}
      >
        {book.status}
      </span>

      {/* Scope */}
      <p
        className="text-base leading-relaxed mb-5"
        style={{ fontFamily: "var(--font-sans)", color: book.cardDark, opacity: 0.85 }}
      >
        {book.scope}
      </p>

      {/* Stats */}
      <div
        className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-6"
        style={{ fontFamily: "var(--font-sans)", color: book.cardDark }}
      >
        <span><strong>{book.pages}</strong>&nbsp;pages</span>
        <span><strong>{book.sounds}</strong>&nbsp;sounds</span>
        {book.prereq && (
          <span style={{ opacity: 0.75 }}>{book.prereq}</span>
        )}
      </div>

      {/* Coming-soon banner (non-Book-1 only) */}
      {book.id !== 1 && (
        <div
          className="px-4 py-3 rounded-md"
          style={{
            backgroundColor: "rgba(255,255,255,0.45)",
            border: `1px dashed ${book.cardAccent}`,
          }}
        >
          <p
            className="text-xs font-semibold uppercase mb-1"
            style={{
              color: book.cardAccent,
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.15em",
            }}
          >
            Coming soon
          </p>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-sans)", color: book.cardDark, opacity: 0.75 }}
          >
            Preview of what&apos;s planned for this book.
          </p>
        </div>
      )}

      {/* Divider */}
      <hr
        style={{
          borderTop: `1px solid ${book.cardAccent}`,
          opacity: 0.4,
          margin: "24px 0 0 0",
        }}
      />

      {/* How it's organised */}
      <p
        className="text-xs font-semibold uppercase mb-4 mt-6"
        style={{
          color: book.cardAccent,
          fontFamily: "var(--font-sans)",
          letterSpacing: "0.18em",
        }}
      >
        How it&apos;s organised
      </p>
      <book.Features />
    </>
  );
}

function DetailsPage({ book }: { book: Book }) {
  return (
    <>
      {book.contentPerEntry && (
        <div>
          <p
            className="text-xs font-semibold uppercase mb-3"
            style={{
              color: book.cardAccent,
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.18em",
            }}
          >
            What&apos;s inside each entry
          </p>
          <ul className="flex flex-col gap-1.5">
            {book.contentPerEntry.map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed"
                style={{ color: book.cardDark, fontFamily: "var(--font-sans)", opacity: 0.8 }}
              >
                <span style={{ color: book.cardAccent, marginRight: 8 }}>·</span>{item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {book.endMatter && (
        <div className="mt-6">
          <p
            className="text-xs font-semibold uppercase mb-3"
            style={{
              color: book.cardAccent,
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.18em",
            }}
          >
            End matter
          </p>
          <ul className="flex flex-col gap-1.5">
            {book.endMatter.map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed"
                style={{ color: book.cardDark, fontFamily: "var(--font-sans)", opacity: 0.8 }}
              >
                <span style={{ color: book.cardAccent, marginRight: 8 }}>·</span>{item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {book.teachingFocus && (
        <div>
          <p
            className="text-xs font-semibold uppercase mb-3"
            style={{
              color: book.cardAccent,
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.18em",
            }}
          >
            Teaching focus
          </p>
          <p
            className="text-base leading-relaxed italic"
            style={{ color: book.cardDark, fontFamily: "var(--font-sans)", opacity: 0.8 }}
          >
            {book.teachingFocus}
          </p>
        </div>
      )}

      {book.newFeature && (
        <div className="mt-6">
          <p
            className="text-xs font-semibold uppercase mb-3"
            style={{
              color: book.cardAccent,
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.18em",
            }}
          >
            New in this book
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: book.cardDark, fontFamily: "var(--font-sans)", opacity: 0.8 }}
          >
            {book.newFeature}
          </p>
        </div>
      )}
    </>
  );
}

const SPECS = [
  { label: "Trim", value: '8.5″ × 8.5″ square' },
  { label: "Interior", value: "Full colour, cream #FAF8F0 paper" },
  { label: "Binding", value: "Paperback (KDP) — hardcover option available" },
  {
    label: "Font",
    value:
      "Atkinson Hyperlegible / OpenDyslexic — 24 pt minimum on letter display",
  },
  {
    label: "Outline weight",
    value: "4 pt minimum on all colourable elements",
  },
  {
    label: "Distribution",
    value: "Amazon KDP (worldwide), Flipkart (India)",
  },
] as const;

function SpecsPage({ book }: { book: Book }) {
  return (
    <>
      <p
        className="text-xs font-semibold uppercase mb-4"
        style={{
          color: book.cardAccent,
          fontFamily: "var(--font-sans)",
          letterSpacing: "0.18em",
        }}
      >
        The book itself
      </p>
      <div className="flex flex-col gap-3">
        {SPECS.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col sm:flex-row sm:gap-4 sm:items-baseline"
          >
            <span
              className="text-xs font-semibold uppercase shrink-0 sm:w-40"
              style={{
                color: book.cardAccent,
                fontFamily: "var(--font-sans)",
                letterSpacing: "0.1em",
              }}
            >
              {label}
            </span>
            <span
              className="text-sm leading-relaxed"
              style={{
                color: book.cardDark,
                fontFamily: "var(--font-sans)",
                opacity: 0.85,
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

const BENEFITS = [
  {
    persona: "Autistic children",
    body: "predictable layout lowers cognitive load.",
  },
  {
    persona: "Dyslexia",
    body: "letter tracing while hearing the sound is evidence-cited.",
  },
  {
    persona: "Minimally verbal",
    body: "pointing, colouring, listening all count. Spoken response never required.",
  },
  {
    persona: "ADHD",
    body: "short engagement units, immediate sticker reinforcement.",
  },
  {
    persona: "Down syndrome",
    body: "visual learning strength + repetitive structure builds confidence.",
  },
] as const;

function WhyPage({ book }: { book: Book }) {
  return (
    <>
      <p
        className="text-xs font-semibold uppercase mb-4"
        style={{
          color: book.cardAccent,
          fontFamily: "var(--font-sans)",
          letterSpacing: "0.18em",
        }}
      >
        Why it works
      </p>

      {/* Five channels */}
      <p
        className="text-sm font-semibold mb-2"
        style={{ color: book.cardDark, fontFamily: "var(--font-sans)" }}
      >
        Five channels, every page
      </p>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{
          color: book.cardDark,
          fontFamily: "var(--font-sans)",
          opacity: 0.85,
        }}
      >
        Visual · Auditory · Tactile-Motor · Phonological · Kinaesthetic — every
        page activates at least three at the same time.
      </p>

      {/* Calibrated for */}
      <p
        className="text-sm font-semibold mb-2"
        style={{ color: book.cardDark, fontFamily: "var(--font-sans)" }}
      >
        Calibrated for
      </p>
      <ul className="flex flex-col gap-2">
        {BENEFITS.map(({ persona, body }) => (
          <li
            key={persona}
            className="text-sm leading-relaxed"
            style={{
              color: book.cardDark,
              fontFamily: "var(--font-sans)",
              opacity: 0.85,
            }}
          >
            <strong style={{ color: book.cardDark, opacity: 1 }}>
              {persona}
            </strong>{" "}
            — {body}
          </li>
        ))}
      </ul>
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function BookDetailModal({ book, onClose }: Props) {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const ease = [0.22, 1, 0.36, 1] as const;

  // Build pages array dynamically — omit page 3 when no detail content exists
  const pages = useMemo(() => {
    const arr: Array<{ id: string; render: () => React.ReactNode }> = [];
    arr.push({ id: "overview", render: () => <OverviewFeaturesPage book={book} /> });
    const hasBook1Detail = !!(book.contentPerEntry || book.endMatter);
    const hasBook234Detail = !!(book.teachingFocus || book.newFeature);
    if (hasBook1Detail || hasBook234Detail) {
      arr.push({ id: "details", render: () => <DetailsPage book={book} /> });
    }
    arr.push({ id: "specs", render: () => <SpecsPage book={book} /> });
    arr.push({ id: "why", render: () => <WhyPage book={book} /> });
    return arr;
  }, [book]);

  const safeIndex = Math.min(pageIndex, pages.length - 1);
  const isFirst = safeIndex === 0;
  const isLast = safeIndex === pages.length - 1;

  const goPrev = () => {
    if (isFirst) return;
    setDirection(-1);
    setPageIndex(safeIndex - 1);
  };

  const goNext = () => {
    if (isLast) return;
    setDirection(1);
    setPageIndex(safeIndex + 1);
  };

  // ESC + scroll lock + arrow-key navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, safeIndex, isFirst, isLast, pages.length]);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{
        backgroundColor: "rgba(42,36,25,0.5)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-modal-title"
    >
      <div className="min-h-full flex items-start justify-center px-4 py-10 md:py-16">
        <motion.article
          className="relative w-full max-w-3xl rounded-2xl p-6 md:p-10"
          style={{
            backgroundColor: book.cardBg,
            border: "2.5px solid var(--color-ink)",
          }}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.96, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease }}
        >
          {/* Close button — always top-right */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              border: `1.5px solid ${book.cardAccent}`,
              backgroundColor: "rgba(255,255,255,0.55)",
              color: book.cardDark,
              cursor: "pointer",
            }}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 3 L11 11 M11 3 L3 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Persistent cover header — the "book you're holding" */}
          <div className="flex items-start gap-6 mb-6 pr-12">
            <div className="shrink-0">
              <BookCoverMock size={140} book={book} />
            </div>
            <div className="flex-1 self-center">
              <h2
                id="book-modal-title"
                className="text-3xl md:text-4xl mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: book.cardDark,
                }}
              >
                {book.title}
              </h2>
              <p
                className="text-base md:text-lg"
                style={{ fontFamily: "var(--font-sans)", color: book.cardDark, opacity: 0.75 }}
              >
                {book.subtitle}
              </p>
            </div>
          </div>

          {/* Divider beneath cover header */}
          <hr
            style={{
              borderTop: `1px solid ${book.cardAccent}`,
              opacity: 0.4,
              margin: 0,
            }}
          />

          {/* Paginated content area */}
          <div className="min-h-90 relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={pages[safeIndex].id}
                initial={{ x: direction > 0 ? 40 : -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -40 : 40, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="py-6"
              >
                {pages[safeIndex].render()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Page navigation bar */}
          <div
            className="flex items-center justify-between mt-4 pt-4"
            style={{ borderTop: `1px solid ${book.cardAccent}`, opacity: 1 }}
          >
            {/* Prev button */}
            <button
              type="button"
              onClick={goPrev}
              disabled={isFirst}
              aria-label="Previous page"
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                border: `1.5px solid ${book.cardAccent}`,
                color: book.cardDark,
                opacity: isFirst ? 0.3 : 1,
                cursor: isFirst ? "default" : "pointer",
                backgroundColor: "rgba(255,255,255,0.35)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 2 L4 7 L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Page-indicator dots */}
            <div className="flex gap-2 items-center">
              {pages.map((p, i) => (
                <span
                  key={p.id}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: i === safeIndex ? book.cardAccent : "transparent",
                    border: `1.5px solid ${book.cardAccent}`,
                    transition: "background-color 0.2s",
                  }}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              type="button"
              onClick={goNext}
              disabled={isLast}
              aria-label="Next page"
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                border: `1.5px solid ${book.cardAccent}`,
                color: book.cardDark,
                opacity: isLast ? 0.3 : 1,
                cursor: isLast ? "default" : "pointer",
                backgroundColor: "rgba(255,255,255,0.35)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2 L10 7 L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}
