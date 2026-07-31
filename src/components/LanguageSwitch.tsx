"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switchLocalePath, type Locale } from "@/lib/locale";

type Props = {
  locale: Locale;
  solid?: boolean;
  className?: string;
};

export function LanguageSwitch({ locale, solid = true, className = "" }: Props) {
  const pathname = usePathname();
  const target: Locale = locale === "zh" ? "en" : "zh";
  const href = switchLocalePath(pathname, target);
  const label = target === "en" ? "EN" : "中文";

  return (
    <Link
      href={href}
      className={`inline-flex items-center border px-2.5 py-1 text-[11px] tracking-[0.2em] uppercase transition ${
        solid
          ? "border-forest/20 text-ink-muted hover:border-forest/50 hover:text-forest"
          : "border-white/30 text-white/75 hover:border-white/70 hover:text-white"
      } ${className}`}
      aria-label={target === "en" ? "Switch to English" : "切换到中文"}
    >
      {label}
    </Link>
  );
}
