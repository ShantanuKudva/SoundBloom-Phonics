const faqs = [
  {
    q: "What age is this for?",
    a: "Broadly, three to seven. The pace and visual restraint also work for older children with reading delays or sensory needs — we've designed it so an eight-year-old won't feel patronised picking it up.",
  },
  {
    q: "Isn't this just more screen time?",
    a: "Each sound takes about 30 seconds in the app. The parent holds the phone. The book is the main event — the screen is a thin assist, not a babysitter. Total screen time per book: about 13 minutes spread over weeks.",
  },
  {
    q: "Does my child need to know the alphabet already?",
    a: "No. Book 1 starts from zero. Each letter is introduced as a sound first, a shape second, and a picture third — in that order, deliberately.",
  },
  {
    q: "Is this evidence-based?",
    a: "The design follows widely-accepted principles of accessible print — readable typography, low visual density, generous whitespace, restrained colour. It's not a clinical intervention and we're not making medical claims. It's just careful design.",
  },
  {
    q: "Will the QR codes still work in five years?",
    a: "Yes. Every QR points to a redirect link we own, not directly to the SoundBloom Sounds app or YouTube. If anything ever needs updating, the redirect updates and the book still works.",
  },
  {
    q: "Who designed this?",
    a: "A small independent project — no organisation behind it yet, no clinical credentials being claimed. We made the book we'd want for the kids in our own lives. If it helps yours, that's the whole point.",
  },
];

export default function FAQ() {
  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-butter)" }}
    >
      <style>{`
        .faq-summary { list-style: none; }
        .faq-summary::-webkit-details-marker { display: none; }
        .faq-item[open] .faq-icon { transform: rotate(45deg); }
        .faq-icon { transition: transform 0.25s ease; display: inline-block; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-ochre)", fontFamily: "var(--font-sans)" }}
          >
            questions parents ask
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 72, 'SOFT' 100",
            }}
          >
            Six things, answered honestly.
          </h2>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto flex flex-col">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="faq-item"
              style={{ borderBottom: "1px solid rgba(92,124,94,0.3)" }}
            >
              <summary
                className="faq-summary py-5 flex items-center justify-between cursor-pointer"
              >
                <span
                  className="text-xl leading-snug pr-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--color-ink)",
                    fontVariationSettings: "'opsz' 24",
                  }}
                >
                  {faq.q}
                </span>
                <span
                  className="faq-icon shrink-0 text-2xl leading-none"
                  style={{
                    color: "var(--color-ochre)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p
                className="py-6 max-w-prose text-base leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.75 }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
