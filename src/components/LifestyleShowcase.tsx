"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

/* ============================================
   GlowCard — per-card hover glow, local coords
   ============================================ */

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

function GlowCard({
  children,
  className = "",
  size = "md",
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMove = useCallback((e: React.PointerEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mx", x.toFixed(2));
    card.style.setProperty("--my", y.toFixed(2));
  }, []);

  const handleEnter = useCallback(() => setHovered(true), []);
  const handleLeave = useCallback(() => setHovered(false), []);

  const getSizeClasses = () => (customSize ? "" : sizeMap[size]);

  const getInlineStyles = () => {
    const styles: Record<string, string> = {
      position: "relative",
      touchAction: "none",
    };
    if (width !== undefined) styles.width = typeof width === "number" ? `${width}px` : width;
    if (height !== undefined) styles.height = typeof height === "number" ? `${height}px` : height;
    return styles;
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      style={getInlineStyles()}
      className={`
        ${getSizeClasses()}
        ${!customSize ? "aspect-[3/4]" : ""}
        rounded-2xl relative grid p-3 group
        ${className}
      `}
    >
      {/* Glow border overlay — only visible when hovered */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          backgroundImage: hovered
            ? `radial-gradient(180px 180px at calc(var(--mx, 0) * 1px) calc(var(--my, 0) * 1px),
                hsl(280 100% 70% / 0.15), transparent)`
            : "none",
          border: "2px solid transparent",
        }}
      />
      {/* Border glow pseudo via another div */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          border: "2px solid hsl(280 80% 60% / 0.4)",
          maskImage: hovered
            ? `radial-gradient(160px 160px at calc(var(--mx, 0) * 1px) calc(var(--my, 0) * 1px), black, transparent)`
            : "none",
          WebkitMaskImage: hovered
            ? `radial-gradient(160px 160px at calc(var(--mx, 0) * 1px) calc(var(--my, 0) * 1px), black, transparent)`
            : "none",
        }}
      />

      {children}
    </div>
  );
}

/* ============================================
   LifestyleShowcase — horizontal scroll cards
   ============================================ */

const LIFESTYLE_CARDS = [
  { image: "/场景图1.png" },
  { image: "/场景图2.png" },
  { image: "/场景图3.png" },
  { image: "/场景图4.png" },
];

export default function LifestyleShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("div");
    const cardW = card?.offsetWidth || 320;
    const gap = 20; // matches gap-5
    el.scrollBy({ left: dir === "left" ? -(cardW + gap) : cardW + gap, behavior: "smooth" });
  };

  return (
    <section aria-label="Lifestyle gallery" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
            Life in <span className="text-brand">Motion</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            VELOX goes wherever you go. Scroll to see more.
          </p>
        </div>

        {/* Cards Row + Arrow Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full border transition-all flex items-center justify-center
              ${canScrollLeft
                ? "bg-white border-border-light text-text-secondary hover:text-brand hover:border-brand cursor-pointer"
                : "border-transparent text-border-medium cursor-default"
              }`}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Viewport: clips to 3 cards desktop, 1.2 cards mobile */}
          <div className="overflow-hidden w-full max-w-[1000px]">
            <div
              ref={scrollRef}
              className="flex gap-3 sm:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            >
              {LIFESTYLE_CARDS.map((card, i) => (
                <div key={i} className="shrink-0 snap-start w-[78vw] sm:w-[300px] lg:w-[320px]">
                  <GlowCard customSize className="!p-2 !w-full !aspect-square !grid-rows-1">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={card.image}
                        alt={`VELOX lifestyle ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                    </div>
                  </GlowCard>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full border transition-all flex items-center justify-center
              ${canScrollRight
                ? "bg-white border-border-light text-text-secondary hover:text-brand hover:border-brand cursor-pointer"
                : "border-transparent text-border-medium cursor-default"
              }`}
            aria-label="Scroll right"
            disabled={!canScrollRight}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Hint text */}
        <p className="text-center text-xs text-text-tertiary mt-6">Swipe left to explore more →</p>
      </div>
    </section>
  );
}
