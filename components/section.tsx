import { ReactNode } from "react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  last?: boolean;
}

export function Section({ id, eyebrow, title, subtitle, children, className, last }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="relative pl-7 sm:pl-9">
          {/* signature rail: circuit trace + node, ties every section together */}
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-1.5 w-px bg-gradient-to-b from-line via-line to-transparent",
              last ? "h-12" : "h-[calc(100%+5rem)] sm:h-[calc(100%+7rem)]"
            )}
          />
          <span
            aria-hidden
            className="absolute left-[-3px] top-0 h-[7px] w-[7px] rounded-full bg-accent-light shadow-[0_0_12px_2px_rgba(127,168,255,0.7)]"
          />
          <Reveal>
            <p className="font-mono text-xs tracking-tight text-signal/90">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
            {subtitle && <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{subtitle}</p>}
          </Reveal>
          <div className="mt-10 sm:mt-12">{children}</div>
        </div>
      </div>
    </section>
  );
}
