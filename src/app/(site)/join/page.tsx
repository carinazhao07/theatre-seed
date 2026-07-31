import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "参与支持",
  description: "成为种戏学员、导师志愿者，或与我们展开赞助与合作。",
};

const channels = [
  {
    id: "student",
    eyebrow: "01",
    title: "成为学员",
    body: "面向 PEER 服务县域的零基础青年。营前线上共学，线下排练与巡演，全程免费。",
    cta: "了解报名方式",
    href: "#contact",
    tone: "light" as const,
  },
  {
    id: "mentor",
    eyebrow: "02",
    title: "成为导师 / 志愿者",
    body: "导演、表演、舞美、灯光、摄影与后勤——我们欢迎愿意把时间种进戏剧教育的人。",
    cta: "联系种戏团队",
    href: "#contact",
    tone: "mid" as const,
  },
  {
    id: "partner",
    eyebrow: "03",
    title: "赞助与合作",
    body: "面向基金会、投资方与机构伙伴。种戏以零门槛、纯公益、聚焦县域的清晰定位，持续沉淀可被看见的项目档案。",
    cta: "获取项目介绍",
    href: "#contact",
    tone: "dark" as const,
  },
];

export default function JoinPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-dark pt-28 pb-16 text-white md:pt-36 md:pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-31.jpg"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-cream-dark/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-mint uppercase">
              Get Involved
            </p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">参与 / 支持我们</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              无论你是想第一次站上舞台的学员，还是愿意同行的导师，或是希望支持教育公平的合作方——欢迎一起把戏剧的种子继续种下去。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-14 grid gap-4 md:grid-cols-3">
          {[
            { src: "/images/gallery-21.jpg", alt: "训练现场" },
            { src: "/images/gallery-25.jpg", alt: "幕后准备" },
            { src: "/images/gallery-37.jpg", alt: "营期伙伴" },
          ].map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {channels.map((ch, i) => (
            <Reveal key={ch.id} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col p-8 ${
                  ch.tone === "dark"
                    ? "bg-forest text-white"
                    : ch.tone === "mid"
                      ? "bg-mid-green text-white"
                      : "border border-forest/10 bg-white/80 text-ink"
                }`}
              >
                <p
                  className={`text-xs tracking-[0.2em] uppercase ${
                    ch.tone === "light" ? "text-mid-green" : "text-mint"
                  }`}
                >
                  {ch.eyebrow}
                </p>
                <h2
                  className={`mt-4 font-display text-3xl ${
                    ch.tone === "light" ? "text-forest" : "text-mint"
                  }`}
                >
                  {ch.title}
                </h2>
                <p
                  className={`mt-4 flex-1 text-sm leading-relaxed ${
                    ch.tone === "light" ? "text-ink-muted" : "text-white/75"
                  }`}
                >
                  {ch.body}
                </p>
                <Link
                  href={ch.href}
                  className={`mt-8 inline-flex text-sm tracking-wide ${
                    ch.tone === "light"
                      ? "text-mid-green hover:text-forest"
                      : "text-mint hover:text-white"
                  }`}
                >
                  {ch.cta} →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-mist/50 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="如何联系"
              description={site.contactNote}
              align="center"
            />
            <div className="mt-2 space-y-4">
              <p className="font-display text-2xl text-forest md:text-3xl">
                微信公众号 · {site.wechat}
              </p>
              <p className="text-sm text-ink-muted">
                报名问卷、导师志愿与赞助合作材料可在沟通后发送。项目介绍文字版亦可按需提供。
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  href="/camps"
                  className="bg-forest px-6 py-3 text-sm text-mint transition hover:bg-mid-green"
                >
                  查看营期归档
                </Link>
                <Link
                  href="/about"
                  className="border border-forest px-6 py-3 text-sm text-forest transition hover:bg-white"
                >
                  了解项目理念
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
