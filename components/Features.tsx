"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const CARDS = [
  {
    title: "Precision Annotation",
    description:
      "Draw bounding boxes, polygons, masks, keypoints, and cuboids across images and videos. Every annotation type your ML pipeline needs, in one place.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    alt: "Circuit board representing data annotation",
    cta: "Explore Tools",
    badge: "Core",
  },
  {
    title: "AI-Assisted Labeling",
    description:
      "Run object detectors, segmentation models, and trackers directly in your workflow. Let AI handle the heavy lifting — you review and refine.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop",
    alt: "Abstract AI neural network visualization",
    cta: "See Models",
    badge: "AI",
  },
  {
    title: "Review & Export",
    description:
      "Multi-stage review workflows, consensus scoring, and one-click export to COCO, YOLO, Pascal VOC, and more. Ship clean datasets fast.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    alt: "Data dashboard and analytics",
    cta: "View Formats",
    badge: "QA",
  },
];

export function Features() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-100">
      {/* Section header */}
      <div className="mx-auto max-w-7xl mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
          Platform Features
        </p>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900">
          Everything you need to{" "}
          <span className="bg-linear-to-r from-zinc-900 to-emerald-600 bg-clip-text text-transparent">
            label at scale
          </span>
        </h2>
      </div>

      {/* Cards row */}
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-stretch justify-center gap-0 lg:gap-2">
        {CARDS.map((card) => (
          <CardContainer key={card.title} className="inter-var flex-1">
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
        ))}
      </div>
    </section>
  );
}
