"use client";

import { usePathname } from "next/navigation";
import { Atmosphere } from "@/components/Atmosphere";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <>
      <Atmosphere />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
