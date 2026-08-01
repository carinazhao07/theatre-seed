import Image from "next/image";
import Link from "next/link";
import type { Camp } from "@/lib/camps";
import { isCampOpenable } from "@/lib/camps";
import type { Locale } from "@/lib/locale";
import { withLocale } from "@/lib/locale";
import { uiEn } from "@/lib/en/site";

const statusLabelZh = {
  completed: "已归档",
  ongoing: "进行中",
  upcoming: "即将开始",
} as const;

export function CampCard({
  camp,
  index = 0,
  locale = "zh",
}: {
  camp: Camp;
  index?: number;
  locale?: Locale;
}) {
  const openable = isCampOpenable(camp);
  const statusLabel =
    locale === "en" ? uiEn.status[camp.status] : statusLabelZh[camp.status];
  const archiveSoon = locale === "en" ? uiEn.archiveSoon : "归档即将开放";

  const inner = (
    <>
      <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
        <Image
          src={camp.cover}
          alt={camp.title}
          fill
          className={`object-cover transition duration-700 ${
            openable ? "group-hover:scale-105" : "opacity-90"
          }`}
          sizes="(max-width:768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-dark via-cream-dark/30 to-transparent" />
        <span
          className={`absolute top-4 left-4 text-xs tracking-wide ${
            camp.status === "ongoing"
              ? "bg-mint px-3 py-1 text-forest"
              : "bg-white/15 px-3 py-1 text-white backdrop-blur-sm"
          }`}
        >
          {statusLabel}
        </span>
        {!openable && (
          <span className="absolute top-4 right-4 bg-cream-dark/70 px-3 py-1 text-[10px] tracking-wide text-white/80 backdrop-blur-sm">
            {archiveSoon}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <p className="text-xs tracking-[0.2em] text-mint uppercase">
            {camp.year} · {camp.season}
          </p>
          <h3 className="mt-2 font-display text-xl leading-snug md:text-2xl">
            {camp.title}
          </h3>
          <p className="mt-2 text-sm text-white/65">{camp.location}</p>
        </div>
      </div>
    </>
  );

  if (!openable) {
    return (
      <div
        className="relative block cursor-default overflow-hidden bg-mist/40"
        style={{ animationDelay: `${index * 80}ms` }}
        aria-disabled="true"
      >
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={withLocale(locale, `/camps/${camp.slug}`)}
      className="group relative block overflow-hidden bg-mist/40 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(12,26,14,0.12)]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {inner}
    </Link>
  );
}
