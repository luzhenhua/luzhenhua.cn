"use client";

import { useLanguage } from "@/components/language-provider";
import type { ReactNode } from "react";

export function LanguageContentWrapper({ children }: { children: ReactNode }) {
  const { locale } = useLanguage();
  return <div key={locale}>{children}</div>;
}
