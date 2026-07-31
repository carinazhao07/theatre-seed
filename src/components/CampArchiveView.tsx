import Image from "next/image";
import Link from "next/link";
import type { Camp } from "@/lib/camps";
import { Reveal } from "@/components/Reveal";
import { Schedule } from "@/components/Schedule";
import { SectionHeading } from "@/components/SectionHeading";
import type { Locale } from "@/lib/locale";

export type CampArchiveCopy = {
  dates: string;
  location: string;
  scale: string;
  highlights: string;
  venues: string;
  schedule: string;
  scheduleDesc: string;
  productions: string;
  premise: string;
  story: string;
  voices: string;
  wechatTitle: string;
  wechatBody: string;
  wechatLater: string;
  readWechat: string;
  backList: string;
  campsHref: string;
};

/** Same image shipped under multiple filenames — collapse to one path. */
const PHOTO_ALIASES: Record<string, string> = {
  "/images/gallery-20.jpg": "/images/gallery-01.jpg",
  "/images/gallery-21.jpg": "/images/gallery-02.jpg",
  "/images/gallery-22.jpg": "/images/gallery-06.jpg",
  "/images/gallery-23.jpg": "/images/gallery-08.jpg",
  "/images/gallery-24.jpg": "/images/gallery-10.jpg",
  "/images/gallery-25.jpg": "/images/gallery-11.jpg",
  "/images/gallery-26.jpg": "/images/gallery-12.jpg",
  "/images/gallery-27.jpg": "/images/gallery-14.jpg",
  "/images/gallery-28.jpg": "/images/gallery-15.jpg",
  "/images/gallery-29.jpg": "/images/gallery-16.jpg",
  "/images/gallery-30.jpg": "/images/gallery-17.jpg",
  "/images/gallery-31.jpg": "/images/gallery-18.jpg",
  "/images/gallery-32.jpg": "/images/gallery-19.jpg",
  "/images/gallery-45.jpg": "/images/gallery-10.jpg",
  "/images/gallery-47.jpg": "/images/gallery-11.jpg",
};

function canonicalize(src: string) {
  return PHOTO_ALIASES[src] ?? src;
}

function pickPhotos(camp: Camp) {
  const cover = canonicalize(camp.cover);
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const raw of camp.gallery) {
    const src = canonicalize(raw);
    if (src === cover || seen.has(src)) continue;
    seen.add(src);
    unique.push(src);
  }
  return unique.length > 0 ? unique : [cover];
}

