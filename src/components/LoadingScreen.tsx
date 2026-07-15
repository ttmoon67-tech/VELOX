"use client";

import { useState, useEffect } from "react";

interface Props {
  /** Auto-hide after this many ms (0 = wait for page load) */
  minDuration?: number;
}

export default function LoadingScreen({ minDuration = 1800 }: Props) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Phase timing
    const t1 = setTimeout(() => setPhase("hold"), 500);   // logo appears
    const t2 = setTimeout(() => setPhase("exit"), minDuration); // start fading
    const t3 = setTimeout(() => setHidden(true), minDuration + 600); // fully hidden

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [minDuration]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo animating */}
        <div
          className={`transition-all duration-700 ease-out ${
            phase === "enter"
              ? "scale-50 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-[pulse_2s_ease-in-out_infinite]"
          >
            <circle cx="16" cy="16" r="15" fill="#3F0FA7" />
            <path d="M10.5 20L16 11L21.5 20Z" fill="white" />
          </svg>
        </div>

        {/* Brand name appears after logo */}
        <span
          className={`text-xl font-bold tracking-widest text-brand transition-all duration-500 delay-300 ${
            phase === "enter"
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          VELOX
        </span>

        {/* Thin progress bar */}
        <div className="w-32 h-[2px] bg-border-light rounded-full overflow-hidden">
          <div
            className="h-full bg-brand rounded-full transition-all duration-[1600ms] ease-out"
            style={{
              width: phase === "hold" ? "100%" : phase === "exit" ? "100%" : "0%",
              transitionDelay: phase === "enter" ? "400ms" : "0ms",
            }}
          />
        </div>
      </div>
    </div>
  );
}
