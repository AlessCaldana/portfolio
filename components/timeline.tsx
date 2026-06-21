"use client";

import { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export interface TimelineEntry {
  title: string;
  period: string;
  body: ReactNode;
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="space-y-8">
      {entries.map((e, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <li className="relative pl-8">
            <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent-light bg-void" />
            {i < entries.length - 1 && (
              <span className="absolute left-[5px] top-5 h-[calc(100%+1.5rem)] w-px bg-line-soft" />
            )}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-lg font-medium text-ink">{e.title}</h3>
              <span className="font-mono text-xs text-accent-light">{e.period}</span>
            </div>
            <div className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">{e.body}</div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
