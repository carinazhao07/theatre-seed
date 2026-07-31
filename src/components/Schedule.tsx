import type { ScheduleItem } from "@/lib/camps";
import type { Locale } from "@/lib/locale";
import { uiEn } from "@/lib/en/site";

const phaseStyleZh: Record<
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

export function Schedule({
  items,
  locale = "zh",
}: {
  items: ScheduleItem[];
  locale?: Locale;
}) {
  const cols =
    items.length <= 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : items.length <= 8
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4";

  return (
    <ol className={`grid grid-cols-1 gap-4 ${cols} md:gap-5`}>
      {items.map((item, i) => {
        const phase =
          locale === "en"
            ? {
                label: uiEn.phase[item.phase],
                className: phaseStyleZh[item.phase].className,
              }
            : phaseStyleZh[item.phase];

        return (
          <li
            key={`${item.date}-${item.label}`}
            className="flex h-full flex-col border border-forest/10 bg-white/70 p-5 transition hover:border-mint"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-xs tracking-[0.18em] text-mid-green uppercase">
                  {locale === "en" ? `Day ${i + 1}` : `第 ${i + 1} 天`}
                </p>
                <p className="mt-1 font-display text-2xl leading-none text-forest">
                  {item.date}
                </p>
              </div>
              <span
                className={`shrink-0 px-2.5 py-1 text-[11px] tracking-wide ${phase.className}`}
              >
                {phase.label}
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg leading-snug text-ink md:text-xl">
              {item.label}
            </h3>
            <ul className="mt-3 space-y-1.5 border-t border-forest/8 pt-3">
              {item.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 text-sm leading-relaxed text-ink-muted"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mid-green"
                    aria-hidden
                  />
                  {h}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ol>
  );
}
