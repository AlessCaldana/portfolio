"use client";

import { useState } from "react";
import { Check, Eye } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { CaseStudyModal } from "@/components/case-study-modal";
import { CASE_STUDY_CONFIGS, PROJECT_TO_CASE_STUDY } from "@/lib/case-study-config";
import type { Project } from "@/lib/translations";

interface Props {
  imageManifest: Record<string, string[]>;
}

export function Projects({ imageManifest }: Props) {
  const { t } = useI18n();
  const [open, setOpen] = useState<{ project: Project; configKey: string } | null>(null);

  const handleOpen = (project: Project, configKey: string) => setOpen({ project, configKey });
  const handleClose = () => setOpen(null);

  return (
    <>
      <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle}>
        <div className="grid gap-5 lg:grid-cols-2">
          {t.projects.items.map((p, i) => {
            const configKey = PROJECT_TO_CASE_STUDY[p.key];
            const config    = configKey ? CASE_STUDY_CONFIGS[configKey] : null;
            const images    = config ? (imageManifest[config.folder] ?? []) : [];
            const hasCaseStudy = images.length > 0;

            return (
              <Reveal key={p.key} delay={(i % 2) * 0.08}>
                <article className="glass group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.15] hover:bg-white/[0.055] hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:p-7">
                  {/* tech badges */}
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {p.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  <h3 className="font-display text-lg font-medium leading-snug text-ink sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.description}</p>

                  {/* checklist */}
                  <div className="mt-5 border-t border-line pt-4">
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

                  {/* Case Study button — only if images available */}
                  {hasCaseStudy && config && (
                    <div className="mt-5 pt-4 border-t border-line">
                      <button
                        onClick={() => handleOpen(p, configKey!)}
                        className="group/btn flex w-full items-center justify-center gap-2.5 rounded-xl border border-accent/30 bg-accent/8 px-4 py-2.5 font-mono text-xs text-accent-light transition-all duration-200 hover:border-accent/55 hover:bg-accent/14 hover:shadow-[0_0_16px_rgba(61,99,255,0.2)] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <Eye className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:scale-110" strokeWidth={1.75} />
                        {t.projectModal.viewCase}
                        <span className="ml-auto rounded-full border border-accent/25 bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] text-muted-2">
                          {images.length} screenshots
                        </span>
                      </button>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Modal — rendered via portal */}
      {open && open.configKey && (
        <CaseStudyModal
          project={open.project}
          config={CASE_STUDY_CONFIGS[open.configKey]}
          images={imageManifest[CASE_STUDY_CONFIGS[open.configKey].folder] ?? []}
          isOpen={true}
          onClose={handleClose}
        />
      )}
    </>
  );
}
