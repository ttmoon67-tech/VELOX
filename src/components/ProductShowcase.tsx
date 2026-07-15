"use client";

import Image from "next/image";
import { useState } from "react";

const COLOR_VARIANTS = [
  { name: "Stealth Black", hex: "#1A1A1A" },
  { name: "VELOX Purple", hex: "#3F0FA7" },
  { name: "Glacier Blue", hex: "#4A90D9" },
  { name: "Ghost White", hex: "#D5D0E0" },
];

export default function ProductShowcase() {
  const [activeColor, setActiveColor] = useState(COLOR_VARIANTS[1].hex); // default purple

  return (
    <section id="shop" aria-label="Product collection" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
            The <span className="text-brand">Collection</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            One uncompromising standard. Multiple ways to make it yours.
          </p>
        </div>

        {/* Featured Product — large card */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Left — Product Image */}
          <div className="relative aspect-square bg-surface-secondary rounded-3xl flex items-center justify-center p-8 sm:p-12 overflow-hidden group">
            <Image
              src="/product-white.png"
              alt="VELOX AeroShield Case"
              width={500}
              height={500}
              className="relative transition-transform duration-500 group-hover:scale-105"
              style={{ objectFit: "contain", maxHeight: "400px" }}
              priority
            />

            {/* Badge */}
            <span className="absolute top-6 left-6 inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-brand text-white">
              Best Seller
            </span>
          </div>

          {/* Right — Product Info */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-brand">
              AeroShield Series
            </span>
            <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight">
              VELOX AeroShield
            </h3>
            <p className="mt-3 text-lg text-text-secondary leading-relaxed">
              MagSafe compatible · Military-grade drop protection · 28g
              ultra-light design with aerospace-grade polycarbonate.
            </p>

            {/* Color Swatches */}
            <div className="mt-8">
              <span className="text-sm font-medium text-text-secondary">
                Color —{" "}
                <span className="text-text-primary">
                  {COLOR_VARIANTS.find((c) => c.hex === activeColor)?.name}
                </span>
              </span>
              <div className="flex items-center gap-3 mt-3">
                {COLOR_VARIANTS.map((color) => {
                  const isActive = activeColor === color.hex;
                  return (
                    <button
                      key={color.hex}
                      onClick={() => setActiveColor(color.hex)}
                      className={`relative w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                        isActive
                          ? "border-brand ring-2 ring-brand/20 scale-110"
                          : "border-gray-200"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={color.name}
                      title={color.name}
                    >
                      {isActive && (
                        <svg
                          className="absolute inset-0 m-auto w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price + CTA */}
            <div className="mt-8 flex items-center gap-6">
              <span className="text-3xl font-bold text-text-primary">$39.99</span>
              <button className="btn-press inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-light transition-colors">
                Add to Cart
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Trust notes */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["Free Shipping", "30-Day Returns", "Lifetime Warranty"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-pale text-xs font-medium text-brand"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
