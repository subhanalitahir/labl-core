"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Zap, CheckCircle2, Sparkles } from "lucide-react";

const PERKS = [
  "Free forever tier",
  "No credit card required",
  "Up and running in 5 minutes",
  "Cancel anytime",
];

export function CTABanner() {
  return (
    <section className="relative w-full bg-linear-to-b from-slate-50 to-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl p-1"
        >
          {/* Animated border */}
          <div
            className="absolute inset-0 rounded-3xl bg-linear-to-br from-emerald-400 via-teal-400 to-emerald-600 opacity-70"
            style={{ backgroundSize: "200% 200%", animation: "gradient-shift 5s ease infinite" }}
          />

          {/* Inner card */}
          <div className="relative rounded-[22px] bg-white overflow-hidden">
            {/* Background blobs inside card */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 h-80 w-150 rounded-full bg-emerald-50/90 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1], x: [-20, 20, -20] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 -right-20 h-64 w-64 rounded-full bg-teal-50/80 blur-3xl"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], x: [15, -15, 15] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-emerald-50/70 blur-3xl"
              />
            </div>

            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #059669 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative z-10 p-10 sm:p-16 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 mb-7"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                </motion.div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Free to start · No credit card needed
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-zinc-900 mb-5 leading-[1.05]"
              >
                Start labeling your data
                <br />
                <span
                  className="bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% 200%", animation: "gradient-shift 4s ease infinite" }}
                >
                  in minutes, not days.
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-base text-zinc-500 max-w-xl mx-auto mb-8 leading-relaxed"
              >
                No setup fees. No seat minimums. Upload your first dataset today and see why 500+ ML teams trust Labl-core to deliver clean annotations at scale.
              </motion.p>

              {/* Perks */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10"
              >
                {PERKS.map((perk) => (
                  <div key={perk} className="flex items-center gap-1.5 text-sm text-zinc-500">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    {perk}
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-9 py-4 text-sm font-bold text-white overflow-hidden shadow-[0_6px_30px_rgba(5,150,105,0.4)] hover:shadow-[0_10px_50px_rgba(5,150,105,0.55)] transition-shadow duration-300"
                >
                  {/* shimmer */}
                  <span className="absolute inset-0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 bg-linear-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                  <Zap className="h-4 w-4" />
                  Get Started Free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-9 py-4 text-sm font-bold text-zinc-700 hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300 shadow-sm"
                >
                  Book a Demo
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
