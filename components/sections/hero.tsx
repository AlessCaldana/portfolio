"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/hero-illustration";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  const { t } = useI18n();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 -z-10 bg-radial-glow" aria-hidden />
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(127,168,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(127,168,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {t.hero.status}
            </span>
            <span className="h-3 w-px bg-line" />
            <span className="font-mono text-[11px] text-muted">{t.hero.location}</span>
          </motion.div>

          <motion.p variants={item} className="font-mono text-sm text-signal/90">
            {t.hero.eyebrow}
            <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[2px] animate-blink bg-signal/80 align-middle" />
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl lg:text-[3.6rem]"
          >
            {t.hero.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl font-mono text-[13px] leading-relaxed text-accent-light sm:text-sm"
          >
            {t.hero.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            {t.hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="/cv.pdf" download>
                <Download className="h-4 w-4" strokeWidth={1.75} />
                {t.hero.ctaCV}
              </a>
            </Button>
            <Button variant="outline" onClick={() => scrollTo("projects")}>
              {t.hero.ctaProjects}
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("contact")}>
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              {t.hero.ctaContact}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <HeroIllustration />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}
