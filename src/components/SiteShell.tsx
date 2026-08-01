"use client";

import { usePathname } from "next/navigation";
import { Atmosphere } from "@/components/Atmosphere";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LangSetter } from "@/components/LangSetter";
import { localeFromPath } from "@/lib/locale";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const normalized = pathname.replace(/\/$/, "") || "/";
  const isHome = normalized === "/" || normalized === "/en";

  if (isHome) {
    return (
      <>
        <LangSetter locale={locale} />
        {children}
      </>
    );
  }

  return (
    <>
      <LangSetter locale={locale} />
      <Atmosphere />
      <Header />
      <main key={pathname} className="page-enter flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
