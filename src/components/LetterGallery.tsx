"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { Letter } from "@/lib/letters";
import type { Locale } from "@/lib/locale";
import { uiEn } from "@/lib/en/site";

export function LetterGallery({ letters, locale = "zh" }: { letters: Letter[]; locale?: Locale }) {
  const t = locale === "en" ? uiEn.letter : null;
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const openLetter = letters.find((l) => l.id === openId) ?? null;

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {letters.map((letter, i) => (
          <motion.button
            key={letter.id}
            type="button"
            onClick={() => setOpenId(letter.id)}
            initial={reduce ? false : { opacity: 0, y: 28, rotate: -2 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduce ? undefined : { y: -8, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            whileTap={{ scale: 0.98 }}
            className="group relative aspect-[3/4] overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-mint"
            style={{
              background:
                "linear-gradient(160deg, #f4f0e6 0%, #ebe4d4 48%, #e2d8c4 100%)",
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, #2d6a4f 0.8px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
              animate={
                reduce
                  ? undefined
                  : { backgroundPosition: ["0px 0px", "12px 12px"] }
              }
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-x-6 top-6 bottom-16 border border-forest/15 bg-[#faf6ee]/80 p-5 shadow-[inset_0_0_0_1px_rgba(27,67,50,0.04)]">
              <p className="text-[10px] tracking-[0.28em] text-mid-green uppercase">
                Letter · {letter.camp}
              </p>
              <p className="mt-6 font-display text-sm text-ink-muted">{t ? t.to : "写给"}</p>
              <h3 className="mt-1 font-display text-3xl text-forest md:text-4xl">
                {letter.to}
              </h3>
              <p className="mt-4 text-xs tracking-wide text-ink-muted">
                {letter.play}
              </p>
              <p className="mt-8 line-clamp-4 text-sm leading-relaxed text-ink-muted/90">
                {letter.body.replace(/\n+/g, " ").slice(0, 90)}…
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-4">
              <span className="text-xs tracking-wide text-mid-green">
                {t ? t.open : "点击拆信"}
              </span>
              <motion.span
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-forest text-mint"
                animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                ✉
              </motion.span>
            </div>

            <motion.div
              className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full border border-mid-green/20"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openLetter && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label={t ? t.closeAria : "关闭信件"}
              className="absolute inset-0 bg-cream-dark/70 backdrop-blur-sm"
              onClick={() => setOpenId(null)}
            />

            <motion.article
              role="dialog"
              aria-modal="true"
              aria-label={t ? `Letter to ${openLetter.to}` : `写给${openLetter.to}的信`}
              initial={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, y: 80, rotateX: 18, scale: 0.92 }
              }
              animate={
                reduce
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, rotateX: 0, scale: 1 }
              }
              exit={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, y: 40, scale: 0.96 }
              }
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="relative z-10 max-h-[85svh] w-full max-w-2xl overflow-hidden origin-bottom"
              style={{ perspective: 1200 }}
            >
              <div
                className="relative max-h-[85svh] overflow-y-auto border border-forest/10 px-6 py-8 shadow-2xl md:px-10 md:py-12"
                style={{
                  background:
                    "linear-gradient(180deg, #fbf7ef 0%, #f3ecdf 100%)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(null)}
                  className="absolute top-4 right-4 text-xs tracking-wide text-ink-muted hover:text-forest"
                >
                  {t ? t.fold : "合上 ✕"}
                </button>

                <p className="text-[10px] tracking-[0.28em] text-mid-green uppercase">
                  {t ? `${t.letterTo} ${openLetter.camp}` : `写给角色的信 · ${openLetter.camp}`}
                </p>
                <h3 className="mt-4 font-display text-3xl text-forest md:text-4xl">
                  {t ? `${t.dear} ${openLetter.to}` : `亲爱的${openLetter.to}`}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{openLetter.play}</p>

                <div className="mt-8 space-y-5">
                  {openLetter.body
                    .split(/\n\n+/)
                    .filter(Boolean)
                    .map((para, i) => (
                      <motion.p
                        key={`${openLetter.id}-${i}`}
                        initial={reduce ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                        className="font-display text-base leading-[1.95] text-forest/90 md:text-lg"
                      >
                        {para.replace(/^(亲爱的|Dear).+[：:]\s*/, "")}
                      </motion.p>
                    ))}
                </div>

                <motion.div
                  className="mt-10 h-px w-full origin-left bg-gradient-to-r from-mid-green/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.35, duration: 0.8 }}
                />
                <p className="mt-4 text-xs tracking-wide text-ink-muted">
                  {t ? t.footer : "—— 演员写给角色 · 种戏夏令营"}
                </p>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
