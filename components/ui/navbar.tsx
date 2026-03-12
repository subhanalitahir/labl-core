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
          background: linear-gradient(90deg, #18181b 0%, #059669 40%, #18181b 60%, #059669 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      <nav className="nav-enter fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        {/* Floating pill container */}
        <div
          className={`relative flex items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "bg-white/95 backdrop-blur-2xl border border-zinc-200 shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
              : "bg-white/70 backdrop-blur-xl border border-zinc-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          }`}
        >
          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 pl-1 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl overflow-hidden bg-emerald-600">
              <Sparkles className="h-4 w-4 text-white relative z-10" />
            </div>
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
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {activeLink === link.label && (
                  <span className="absolute inset-0 rounded-xl bg-emerald-50 border border-emerald-200" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>

          {/* ── Right side ── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Availability dot */}

            {/* Sign in with Hugging Face */}
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 transition-all duration-200 hover:bg-zinc-50 hover:border-zinc-300 active:scale-[0.97] shadow-sm"
            >
              <img src="/icons/huggingface-color.svg" alt="Hugging Face" className="h-4 w-4" />
              Sign in with HF
            </a>

            {/* CTA */}
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-700 hover:shadow-[0_0_20px_rgba(5,150,105,0.3)] active:scale-[0.97]"
            >
              Let&apos;s Talk
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition-all hover:bg-zinc-100"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`md:hidden mt-2 overflow-hidden rounded-2xl border border-zinc-200 bg-white/95 backdrop-blur-2xl transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-72 opacity-100 shadow-[0_8px_40px_rgba(0,0,0,0.08)]" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-3 space-y-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center px-4 py-3 text-sm font-medium text-zinc-500 rounded-xl transition-colors hover:text-zinc-900 hover:bg-zinc-50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 pb-1 px-1 space-y-2">
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                <img src="/icons/huggingface-color.svg" alt="Hugging Face" className="h-4 w-4" />
                Sign in with Hugging Face
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
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

