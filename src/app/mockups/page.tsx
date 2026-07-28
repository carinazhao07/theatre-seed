"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MockupBold } from "@/components/mockups/MockupBold";
import { MockupOrganic } from "@/components/mockups/MockupOrganic";
import { MockupEditorial } from "@/components/mockups/MockupEditorial";

const options = [
  {
    id: "bold",
    label: "A · 大字轻底",
    en: "Bold Light",
    blurb: "参考你喜欢的粗体冲击力，但用浅色纸感底，不用剧场黑。荧光嫩绿点缀 + 跑马灯动能。",
  },
  {
    id: "organic",
    label: "B · 有机生长",
    en: "Living Seed",
    blurb: "不规则影像裁切、衬线诗意标题、漂浮光斑与圆角叙事——更温柔、更有「种子发芽」感。",
  },
  {
    id: "editorial",
    label: "C · 当代剪辑",
    en: "Editorial Kinetic",
    blurb: "斜切影像、超大数字、横向营期胶卷——杂志感 + 强动效，档案气质更强。",
  },
] as const;

type Id = (typeof options)[number]["id"];

export default function MockupsPage() {
  const [active, setActive] = useState<Id>("bold");
  const current = options.find((o) => o.id === active)!;

  return (
    <div className="min-h-screen bg-[#0f1412] text-white">
      {/* sticky switcher — inspired by your reference */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1412]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs tracking-wide text-white/50 transition hover:text-white"
            >
              ← 返回现站
            </Link>
            <div>
              <p className="text-sm font-semibold">风格 Mockup 选择</p>
              <p className="text-[11px] text-white/45">点选下方方案 · 选定后告诉我，我再整站落地</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 rounded-full bg-white/5 p-1">
            {options.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setActive(o.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition md:text-sm ${
                  active === o.id
                    ? "bg-white text-[#0f1412]"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs tracking-[0.25em] text-[#95d5b2] uppercase">
                  {current.en}
                </p>
                <h1 className="mt-1 text-2xl font-semibold md:text-3xl">{current.label}</h1>
              </div>
              <p className="max-w-lg text-sm leading-relaxed text-white/55">
                {current.blurb}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl ring-1 ring-white/10 shadow-2xl shadow-black/40">
              {active === "bold" && (
                <MockupBold image="/images/gallery-01.jpg" />
              )}
              {active === "organic" && (
                <MockupOrganic
                  image="/images/gallery-01.jpg"
                  image2="/images/gallery-19.jpg"
                />
              )}
              {active === "editorial" && (
                <MockupEditorial image="/images/gallery-11.jpg" />
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 mb-16 grid gap-4 md:grid-cols-3">
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setActive(o.id)}
              className={`rounded-xl border p-5 text-left transition ${
                active === o.id
                  ? "border-[#95d5b2] bg-white/5"
                  : "border-white/10 hover:border-white/25"
              }`}
            >
              <p className="text-sm font-semibold">{o.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/50">{o.blurb}</p>
              {active === o.id && (
                <p className="mt-3 text-[11px] tracking-wide text-[#95d5b2]">
                  当前预览中 · 选定请在对话里回复 A / B / C
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
