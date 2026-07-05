"use client";

import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { FlagIcon } from "@/components/flag-icon";

export function LanguagesSection() {
  const { t } = useI18n();

  return (
    <Section id="languages" eyebrow={t.languagesSection.eyebrow} title={t.languagesSection.title}>
      <div className="grid gap-4 sm:grid-cols-3">
        {t.languagesSection.items.map((lang, i) => (
          <Reveal key={lang.name} delay={i * 0.08}>
            <div className="glass rounded-2xl p-6 text-center">
              <FlagIcon code={lang.flagCode} className="mx-auto h-9 w-9" />
              <h3 className="mt-3 font-display text-base font-medium text-ink">{lang.name}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-2">
                {lang.level}
              </p>
              {lang.note && (
                <p className="mt-2 font-mono text-[10px] text-signal/80 leading-snug">{lang.note}</p>
              )}
              <div className="mt-4 flex justify-center gap-1.5" aria-hidden>
                {[0, 1, 2, 3, 4].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-5 rounded-full"
                    style={{
                      backgroundColor:
                        d < Math.round(lang.strength * 5) ? "#7FA8FF" : "rgba(255,255,255,0.08)",
                    }}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
