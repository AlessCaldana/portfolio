"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { locales, localeMeta, Locale } from "@/lib/translations";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t.nav.langSwitch}
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] font-mono text-xs text-muted transition-colors hover:border-accent-light/50 hover:text-ink",
          compact ? "h-9 px-3" : "h-10 px-3.5"
        )}
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span>{localeMeta[locale].flag}</span>
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <ChevronDown className={cn("h-3 w-3 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-xl border border-line bg-surface/95 shadow-2xl backdrop-blur-xl animate-fade-up">
          {locales.map((l: Locale) => (
            <button
              key={l}
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/[0.06]",
                l === locale ? "text-ink" : "text-muted"
              )}
            >
              <span>{localeMeta[l].flag}</span>
              <span className="font-body">{localeMeta[l].label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
