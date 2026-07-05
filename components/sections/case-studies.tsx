"use client";

import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function CaseStudies() {
  const { t } = useI18n();
  const { labels } = t.caseStudies;

  return (
    <Section id="case-studies" eyebrow={t.caseStudies.eyebrow} title={t.caseStudies.title} subtitle={t.caseStudies.subtitle}>
      <div className="space-y-8">
        {t.caseStudies.items.map((cs, i) => (
          <Reveal key={cs.key} delay={i * 0.06}>
            <article className="glass-strong overflow-hidden rounded-3xl">
              {/* header */}
              <div className="border-b border-line px-8 py-5 sm:px-10">
                <span className="font-mono text-[11px] text-signal/90">{cs.tag}</span>
                <h3 className="mt-1 font-display text-lg font-medium text-ink sm:text-xl">{cs.title}</h3>
              </div>

              {/* three columns: problem / solution / decision */}
              <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
                <div className="px-8 py-6 sm:px-6">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-2">{labels.problem}</p>
                  <p className="text-sm leading-relaxed text-muted">{cs.problem}</p>
                </div>
                <div className="px-8 py-6 sm:px-6">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-2">{labels.solution}</p>
                  <p className="text-sm leading-relaxed text-muted">{cs.solution}</p>
                </div>
                <div className="px-8 py-6 sm:px-6">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-2">{labels.decision}</p>
                  <p className="text-sm leading-relaxed text-muted">{cs.decision}</p>
                </div>
              </div>

              {/* architecture flow */}
              <div className="border-t border-line bg-white/[0.015] px-8 py-5 sm:px-10">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-2">{labels.architecture}</p>
                <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-accent-light/75">
                  {cs.architectureFlow}
                </pre>
              </div>

              {/* result + metrics + tech */}
              <div className="border-t border-line px-8 py-5 sm:px-10">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-2">{labels.result}</p>
                <p className="mb-5 text-sm leading-relaxed text-muted">{cs.result}</p>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2">{m.label}</p>
                        <p className="font-display text-xl font-medium text-ink">{m.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.tech.map((tech) => (
                      <Badge key={tech} variant="accent">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
