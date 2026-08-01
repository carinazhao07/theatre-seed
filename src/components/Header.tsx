"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { localeFromPath, withLocale } from "@/lib/locale";
import { navEn } from "@/lib/en/site";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const items = locale === "en" ? navEn : nav;
  const homeHref = withLocale(locale, "/");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const darkHero =
    pathname === "/" ||
    pathname === "/en" ||
    pathname.replace(/\/$/, "") === "/en";
  const solid = scrolled || open || !darkHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-forest/10 bg-paper/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href={homeHref}
          className="group inline-flex items-center"
          aria-label={locale === "en" ? "Theatre Seed home" : "种戏首页"}
        >
          <Image
            src="/images/logo.png"
            alt={locale === "en" ? "Theatre Seed" : "种戏"}
            width={160}
            height={60}
            className={`h-8 w-auto transition md:h-9 ${solid ? "" : "brightness-125 drop-shadow"}`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex lg:gap-8">
          {items.map((item) => {
            const active =
              item.href === homeHref
                ? pathname === homeHref
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-sm tracking-wide transition duration-300 ${
                  solid
                    ? active
                      ? "text-forest"
                      : "text-ink-muted hover:text-forest"
                    : active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-300 ${
                    solid ? "bg-mid-green" : "bg-mint"
                  } ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            );
          })}
          <LanguageSwitch locale={locale} solid={solid} />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitch locale={locale} solid={solid} />
          <button
            type="button"
            aria-label={locale === "en" ? "Menu" : "菜单"}
            className={solid ? "text-forest" : "text-white"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-paper px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-lg text-forest"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
