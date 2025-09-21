// components/services.jsx
"use client";

import { Reveal } from "@/components/animations/reveal";

const services = [
  {
    title: "Air Express Cargo",
    desc: "Time‑critical air freight with end‑to‑end visibility.",
  },
  {
    title: "Ocean Freight",
    desc: "Cost‑effective LCL/FCL with global consolidation.",
  },
  {
    title: "Surface & Rail",
    desc: "Reliable multimodal transport across India.",
  },
  {
    title: "Customs & Clearance",
    desc: "Documentation, brokerage, and duty optimization.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * i}>
              <div className="group h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="font-medium text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <div className="mt-4 h-px w-0 bg-gradient-to-r from-sky-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
