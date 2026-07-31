import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SeedDivider } from "@/components/SeedDivider";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "种戏发起人赵宁淇的破土之旅，以及零门槛、纯公益、聚焦县域的项目理念。",
};

const journey = [
  {
    year: "2017",
    title: "平和埋下种子",
    body: "在上海平和双语学校，戏剧所代表的自由表达与创造力，在宁淇心中悄悄埋下一颗种子。",
  },
  {
    year: "2020",
    title: "走进县域教育",
    body: "参加 PEER 毅恒挚友夏令营，第一次走进中国县城的教育现场，看见城乡资源落差，也看见县域青年同样敏锐的潜力。",
  },
  {
    year: "大学",
    title: "从演员到导演",
    body: "在 Claremont McKenna College 加入华语话剧社，从演员到导演，执导《驴得水》，亲历戏剧如何把一个安静的人，推向更自信的表达与合作。",
  },
  {
    year: "2025",
    title: "种戏诞生",
    body: "高中埋下的戏剧种子，与县域教育公平的思考交汇——「种戏」诞生：专注为欠发达地区县域青年提供免费的戏剧教育与舞台实践。",
    accent: true,
  },
];

const principles = [
  {
    title: "零门槛",
    body: "为从未接触过戏剧的年轻人敞开大门。舞台不属于少数人，而属于每一个愿意尝试的人。",
    icon: "door" as const,
  },
  {
    title: "纯公益",
    body: "导师志愿、学员全程免费。食宿、交通、物资与演出费用由公益资金承担，让戏剧回归教育本质。",
    icon: "gift" as const,
  },
  {
    title: "聚焦县域",
    body: "服务湖南、广西等 PEER 县域青年。把有限的公益资源，投向最需要被看见的人。",
    icon: "pin" as const,
  },
];

const abilities = [
  { title: "表达与自信", body: "在安全的场域里练习发声，第一次被认真听见。" },
  { title: "团队与共情", body: "在排练中接住彼此，理解角色，也理解同伴。" },
  { title: "思考自我与社会", body: "通过剧本与角色，看见更复杂的人性与时代。" },
  { title: "从零完成的勇气", body: "把一件不可能的事，一步步做成台上的真实。" },
];

function PrincipleIcon({ type }: { type: "door" | "gift" | "pin" }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 40 40",
    fill: "none",
    "aria-hidden": true as const,
  };

  if (type === "door") {
    return (
      <svg {...common}>
        <rect x="10" y="6" width="20" height="28" rx="1.5" stroke="#2D6A4F" strokeWidth="1.5" />
        <path d="M20 6V34" stroke="#95D5B2" strokeWidth="1.5" />
        <circle cx="24.5" cy="20" r="1.5" fill="#2D6A4F" />
        <path d="M6 34H34" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "gift") {
    return (
      <svg {...common}>
        <rect x="8" y="16" width="24" height="18" rx="1.5" stroke="#2D6A4F" strokeWidth="1.5" />
        <path d="M8 22H32" stroke="#2D6A4F" strokeWidth="1.5" />
        <path d="M20 16V34" stroke="#95D5B2" strokeWidth="1.5" />
        <path
          d="M20 16C20 16 14 8 11 11C9 13.5 12 16 14 16H20Z"
          stroke="#2D6A4F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 16C20 16 26 8 29 11C31 13.5 28 16 26 16H20Z"
          stroke="#2D6A4F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M20 34C20 34 8 22.5 8 15.5C8 9.7 13.4 6 20 6C26.6 6 32 9.7 32 15.5C32 22.5 20 34 20 34Z"
        stroke="#2D6A4F"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="15.5" r="4" stroke="#95D5B2" strokeWidth="1.5" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-dark pt-28 pb-20 text-white md:pt-36 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-26.jpg"
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
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs tracking-[0.28em] text-mid-green uppercase">
                — 01 — Founder
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.15] text-forest md:text-5xl">
                发起人的破土之旅
              </h2>
              <div
                className="mt-5 h-[3px] w-14 rounded-full bg-mid-green"
                aria-hidden
              />
              <p className="mt-6 text-base text-ink md:text-lg">
                赵宁淇 · 种戏项目发起人
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div
              className="absolute top-3 bottom-3 left-[1.65rem] w-px bg-forest/10 md:left-[1.85rem]"
              aria-hidden
            />
            <ol>
              {journey.map((step, i) => (
                <Reveal key={step.year} delay={i * 0.07}>
                  <li
                    className={`relative grid grid-cols-[5.5rem_1fr] gap-5 pb-10 last:pb-0 md:grid-cols-[6.5rem_1fr] md:gap-7 md:pb-12 ${
                      i < journey.length - 1 ? "border-b border-forest/8" : ""
                    } ${i > 0 ? "pt-10 md:pt-12" : ""}`}
                  >
                    <div className="relative z-10 flex justify-center self-start pt-0.5">
                      <span
                        className={`inline-flex min-w-[3.75rem] items-center justify-center rounded-full px-3 py-1.5 text-sm tracking-wide md:min-w-[4.25rem] ${
                          step.accent
                            ? "bg-forest text-white"
                            : "bg-mist text-forest ring-1 ring-forest/10"
                        }`}
                      >
                        {step.year}
                      </span>
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="font-display text-lg text-forest md:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-prose text-[15px] leading-[1.9] text-ink-muted md:text-base">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative h-[42vw] min-h-[220px] max-h-[420px] overflow-hidden md:h-[36vw]">
        <Image
          src="/images/gallery-24.jpg"
          alt="溪畔共学"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/30 via-transparent to-paper/40" />
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
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden bg-white/70 p-7 ring-1 ring-forest/8 transition hover:ring-mint">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mist ring-1 ring-mid-green/15">
                  <PrincipleIcon type={p.icon} />
                </div>
                <p className="mt-5 font-display text-4xl text-mint/80">
                  0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl text-forest">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Growth" title="我们希望培养的能力" />
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-12">
            {abilities.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="flex gap-6 border-b border-forest/10 pb-8">
                  <span className="font-display text-4xl leading-none text-mint md:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-2xl text-forest md:text-[1.75rem]">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-muted md:text-lg">
                      {a.body}
                    </p>
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
