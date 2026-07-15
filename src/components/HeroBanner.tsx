"use client";

import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

export default function HeroBanner() {
  return (
    <section
      aria-label="Hero banner"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Banner background image — Next.js Image handles basePath */}
      <Image
        src={assetPath("/banner4.png")}
        alt="VELOX hero background"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/15 z-10" />

      {/* Subtle purple tint on overlay */}
      <div className="absolute inset-0 bg-brand/10 z-10" />

      <div className="relative z-20 mx-auto max-w-7xl w-full px-6 py-32 lg:py-40 lg:px-8">
        {/* Text Content — left-aligned, generous breathing room */}
        <div className="max-w-2xl">
          {/* Mini label */}
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-white/70 mb-6">
            VELOX · Premium Protection
          </span>

          {/* Headline */}
          <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            DEFEND
            <br />
            YOUR
            <br />
            <span className="text-brand-lighter">MOTION</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-md leading-relaxed">
            Military-grade phone protection engineered for those who never
            stand still. Aerodynamic design meets battle-tested durability.
          </p>

          {/* CTA Button — press animation, no real link */}
          <div className="mt-10">
            <button
              onClick={() => {}}
              className="btn-press inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-base font-semibold text-white hover:bg-brand-light transition-colors select-none"
            >
              SHOP NOW
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trust badges — small row */}
          <div className="mt-10 flex items-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" fill="#3F0FA7" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              4.9 · 10K+ Reviews
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Free Shipping</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>30-Day Returns</span>
          </div>
        </div>

        {/* Floating accent ring — decorative */}
        <div className="absolute top-1/4 right-[15%] w-16 h-16 rounded-full border-2 border-white/10 animate-[spin_20s_linear_infinite] pointer-events-none hidden lg:block" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-brand-lighter animate-[bounce_2s_infinite]" />
        </div>
      </div>
    </section>
  );
}
