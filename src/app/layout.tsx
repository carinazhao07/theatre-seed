import type { Metadata } from "next";
import { Fraunces, Noto_Sans_SC, Noto_Serif_SC, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Noto_Serif_SC({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display-zh",
  display: "swap",
});

const body = Noto_Sans_SC({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body-zh",
  display: "swap",
});

const displayEn = Fraunces({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display-en",
  display: "swap",
  style: ["normal", "italic"],
});

const bodyEn = Source_Sans_3({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body-en",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zhongxi.peerchina.org"),
  title: {
    default: `${site.name}｜${site.tagline}`,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name}｜${site.tagline}`,
    description: site.description,
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/images/gallery-01.jpg" }],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${display.variable} ${body.variable} ${displayEn.variable} ${bodyEn.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
