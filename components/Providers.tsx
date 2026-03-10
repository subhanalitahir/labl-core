"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const PROVIDERS = [
  {
    name: "Hugging Face",
    description:
      "Access thousands of pre-trained models and datasets. Integrate state-of-the-art transformers and diffusion models directly into your labeling workflows.",
    logo: "/icons/huggingface-color.svg",
    tag: "Models & Datasets",
    color: "from-yellow-400 to-orange-400",
    glowColor: "rgba(251, 191, 36, 0.15)",
    borderColor: "hover:border-yellow-300",
    tagBg: "bg-yellow-50 text-yellow-700 border-yellow-200",
    features: ["100k+ Models", "Open Source", "Fine-tuning Ready"],
  },
  {
    name: "Replicate",
    description:
      "Run cutting-edge AI models via API with zero infrastructure setup. Deploy custom models and scale effortlessly to power your annotation pipeline.",
    logo: "/icons/replicate-text.svg",
    tag: "Model Deployment",
    color: "from-slate-600 to-slate-800",
    glowColor: "rgba(100, 116, 139, 0.15)",
    borderColor: "hover:border-slate-400",
    tagBg: "bg-slate-100 text-slate-700 border-slate-300",
    features: ["Serverless API", "Custom Models", "Auto Scaling"],
  },
  {
    name: "Roboflow",
    description:
      "Streamline dataset management and model training. Effortlessly convert, augment, and version your labeled datasets for any computer vision task.",
    logo: "/icons/roboflow.svg",
    tag: "Dataset Management",
    color: "from-purple-500 to-violet-600",
    glowColor: "rgba(139, 92, 246, 0.15)",
    borderColor: "hover:border-purple-300",
    tagBg: "bg-purple-50 text-purple-700 border-purple-200",
    features: ["Auto Augmentation", "Version Control", "30+ Formats"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function Providers() {
  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-50 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-violet-50 blur-3xl"
        />
        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-emerald-300/60"
            style={{
              top: `${15 + i * 14}%`,
              left: `${5 + i * 15}%`,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Powered By
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
            Integrated with the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Best in AI
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-1 left-0 right-0 h-3 origin-left rounded-sm bg-emerald-100 -z-10"
              />
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-zinc-500 leading-relaxed">
            Labl-core connects seamlessly with the world&apos;s leading AI providers — so your
            annotation pipeline is always powered by the most capable models.
          </p>
        </motion.div>

        {/* Provider Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {PROVIDERS.map((provider) => (
            <motion.div
              key={provider.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className={`group relative flex flex-col rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl ${provider.borderColor}`}
              style={{
                backgroundImage: `radial-gradient(ellipse 60% 50% at 50% 0%, ${provider.glowColor}, transparent)`,
              }}
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-8 right-8 h-px rounded-full bg-linear-to-r ${provider.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Logo area */}
              <div className="mb-5 flex h-14 items-center">
                <div className="relative flex h-12 w-36 items-center justify-start">
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    fill
                    className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Tag */}
              <span
                className={`mb-4 inline-flex w-fit items-center rounded-full border px-3 py-0.5 text-xs font-medium ${provider.tagBg}`}
              >
                {provider.tag}
              </span>

              {/* Description */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-500">
                {provider.description}
              </p>

              {/* Feature pills */}
             

              {/* Bottom shimmer on hover */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom connector line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 mx-auto h-px max-w-sm origin-center bg-linear-to-r from-transparent via-emerald-300 to-transparent"
        />
      </div>
    </section>
  );
}
