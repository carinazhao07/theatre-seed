"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Story } from "@/lib/stories";
import { Reveal } from "./Reveal";

const filters = [
  { id: "all", label: "全部" },
  { id: "student", label: "学员" },
  { id: "audience", label: "观众与社区" },
  { id: "letter", label: "写给角色" },
] as const;

export function QuoteWall({ stories }: { stories: Story[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const visible = useMemo(
    () =>
      filter === "all" ? stories : stories.filter((s) => s.kind === filter),
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
          <Reveal key={story.id} delay={i * 0.04} className="mb-5 break-inside-avoid">
            <motion.blockquote
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="border border-forest/10 bg-white/70 p-6 backdrop-blur-sm transition hover:border-mint hover:bg-white"
            >
              <p className="font-display text-lg leading-relaxed text-forest">
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
