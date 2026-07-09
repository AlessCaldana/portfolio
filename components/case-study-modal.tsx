"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut,
  Users, Shield, Building2, Truck, ClipboardList, MapPin,
  PackageCheck, Receipt, BarChart3, FileSearch, FileText, QrCode,
  Package, DollarSign, BookOpen, CreditCard, Calculator,
  CheckCircle2, ArrowRight, Layers,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import type { Project, Locale } from "@/lib/translations";
import type { CaseStudyConfig } from "@/lib/case-study-config";
import { Badge } from "@/components/ui/badge";

/* ─── icon map ────────────────────────────────────────────────── */
const ICONS: Record<string, React.ElementType> = {
  Users, Shield, Building2, Truck, ClipboardList, MapPin,
  PackageCheck, Receipt, BarChart3, FileSearch, FileText, QrCode,
  Package, DollarSign, BookOpen, CreditCard, Calculator, Layers,
};

type Tab = "info" | "gallery" | "tech";

interface Props {
  project: Project;
  config: CaseStudyConfig;
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ project, config, images, isOpen, onClose }: Props) {
  const { t, locale } = useI18n();
  const m = t.projectModal;
  const loc = locale as Locale;

  const [tab, setTab]           = useState<Tab>("info");
  const [imgIdx, setImgIdx]     = useState(0);
  const [zoomed, setZoomed]     = useState(false);
  const thumbsRef               = useRef<HTMLDivElement>(null);

  const total = images.length;

  const prev = useCallback(() => setImgIdx(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setImgIdx(i => (i + 1) % total), [total]);

  /* keyboard */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { if (zoomed) setZoomed(false); else onClose(); }
      if (e.key === "ArrowLeft"  && !zoomed) prev();
      if (e.key === "ArrowRight" && !zoomed) next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, zoomed, prev, next, onClose]);

  /* scroll lock */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTab("info");
      setImgIdx(0);
      setZoomed(false);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* scroll thumbnail into view */
  useEffect(() => {
    if (!thumbsRef.current) return;
    const el = thumbsRef.current.children[imgIdx] as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [imgIdx]);

  /* ── tabs content ──────────────────────────────────────────── */
  const InfoTab = () => (
    <motion.div key="info" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      {/* meta */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { label: m.role,   value: config.roleDetail[loc] },
          { label: m.client, value: config.client },
          { label: m.year,   value: config.year },
          { label: m.status, value: config.status[loc] },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-line bg-white/[0.025] px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2 mb-1">{label}</p>
            <p className="font-display text-sm font-medium text-ink leading-snug">{value}</p>
          </div>
        ))}
      </div>

      {/* stats */}
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2 mb-3">{m.statsLabel}</p>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {config.stats.map((s) => (
          <div key={s.value} className="flex flex-col items-center rounded-xl border border-accent/25 bg-accent/8 py-3 text-center">
            <span className="font-display text-lg font-medium text-ink leading-none">{s.value}</span>
            <span className="mt-1 font-mono text-[9px] text-muted-2 leading-tight">{s.label[loc]}</span>
          </div>
        ))}
      </div>

      {/* what I built */}
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2 mb-3">{m.whatIBuilt}</p>
      <div className="grid grid-cols-2 gap-2 mb-6">
        {config.modules.map((mod) => {
          const Icon = ICONS[mod.icon] ?? Layers;
          return (
            <div key={mod.icon} className="flex items-center gap-2.5 rounded-xl border border-line bg-white/[0.025] px-3 py-2.5 transition-colors hover:border-accent/30 hover:bg-accent/5">
              <Icon className="h-3.5 w-3.5 shrink-0 text-accent-light" strokeWidth={1.75} />
              <span className="text-xs font-medium text-ink leading-tight">{mod.label[loc]}</span>
            </div>
          );
        })}
      </div>

      {/* features */}
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2 mb-3">{m.features}</p>
      <ul className="space-y-2">
        {config.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" strokeWidth={2} />
            {f[loc]}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const GalleryTab = () => (
    <motion.div key="gallery" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => { setImgIdx(i); setTab("info"); /* switch to main view */ }}
            className={`group relative aspect-video overflow-hidden rounded-lg border transition-all duration-200 ${
              i === imgIdx ? "border-accent shadow-[0_0_12px_rgba(61,99,255,0.4)]" : "border-line hover:border-accent/40"
            }`}
          >
            <Image src={src} alt={`Screenshot ${i + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            {i === imgIdx && (
              <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
                <div className="rounded-full bg-accent/90 px-2 py-0.5 font-mono text-[10px] text-white">{i + 1}</div>
              </div>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );

  const TechTab = () => (
    <motion.div key="tech" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      {/* tech badges */}
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2 mb-3">Stack</p>
      <div className="flex flex-wrap gap-2 mb-7">
        {config.tech.map((tech) => (
          <span key={tech} className="rounded-lg border border-accent/30 bg-accent/8 px-3 py-1.5 font-mono text-xs text-accent-light">
            {tech}
          </span>
        ))}
      </div>

      {/* timeline */}
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2 mb-4">{m.devProcess}</p>
      <div className="flex flex-wrap gap-0">
        {config.timeline.map((step, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent-light">
                <span className="font-mono text-[10px]">{i + 1}</span>
              </div>
              <span className="mt-1.5 font-mono text-[10px] text-muted-2 text-center max-w-[52px] leading-tight">{step[loc]}</span>
            </div>
            {i < config.timeline.length - 1 && (
              <ArrowRight className="mx-1 h-3 w-3 text-line mb-3" />
            )}
          </div>
        ))}
      </div>

      {/* description from translations case study */}
      <div className="mt-7 rounded-xl border border-line bg-white/[0.02] p-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-2 mb-2">About</p>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      </div>
    </motion.div>
  );

  /* ── portal guard ──────────────────────────────────────────── */
  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            key="cs-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[300] bg-void/80 backdrop-blur-md"
          />

          {/* modal */}
          <motion.div
            key="cs-modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-0 z-[301] m-3 flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl sm:m-5 lg:m-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── header ──────────────────────────────────────── */}
            <div className="flex shrink-0 items-center justify-between border-b border-line px-5 py-3.5 sm:px-7">
              <div>
                <p className="font-mono text-[10px] text-signal/80">$ open --case-study</p>
                <h2 className="font-display text-base font-medium text-ink sm:text-lg leading-tight">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted-2 transition-colors hover:border-line-soft hover:bg-white/[0.06] hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* ── body ─────────────────────────────────────────── */}
            <div className="flex flex-1 flex-col overflow-hidden lg:flex-row">

              {/* ── LEFT: gallery ────────────────────────────── */}
              <div className="flex shrink-0 flex-col overflow-hidden border-b border-line lg:w-[58%] lg:border-b-0 lg:border-r">
                {/* main image */}
                <div
                  className="relative flex-1 cursor-zoom-in bg-void/60"
                  onClick={() => images.length > 0 && setZoomed(true)}
                  style={{ minHeight: "220px" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={imgIdx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="absolute inset-0"
                    >
                      {images[imgIdx] && (
                        <Image
                          src={images[imgIdx]}
                          alt={`Screenshot ${imgIdx + 1}`}
                          fill
                          className="object-contain p-3"
                          priority
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* nav arrows */}
                  <button onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-void/70 text-ink backdrop-blur-sm transition hover:bg-white/10">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); next(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-void/70 text-ink backdrop-blur-sm transition hover:bg-white/10">
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  {/* counter + zoom hint */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3">
                    <span className="rounded-full border border-line bg-void/80 px-2.5 py-1 font-mono text-[11px] text-muted-2 backdrop-blur-sm">
                      {imgIdx + 1} {m.counter} {total}
                    </span>
                    <span className="hidden items-center gap-1 rounded-full border border-line bg-void/80 px-2.5 py-1 font-mono text-[10px] text-muted-2 backdrop-blur-sm sm:flex">
                      <ZoomIn className="h-3 w-3" /> {m.zoom}
                    </span>
                  </div>
                </div>

                {/* thumbnails */}
                <div
                  ref={thumbsRef}
                  className="flex shrink-0 gap-2 overflow-x-auto border-t border-line bg-void/30 p-2.5 scrollbar-none"
                  style={{ scrollbarWidth: "none" }}
                >
                  {images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setImgIdx(i)}
                      className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-150 sm:h-14 sm:w-24 ${
                        i === imgIdx
                          ? "border-accent shadow-[0_0_8px_rgba(61,99,255,0.45)] scale-[1.05]"
                          : "border-line opacity-60 hover:opacity-90 hover:border-line-soft"
                      }`}
                    >
                      <Image src={src} alt={`Thumb ${i + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>

                {/* keyboard hint */}
                <div className="hidden shrink-0 items-center justify-center gap-4 border-t border-line py-2 lg:flex">
                  <span className="font-mono text-[10px] text-muted-2">← → nav</span>
                  <span className="font-mono text-[10px] text-muted-2">{m.pressEsc}</span>
                </div>
              </div>

              {/* ── RIGHT: info panel ─────────────────────────── */}
              <div className="flex flex-1 flex-col overflow-hidden">
                {/* tabs */}
                <div className="flex shrink-0 border-b border-line">
                  {([
                    { id: "info",    label: m.tab_info    },
                    { id: "gallery", label: m.tab_gallery  },
                    { id: "tech",    label: m.tab_tech     },
                  ] as { id: Tab; label: string }[]).map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setTab(id)}
                      className={`relative flex-1 px-4 py-3 font-mono text-xs transition-colors duration-150 ${
                        tab === id ? "text-ink" : "text-muted-2 hover:text-muted"
                      }`}
                    >
                      {label}
                      {tab === id && (
                        <motion.div
                          layoutId="cs-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* tab content */}
                <div className="flex-1 overflow-y-auto p-5 sm:p-6">
                  <AnimatePresence mode="wait">
                    {tab === "info"    && <InfoTab    key="info"    />}
                    {tab === "gallery" && <GalleryTab key="gallery" />}
                    {tab === "tech"    && <TechTab    key="tech"    />}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── zoom overlay ─────────────────────────────────── */}
          <AnimatePresence>
            {zoomed && (
              <motion.div
                key="cs-zoom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setZoomed(false)}
                className="fixed inset-0 z-[400] flex cursor-zoom-out items-center justify-center bg-void/95 p-4 backdrop-blur-sm"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={images[imgIdx]}
                    alt="Zoom"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <button
                  onClick={() => setZoomed(false)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-void/80 text-ink backdrop-blur-sm transition hover:bg-white/10"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] text-muted-2">
                  {imgIdx + 1} {m.counter} {total} — {m.pressEsc}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
