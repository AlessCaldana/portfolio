"use client";

import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Timeline } from "@/components/timeline";

export function Education() {
  const { t } = useI18n();

  return (
    <Section id="education" eyebrow={t.education.eyebrow} title={t.education.title}>
      <Timeline
        entries={t.education.items.map((it) => ({
          title: it.title,
          period: it.period,
          body: it.subtitle,
        }))}
      />
    </Section>
  );
}
