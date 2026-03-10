"use client";

import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Labl-core cut our annotation turnaround by 60%. The AI pre-labeling combined with the clean review workflow means we ship datasets twice as fast and at much higher quality.",
    name: "Sarah Chen",
    role: "Computer Vision Engineer",
    company: "AutoDrive Labs",
    avatar: "SC",
    color: "from-violet-500 to-indigo-600",
    metric: "60% faster",
    metricLabel: "turnaround time",
  },
  {
    quote:
      "We evaluated five annotation platforms. Labl-core is the only one that handles video tracking, consensus scoring, and COCO export all in one â€” without needing a PhD to configure it.",
    name: "Marcus Okonkwo",
    role: "ML Team Lead",
    company: "Perceive AI",
    avatar: "MO",
    color: "from-emerald-500 to-teal-600",
    metric: "5 platforms",
    metricLabel: "evaluated, chose us",
  },
  {
    quote:
      "Our labeled dataset quality went from 81% to 97% after switching to Labl-core. The multi-stage review pipeline and inter-annotator agreement metrics made all the difference.",
    name: "Priya Nair",
    role: "Head of Data Science",
    company: "Visionix",
    avatar: "PN",
    color: "from-blue-500 to-cyan-600",
    metric: "81% â†’ 97%",
    metricLabel: "dataset quality",
  },
];

export function Testimonials() {
  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 h-96 w-96 rounded-full bg-emerald-50/80 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-50/60 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 mb-5"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Trusted by ML Teams</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
            What our users{" "}
            <span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%", animation: "gradient-shift 3s ease infinite" }}>
              actually say
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative flex flex-col bg-white border border-zinc-200 rounded-2xl p-7 shadow-sm hover:shadow-[0_20px_60px_rgba(5,150,105,0.12)] hover:border-emerald-200/60 transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r ${t.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Metric highlight */}
              <div className={`absolute top-5 right-5 rounded-xl bg-linear-to-br ${t.color} p-3 opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:scale-100 scale-75`}>
                <div className="text-sm font-black text-white leading-none">{t.metric}</div>
                <div className="text-[10px] text-white/70 font-medium mt-0.5">{t.metricLabel}</div>
              </div>

              {/* Quote icon */}
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${t.color} mb-5 shadow-sm`}>
                <Quote className="h-4 w-4 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -30 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-zinc-100">
                <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br ${t.color} text-white text-xs font-black shrink-0 shadow-md`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">{t.name}</div>
                  <div className="text-xs text-zinc-400">
                    {t.role} Â· <span className="text-emerald-600 font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {["AutoDrive Labs", "Perceive AI", "Visionix", "DataForge", "NeuralOps", "VisionScale"].map((company) => (
              <span key={company} className="text-sm font-bold text-zinc-600 tracking-tight">{company}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
