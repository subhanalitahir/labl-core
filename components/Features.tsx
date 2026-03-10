"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const CARDS = [
  {
    title: "Precision Annotation",
    description:
      "Draw bounding boxes, polygons, masks, keypoints, and cuboids across images and videos. Every annotation type your ML pipeline needs, in one place.",
    image: "/img/img-annonation.jpg",
    alt: "Circuit board representing data annotation",
    cta: "Explore Tools",
    badge: "Core",
  },
  {
    title: "AI-Assisted Labeling",
    description:
      "Run object detectors, segmentation models, and trackers directly in your workflow. Let AI handle the heavy lifting — you review and refine.",
    image: "/img/lableing.webp",
    alt: "Abstract AI neural network visualization",
    cta: "See Models",
    badge: "AI",
  },
  {
    title: "Review & Export",
    description:
      "Multi-stage review workflows, consensus scoring, and one-click export to COCO, YOLO, Pascal VOC, and more. Ship clean datasets fast.",
    image: "/img/review.webp",
    alt: "Data dashboard and analytics",
    cta: "View Formats",
    badge: "QA",
  },
  {
    title: "Team Collaboration",
    description:
      "Assign jobs to annotators, raise issues on specific frames, leave comments, and track progress across the entire team — all inside one platform.",
    image:
      "/img/collaboration.avif",
    alt: "Team collaborating around a table",
    cta: "See Workflows",
    badge: "Teams",
  },
  {
    title: "Video & Object Tracking",
    description:
      "Annotate video frame-by-frame or let the tracker carry object IDs across hundreds of frames automatically. Built for surveillance, sports, and autonomous driving.",
    image:
      "/img/tracking.jpg",
    alt: "Car tracking on a road for autonomous driving",
    cta: "Learn More",
    badge: "Video",
  },
  {
    title: "Quality Control",
    description:
      "Run consensus scoring across multiple annotators, set up validation frames, and enforce review stages — so every exported dataset meets your quality bar.",
    image:
      "/img/quality.webp",
    alt: "Quality control metrics on a dashboard",
    cta: "View QA Tools",
    badge: "Quality",
  },
];

export function Features() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-100 overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl mb-2 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-3">
          Platform Features
        </p>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900">
          Everything you need to{" "}
          <span className="bg-linear-to-r from-zinc-900 to-emerald-600 bg-clip-text text-transparent">
            label at scale
          </span>
        </h2>
      </motion.div>

      {/* Cards grid — 3 columns on large screens, 2 on medium, 1 on mobile */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {CARDS.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
          >
            <CardContainer className="inter-var" containerClassName="py-3">
              <CardBody className="relative group/card flex flex-col bg-white hover:bg-emerald-50/40 border border-zinc-200 hover:border-emerald-200 rounded-2xl p-6 w-full h-full transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(5,150,105,0.10)]">
                {/* Badge */}
                <CardItem translateZ="30" className="mb-4">
                  <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
                    {card.badge}
                  </span>
                </CardItem>

                {/* Title */}
                <CardItem
                  translateZ="50"
                  className="text-lg font-semibold tracking-tight text-zinc-900 mb-2"
                >
                  {card.title}
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-sm text-zinc-500 leading-relaxed mb-5"
                >
                  {card.description}
                </CardItem>

                {/* Image */}
                <CardItem translateZ="80" className="w-full mb-6">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={800}
                    height={400}
                    className="h-44 w-full object-cover rounded-xl opacity-90 group-hover/card:opacity-100 transition-opacity duration-300"
                  />
                </CardItem>

                {/* Footer */}
                <div className="mt-auto flex justify-between items-center">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="#"
                    className="text-xs font-medium text-zinc-400 hover:text-emerald-700 transition-colors"
                  >
                    {card.cta} →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                  >
                    Get Started
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
