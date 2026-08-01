"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  href?: string;
  linkLabel?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  href,
  linkLabel,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduce = useReducedMotion();
  const show = reduce || inView;

  return (
    <div
      ref={ref}
      className={`section-heading mb-10 md:mb-14 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`mb-3 text-xs tracking-[0.25em] uppercase ${
            light ? "text-mint/80" : "text-mid-green"
          }`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.7, delay: reduce ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }}
        className={`font-display text-3xl leading-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-forest"
        }`}
      >
        {title}
      </motion.h2>
      <motion.div
        aria-hidden
        initial={reduce ? false : { scaleX: 0 }}
        animate={show ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: reduce ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-4 h-px origin-left ${
          align === "center" ? "mx-auto" : ""
        } w-16 ${light ? "bg-mint/50" : "bg-mid-green/45"}`}
      />
      {description && (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.65, delay: reduce ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/70" : "text-ink-muted"
          }`}
        >
          {description}
        </motion.p>
      )}
      {href && linkLabel && (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.55, delay: reduce ? 0 : 0.28 }}
        >
          <Link
            href={href}
            className={`mt-5 inline-flex items-center gap-2 text-sm tracking-wide transition ${
              light ? "text-mint hover:text-white" : "text-mid-green hover:text-forest"
            }`}
          >
            {linkLabel}
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
