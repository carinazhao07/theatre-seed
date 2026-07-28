"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

type HeroProps = {
  image: string;
  brand?: string;
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  badge?: string;
};

export function Hero({
  image,
  brand = site.name,
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  badge,
}: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-cream-dark">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className={`object-cover ${reduce ? "" : "kenburns"}`}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-dark via-cream-dark/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-dark/55 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:px-8 md:pb-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {badge && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-white/5 px-4 py-1.5 text-xs tracking-[0.18em] text-mint uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
              {badge}
            </p>
          )}
          <p className="font-display text-5xl text-mint sm:text-6xl md:text-7xl lg:text-8xl">
            {brand}
          </p>
          <h1 className="mt-4 max-w-xl font-display text-2xl leading-snug text-white sm:text-3xl md:text-4xl">
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center bg-mint px-6 py-3 text-sm font-medium tracking-wide text-forest transition hover:bg-mint-soft"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center border border-white/35 px-6 py-3 text-sm tracking-wide text-white transition hover:border-mint hover:text-mint"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
