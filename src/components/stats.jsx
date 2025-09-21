// components/stats.jsx
"use client";

import { Reveal } from "@/components/animations/reveal";

const stats = [
  { label: "Shipments / Day", value: "10K+" },
  { label: "Franchise Stores", value: "6,500+" },
  { label: "Team Professionals", value: "2,000+" },
  { label: "Pin Code Coverage", value: "20K+" },
];

export function Stats() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight">Our Scale</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i} y={16}>
              <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-sky-700">{s.value}</div>
                <div className="mt-1 text-xs tracking-wide text-slate-600">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
