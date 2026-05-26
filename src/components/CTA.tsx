"use client";

import { motion } from "motion/react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-paper)" }}
      id="notify-me"
    >
      <motion.div
        className="max-w-3xl mx-auto rounded-3xl py-20 px-8 md:px-12 text-center"
        style={{ backgroundColor: "var(--color-butter)" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.85, ease }}
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            color: "var(--color-ink)",
            fontVariationSettings: "'opsz' 48",
          }}
        >
          Book 1 launches in 2026.
        </h2>
        <p
          className="text-lg mb-10"
          style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.75 }}
        >
          Be the first to know when it&rsquo;s live.
        </p>

        {submitted ? (
          <motion.p
            className="text-base"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-moss)",
              fontStyle: "italic",
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            Thank you — we&rsquo;ll write to you when Book 1 is ready.
          </motion.p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 w-full px-5 py-3 rounded-full outline-none focus:ring-2 text-base"
              style={{
                fontFamily: "var(--font-sans)",
                backgroundColor: "var(--color-paper)",
                color: "var(--color-ink)",
                border: "1.5px solid var(--color-ink)",
              }}
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full text-base font-semibold text-white whitespace-nowrap transition-opacity hover:opacity-85 active:opacity-75"
              style={{
                backgroundColor: "var(--color-moss)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Notify me
            </button>
          </form>
        )}

        {!submitted && (
          <p
            className="mt-5 text-sm"
            style={{
              fontFamily: "var(--font-hand)",
              color: "var(--color-ink)",
              opacity: 0.55,
            }}
          >
            no marketing, one email, that&rsquo;s a promise
          </p>
        )}
      </motion.div>
    </section>
  );
}
