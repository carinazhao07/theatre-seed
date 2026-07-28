import Image from "next/image";
import Link from "next/link";
import type { Camp } from "@/lib/camps";

const statusLabel = {
  completed: "已完成",
  ongoing: "进行中",
  upcoming: "即将开始",
} as const;

export function CampCard({ camp, index = 0 }: { camp: Camp; index?: number }) {
  return (
    <Link
      href={`/camps/${camp.slug}`}
      className="group relative block overflow-hidden bg-mist/40"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
        <Image
          src={camp.cover}
          alt={camp.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
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
          {statusLabel[camp.status]}
        </span>
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
    </Link>
  );
}
