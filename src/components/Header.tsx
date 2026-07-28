"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
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

  const darkHero = pathname === "/";
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
        <Link href="/" className="group inline-flex items-center" aria-label="种戏首页">
          <Image
            src="/images/logo.png"
            alt="种戏"
            width={160}
            height={60}
            className={`h-8 w-auto transition md:h-9 ${solid ? "" : "brightness-125 drop-shadow"}`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm tracking-wide transition ${
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
                {active && (
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full ${
                      solid ? "bg-mid-green" : "bg-mint"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="菜单"
          className={`md:hidden ${solid ? "text-forest" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-paper px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
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
