"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Shop", href: "#shop" },
  { label: "iPhone", href: "#iphone" },
  { label: "Samsung", href: "#samsung" },
  { label: "Series", href: "#series" },
  { label: "Accessories", href: "#accessories" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border-light"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            className={`flex items-center gap-2.5 text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-brand" : "text-white"
            }`}
          >
            {/* Logo: Solid Circle + Triangle */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <circle
                cx="16" cy="16" r="15"
                fill={scrolled ? "#3F0FA7" : "#FFFFFF"}
                className="transition-colors duration-300"
              />
              <path
                d="M10.5 20L16 11L21.5 20Z"
                fill={scrolled ? "#FFFFFF" : "#3F0FA7"}
                className="transition-colors duration-300"
              />
            </svg>
            VELOX
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all hover:after:w-full ${
                    scrolled
                      ? "text-text-primary hover:text-brand"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Icons + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Search (decorative) */}
            <button
              className={`hidden sm:block transition-colors ${
                scrolled ? "text-text-primary hover:text-brand" : "text-white/80 hover:text-white"
              }`}
              aria-label="Search"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Cart (decorative) */}
            <button
              className={`hidden sm:block transition-colors ${
                scrolled ? "text-text-primary hover:text-brand" : "text-white/80 hover:text-white"
              }`}
              aria-label="Cart"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden flex flex-col gap-[5px] p-1 transition-colors ${
                scrolled ? "text-text-primary" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] w-6 transition-all origin-center ${
                  scrolled ? "bg-text-primary" : "bg-white"
                } ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 transition-all ${
                  scrolled ? "bg-text-primary" : "bg-white"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-6 transition-all origin-center ${
                  scrolled ? "bg-text-primary" : "bg-white"
                } ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-all duration-400 lg:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-semibold text-text-primary hover:text-brand transition-colors"
            style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
