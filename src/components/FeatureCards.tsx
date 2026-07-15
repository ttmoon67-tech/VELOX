const FEATURES = [
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#3F0FA7" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Military-Grade Drop Protection",
    description:
      "Exceeds MIL-STD-810G standards. Air-cushion corners absorb and disperse impact force across the frame, keeping your device safe from drops up to 3 meters.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#3F0FA7" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Ultra-Light Aerodynamic Design",
    description:
      "Engineered with aerospace-grade polycarbonate at just 28g. Precision-molded to follow every contour of your phone — protection without the bulk.",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#3F0FA7" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeWidth="2" />
      </svg>
    ),
    title: "MagSafe Ready",
    description:
      "Built-in precision-aligned magnetic ring ensures seamless attachment to all MagSafe accessories. Stronger hold, faster wireless charging, zero interference.",
  },
];

export default function FeatureCards() {
  return (
    <section aria-label="Product features" className="py-24 lg:py-32 bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
            Engineered for{" "}
            <span className="text-brand">Excellence</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Every VELOX case is the result of obsessive engineering — from the
            polymer formula to the tactile button click.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 sm:p-10 border border-border-light
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:border-brand/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-brand-pale flex items-center justify-center mb-6 transition-colors group-hover:bg-brand group-hover:text-white">
                <div className="transition-colors group-hover:[&>svg]:stroke-white">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
