// components/quick-links.jsx
"use client";

import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

const items = [
  { title: "Track Shipment", desc: "Find shipment status in seconds.", href: "/track" },
  { title: "Get a Quote", desc: "Share route and weight for pricing.", href: "#contact" },
  { title: "Our Services", desc: "Air, Ocean, Surface & Warehousing.", href: "#services" },
  { title: "Contact Support", desc: "Reach operations & customer care.", href: "/contact" },
];

export function QuickLinks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight">Quick Links</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={0.05 * i}>
              <Link
                href={it.href}
                className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-base font-medium text-slate-900">{it.title}</div>
                <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
                <div className="mt-4 h-px w-0 bg-gradient-to-r from-sky-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
