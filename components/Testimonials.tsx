"use client";

import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Labl-core cut our annotation turnaround by 60%. The AI pre-labeling combined with the clean review workflow means we ship datasets twice as fast and at much higher quality.",
    name: "Sarah Chen",
    role: "Computer Vision Engineer",
    company: "AutoDrive Labs",
    avatar: "SC",
  },
  {
    quote:
      "We evaluated five annotation platforms. Labl-core is the only one that handles video tracking, consensus scoring, and COCO export all in one — without needing a PhD to configure it.",
    name: "Marcus Okonkwo",
    role: "ML Team Lead",
    company: "Perceive AI",
    avatar: "MO",
  },
  {
    quote:
      "Our labeled dataset quality went from 81% to 97% after switching to Labl-core. The multi-stage review pipeline and inter-annotator agreement metrics made all the difference.",
    name: "Priya Nair",
    role: "Head of Data Science",
    company: "Visionix",
    avatar: "PN",
  },
];

export function Testimonials() {
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-zinc-100">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
            Trusted by ML Teams
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900">
            What our users{" "}
            <span className="bg-linear-to-r from-zinc-900 to-emerald-600 bg-clip-text text-transparent">
              actually say
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.13 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="flex flex-col bg-white border border-zinc-200 rounded-2xl p-7 shadow-sm hover:shadow-[0_12px_40px_rgba(5,150,105,0.12)] hover:border-emerald-200 transition-colors duration-300 cursor-default"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-zinc-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold shrink-0 shadow-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900">{t.name}</div>
                  <div className="text-xs text-zinc-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