function Photo({
  src,
  className = "",
  priority = false,
  sizes = "(max-width:768px) 100vw, 50vw",
}: {
  src: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-mist ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
}

export function CampArchiveView({
  camp,
  locale = "zh",
  copy,
}: {
  camp: Camp;
  locale?: Locale;
  copy: CampArchiveCopy;
}) {
  const photos = pickPhotos(camp);
  const diptych = photos.slice(0, 2);
  const breakPhoto = photos[2] ?? photos[0];
  const modulePhotos = photos.slice(3);
  const photoForModule = (i: number) =>
    modulePhotos[i % Math.max(modulePhotos.length, 1)] ??
    photos[i % photos.length];

  const used = new Set<string>([...diptych, breakPhoto]);
  camp.modules.forEach((_, i) => used.add(photoForModule(i)));
  const leftovers = photos.filter((src) => !used.has(src)).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden bg-cream-dark pt-28 text-white md:min-h-[78svh] md:pt-32">
        <Image
          src={camp.cover}
          alt=""
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-dark via-cream-dark/50 to-cream-dark/30" />
        <div className="relative mx-auto flex min-h-[inherit] max-w-6xl flex-col justify-end px-5 pb-16 md:px-8 md:pb-20">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-mint uppercase">
              {camp.year} · {camp.season}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              {camp.title}
            </h1>
            <p className="mt-3 text-lg text-white/75">{camp.subtitle}</p>
            <dl className="mt-8 grid max-w-4xl gap-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-white/45">{copy.dates}</dt>
                <dd className="mt-1 text-white/90">{camp.dates}</dd>
              </div>
              <div>
                <dt className="text-white/45">{copy.location}</dt>
                <dd className="mt-1 text-white/90">{camp.location}</dd>
              </div>
              <div>
                <dt className="text-white/45">{copy.scale}</dt>
                <dd className="mt-1 text-white/90">{camp.participants}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="font-display text-xl leading-relaxed text-forest md:text-2xl">
            {camp.summary}
          </p>
        </Reveal>
      </section>

      {diptych.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-4 md:px-8">
          <div
            className={`grid gap-3 md:gap-4 ${
              diptych.length > 1 ? "md:grid-cols-2" : ""
            }`}
          >
            {diptych.map((src, i) => (
              <Reveal key={src} delay={i * 0.06}>
                <Photo
                  src={src}
                  className="aspect-[16/10] w-full"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {(camp.highlights || camp.venues) && (
        <section className="bg-mist/50 py-14 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8">
            {camp.highlights && (
              <Reveal>
                <SectionHeading eyebrow="Highlights" title={copy.highlights} />
                <ul className="space-y-3">
                  {camp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 border-b border-forest/10 pb-3 text-sm text-ink-muted md:text-base"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mid-green" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {camp.venues && (
              <Reveal delay={0.08}>
                <SectionHeading eyebrow="Venues" title={copy.venues} />
                <ul className="space-y-3">
                  {camp.venues.map((v) => (
                    <li
                      key={v}
                      className="bg-white/70 px-5 py-4 font-display text-lg text-forest"
                    >
                      {v}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {breakPhoto && (
        <section className="relative h-[42vw] min-h-[220px] max-h-[420px] overflow-hidden">
          <Image
            src={breakPhoto}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper/25 via-transparent to-paper/35" />
        </section>
      )}

      {camp.schedule && camp.schedule.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Schedule"
              title={copy.schedule}
              description={copy.scheduleDesc}
              align="center"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Schedule items={camp.schedule} locale={locale} />
          </Reveal>
        </section>
      )}

      {camp.productionsDetailed && camp.productionsDetailed.length > 0 && (
        <section className="bg-mist/40 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="Productions" title={copy.productions} />
            </Reveal>
            <div
              className={`grid gap-8 ${
                camp.productionsDetailed.length > 1
                  ? "md:grid-cols-2"
                  : "max-w-3xl"
              }`}
            >
              {camp.productionsDetailed.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <article className="h-full border-t border-mint pt-6">
                    <h3 className="font-display text-2xl text-forest">
                      {p.title}
                    </h3>
                    {p.premise && (
                      <p className="mt-3 text-xs tracking-wide text-mid-green">
                        {copy.premise} {p.premise}
                      </p>
                    )}
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <SectionHeading eyebrow="Story" title={copy.story} />
        </Reveal>
        <div className="mt-4 space-y-16 md:space-y-20">
          {camp.modules.map((m, i) => {
            const img = photoForModule(i);
            const imageLeft = i % 2 === 0;
            return (
              <Reveal key={m.title} delay={0.04}>
                <article
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                    imageLeft ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <Photo
                    src={img}
                    className="aspect-[4/3] w-full"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div>
                    <p className="text-xs tracking-[0.2em] text-mid-green uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-forest md:text-3xl">
                      {m.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base md:leading-[1.8]">
                      {m.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {leftovers.length >= 2 && (
        <section className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
          <div
            className={`grid gap-3 md:gap-4 ${
              leftovers.length >= 3 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2"
            }`}
          >
            {leftovers.map((src, i) => (
              <Reveal key={src} delay={i * 0.05}>
                <Photo
                  src={src}
                  className="aspect-[4/3] w-full"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {camp.quotes.length > 0 && (
        <section className="bg-mist/40 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <SectionHeading eyebrow="Voices" title={copy.voices} />
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {camp.quotes.slice(0, 3).map((q, i) => (
                <Reveal key={q.text} delay={i * 0.06}>
                  <blockquote className="border border-forest/10 bg-white/70 p-6">
                    <p className="font-display text-lg leading-relaxed text-forest">
                      “{q.text}”
                    </p>
                    <footer className="mt-4 text-xs text-ink-muted">
                      {q.author}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border border-forest/10 bg-white/70 p-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl text-forest">{copy.wechatTitle}</p>
            <p className="mt-2 text-sm text-ink-muted">
              {camp.wechatUrl ? copy.wechatBody : copy.wechatLater}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {camp.wechatUrl && (
              <a
                href={camp.wechatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-forest px-5 py-3 text-sm text-mint transition hover:bg-mid-green"
              >
                {copy.readWechat}
              </a>
            )}
            <Link
              href={copy.campsHref}
              className="border border-forest px-5 py-3 text-sm text-forest transition hover:bg-mist"
            >
              {copy.backList}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
