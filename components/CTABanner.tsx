"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";

export function CTABanner() {
  return (
    <section className="w-full bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-zinc-100">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-white border border-zinc-200 p-12 sm:p-16 text-center shadow-[0_8px_50px_rgba(0,0,0,0.06)]"
        >
          {/* Glow blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-96 rounded-full bg-emerald-100/70 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-green-100/60 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-emerald-50/80 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 mb-6"
            >
              <Zap className="h-3.5 w-3.5 text-emerald-600" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                Free to start · No credit card
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 mb-5">
              Start labeling your data
              <br />
              <span className="bg-linear-to-br from-zinc-900 to-emerald-600 bg-clip-text text-transparent">
                in minutes, not days.
              </span>
            </h2>

            <p className="text-base text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed">
              No setup fees. No seat minimums. Upload your first dataset today and see why 500+ ML teams trust Labl-core to deliver clean annotations at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(5,150,105,0.30)] hover:bg-emerald-700 transition-colors"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 py-4 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 hover:border-zinc-300 shadow-sm"
              >
                Book a Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
