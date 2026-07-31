import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { siteEn } from "@/lib/en/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteEn.name} | ${siteEn.tagline}`,
    default: `${siteEn.name} | ${siteEn.tagline}`,
    template: `%s | ${siteEn.name}`,
  },
  description: siteEn.description,
  openGraph: {
    title: `${siteEn.name} | ${siteEn.tagline}`,
    description: siteEn.description,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/gallery-01.jpg" }],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="locale-en flex min-h-full flex-1 flex-col">
      <SiteShell>{children}</SiteShell>
    </div>
  );
}
