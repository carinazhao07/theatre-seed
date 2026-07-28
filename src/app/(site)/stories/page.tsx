import type { Metadata } from "next";
import Image from "next/image";
import { QuoteWall } from "@/components/QuoteWall";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { stories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "声音与改变",
  description: "种戏学员感言、观众与社区反馈，以及写给角色的信。",
};

export default function StoriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-dark pt-28 pb-16 text-white md:pt-36 md:pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-06.jpg"
            alt=""
            fill
            className="object-cover opacity-35"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-cream-dark/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-mint uppercase">
              Stories & Impact
            </p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">声音与改变</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              舞台落下之后，真正留下的是被认真对待过的瞬间——学员的成长，观众的笑声与沉默，以及写给角色的信。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Voices"
            title="互动声音墙"
            description="筛选学员、观众或写给角色的信，悬停感受每一句话的温度。"
          />
        </Reveal>
        <QuoteWall stories={stories} />
      </section>

      <section className="bg-mist/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Community"
              title="观众与社区"
              description="种戏的意义，由台上的人与台下的人共同完成。"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="relative min-h-[260px] overflow-hidden">
                <Image
                  src="/images/gallery-06.jpg"
                  alt="村民观众"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream-dark/90 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-6 font-display text-xl text-white">
                  广南村的男女老少围坐看戏——戏剧第一次落进土地里。
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative min-h-[260px] overflow-hidden">
                <Image
                  src="/images/gallery-19.jpg"
                  alt="黔阳古城"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream-dark/90 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-6 font-display text-xl text-white">
                  高中生场的笑声与掌声，让表达被看见、被听见。
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
