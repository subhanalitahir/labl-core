"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Crosshair, Star, Package, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const STATS: { value: number; suffix: string; label: string; desc: string; icon: LucideIcon }[] = [
  { value: 10,  suffix: "M+", label: "Annotations Delivered",  desc: "Across images, video, and LiDAR",  icon: Crosshair },
  { value: 98,  suffix: "%",  label: "Average Quality Score",  desc: "Across all exported datasets",     icon: Star },
  { value: 50,  suffix: "+",  label: "Export Formats",         desc: "COCO, YOLO, Pascal VOC and more", icon: Package },
  { value: 500, suffix: "+",  label: "Teams Trust Labl-core",  desc: "From startups to enterprise",     icon: Trophy },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {displayed}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative w-full overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-600" />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-green-300/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [-30, 30, -30], y: [-15, 15, -15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-125 rounded-full bg-teal-400/20 blur-3xl"
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="statgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#statgrid)" />
      </svg>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-100 mb-5"
          >
            By The Numbers
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Built for scale.{" "}
            <span className="text-emerald-200">Proven in production.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center text-center p-7 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/18 hover:border-white/30 transition-all duration-300 cursor-default"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                <stat.icon className="h-6 w-6 text-white" strokeWidth={1.75} />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-1 tabular-nums tracking-tight">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-bold text-emerald-100 mb-1">{stat.label}</div>
              <div className="text-xs text-emerald-200/70 leading-relaxed">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
