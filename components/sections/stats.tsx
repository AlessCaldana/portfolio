"use client";

import { Code2 } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { AnimatedCounter } from "@/components/animated-counter";

export function Stats() {
  const { t } = useI18n();

  return (
    <Section id="stats" eyebrow={t.stats.eyebrow} title={t.stats.title}>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {t.stats.items.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="glass flex h-full flex-col items-center justify-center gap-2 rounded-2xl px-4 py-9 text-center">
              {stat.isBadge ? (
                <>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent-light">
                    <Code2 className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <p className="mt-1 font-display text-sm font-medium leading-tight text-ink">
                    {stat.label}
                  </p>
                </>
              ) : (
                <>
                  <span className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-2">
                    {stat.label}
                  </p>
                </>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
