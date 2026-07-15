import CountUp from "./CountUp";

const STATS = [
  { value: 20, suffix: "+", label: "Countries", prefix: "" },
  { value: 1, suffix: "M+", label: "Happy Users", prefix: "" },
  { value: 4.9, suffix: "", label: "Star Rating", prefix: "", decimals: 1 },
  { value: 1, suffix: "", label: "Mil-Grade Certified", prefix: "" },
];

export default function TrustBar() {
  return (
    <section aria-label="Brand trust statistics" className="bg-white border-y border-border-light">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-3xl sm:text-4xl font-bold text-brand tracking-tight">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals || 0}
                />
              </span>
              <span className="text-sm text-text-secondary tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
