import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-forest/10 bg-cream-dark text-mint-soft">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-3xl text-mint">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
            {site.tagline}
            <br />
            零门槛 · 纯公益 · 聚焦县域
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-white/40 uppercase">导航</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
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
          <p className="text-xs tracking-[0.2em] text-white/40 uppercase">联系</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            微信公众号
            <br />
            <span className="text-mint">{site.wechat}</span>
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/45">
            {site.contactNote}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} {site.name} · 种下心中戏剧的种子
      </div>
    </footer>
  );
}
