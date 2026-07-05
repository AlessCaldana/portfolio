"use client";

import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function Experience() {
  const { t } = useI18n();
  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <div className="space-y-6">
        {t.experience.entries.map((entry, ei) => (
          <Reveal key={ei} delay={ei * 0.06}>
            <div className="glass rounded-2xl p-6 sm:p-8">
              {/* role header */}
              <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-line pb-5">
                <h3 className="font-display text-base font-medium text-ink">{entry.role}</h3>
                <span className="rounded-full border border-signal/35 bg-signal/10 px-3 py-0.5 font-mono text-[11px] text-signal/90">
                  {entry.period}
                </span>
              </div>
              {/* client bullets */}
              <div className="space-y-6">
                {entry.clients.map((client, ci) => (
                  <div key={ci} className="flex gap-4">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                      <ArrowRight className="h-2.5 w-2.5 text-accent-light" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span className="font-display text-sm font-medium text-ink">{client.client}</span>
                        <span className="rounded border border-line bg-white/[0.03] px-1.5 py-0.5 font-mono text-[10px] text-muted-2">
                          {client.sector}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted">{client.bullet}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
