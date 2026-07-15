"use client";

import { useState } from "react";

const FOOTER_LINKS = {
  Shop: ["iPhone Cases", "Samsung Cases", "All Products", "Accessories", "Gift Cards"],
  Support: ["Contact Us", "FAQ", "Shipping & Returns", "Warranty", "Order Tracking"],
  Company: ["About VELOX", "Careers", "Press Kit", "Affiliate Program", "Sustainability"],
};

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function FooterCTA() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing, ${email}! (This is a demo — no emails will be sent.)`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-text-primary text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Ready to{" "}
            <span className="text-brand-lighter">Defend Your Motion</span>?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-lg mx-auto">
            Join 1M+ riders who trust VELOX. Get early access to drops, exclusive
            deals, and pro tips.
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubscribe}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40
                focus:outline-none focus:border-brand-lighter focus:ring-2 focus:ring-brand/30 transition-colors"
            />
            <button
              type="submit"
              className="btn-press w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand font-semibold text-white hover:bg-brand-light transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="15" fill="#7B52DB" />
                <path d="M10.5 20L16 11L21.5 20Z" fill="#FFFFFF" />
              </svg>
              VELOX
            </a>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Engineered for those who move. Military-grade phone protection
              that matches your speed.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold tracking-wide uppercase text-white/80 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-brand-lighter transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span>© 2025 VELOX. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Designer Credit */}
        <div className="pt-4 pb-8 text-center text-xs text-white/25">
          Designed by{" "}
          <a href="mailto:yyting20248@163.com" className="hover:text-white/50 transition-colors">
            yyting20248@163.com
          </a>
        </div>
      </div>
    </footer>
  );
}
