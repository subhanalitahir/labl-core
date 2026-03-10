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

      
    </section>
  );
}
