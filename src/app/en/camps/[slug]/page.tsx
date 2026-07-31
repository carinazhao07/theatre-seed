import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CampArchiveView } from "@/components/CampArchiveView";
import { isCampOpenable } from "@/lib/camps";
import { campsEn, getCampEn } from "@/lib/en/camps";
import { uiEn } from "@/lib/en/site";

type Props = { params: Promise<{ slug: string }> };

const t = uiEn.campDetail;

export function generateStaticParams() {
  return campsEn.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const camp = getCampEn(slug);
  if (!camp) return { title: "Camps" };
  if (!isCampOpenable(camp)) {
    return {
      title: `${camp.year} ${camp.season} · ${t.ongoingMeta}`,
      description: t.ongoingBody,
    };
  }
  return {
    title: `${camp.year} ${camp.season} · ${camp.title}`,
    description: camp.summary,
  };
}

const copyEn = {
  dates: t.dates,
  location: t.location,
  scale: t.scale,
  highlights: t.highlights,
  venues: t.venues,
  schedule: t.schedule,
  scheduleDesc: t.scheduleDesc,
  productions: t.productions,
  premise: t.premise,
  story: t.story,
  voices: t.voices,
  wechatTitle: t.wechatTitle,
  wechatBody: t.wechatBody,
  wechatLater: t.wechatLater,
  readWechat: t.readWechat,
  backList: t.backList,
  campsHref: "/en/camps",
};

export default async function CampDetailPageEn({ params }: Props) {
  const { slug } = await params;
  const camp = getCampEn(slug);
  if (!camp) notFound();

  if (!isCampOpenable(camp)) {
    return (
      <section className="mx-auto flex min-h-[70svh] max-w-3xl flex-col justify-center px-5 py-32 text-center md:px-8">
        <p className="text-xs tracking-[0.25em] text-mid-green uppercase">
          {camp.year} · {camp.season}
        </p>
        <h1 className="mt-4 font-display text-4xl text-forest md:text-5xl">
          {camp.title}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
          {t.ongoingBody}
        </p>
        <Link
          href="/en/camps"
          className="mt-10 inline-flex self-center border border-forest px-6 py-3 text-sm text-forest transition hover:bg-forest hover:text-mint"
        >
          {t.backList}
        </Link>
      </section>
    );
  }

  return <CampArchiveView camp={camp} locale="en" copy={copyEn} />;
}
