"use client";

import React from "react";
import { motion } from "motion/react";

const STATS = [
  {
    value: "10M+",
    label: "Annotations Delivered",
    desc: "Across images, video, and LiDAR",
  },
  {
    value: "98%",
    label: "Average Quality Score",
    desc: "Across all exported datasets",
  },
  {
    value: "50+",
    label: "Export Formats",
    desc: "COCO, YOLO, Pascal VOC & more",
  },
  {
    value: "500+",
    label: "Teams Trust Labl-core",
    desc: "From startups to enterprise",
  },
];

export function Stats() {
  return (
    <section className="w-full bg-emerald-600 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Soft glow blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-green-400/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-emerald-200 text-xs font-semibold uppercase tracking-widest mb-3">
            By The Numbers
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight">
            Built for scale. Proven in production.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors duration-300 cursor-default"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-1 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-emerald-100 mb-1">{stat.label}</div>
              <div className="text-xs text-emerald-200/75">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
