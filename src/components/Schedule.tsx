import type { ScheduleItem } from "@/lib/camps";

const phaseStyle: Record<
  ScheduleItem["phase"],
  { label: string; className: string }
> = {
  arrival: { label: "抵达", className: "bg-mist text-forest" },
  training: { label: "训练", className: "bg-mint/35 text-forest" },
  workshop: { label: "工作坊", className: "bg-mid-green/15 text-mid-green" },
  rehearsal: { label: "排练", className: "bg-forest/10 text-forest" },
  performance: { label: "演出", className: "bg-forest text-mint" },
  wrap: { label: "收束", className: "bg-cream-dark text-mint" },
};

export function Schedule({ items }: { items: ScheduleItem[] }) {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-[1.15rem] w-px bg-mint/50 md:left-1/2" />
      <ul className="space-y-8">
        {items.map((item, i) => {
          const phase = phaseStyle[item.phase];
          const left = i % 2 === 0;
          return (
            <li
              key={item.date}
              className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                left ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div
                className={`pl-12 md:pl-0 ${left ? "md:text-right md:pr-10" : "md:pl-10"}`}
              >
                <div
                  className={`inline-flex items-center gap-3 ${left ? "md:flex-row-reverse" : ""}`}
                >
                  <span className={`px-2.5 py-1 text-xs tracking-wide ${phase.className}`}>
                    {phase.label}
                  </span>
                  <span className="font-display text-2xl text-forest">{item.date}</span>
                </div>
                <h3 className="mt-2 font-display text-xl text-ink">{item.label}</h3>
                <ul className="mt-2 space-y-1">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-sm text-ink-muted">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="absolute top-2 left-3 h-4 w-4 rounded-full border-2 border-mint bg-paper md:left-1/2 md:-translate-x-1/2"
                aria-hidden
              />
              <div className="hidden md:block" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
