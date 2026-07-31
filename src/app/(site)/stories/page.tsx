import type { Metadata } from "next";
import Image from "next/image";
import { LetterGallery } from "@/components/LetterGallery";
import { QuoteWall } from "@/components/QuoteWall";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { letters } from "@/lib/letters";
import { stories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "声音与改变",
  description: "种戏学员感言，以及演员写给角色的信。",
};

export default function StoriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-dark pt-28 pb-16 text-white md:pt-36 md:pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-25.jpg"
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
              舞台落下之后，真正留下的是被认真对待过的瞬间——学员的成长，以及写给角色的信。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Voices"
            title="互动声音墙"
            description="来自三届营期问卷与回顾的原话。可按营期筛选，悬停感受每一句话的温度。"
          />
        </Reveal>
        <QuoteWall stories={stories} />
      </section>

      <section className="relative overflow-hidden bg-mist/60 py-20 md:py-28">
        <div
          className="pointer-events-none absolute -left-20 top-10 font-display text-[12rem] leading-none text-forest/[0.04] select-none md:text-[16rem]"
          aria-hidden
        >
          信
        </div>
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Letters"
              title="写给角色的信"
              description="排演《驴得水》之后，演员把没说完的话留给角色。点开信封，慢慢读完。"
            />
          </Reveal>
          <LetterGallery letters={letters} />
        </div>
      </section>
    </>
  );
}
