"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Boxes, Brain, ClipboardCheck, Users, Video, ShieldCheck, ArrowRight } from "lucide-react";

const CARDS = [
  {
    title: "Precision Annotation",
    description:
      "Draw bounding boxes, polygons, masks, keypoints, and cuboids across images and videos. Every annotation type your ML pipeline needs, in one place.",
    image: "/img/img-annonation.jpg",
    alt: "Circuit board representing data annotation",
    cta: "Explore Tools",
    badge: "Core",
    icon: Boxes,
    color: "from-violet-500 to-indigo-600",
    bgLight: "bg-violet-50",
    borderLight: "border-violet-200",
    textLight: "text-violet-700",
  },
  {
    title: "AI-Assisted Labeling",
    description:
      "Run object detectors, segmentation models, and trackers directly in your workflow. Let AI handle the heavy lifting â€” you review and refine.",
    image: "/img/lableing.webp",
    alt: "Abstract AI neural network visualization",
    cta: "See Models",
    badge: "AI",
    icon: Brain,
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-200",
    textLight: "text-emerald-700",
  },
  {
    title: "Review & Export",
    description:
      "Multi-stage review workflows, consensus scoring, and one-click export to COCO, YOLO, Pascal VOC, and more. Ship clean datasets fast.",
    image: "/img/review.webp",
    alt: "Data dashboard and analytics",
    cta: "View Formats",
    badge: "QA",
    icon: ClipboardCheck,
    color: "from-blue-500 to-cyan-600",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-200",
    textLight: "text-blue-700",
  },
  {
    title: "Team Collaboration",
    description:
      "Assign jobs to annotators, raise issues on specific frames, leave comments, and track progress across the entire team â€” all inside one platform.",
    image: "/img/collaboration.avif",
    alt: "Team collaborating around a table",
    cta: "See Workflows",
    badge: "Teams",
    icon: Users,
    color: "from-orange-500 to-amber-600",
    bgLight: "bg-orange-50",
    borderLight: "border-orange-200",
    textLight: "text-orange-700",
  },
  {
    title: "Video & Object Tracking",
    description:
      "Annotate video frame-by-frame or let the tracker carry object IDs across hundreds of frames automatically. Built for surveillance, sports, and autonomous driving.",
    image: "/img/tracking.jpg",
    alt: "Car tracking on a road for autonomous driving",
    cta: "Learn More",
    badge: "Video",
    icon: Video,
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50",
    borderLight: "border-rose-200",
    textLight: "text-rose-700",
  },
  {
    title: "Quality Control",
    description:
      "Run consensus scoring across multiple annotators, set up validation frames, and enforce review stages â€” so every exported dataset meets your quality bar.",
    image: "/img/quality.webp",
    alt: "Quality control metrics on a dashboard",
    cta: "View QA Tools",
    badge: "Quality",
    icon: ShieldCheck,
    color: "from-emerald-600 to-green-500",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-200",
    textLight: "text-emerald-700",
  },
];

export function Features() {
  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent" />
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 h-64 w-64 rounded-full bg-emerald-50/80 blur-3xl"
        />
        <motion.div
          animate={{ x: [10, -10, 10], y: [5, -5, 5] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-violet-50/60 blur-3xl"
        />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl mb-16 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 mb-5"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Platform Features</span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
          Everything you need to{" "}
          <span className="relative">
            <span className="bg-linear-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%", animation: "gradient-shift 3s ease infinite" }}>
              label at scale
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 right-0 h-0.75 bg-linear-to-r from-emerald-500 to-teal-400 rounded-full origin-left"
            />
          </span>
        </h2>
        <p className="text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          Six powerful modules, one seamless workspace. From raw uploads to production-ready datasets.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CARDS.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.12 }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              <CardContainer className="inter-var" containerClassName="py-3">
                <CardBody className="relative group/card flex flex-col bg-white hover:bg-zinc-50/50 border border-zinc-200 hover:border-emerald-200/60 rounded-2xl p-6 w-full h-full transition-all duration-500 shadow-sm hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]">

                  {/* Animated top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-0.75 rounded-t-2xl bg-linear-to-r ${card.color} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />

                  {/* Icon + Badge row */}
                  <CardItem translateZ="40" className="flex items-center justify-between mb-5">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.bgLight} border ${card.borderLight} transition-all duration-300 group-hover/card:shadow-md`}>
                      <Icon className={`h-5 w-5 ${card.textLight}`} />
                    </div>
                    <span className={`inline-block rounded-full border ${card.borderLight} ${card.bgLight} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${card.textLight}`}>
                      {card.badge}
                    </span>
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    translateZ="55"
                    className="text-lg font-bold tracking-tight text-zinc-900 mb-2"
                  >
                    {card.title}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ="45"
                    className="text-sm text-zinc-500 leading-relaxed mb-5"
                  >
                    {card.description}
                  </CardItem>

                  {/* Image */}
                  <CardItem translateZ="90" className="w-full mb-6 overflow-hidden rounded-xl">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={800}
                        height={400}
                        className="h-44 w-full object-cover opacity-85 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-500"
                      />
                      {/* Image overlay gradient */}
                      <div className={`absolute inset-0 bg-linear-to-t ${card.color} opacity-0 group-hover/card:opacity-[0.08] transition-opacity duration-500`} />
                    </div>
                  </CardItem>

                  {/* Footer */}
                  <div className="mt-auto flex justify-between items-center">
                    <CardItem
                      translateZ={25}
                      as="a"
                      href="#"
                      className={`flex items-center gap-1 text-xs font-semibold ${card.textLight} hover:gap-2 transition-all duration-200`}
                    >
                      {card.cta}
                      <ArrowRight className="h-3 w-3" />
                    </CardItem>
                    <CardItem
                      translateZ={25}
                      as="button"
                      className={`px-4 py-1.5 rounded-lg bg-linear-to-r ${card.color} text-white text-xs font-bold transition-all duration-200 hover:shadow-md hover:scale-105`}
                    >
                      Get Started
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
