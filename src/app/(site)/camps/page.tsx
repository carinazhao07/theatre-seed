import type { Metadata } from "next";
import Image from "next/image";
import { CampCard } from "@/components/CampCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SeedDivider } from "@/components/SeedDivider";
import { camps } from "@/lib/camps";

export const metadata: Metadata = {
  title: "营期与归档",
  description: "种戏冬令营与夏令营模式介绍，以及历届营期完整归档。",
};

const flow = [
  {
    title: "线上共学",
    body: "营前 4–6 周：共读《日出》《茶馆》《驴得水》等，融入冰山理论、悲剧论等框架；人物小传与小组连接。",
  },
  {
    title: "线下排练",
    body: "发声与情绪、即兴与走位、剧本打磨；亲手做道具服装布景，完成音效灯光合成。",
  },
  {
    title: "巡演演出",
    body: "至少两场、面向不同观众——村落/古城社区，与城市或县域中学更广阔的舞台。",
  },
  {
    title: "复盘沉淀",
    body: "每日复盘、问卷反馈、影像与推文整理，延续社群连接，让成长被看见、被记住。",
  },
];

export default function CampsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-dark pt-28 pb-16 text-white md:pt-36 md:pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-32.jpg"
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
              Camps & Archive
            </p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">营期与归档</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              冬令营种下种子，夏令营长出枝桠。双轨并行，统一流程——零门槛、纯公益、聚焦县域。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Two Modes"
            title="冬令营与夏令营"
            description="两种营地各有侧重，都严格贯彻核心特征，也都遵循完整项目流程。"
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden border border-forest/10 bg-white/70">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/gallery-38.jpg"
                  alt="冬令营"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
              <p className="text-xs tracking-[0.2em] text-mid-green uppercase">Winter</p>
              <h2 className="mt-3 font-display text-3xl text-forest">种戏冬令营</h2>
              <p className="mt-2 text-sm text-ink-muted">3–5 天 · 短周期高强度共创</p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-muted">
                <li>· 地点设在县城或乡村（广南村、黔阳古城…），沉浸创作</li>
                <li>· 核心模式：共创 + 短剧演出，几天内从灵感到舞台</li>
                <li>· 即兴训练、剧本共创、灯光音效、社区 / 中学巡演</li>
                <li>· 已完成：2025 广南原创 · 2026 黔阳双剧（《爱要大声说出口》《延迟修复》）</li>
              </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden border border-forest/10 bg-forest text-white">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/mode-summer.jpg"
                  alt="种戏夏令营"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-forest/35" />
              </div>
              <div className="p-8">
              <p className="text-xs tracking-[0.2em] text-mint uppercase">Summer</p>
              <h2 className="mt-3 font-display text-3xl text-mint">种戏夏令营</h2>
              <p className="mt-2 text-sm text-white/65">约 10 天 · 长周期深打磨</p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/75">
                <li>· 常采用「县域 + 城市」双场地（如广南 + 长沙）</li>
                <li>· 核心模式：经典剧目完整排演 + 多场巡演</li>
                <li>· 线上共学、试镜、围读、工作坊、定妆与技术合成</li>
                <li>· 已完成：2025《驴得水》双场；进行中：2026 嘉兴十一日三场演出</li>
              </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Process" title="统一的项目流程" />
          </Reveal>
          <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                src: "/images/process-01-online.jpg",
                alt: "01 线上共学",
              },
              {
                src: "/images/gallery-25.jpg",
                alt: "02 线下排练",
              },
              {
                src: "/images/process-03-tour.jpg",
                alt: "03 巡演演出",
              },
              {
                src: "/images/gallery-40.jpg",
                alt: "04 复盘沉淀",
              },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 0.05}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 50vw, 25vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07}>
                <div className="relative pt-2">
                  <span className="font-display text-4xl text-mint">{`0${i + 1}`}</span>
                  <h3 className="mt-3 font-display text-xl text-forest">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SeedDivider className="pt-10" />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Timeline"
            title="历届营期"
            description="点击进入每一届的故事、影像与声音。"
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {camps.map((camp, i) => (
            <Reveal key={camp.slug} delay={i * 0.06}>
              <CampCard camp={camp} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
