//components/services.jsx
// "use client";

// import { Reveal } from "@/components/animations/reveal";

// const services = [
//   {
//     title: "Air Express Cargo",
//     desc: "Time‑critical air freight with end‑to‑end visibility.",
//   },
//   {
//     title: "Ocean Freight",
//     desc: "Cost‑effective LCL/FCL with global consolidation.",
//   },
//   {
//     title: "Surface & Rail",
//     desc: "Reliable multimodal transport across India.",
//   },
//   {
//     title: "Customs & Clearance",
//     desc: "Documentation, brokerage, and duty optimization.",
//   },
// ];

// export function Services() {
//   return (
//     <section id="services" className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
//         <Reveal>
//           <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
//         </Reveal>
//         <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
//           {services.map((s, i) => (
//             <Reveal key={s.title} delay={0.05 * i}>
//               <div className="group h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
//                 <h3 className="font-medium text-slate-900">{s.title}</h3>
//                 <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
//                 <div className="mt-4 h-px w-0 bg-gradient-to-r from-sky-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//************************************************************************************ */
"use client";

import { Reveal } from "@/components/animations/reveal";

// Same theme and structure as the blue cards
const items = [
  {
    title: "Air Express Cargo",
    desc: "Time‑critical air freight with end‑to‑end visibility.",
    icon: PlaneIcon,
  },
  {
    title: "Ocean Freight",
    desc: "Cost‑effective LCL/FCL with global consolidation.",
    icon: ShipIcon,
  },
  {
    title: "Surface & Rail",
    desc: "Reliable multimodal transport across India.",
    icon: TruckIcon,
  },
  {
    title: "Customs & Clearance",
    desc: "Documentation, brokerage, and duty optimization.",
    icon: ShieldCheckIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
        </Reveal>

        {/* 1 / 2 / 4 column responsive grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={0.05 * i}>
              <div className="group h-full rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                  <Icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Icons — consistent stroke, viewBox, and size */
function PlaneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path strokeWidth="1.75" d="M3 12h9l2-2 7-2 0.5 1-5 3 5 3-0.5 1-7-2-2-2H3z" />
    </svg>
  );
}

function ShipIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path strokeWidth="1.75" d="M3 15l2 4h14l2-4-7-3-11 3zM9 8h6v3H9zM9 8l1.5-3h3L15 8" />
    </svg>
  );
}

function TruckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path strokeWidth="1.75" d="M3 7h10v6h4l3 3v3h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3z" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path strokeWidth="1.75" d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
      <path strokeWidth="1.75" d="M9 12l2 2 4-4" />
    </svg>
  );
}
