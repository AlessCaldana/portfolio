"use client";

import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const { t } = useI18n();

  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      subtitle={t.projects.subtitle}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {t.projects.items.map((p, i) => (
          <Reveal key={p.key} delay={(i % 2) * 0.08}>
            <article className="glass group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.15] hover:bg-white/[0.055] hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:p-7">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {p.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <h3 className="font-display text-lg font-medium leading-snug text-ink sm:text-xl">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.description}</p>

              <div className="mt-5 border-t border-line-soft pt-4">
                <p className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-muted-2">
                  {p.listLabel}
                </p>
                <ul className="space-y-1.5">
                  {p.list.map((li) => (
                    <li key={li} className="flex items-start gap-2 text-sm text-ink/85">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" strokeWidth={2} />
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
