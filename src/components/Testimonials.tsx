const REVIEWS = [
  {
    name: "Marcus Chen",
    role: "Mountain Biker",
    avatar: "MC",
    stars: 5,
    text: "I've dropped my phone on granite trails more times than I can count. The AeroShield case has survived every single impact. The grip texture is perfect for sweaty hands on the trail.",
  },
  {
    name: "Sarah Kim",
    role: "Freerunner & Creator",
    avatar: "SK",
    stars: 5,
    text: "Finally — a case that doesn't add bulk but still feels indestructible. The MagSafe ring is perfectly aligned, and I love that the purple matches my gear aesthetic.",
  },
  {
    name: "David Ruiz",
    role: "Construction Engineer",
    avatar: "DR",
    stars: 5,
    text: "My phone lives in a dust-filled, high-impact environment daily. Six months in and the case looks brand new. The anti-yellow coating actually works. Switching my whole crew to VELOX.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" fill="#F5A623" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section aria-label="Customer reviews" className="py-24 lg:py-32 bg-gradient-to-b from-white to-brand-pale/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
            Trusted by{" "}
            <span className="text-brand">Movers</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Don&apos;t take our word for it. Here&apos;s what real VELOX users
            put their phones through every day.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-8 border border-border-light
                transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <Stars count={review.stars} />

              {/* Review Text */}
              <p className="mt-4 text-text-secondary leading-relaxed text-sm">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-11 h-11 rounded-full bg-brand-pale flex items-center justify-center text-sm font-semibold text-brand">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">
                    {review.name}
                  </div>
                  <div className="text-xs text-text-tertiary">{review.role}</div>
                </div>
              </div>

              {/* Verified badge */}
              <div className="mt-4 flex items-center gap-1 text-xs text-brand font-medium">
                <svg width="14" height="14" fill="#3F0FA7" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Verified Purchase
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
