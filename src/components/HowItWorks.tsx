"use client";

import { motion } from "motion/react";
import { useState, useRef } from "react";
import BookPageMock from "./svg/BookPageMock";
import PhoneFrame, { phoneScreenBounds } from "./svg/PhoneFrame";
import AppSoundScreen from "./svg/AppSoundScreen";

function PhoneMockup({ scanned: _scanned }: { scanned: boolean }) {
  return (
    <svg
      viewBox="0 0 260 536"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[260px]"
      aria-label="Phone showing the SoundBloom Sounds app for the letter S"
    >
      <PhoneFrame x={2} y={2} width={256}>
        {(() => {
          const b = phoneScreenBounds(2, 2, 256);
          return (
            <AppSoundScreen
              screenX={b.screenX}
              screenY={b.screenY}
              screenWidth={b.screenWidth}
            />
          );
        })()}
      </PhoneFrame>
    </svg>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  { num: "1", caption: "Your child colours the page." },
  { num: "2", caption: "You point a phone at the QR code." },
  { num: "3", caption: "The SoundBloom Sounds app opens — straight to the right sound." },
];

export default function HowItWorks() {
  const [scanned, setScanned] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);

  function handleQRClick() {
    setScanned(true);
    setTimeout(() => setScanned(false), 1000);
  }

  return (
    <section
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      <div className="max-w-6xl mx-auto">
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
            how it works
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "var(--color-ink)",
              fontVariationSettings: "'opsz' 48",
            }}
          >
            The QR moment.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 items-center gap-16">
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
          >
            {/* Clickable QR overlay */}
            <div className="relative inline-block">
              <BookPageMock size={400} letter="S" word="snake" illustrationSrc="/illustrations/01-s-snake.png" />
              {/* Clickable overlay over the QR region (bottom-right of 200×200 viewbox scaled to 400px) */}
              <div
                onClick={handleQRClick}
                style={{
                  position: "absolute",
                  right: "8px",
                  bottom: "8px",
                  width: "80px",
                  height: "80px",
                  cursor: "pointer",
                  zIndex: 10,
                  borderRadius: "4px",
                  boxShadow: scanned ? "0 0 0 3px #5C7C5E" : "none",
                  transition: "box-shadow 0.2s ease",
                }}
                role="button"
                aria-label="Scan the QR code"
              />
            </div>
          </motion.div>

          <motion.div
            ref={phoneRef}
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            animate={scanned ? { scale: [1, 1.04, 1] } : {}}
          >
            <PhoneMockup scanned={scanned} />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
            >
              <span
                className="text-5xl leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  color: "var(--color-ochre)",
                  fontVariationSettings: "'opsz' 48",
                }}
              >
                {step.num}
              </span>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)", opacity: 0.8 }}
              >
                {step.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
