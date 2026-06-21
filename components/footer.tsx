"use client";

import { useI18n } from "@/lib/i18n-context";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-base font-medium tracking-tight text-ink">
              alessandro<span className="text-accent-light">.dev</span>
            </p>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <p className="font-mono text-[11px] text-muted-2">
              © {year} Alessandro Caldana — {t.footer.rights}
            </p>
            <p className="font-mono text-[11px] text-muted-2">{t.footer.builtWith}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
