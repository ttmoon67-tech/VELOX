import Image from "next/image";

const BREAKDOWNS = [
  {
    id: "materials",
    label: "01 Materials",
    title: "Multi-Layer Defense System",
    description:
      "Three distinct layers work in concert: a scratch-resistant hardcoat, a shock-absorbing TPU mid-frame, and a soft microfiber inner lining that cradles your device. German Bayer polycarbonate ensures zero yellowing over time.",
    image: "/tech-layers.png",
    reverse: false,
  },
  {
    id: "corners",
    label: "02 Corners",
    title: "Air-Cushion Impact Technology",
    description:
      "Inspired by athletic footwear, each corner houses a precision-engineered air pocket that compresses on impact, dispersing force laterally across the frame. Your phone survives drops that would shatter conventional cases.",
    image: "/tech-corners.png",
    reverse: true,
  },
  {
    id: "magsafe",
    label: "03 MagSafe",
    title: "Precision Magnetic Alignment",
    description:
      "An embedded array of 38 N52-grade neodymium magnets forms a perfect alignment ring. Snap confidently onto chargers, wallets, stands, and car mounts — zero wobble, full-speed 15W wireless charging.",
    image: "/tech-magsafe.png",
    reverse: false,
  },
];

export default function TechBreakdown() {
  return (
    <section aria-label="Technology details" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
            Technology That{" "}
            <span className="text-brand">Protects</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            See what goes into every VELOX case — from the polymer science to
            the magnetic engineering.
          </p>
        </div>

        {/* Intro Overview Image */}
        <div className="relative rounded-3xl overflow-hidden mb-24 lg:mb-32 bg-surface-secondary">
          <Image
            src="/tech-overview.png"
            alt="VELOX AeroShield — product detail overview"
            width={1400}
            height={700}
            className="w-full h-auto object-cover"
            style={{ maxHeight: "560px" }}
          />
        </div>

        {/* Alternating Rows */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {BREAKDOWNS.map((item) => (
            <div
              key={item.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                item.reverse ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image with hover zoom */}
              <div
                className={`bg-surface-secondary rounded-3xl overflow-hidden flex items-center justify-center ${
                  item.reverse ? "lg:[direction:ltr]" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain transition-transform duration-500 ease-out hover:scale-105"
                  style={{ maxHeight: "420px" }}
                />
              </div>

              {/* Text Content */}
              <div className={item.reverse ? "lg:[direction:ltr]" : ""}>
                <span className="text-sm font-semibold tracking-widest uppercase text-brand">
                  {item.label}
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-5 text-lg text-text-secondary leading-relaxed max-w-lg">
                  {item.description}
                </p>

                {/* Spec bullets */}
                <ul className="mt-6 flex flex-wrap gap-3">
                  {["Precision Fit", "0.3mm Tolerance", "Lifetime Warranty"].map(
                    (tag) => (
                      <li
                        key={tag}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-pale text-xs font-medium text-brand"
                      >
                        {tag}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Lifestyle Banner */}
        <div className="mt-24 lg:mt-32 relative rounded-3xl overflow-hidden group">
          <Image
            src="/lifestyle-wide.png"
            alt="VELOX phone case — lifestyle"
            width={2400}
            height={1200}
            className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ maxHeight: "500px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/40 to-transparent flex items-center">
            <div className="px-8 sm:px-16 lg:px-20 max-w-lg">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Built for the
                <br />
                way you move
              </h3>
              <p className="mt-3 text-white/80 text-base sm:text-lg leading-relaxed">
                From the trail to the boardroom — VELOX adapts to every
                environment without compromise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
