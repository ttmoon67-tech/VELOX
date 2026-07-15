"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Which iPhone models are compatible with VELOX cases?",
    a: "VELOX AeroShield is compatible with iPhone 14, 15, and 16 series including Pro, Pro Max, and Plus models. Each case is precision-molded to the specific model for perfect button alignment and port access.",
  },
  {
    q: "Does the case support MagSafe and wireless charging?",
    a: "Yes. Every VELOX case features a built-in 38-magnet N52-grade alignment ring, delivering full-speed 15W MagSafe wireless charging and seamless attachment to all MagSafe accessories — wallets, stands, car mounts, and battery packs.",
  },
  {
    q: "Will the clear case turn yellow over time?",
    a: "No. We use German Bayer UV-resistant polycarbonate on the back panel and an anti-oxidation coating on the TPU frame. Independent lab tests show zero visible yellowing after 12 months of UV exposure.",
  },
  {
    q: "How does the Air-Cushion drop protection work?",
    a: "Each corner contains a precision-engineered air pocket — inspired by athletic footwear cushioning. On impact, the pocket compresses to absorb and laterally disperse force across the frame, protecting your device from drops up to 3 meters.",
  },
  {
    q: "What is the warranty policy?",
    a: "Every VELOX case is covered by a lifetime warranty against manufacturing defects. If your case cracks, yellows, or has a magnet issue — we replace it free of charge. No questions asked.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We ship to 20+ countries worldwide with free standard shipping on all orders. Express delivery is available at checkout. Most orders are processed within 24 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section aria-label="Frequently asked questions" className="py-24 lg:py-32 bg-surface-secondary">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
            Frequently Asked{" "}
            <span className="text-brand">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Everything you need to know about your VELOX case.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-border-light overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-text-primary pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-brand text-white rotate-180"
                        : "bg-brand-pale text-brand"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-text-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
