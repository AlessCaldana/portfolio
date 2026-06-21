"use client";

import { Award, Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function Certifications() {
  const { t } = useI18n();

  return (
    <Section id="certifications" eyebrow={t.certifications.eyebrow} title={t.certifications.title}>
      <Reveal>
        <div className="glass flex flex-col items-center justify-center gap-3 rounded-2xl border-dashed px-6 py-14 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white/[0.03]">
            <Award className="h-5 w-5 text-muted-2" strokeWidth={1.5} />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">{t.certifications.placeholder}</p>
          <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-line text-muted-2">
            <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />
          </span>
        </div>
      </Reveal>
    </Section>
  );
}
