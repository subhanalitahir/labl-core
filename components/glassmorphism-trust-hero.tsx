"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { ArrowRight, Play, Target, Crown, Zap, Shield, BarChart3 } from "lucide-react";

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center justify-center cursor-default group"
  >
    <span className="text-xl font-bold text-zinc-900 sm:text-2xl group-hover:text-emerald-600 transition-colors duration-300">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium sm:text-xs">{label}</span>
  </motion.div>
);

const FloatingBadge = ({ icon: Icon, text, className }: { icon: React.FC<React.SVGProps<SVGSVGElement>>; text: string; className?: string }) => (
  <div className={`absolute flex items-center gap-2 rounded-2xl border border-zinc-200/80 bg-white/90 backdrop-blur-sm px-3 py-2 shadow-lg ${className ?? ''}`}>
    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50">
      <Icon className="h-3.5 w-3.5 text-emerald-600" />
    </div>
    <span className="text-xs font-semibold text-zinc-700 whitespace-nowrap">{text}</span>
  </div>
);

// --- MAIN COMPONENT ---
export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), { stiffness: 50, damping: 20 });
  const springY = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-slate-50 text-zinc-900 overflow-hidden font-sans"
      onMouseMove={handleMouseMove}
    >
      {/* â”€â”€ Animated aurora background â”€â”€ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Large radial gradient blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 h-150 w-150 rounded-full bg-emerald-100/80 blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -left-40 h-125 w-125 rounded-full bg-green-100/70 blur-[80px]"
        />
        <motion.div
          animate={{ x: [-30, 30, -30], y: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 h-100 w-150 rounded-full bg-emerald-50/90 blur-[60px]"
        />
      </div>

      {/* â”€â”€ Dot grid â”€â”€ */}
      <div
        className="absolute inset-0 z-0 opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(circle, #a1a1aa 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* â”€â”€ Animated mesh lines â”€â”€ */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#059669" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl min-h-screen px-4 py-20 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">

          {/* â”€â”€ LEFT COLUMN â”€â”€ */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 backdrop-blur-sm px-4 py-2 shadow-sm shadow-emerald-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Free Tier Now Available â€” No Credit Card
                </span>
              </div>
            </motion.div> */}

            {/* Heading */}
            <div className="space-y-2">
              {["Label Data at Scale", "With AI-Powered", "Precision."].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.12 }}
                >
                  {i === 1 ? (
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-none bg-linear-to-br from-emerald-600 via-emerald-500 to-green-400 bg-clip-text text-transparent"
                      style={{ backgroundSize: "200% 200%", animation: "gradient-shift 4s ease infinite" }}>
                      {line}
                    </h1>
                  ) : (
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-none text-zinc-900">
                      {line}
                    </h1>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
              className="max-w-xl text-base sm:text-lg text-zinc-500 leading-relaxed"
            >
              The annotation platform purpose-built for computer vision teams. Draw bounding boxes, run AI pre-labeling, enforce review quality, and export to COCO, YOLO, Pascal VOC, and 50+ formats all from one workspace.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white overflow-hidden shadow-[0_4px_24px_rgba(5,150,105,0.35)] hover:shadow-[0_8px_40px_rgba(5,150,105,0.5)] transition-shadow duration-300"
              >
                {/* Shimmer */}
                <span className="absolute inset-0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                Start Labeling
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-zinc-700 hover:bg-white hover:border-zinc-300 hover:shadow-md transition-all duration-300 shadow-sm"
              >
                Contact
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </motion.button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              {[
                { icon: Shield, text: "SOC 2 Compliant" },
                { icon: Zap, text: "< 2s Upload" },
                { icon: BarChart3, text: "99.9% Uptime" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
                  <Icon className="h-3.5 w-3.5 text-emerald-500" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* â”€â”€ RIGHT COLUMN â”€â”€ */}
          <motion.div
            style={{ rotateY: springX, rotateX: springY, perspective: "1000px" }}
            className="lg:col-span-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="relative"
            >
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-[32px] bg-linear-to-br from-emerald-300 via-emerald-500/30 to-transparent blur-lg opacity-60 animate-pulse-glow pointer-events-none" />

              {/* Stats Card */}
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/90 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
                {/* Card accent blobs */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 h-40 w-40 rounded-full bg-emerald-100/60 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-6 -mb-6 h-32 w-32 rounded-full bg-green-50/80 blur-2xl pointer-events-none" />

                {/* Top section */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-200"
                    >
                      <Target className="h-7 w-7 text-white" />
                    </motion.div>
                    <div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                        className="text-3xl font-black tracking-tight text-zinc-900"
                      >
                        10M+
                      </motion.div>
                      <div className="text-sm text-zinc-400 font-medium">Annotations Delivered</div>
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500">Dataset Quality Score</span>
                      <span className="text-emerald-600 font-bold">98%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.9 }}
                        className="h-full rounded-full bg-linear-to-r from-emerald-600 via-emerald-400 to-green-300 shadow-[0_0_10px_rgba(5,150,105,0.4)]"
                      />
                    </div>
                  </div>

                  {/* Second progress */}
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-500">Annotation Throughput</span>
                      <span className="text-emerald-600 font-bold">3.4x faster</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 1.1 }}
                        className="h-full rounded-full bg-linear-to-r from-emerald-500 to-teal-400 shadow-[0_0_10px_rgba(5,150,105,0.3)]"
                      />
                    </div>
                  </div>

                  <div className="h-px w-full bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-6" />

                  {/* Mini Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <StatItem value="50+" label="Formats" delay={1.0} />
                    <div className="w-px bg-zinc-100 mx-auto self-stretch" />
                    <StatItem value="24/7" label="Support" delay={1.1} />
                    <div className="col-span-3 h-px bg-zinc-100" />
                    <StatItem value="500+" label="Teams" delay={1.2} />
                    <div className="w-px bg-zinc-100 mx-auto self-stretch" />
                    <StatItem value="99.9%" label="Uptime" delay={1.3} />
                  </div>

                  {/* Tag Pills */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-emerald-700">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      LIVE PLATFORM
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-amber-700">
                      <Crown className="w-3 h-3 text-amber-500" />
                      ENTERPRISE READY
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-blue-700">
                      <Zap className="w-3 h-3 text-blue-500" />
                      AI-POWERED
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {/* <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-8 hidden lg:block"
              >
                <FloatingBadge icon={Zap} text="AI Pre-labeling" />
              </motion.div> */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-6 bottom-16 hidden lg:block"
              >
                <FloatingBadge icon={Shield} text="98% Accuracy" />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

        {/* â”€â”€ Scroll indicator â”€â”€ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-px bg-linear-to-b from-zinc-400 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
