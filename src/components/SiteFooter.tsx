export default function SiteFooter() {
  const links = ["SoundBloom Sounds", "Email", "Instagram"];

  return (
    <footer
      className="py-12 px-8 md:px-16 border-t"
      style={{
        backgroundColor: "var(--color-paper)",
        borderColor: "rgba(42,36,25,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 md:gap-8">
        {/* Left: brand + copyright */}
        <div className="flex flex-col gap-3">
          <span
            className="text-sm font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
          >
            S
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mx-px align-middle"
              style={{ backgroundColor: "var(--color-ochre)", marginBottom: "1px" }}
            />
            undBl
            <span
              className="inline-block w-1.5 h-1.5 rounded-full mx-px align-middle"
              style={{ backgroundColor: "var(--color-ochre)", marginBottom: "1px" }}
            />
            om
          </span>
          <p
            className="text-xs leading-relaxed"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-ink)",
              opacity: 0.55,
            }}
          >
            &copy; 2026 SoundBloom Phonics. A concept in progress.
          </p>
        </div>

        {/* Middle: links */}
        <div className="flex items-start gap-6 md:justify-center">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm transition-all duration-200 hover:underline"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--color-ink)",
                opacity: 0.6,
                textDecorationColor: "var(--color-ink)",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: typeface note */}
        <div className="md:text-right">
          <p
            className="text-xs leading-relaxed"
            style={{
              fontFamily: "var(--font-sans)",
              fontStyle: "italic",
              color: "var(--color-ink)",
              opacity: 0.5,
            }}
          >
            This site uses Atkinson Hyperlegible, a typeface designed for readability. It honours the same principle as the books it sells.
          </p>
        </div>
      </div>

      {/* Disclaimer row */}
      <div
        className="max-w-6xl mx-auto pt-4 mt-4 text-center"
        style={{ borderTop: "1px solid rgba(42,36,25,0.1)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontStyle: "italic",
            color: "var(--color-ink)",
            opacity: 0.5,
            fontSize: "11px",
            lineHeight: 1.6,
          }}
        >
          SoundBloom is a book, not a medical product. It is not a substitute for therapy, professional advice, or formal assessment. Nothing on this site is a clinical claim.
        </p>
      </div>
    </footer>
  );
}
