import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SeedDivider } from "@/components/SeedDivider";
import { features } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "种戏发起人赵宁淇的破土之旅，以及零门槛、纯公益、聚焦县域的项目理念。",
};

const abilities = [
  { title: "表达与自信", body: "在安全的场域里练习发声，第一次被认真听见。" },
  { title: "团队与共情", body: "在排练中接住彼此，理解角色，也理解同伴。" },
  { title: "思考自我与社会", body: "通过剧本与角色，看见更复杂的人性与时代。" },
  { title: "从零完成的勇气", body: "把一件不可能的事，一步步做成台上的真实。" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-dark pt-28 pb-20 text-white md:pt-36 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-11.jpg"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-dark via-cream-dark/80 to-cream-dark/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-mint uppercase">About Us</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">关于种戏</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              一颗在校园里种下的戏剧种子，如何在县域生根发芽，并慢慢长出新的枝桠。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Founder"
              title="发起人的破土之旅"
              description="赵宁淇 · 种戏项目发起人"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
              <p>
                2017 年，在上海平和双语学校，戏剧所代表的自由表达与创造力，在宁淇心中悄悄埋下一颗种子。
              </p>
              <p>
                2020 年，她参加 PEER 毅恒挚友夏令营，第一次走进中国县城的教育现场，看见城乡之间的资源落差，也看见县域青年同样敏锐的潜力。
              </p>
              <p>
                大学期间，她在 Claremont McKenna College 加入华语话剧社，从演员到导演，执导《驴得水》，亲历戏剧如何把一个安静的人，推向更自信的表达与合作。
              </p>
              <p className="border-l-2 border-mint pl-5 text-forest">
                高中埋下的戏剧种子，与县域教育公平的思考交汇——2025 年初，「种戏」诞生：专注为欠发达地区县域青年提供免费的戏剧教育与舞台实践。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <SeedDivider />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Principles"
            title="理念与定位"
            description="种戏是目前中国首个同时具备零门槛、纯公益、聚焦县域三项特征的公益戏剧项目。"
          />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="bg-white/60 p-7 ring-1 ring-forest/8">
                <h3 className="font-display text-2xl text-forest">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Growth"
              title="我们希望培养的能力"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {abilities.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="flex gap-5 border-b border-forest/10 pb-6">
                  <span className="font-display text-3xl text-mint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-forest">{a.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{a.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Partners"
            title="合作方与支持机构"
            description="种戏由 PEER 毅恒挚友公益组织支持。项目发起人与导师团队均为志愿者，学员全程免费参与。"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6 border border-forest/10 bg-white/70 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-2xl text-forest">PEER 毅恒挚友</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
                致力于促进中国城乡教育公平、改善欠发达地区教育资源，并发展博雅、人文与素质教育的非营利组织。种戏是社群成员发起、在 PEER 支持下生长的戏剧教育实践。
              </p>
            </div>
            <Link
              href="https://peerchina.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 border border-forest px-5 py-3 text-sm text-forest transition hover:bg-forest hover:text-mint"
            >
              访问 PEER 官网 →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
