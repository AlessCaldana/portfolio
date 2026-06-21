"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 transition-all duration-300",
              scrolled ? "glass h-14 shadow-lg shadow-black/20" : "h-16 border border-transparent"
            )}
          >
            <button
              onClick={() => go("hero")}
              className="font-display text-base font-medium tracking-tight text-ink"
            >
              alessandro<span className="text-accent-light">.dev</span>
            </button>

            <nav className="hidden items-center gap-7 lg:flex">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="font-mono text-[13px] text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <LanguageSwitcher compact />
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
                onClick={() => setOpen(true)}
                aria-label={t.nav.menuOpen}
              >
                <Menu className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-void/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-base text-ink">
                alessandro<span className="text-accent-light">.dev</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label={t.nav.menuClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => go(l.id)}
                  className="font-display text-3xl font-medium text-ink/90 transition-colors hover:text-accent-light"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>
            <div className="flex justify-center px-8 py-8">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
