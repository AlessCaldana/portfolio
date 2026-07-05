"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Palette } from "lucide-react";

const chips = [
  { icon: Code2, label: "React", style: "left-[-6%] top-[10%]", delay: 0 },
  { icon: Database, label: "MySQL", style: "right-[-8%] top-[18%]", delay: 0.4 },
  { icon: GitBranch, label: "Git", style: "left-[-4%] bottom-[12%]", delay: 0.8 },
  { icon: Palette, label: "Figma", style: "right-[-6%] bottom-[6%]", delay: 1.2 },
];

export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px]">
      {/* ambient glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-radial-glow blur-2xl" aria-hidden />

      {/* rotating dashed scan ring */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="200"
          cy="200"
          r="186"
          fill="none"
          stroke="rgba(127,168,255,0.18)"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
      </motion.svg>

      {/* circuit trace connections */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
        <g stroke="rgba(127,168,255,0.35)" strokeWidth="1" fill="none">
          <path d="M 200 60 L 200 130" />
          <path d="M 200 340 L 200 270" />
          <path d="M 60 200 L 130 200" />
          <path d="M 340 200 L 270 200" />
        </g>
        {[
          [200, 60],
          [200, 340],
          [60, 200],
          [340, 200],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3.5"
            fill="#7FA8FF"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* center avatar frame */}
      <div className="absolute inset-[14%] flex items-center justify-center overflow-hidden rounded-full border-2 border-white/[0.1] bg-gradient-to-br from-surface-2 to-void shadow-[0_0_80px_-8px_rgba(61,99,255,0.55),0_0_0_1px_rgba(255,255,255,0.06)]">
        <Image
          src="/profile.png"
          alt="Alessandro Caldana"
          fill
          sizes="(max-width: 768px) 50vw, 300px"
          className="object-cover object-top"
          style={{ transform: "scale(0.96)", transformOrigin: "center 30%" }}
          priority
        />
        <div className="absolute inset-0 rounded-full bg-noise opacity-25" />
        <div className="absolute inset-[6px] rounded-full border border-white/[0.06]" />
        <span className="absolute bottom-[14%] right-[14%] flex h-4 w-4 items-center justify-center rounded-full bg-void ring-2 ring-void">
          <span className="h-2.5 w-2.5 animate-pulse-soft rounded-full bg-signal" />
        </span>
      </div>

      {/* floating tech chips */}
      {chips.map(({ icon: Icon, label, style, delay }) => (
        <motion.div
          key={label}
          className={`absolute ${style} glass-strong flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-mono text-muted`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon className="h-3.5 w-3.5 text-accent-light" strokeWidth={1.75} />
          {label}
        </motion.div>
      ))}
    </div>
  );
}
