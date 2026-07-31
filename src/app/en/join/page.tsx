import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { joinEn } from "@/lib/en/pages";

export const metadata: Metadata = joinEn.metadata;

export default function JoinPageEn() {
  const { hero, channels, contact, imgs } = joinEn;

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
            <p className="text-xs tracking-[0.25em] text-mint uppercase">{hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">{hero.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {hero.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-14 grid gap-4 md:grid-cols-3">
          {imgs.map((img, i) => (
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
              eyebrow={contact.eyebrow}
              title={contact.title}
              description="Contact details below."
              align="center"
            />
            <div className="mt-6 space-y-3">
              <p className="font-display text-2xl text-forest md:text-3xl">
                {contact.lead}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-block text-base text-mid-green transition hover:text-forest md:text-lg"
              >
                {contact.email}
              </a>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Link
                  href="/en/camps"
                  className="bg-forest px-6 py-3 text-sm text-mint transition hover:bg-mid-green"
                >
                  {contact.ctaCamps}
                </Link>
                <Link
                  href="/en/about"
                  className="border border-forest px-6 py-3 text-sm text-forest transition hover:bg-white"
                >
                  {contact.ctaAbout}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
