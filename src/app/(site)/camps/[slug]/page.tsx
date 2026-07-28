import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Schedule } from "@/components/Schedule";
import { SectionHeading } from "@/components/SectionHeading";
import { SeedDivider } from "@/components/SeedDivider";
import { camps, getCamp } from "@/lib/camps";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return camps.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const camp = getCamp(slug);
  if (!camp) return { title: "营期" };
  return {
    title: `${camp.year}${camp.season}｜${camp.title}`,
    description: camp.summary,
  };
}

export default async function CampDetailPage({ params }: Props) {
  const { slug } = await params;
  const camp = getCamp(slug);
  if (!camp) notFound();

  const statusText =
    camp.status === "ongoing"
      ? "正在进行"
      : camp.status === "upcoming"
        ? "即将开始"
        : "已完成归档";

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
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`text-xs tracking-wide ${
                  camp.status === "ongoing"
                    ? "bg-mint px-3 py-1 text-forest"
                    : "border border-white/30 px-3 py-1 text-white/85"
                }`}
              >
                {statusText}
              </span>
              <span className="text-xs tracking-[0.2em] text-mint uppercase">
                {camp.year} · {camp.season}
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              {camp.title}
            </h1>
            <p className="mt-3 text-lg text-white/75">{camp.subtitle}</p>
            <dl className="mt-8 grid max-w-4xl gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-white/45">时间</dt>
                <dd className="mt-1 text-white/90">{camp.dates}</dd>
              </div>
              <div>
                <dt className="text-white/45">地点</dt>
                <dd className="mt-1 text-white/90">{camp.location}</dd>
              </div>
              <div>
                <dt className="text-white/45">规模</dt>
                <dd className="mt-1 text-white/90">{camp.participants}</dd>
              </div>
              {camp.mentors && (
                <div>
                  <dt className="text-white/45">导师团队</dt>
                  <dd className="mt-1 text-white/90">{camp.mentors}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="font-display text-xl leading-relaxed text-forest md:text-2xl">
            {camp.summary}
          </p>
          {camp.productions && (
            <p className="mt-6 text-sm text-ink-muted">
              核心产出：{camp.productions.join(" · ")}
            </p>
          )}
        </Reveal>
      </section>

      {(camp.highlights || camp.venues) && (
        <section className="bg-mist/50 py-14 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8">
            {camp.highlights && (
              <Reveal>
                <SectionHeading eyebrow="Highlights" title="本届要点" />
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
                <SectionHeading eyebrow="Venues" title="演出场地" />
                <ul className="space-y-3">
                  {camp.venues.map((v) => (
                    <li
                      key={v}
                      className="border border-forest/10 bg-white/70 px-5 py-4 font-display text-lg text-forest"
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

      {camp.overview.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Overview"
              title="营期全景"
              description="从破冰到谢幕，这一届发生了什么。"
            />
          </Reveal>
          <ol className="space-y-5">
            {camp.overview.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <li className="grid gap-4 border-t border-mint/60 pt-5 md:grid-cols-[72px_1fr]">
                  <span className="font-display text-2xl text-mint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-ink-muted">{item}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      {camp.schedule && (
        <section className="bg-mist/40 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Schedule"
                title="营期日程"
                description={
                  camp.status === "ongoing"
                    ? "十一天的节律：训练、排练、工作坊，与三场演出。"
                    : "从破冰到舞台，每一步都是成长的印记。"
                }
                align="center"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Schedule items={camp.schedule} />
            </Reveal>
          </div>
        </section>
      )}

      {camp.productionsDetailed && camp.productionsDetailed.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <SectionHeading eyebrow="Productions" title="剧目与共创" />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {camp.productionsDetailed.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="h-full border border-forest/10 bg-white/70 p-8">
                  <h3 className="font-display text-2xl text-forest">{p.title}</h3>
                  {p.premise && (
                    <p className="mt-3 text-xs tracking-wide text-mid-green">
                      原始命题：{p.premise}
                    </p>
                  )}
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading eyebrow="Story" title="营期故事" />
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {camp.modules.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <div className="border-t border-mint pt-6">
                <h3 className="font-display text-2xl text-forest">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {camp.letters && camp.letters.length > 0 && (
        <section className="bg-forest py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Letters"
                title="写给角色的信"
                description="排练之后，演员把没说完的话留给角色。"
                light
              />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {camp.letters.map((letter, i) => (
                <Reveal key={letter.to} delay={i * 0.08}>
                  <blockquote className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                    <p className="text-xs tracking-[0.2em] text-mint uppercase">
                      写给{letter.to}
                    </p>
                    <p className="mt-4 font-display text-base leading-relaxed text-white/85">
                      {letter.excerpt}
                    </p>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <SeedDivider />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <SectionHeading eyebrow="Gallery" title="影像" />
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {camp.gallery.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.05}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width:768px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className={`py-16 md:py-24 ${camp.letters ? "bg-mist/40" : "bg-forest text-white"}`}
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Voices"
              title="学员声音"
              light={!camp.letters}
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {camp.quotes.map((q, i) => (
              <Reveal key={q.text} delay={i * 0.06}>
                <blockquote
                  className={
                    camp.letters
                      ? "border border-forest/10 bg-white/70 p-6"
                      : "border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
                  }
                >
                  <p
                    className={`font-display text-lg leading-relaxed ${
                      camp.letters ? "text-forest" : "text-mint"
                    }`}
                  >
                    “{q.text}”
                  </p>
                  <footer
                    className={`mt-4 text-xs ${
                      camp.letters ? "text-ink-muted" : "text-white/45"
                    }`}
                  >
                    {q.author}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border border-forest/10 bg-white/70 p-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl text-forest">想看完整回顾？</p>
            <p className="mt-2 text-sm text-ink-muted">
              {camp.wechatUrl
                ? "微信推文保留了更完整的文字、视频、vlog 与日常切片。"
                : "营期结束后，我们将在此更新完整回顾与视频链接。"}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {camp.wechatUrl && (
              <Link
                href={camp.wechatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-forest px-5 py-3 text-sm text-mint transition hover:bg-mid-green"
              >
                阅读完整微信回顾 →
              </Link>
            )}
            <Link
              href="/camps"
              className="border border-forest px-5 py-3 text-sm text-forest transition hover:bg-mist"
            >
              返回营期列表
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
