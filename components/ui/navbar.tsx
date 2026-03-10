"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Work",     href: "#" },
  { label: "Services", href: "#" },
  { label: "About",    href: "#" },
  { label: "Contact",  href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes navFadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-enter { animation: navFadeDown 0.6s cubic-bezier(.16,1,.3,1) forwards; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .logo-shimmer {
          background: linear-gradient(90deg, #fff 0%, #ffcd75 40%, #fff 60%, #ffcd75 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        .nav-pill-glow::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,205,117,0.08) 50%, rgba(255,255,255,0.04) 100%);
          pointer-events: none;
        }
      `}</style>

      <nav className="nav-enter fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        {/* Floating pill container */}
        <div
          className={`nav-pill-glow relative flex items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "bg-zinc-900/80 backdrop-blur-2xl border border-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]"
              : "bg-white/4 backdrop-blur-xl border border-white/6 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
          }`}
        >
          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 pl-1 group">
            {/* Icon mark */}
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/20 to-[#ffcd75]/20" />
              <div className="absolute inset-0 border border-white/20 rounded-xl" />
              <Sparkles className="h-4 w-4 text-[#ffcd75] relative z-10" />
            </div>
            {/* Wordmark */}
            <span className="text-lg font-black tracking-tight">
              <span className="logo-shimmer">LABL</span>
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeLink === link.label
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {activeLink === link.label && (
                  <span className="absolute inset-0 rounded-xl bg-white/10 border border-white/10" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>

          {/* ── Right side ── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Availability dot */}
            <div className="hidden md:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-medium text-zinc-400 tracking-wide">Available</span>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:bg-[#ffcd75] hover:shadow-[0_0_20px_rgba(255,205,117,0.4)] active:scale-[0.97]"
            >
              Let&apos;s Talk              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`md:hidden mt-2 overflow-hidden rounded-2xl border border-white/8 bg-zinc-900/90 backdrop-blur-2xl transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-72 opacity-100 shadow-[0_8px_40px_rgba(0,0,0,0.5)]" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-3 space-y-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center px-4 py-3 text-sm font-medium text-zinc-400 rounded-xl transition-colors hover:text-white hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 pb-1 px-1">
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-[#ffcd75] transition-colors"
              >
                Let&apos;s Talk <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
