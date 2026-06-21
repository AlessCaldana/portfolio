"use client";

import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function About() {
  const { t } = useI18n();

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr]">
        <Reveal delay={0.05}>
          <div className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-xl font-normal leading-snug text-ink/95 sm:text-2xl"
                    : "max-w-2xl leading-relaxed text-muted"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass rounded-2xl p-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-muted-2">
              // focus
            </p>
            <ul className="flex flex-wrap gap-2">
              {t.about.badges.map((b) => (
                <li key={b}>
                  <Badge variant="accent">{b}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
