"use client";

import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Timeline } from "@/components/timeline";

export function Experience() {
  const { t } = useI18n();

  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <Timeline
        entries={[
          {
            title: t.experience.role,
            period: t.experience.period,
            body: t.experience.description,
          },
        ]}
      />
    </Section>
  );
}
