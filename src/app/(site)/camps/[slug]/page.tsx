import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CampArchiveView } from "@/components/CampArchiveView";
import { camps, getCamp, isCampOpenable } from "@/lib/camps";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return camps.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const camp = getCamp(slug);
  if (!camp) return { title: "营期" };
  if (!isCampOpenable(camp)) {
    return {
      title: `${camp.year}${camp.season}｜进行中`,
      description: "本届营期正在进行，完整归档将在结束后开放。",
    };
  }
  return {
    title: `${camp.year}${camp.season}｜${camp.title}`,
    description: camp.summary,
  };
}

const copyZh = {
  dates: "时间",
  location: "地点",
  scale: "规模",
  highlights: "本届要点",
  venues: "演出场地",
  schedule: "营期日程",
  scheduleDesc: "从破冰到舞台，每一步都是成长的印记。",
  productions: "剧目与共创",
  director: "导演：",
  premise: "原始命题：",
  story: "营期故事",
  voices: "学员声音",
  wechatTitle: "想看完整回顾？",
  wechatBody: "微信推文保留了更完整的文字与影像。",
  wechatLater: "营期结束后，我们将在此更新完整回顾。",
  readWechat: "阅读微信回顾 →",
  backList: "返回营期列表",
  campsHref: "/camps",
};

export default async function CampDetailPage({ params }: Props) {
  const { slug } = await params;
  const camp = getCamp(slug);
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
          本届营期正在进行中。完整归档将在结束后开放。
        </p>
        <Link
          href="/camps"
          className="mt-10 inline-flex self-center border border-forest px-6 py-3 text-sm text-forest transition hover:bg-forest hover:text-mint"
        >
          返回营期列表
        </Link>
      </section>
    );
  }

  return <CampArchiveView camp={camp} locale="zh" copy={copyZh} />;
}
