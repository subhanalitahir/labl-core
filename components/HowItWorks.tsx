"use client";

import React from "react";
import { motion } from "motion/react";
import { Upload, Cpu, CheckCircle, Download } from "lucide-react";

const STEPS = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Dataset",
    description:
      "Drag and drop images, video files, or point clouds. Supports JPG, PNG, MP4, LiDAR and custom formats. Bulk upload thousands of files in seconds.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Annotate with AI",
    description:
      "Run pre-trained detectors, segmentation models, and object trackers directly in your workflow. AI handles the heavy lifting — you review and refine.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Review & QA",
    description:
      "Multi-stage review pipelines with consensus scoring across annotators. Set validation frames and quality bars so nothing ships below your standard.",
  },
  {
    icon: Download,
    step: "04",
    title: "Export & Deploy",
    description:
      "One-click export to COCO, YOLO, Pascal VOC, and 50+ formats. Push directly to your training pipeline or cloud storage with a single API call.",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-zinc-100">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900">
            From raw data to{" "}
            <span className="bg-linear-to-r from-zinc-900 to-emerald-600 bg-clip-text text-transparent">
              clean labels
            </span>
            , in four steps
          </h2>
          <p className="mt-4 text-base text-zinc-500 max-w-xl mx-auto">
            Labl-core was designed to eliminate every bottleneck between your raw data and a production-ready dataset.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-emerald-200 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.13 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-zinc-200 shadow-sm group-hover:border-emerald-300 group-hover:shadow-[0_4px_20px_rgba(5,150,105,0.15)] transition-all duration-300 group-hover:-translate-y-1">
                      <Icon className="h-7 w-7 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[9px] font-bold text-white shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
