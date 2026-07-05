"use client";

import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

const tierStyles: Record<string, string> = {
  production: "border-accent/35 bg-accent/10 text-accent-light",
  workflow:   "border-line bg-white/[0.04] text-muted",
  learning:   "border-signal/35 bg-signal/10 text-signal",
};

const tierDot: Record<string, string> = {
  production: "bg-accent",
  workflow:   "bg-muted-2",
  learning:   "bg-signal",
};

export function Skills() {
  const { t } = useI18n();
  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle}>
      <div className="space-y-4">
        {t.skills.tiers.map((tier, ti) => (
          <Reveal key={tier.key} delay={ti * 0.08}>
            <div className="glass rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-2.5">
                <span className={`h-2 w-2 shrink-0 rounded-full ${tierDot[tier.key]}`} />
                <span className="font-display text-sm font-medium text-ink">{tier.name}</span>
                <span className="font-mono text-[11px] text-muted-2">— {tier.context}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tier.items.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-all duration-200 hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)] ${tierStyles[tier.key] ?? tierStyles.workflow}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
