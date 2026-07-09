"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { locales, Locale } from "@/lib/translations";
import { FlagIcon } from "@/components/flag-icon";

const STORAGE_KEY = "ac-portfolio-locale";

const CARDS: { locale: Locale; label: string; subtitle: string }[] = [
  { locale: "it", label: "Italiano",  subtitle: "Madrelingua" },
  { locale: "en", label: "English",   subtitle: "Professional" },
  { locale: "es", label: "Español",   subtitle: "Nativo"       },
];

const WELCOME = [
  { text: "Benvenuto",   lang: "it" },
  { text: "Welcome",     lang: "en" },
  { text: "Bienvenido",  lang: "es" },
];

export function LocaleGate({ children }: { children: React.ReactNode }) {
  const { setLocale } = useI18n();
  const [showGate, setShowGate] = useState(false);
  const [mounted,  setMounted]  = useState(false);
  const [selected, setSelected] = useState<Locale | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setShowGate(true);
    } catch { /* storage blocked */ }
  }, []);

  const pick = (l: Locale) => {
    if (selected) return;
    setSelected(l);
    setTimeout(() => { setLocale(l); setShowGate(false); }, 520);
  };

  if (!mounted) return <>{children}</>;

  return (
    <>
      {children}

      <AnimatePresence>
        {showGate && (
          <motion.div
            key="gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)", transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-void px-6 py-10"
          >
            {/* ── ambient layers ─────────────────────────────── */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-[45%] h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.09] blur-[140px]" />
              <div className="absolute left-[20%] top-[20%] h-56 w-56 rounded-full bg-accent-light/[0.05] blur-[90px]" />
              <div className="absolute right-[15%] bottom-[20%] h-44 w-44 rounded-full bg-signal/[0.04] blur-[70px]" />
              <div
                className="absolute inset-0 opacity-[0.25]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
              />
            </div>

            {/* ── eyebrow ──────────────────────────────────────── */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.05, duration: 0.5 } }}
              className="relative mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-signal/70"
            >
              $ initialize --portfolio
            </motion.p>

            {/* ── name + title ─────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.12, duration: 0.55 } }}
              className="relative mb-2 text-center"
            >
              <h1 className="font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Alessandro Caldana
              </h1>
              <p className="mt-2.5 font-mono text-sm tracking-wide text-muted">
                Full Stack Software Engineer
              </p>
            </motion.div>

            {/* ── rotating welcome words ──────────────────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
              className="relative mb-10 mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1"
            >
              {WELCOME.map((w, i) => (
                <span
                  key={w.lang}
                  className="font-display text-2xl font-medium text-ink/40 sm:text-3xl"
                >
                  {w.text}
                  {i < WELCOME.length - 1 && (
                    <span className="ml-5 text-line/40">·</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* ── language cards ───────────────────────────────── */}
            <div className="relative flex flex-col gap-4 sm:flex-row sm:gap-5">
              {CARDS.map(({ locale, label, subtitle }, i) => {
                const isChosen = selected === locale;
                const isDimmed = selected !== null && !isChosen;
                return (
                  <motion.button
                    key={locale}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{
                      opacity: isDimmed ? 0.35 : 1,
                      y: 0,
                      scale: isChosen ? 1.04 : 1,
                      transition: { delay: 0.38 + i * 0.07, duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                    }}
                    whileHover={!selected ? { y: -5, scale: 1.03, transition: { duration: 0.22 } } : {}}
                    whileTap={!selected ? { scale: 0.97 } : {}}
                    onClick={() => pick(locale)}
                    disabled={selected !== null}
                    aria-label={`Select ${label}`}
                    className={`group relative flex min-w-[160px] cursor-pointer flex-col items-center gap-4 overflow-hidden rounded-2xl border px-9 py-8 text-center backdrop-blur-sm transition-colors duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:min-w-[175px] ${
                      isChosen
                        ? "border-accent/60 bg-accent/15 shadow-[0_0_40px_-8px_rgba(61,99,255,0.5)]"
                        : "border-line bg-white/[0.035] hover:border-accent/40 hover:bg-white/[0.06]"
                    }`}
                  >
                    {/* card glow on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(61,99,255,0.14),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* flag */}
                    <FlagIcon
                      code={locale}
                      className="relative h-14 w-14 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                    />

                    {/* label + subtitle */}
                    <div className="relative">
                      <p className="font-display text-lg font-medium text-ink">{label}</p>
                      <p className="mt-0.5 font-mono text-[11px] tracking-wide text-accent-light/75">
                        {subtitle}
                      </p>
                    </div>

                    {/* checkmark on selection */}
                    <AnimatePresence>
                      {isChosen && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 350, damping: 22 } }}
                          className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-accent shadow-[0_0_10px_rgba(61,99,255,0.7)]"
                        >
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                            <path d="M1 3.5L3.2 5.8L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>

            {/* ── hint ─────────────────────────────────────────── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.85, duration: 0.5 } }}
              className="relative mt-9 font-mono text-[10px] tracking-widest text-muted-2/50"
            >
              Your preference will be remembered
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
