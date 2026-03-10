"use client";

import React from "react";
import { motion } from "motion/react";
import { Upload, Cpu, CheckCircle, Download, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Dataset",
    description:
      "Drag and drop images, video files, or point clouds. Supports JPG, PNG, MP4, LiDAR and custom formats. Bulk upload thousands of files in seconds.",
    color: "from-violet-500 to-indigo-600",
    bgGlow: "rgba(139,92,246,0.15)",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Annotate with AI",
    description:
      "Run pre-trained detectors, segmentation models, and object trackers directly in your workflow. AI handles the heavy lifting â€” you review and refine.",
    color: "from-emerald-500 to-teal-600",
    bgGlow: "rgba(5,150,105,0.15)",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Review & QA",
    description:
      "Multi-stage review pipelines with consensus scoring across annotators. Set validation frames and quality bars so nothing ships below your standard.",
    color: "from-blue-500 to-cyan-600",
    bgGlow: "rgba(59,130,246,0.15)",
  },
  {
    icon: Download,
    step: "04",
    title: "Export & Deploy",
    description:
      "One-click export to COCO, YOLO, Pascal VOC, and 50+ formats. Push directly to your training pipeline or cloud storage with a single API call.",
    color: "from-orange-500 to-amber-600",
    bgGlow: "rgba(249,115,22,0.15)",
  },
];

export function HowItWorks() {
  return (
    <section className="relative w-full bg-linear-to-b from-slate-50 via-white to-slate-50 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top/bottom edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-violet-50/70 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-emerald-50/60 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 mb-5"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">How It Works</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-5">
            From raw data to{" "}
            <span className="bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%", animation: "gradient-shift 3s ease infinite" }}>
              clean labels
            </span>
            {" "}in four steps
          </h2>
          <p className="text-base text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Labl-core was designed to eliminate every bottleneck between your raw data and a production-ready dataset.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connector line â€” desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px overflow-hidden">
            <div className="w-full h-full bg-linear-to-r from-transparent via-zinc-200 to-transparent" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="absolute inset-0 bg-linear-to-r from-violet-400 via-emerald-400 to-amber-400 origin-left"
              style={{ opacity: 0.6 }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  {/* Icon circle */}
                  <div className="relative mb-7">
                    {/* Glow ring on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                      style={{ background: step.bgGlow }}
                    />
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br ${step.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <Icon className="h-9 w-9 text-white drop-shadow-sm" />
                    </motion.div>
                    {/* Step number badge */}
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.3 + index * 0.15 }}
                      className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white border-2 border-zinc-200 text-[11px] font-black text-zinc-700 shadow-sm"
                    >
                      {index + 1}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-zinc-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-55">{step.description}</p>

                  {/* Arrow connector (mobile/tablet) */}
                  {index < STEPS.length - 1 && (
                    <div className="flex justify-center mt-6 sm:hidden">
                      <ArrowRight className="h-4 w-4 text-zinc-300" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-zinc-400 mb-4">Ready to get started?</p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors shadow-md"
          >
            Start your free project
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

