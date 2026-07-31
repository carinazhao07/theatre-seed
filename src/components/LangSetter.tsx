"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/locale";

export function LangSetter({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
  }, [locale]);

  return null;
}
