import React from "react";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

const LINKS: Record<string, string[]> = {
  Product: [
    "Features",
    "Annotation Tools",
    "AI Labeling",
    "Quality Control",
    "Integrations",
    "Changelog",
  ],
  Company: ["About", "Blog", "Careers", "Press Kit", "Contact"],
  Resources: ["Documentation", "API Reference", "Status", "Community", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

export function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 shadow-[0_0_12px_rgba(5,150,105,0.4)]">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-white tracking-tight">Labl-core</span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500 max-w-xs mb-6">
              The AI-powered annotation platform for computer vision teams. Label faster, review smarter, ship cleaner datasets.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-emerald-400 hover:border-emerald-700 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-zinc-600">© 2026 Labl-core. All rights reserved.</p>
          <div className="flex items-center gap-1 text-xs text-zinc-600">
            <span>Built for</span>
            <span className="text-emerald-500 font-medium">ML teams</span>
            <span>who demand quality.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
