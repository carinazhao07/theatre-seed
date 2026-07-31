"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/locale";
import { navEn, siteEn } from "@/lib/en/site";
import { nav, site } from "@/lib/site";

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const items = locale === "en" ? navEn : nav;
  const s = locale === "en" ? siteEn : site;

  return (
    <footer className="relative mt-24 border-t border-forest/10 bg-cream-dark text-mint-soft">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-3xl text-mint">{s.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
            {s.tagline}
            <br />
            {locale === "en"
              ? "No barriers · Fully nonprofit · County-focused"
              : "零门槛 · 纯公益 · 聚焦县域"}
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-white/40 uppercase">
            {locale === "en" ? "Navigate" : "导航"}
          </p>
          <ul className="mt-4 space-y-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition hover:text-mint"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-white/40 uppercase">
            {locale === "en" ? "Contact" : "联系"}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {locale === "en" ? "WeChat" : "微信公众号"}
            <br />
            <span className="text-mint">{s.wechat}</span>
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/45">
            {s.contactNote}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()}{" "}
        {locale === "en"
          ? "Theatre Seed · Planting the seed of theatre within"
          : `${site.name} · 种下心中戏剧的种子`}
      </div>
    </footer>
  );
}
