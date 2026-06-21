"use client";

import { Mail, Github, MapPin, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/translations";

export function Contact() {
  const { t } = useI18n();

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title} last>
      <Reveal>
        <div className="glass-strong overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="max-w-sm text-base leading-relaxed text-muted">
                {t.contact.description}
              </p>
              <div className="mt-7">
                <Button asChild>
                  <a href={`mailto:${contactInfo.email}`}>
                    <Mail className="h-4 w-4" strokeWidth={1.75} />
                    {t.contact.cta}
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 divide-y divide-line border-t border-line lg:grid-cols-1 lg:divide-y lg:border-l lg:border-t-0">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center justify-between gap-4 px-8 py-5 transition-colors hover:bg-white/[0.03] sm:px-10"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.03] text-muted-2">
                    <Mail className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2">
                      {t.contact.emailLabel}
                    </p>
                    <p className="text-sm text-ink">{contactInfo.email}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-light" />
              </a>

              <a
                href={contactInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 px-8 py-5 transition-colors hover:bg-white/[0.03] sm:px-10"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.03] text-muted-2">
                    <Github className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2">
                      {t.contact.githubLabel}
                    </p>
                    <p className="text-sm text-ink">{contactInfo.github}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-light" />
              </a>

              <div className="flex items-center gap-4 px-8 py-5 sm:px-10">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.03] text-muted-2">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2">
                    {t.contact.countriesLabel}
                  </p>
                  <p className="text-sm text-ink">{contactInfo.countries.join("  ·  ")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
