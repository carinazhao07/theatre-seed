import type { Metadata } from "next";
import Image from "next/image";
import { LetterGallery } from "@/components/LetterGallery";
import { QuoteWall } from "@/components/QuoteWall";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { lettersEn } from "@/lib/en/letters";
import { storiesPageEn } from "@/lib/en/pages";
import { storiesEn } from "@/lib/en/stories";

export const metadata: Metadata = storiesPageEn.metadata;

export default function StoriesPageEn() {
  const { hero, voices, letters } = storiesPageEn;
  const watermark = letters.watermark || "LETTER";

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
            <p className="text-xs tracking-[0.25em] text-mint uppercase">{hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">{hero.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {hero.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow={voices.eyebrow}
            title={voices.title}
            description={voices.description}
          />
        </Reveal>
        <QuoteWall stories={storiesEn} locale="en" />
      </section>

      <section className="relative overflow-hidden bg-mist/60 py-20 md:py-28">
        <div
          className="pointer-events-none absolute -left-20 top-10 font-display text-[12rem] leading-none text-forest/[0.04] select-none md:text-[16rem]"
          aria-hidden
        >
          {watermark}
        </div>
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={letters.eyebrow}
              title={letters.title}
              description={letters.description}
            />
          </Reveal>
          <LetterGallery letters={lettersEn} locale="en" />
        </div>
      </section>
    </>
  );
}
