"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Story } from "@/lib/stories";
import type { Locale } from "@/lib/locale";
import { uiEn } from "@/lib/en/site";
import { Reveal } from "./Reveal";

const filtersZh = [
  { id: "all", label: "全部" },
  { id: "2025 冬", label: "2025 冬" },
  { id: "2025 夏", label: "2025 夏" },
  { id: "2026 冬", label: "2026 冬" },
] as const;

export function QuoteWall({
  stories,
  locale = "zh",
}: {
  stories: Story[];
  locale?: Locale;
}) {
  const filters =
    locale === "en"
      ? uiEn.quoteFilters.map((f) => ({ id: f.id, label: f.label }))
      : filtersZh.map((f) => ({ id: f.id, label: f.label }));

  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () =>
      filter === "all" ? stories : stories.filter((s) => s.camp === filter),
    [filter, stories],
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 text-sm tracking-wide transition ${
              filter === f.id
                ? "bg-forest text-mint"
                : "bg-mist text-ink-muted hover:text-forest"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visible.map((story, i) => (
          <Reveal key={story.id} delay={i * 0.03} className="mb-5 break-inside-avoid">
            <motion.blockquote
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="border border-forest/10 bg-white/70 p-6 backdrop-blur-sm transition hover:border-mint hover:bg-white"
            >
              <p className="font-display text-[15px] leading-[1.85] text-forest md:text-base">
                “{story.text}”
              </p>
              <footer className="mt-5 flex items-center justify-between gap-3 text-xs tracking-wide text-ink-muted">
                <span>{story.author}</span>
                <span className="text-mid-green">{story.camp}</span>
              </footer>
            </motion.blockquote>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
