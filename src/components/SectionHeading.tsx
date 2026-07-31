import Link from "next/link";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  href?: string;
  linkLabel?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  href,
  linkLabel,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading mb-10 md:mb-14 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs tracking-[0.25em] uppercase ${
            light ? "text-mint/80" : "text-mid-green"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl leading-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/70" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
      {href && linkLabel && (
        <Link
          href={href}
          className={`mt-5 inline-flex items-center gap-2 text-sm tracking-wide ${
            light ? "text-mint hover:text-white" : "text-mid-green hover:text-forest"
          }`}
        >
          {linkLabel}
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
