"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Github, Twitter, Linkedin, ArrowRight, Mail } from "lucide-react";

const LINKS: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Features", href: "#" },
    { label: "Annotation Tools", href: "#" },
    { label: "AI Labeling", href: "#" },
    { label: "Quality Control", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Status", href: "#" },
    { label: "Community", href: "#" },
    { label: "Support", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative w-full bg-zinc-950 text-zinc-400 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-emerald-900/30 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-emerald-800/20 blur-3xl"
        />
      </div>

      {/* Newsletter bar */}
      <div className="relative border-b border-zinc-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-base font-bold text-white mb-1">Stay in the loop</h3>
              <p className="text-sm text-zinc-500">Get updates on new features, integrations, and AI model releases.</p>
            </div>
            <div className="flex w-full sm:w-auto gap-2">
              <div className="relative flex-1 sm:flex-none">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full sm:w-64 rounded-xl bg-zinc-900 border border-zinc-800 pl-10 pr-4 py-2.5 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/30 transition-colors"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-500 transition-colors shadow-[0_0_20px_rgba(5,150,105,0.3)] shrink-0"
              >
                Subscribe <ArrowRight className="h-3.5 w-3.5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/60">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2.5 mb-5 w-fit"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-emerald-700 shadow-[0_0_16px_rgba(5,150,105,0.5)]">
                <Sparkles className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="text-base font-black text-white tracking-tight">Labl-core</span>
            </motion.div>
            <p className="text-xs leading-relaxed text-zinc-500 max-w-xs mb-6">
              The AI-powered annotation platform for computer vision teams. Label faster, review smarter, ship cleaner datasets.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-emerald-400 hover:border-emerald-700 hover:bg-zinc-800 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, links], colIndex) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: colIndex * 0.08 }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300 mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label }) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-xs text-zinc-500 hover:text-emerald-400 hover:translate-x-0.5 inline-block transition-all"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-zinc-600">Â© 2026 Labl-core. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-zinc-600">
              <span>Built for</span>
              <span className="text-emerald-500 font-bold">ML teams</span>
              <span>who demand quality.</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-xs text-zinc-600">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
