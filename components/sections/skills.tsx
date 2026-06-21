"use client";

import { Code2, Server, Database, Wrench, Workflow, LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Progress } from "@/components/ui/progress";

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  databases: Database,
  tools: Wrench,
  methods: Workflow,
};

export function Skills() {
  const { t } = useI18n();

  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2">
        {t.skills.categories.map((cat, ci) => {
          const Icon = categoryIcons[cat.key] ?? Code2;
          return (
            <Reveal key={cat.key} delay={ci * 0.06}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="mb-5 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white/[0.04]">
                    <Icon className="h-4 w-4 text-accent-light" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-base font-medium text-ink">{cat.name}</h3>
                </div>
                <div className="space-y-4">
                  {cat.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm text-ink/90">{skill.name}</span>
                        <span className="font-mono text-[11px] text-muted-2">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
