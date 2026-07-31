export type Locale = "zh" | "en";

export function localeFromPath(pathname: string): Locale {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return normalized === "/en" || normalized.startsWith("/en/") ? "en" : "zh";
}

export function withLocale(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "zh") return normalized === "/en" ? "/" : normalized;
  if (normalized === "/") return "/en";
  if (normalized.startsWith("/en")) return normalized;
  return `/en${normalized}`;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  if (target === "en") {
    if (pathname === "/" || pathname === "") return "/en";
    if (pathname.startsWith("/en")) return pathname;
    return `/en${pathname}`;
  }
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname;
}
