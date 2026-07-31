import type { Metadata } from "next";
import Image from "next/image";
import { CampCard } from "@/components/CampCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SeedDivider } from "@/components/SeedDivider";
import { campsEn } from "@/lib/en/camps";
import { campsPageEn } from "@/lib/en/pages";

export const metadata: Metadata = campsPageEn.metadata;

export default function CampsPageEn() {
  const { hero, modes, flow, flowImages, archive } = campsPageEn;

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
            eyebrow="Two Modes"
            title="Winter & summer camps"
            description="Each camp has its own emphasis, but both uphold our core values and follow the same full project flow."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden border border-forest/10 bg-white/70">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/gallery-38.jpg"
                  alt={modes.winter.imgAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <p className="text-xs tracking-[0.2em] text-mid-green uppercase">
                  {modes.winter.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl text-forest">{modes.winter.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{modes.winter.duration}</p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-muted">
                  {modes.winter.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden border border-forest/10 bg-forest text-white">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/mode-summer.jpg"
                  alt={modes.summer.imgAlt}
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-forest/35" />
              </div>
              <div className="p-8">
                <p className="text-xs tracking-[0.2em] text-mint uppercase">
                  {modes.summer.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl text-mint">{modes.summer.title}</h2>
                <p className="mt-2 text-sm text-white/65">{modes.summer.duration}</p>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/75">
                  {modes.summer.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="Process" title="Shared project flow" />
          </Reveal>
          <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {flowImages.map((img, i) => (
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
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
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
            eyebrow={archive.eyebrow}
            title={archive.title}
            description={archive.description}
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {campsEn.map((camp, i) => (
            <Reveal key={camp.slug} delay={i * 0.06}>
              <CampCard camp={camp} index={i} locale="en" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
