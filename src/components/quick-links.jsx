// // components/quick-links.jsx
// "use client";

// import Link from "next/link";
// import { Reveal } from "@/components/animations/reveal";

// const items = [
//   { title: "Track Shipment", desc: "Find shipment status in seconds.", href: "/track" },
//   { title: "Get a Quote", desc: "Share route and weight for pricing.", href: "#contact" },
//   { title: "Our Services", desc: "Air, Ocean, Surface & Warehousing.", href: "#services" },
//   { title: "Contact Support", desc: "Reach operations & customer care.", href: "/contact" },
// ];

// export function QuickLinks() {
//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
//         <Reveal>
//           <h2 className="text-2xl font-semibold tracking-tight">Quick Links</h2>
//         </Reveal>
//         <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
//           {items.map((it, i) => (
//             <Reveal key={it.title} delay={0.05 * i}>
//               <Link
//                 href={it.href}
//                 className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <div className="text-base font-medium text-slate-900">{it.title}</div>
//                 <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
//                 <div className="mt-4 h-px w-0 bg-gradient-to-r from-sky-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/quick-links.jsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Inline icons (Heroicons-style outlines)
function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m12 5 7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuickLinks() {
  // Edit or extend this array with more cards later
  const items = [
    {
      key: "track",
      title: "Track Shipment",
      desc: "Find shipment status in seconds with real‑time updates.",
      href: "/track",
      // Place the provided image (second one shared) in /public, e.g. /29126.jpg
      img: "/track-image.jpg",
      alt: "Order tracking illustration",
      badge: "Tracking",
    },
    // Add more items like this:
    // {
    //   key: "quote",
    //   title: "Get a Quote",
    //   desc: "Instant estimates for domestic & international routes.",
    //   href: "#contact",
    //   img: "/images/quote.jpg",
    //   alt: "Quote request",
    //   badge: "Pricing",
    // },
  ];

  const scrollerRef = useRef(null);
  const scrollBy = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Reveal>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Quick Links</h2>

            {/* Mobile/Tablet arrows */}
            <div className="flex gap-2 md:hidden">
              <button
                aria-label="Previous"
                onClick={() => scrollBy(-1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollBy(1)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Mobile/Tablet carousel (snap-x) */}
        <div className="md:hidden mt-6">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* hide scrollbar */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {items.map((item, i) => (
              <Reveal key={item.key} delay={0.04 * i}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="snap-center"
                >
                  <Card className="group relative min-w-[85%] rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                    <CardHeader className="flex flex-row items-start justify-between gap-3">
                      <div className="space-y-1">
                        <CardTitle className="text-base font-semibold text-slate-900">
                          {item.title}
                        </CardTitle>
                        <p className="text-xs text-slate-600">{item.desc}</p>
                      </div>
                      {item.badge ? (
                        <span className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-700">
                          {item.badge}
                        </span>
                      ) : null}
                    </CardHeader>

                    <CardContent className="relative">
<div className="relative h-60 w-full overflow-hidden ">
  <Image
    src={item.img}
    alt={item.alt}
    fill
    className="object-contain object-center"
    sizes=" 90vw, 33vw"
    priority={i === 0}
  />
</div>

                    </CardContent>

                    <CardFooter className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-600"
                      >
                        Open
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>

                      {/* subtle accent underline on hover */}
                      <div className="h-px w-16 bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </CardFooter>
                  </Card>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-6 hidden grid-cols-2 gap-4 md:grid lg:grid-cols-3 lg:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.key} delay={0.04 * i}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <Card className="group relative h-full rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                  <CardHeader className="flex flex-row items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-base font-semibold text-slate-900">
                        {item.title}
                      </CardTitle>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                    {item.badge ? (
                      <span className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-700">
                        {item.badge}
                      </span>
                    ) : null}
                  </CardHeader>

                  <CardContent className="px-4 pb-0">
                    <div className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-200">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 90vw"
                        priority={i === 0}
                      />
                    </div>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between px-4 pb-4 pt-4">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-600"
                    >
                      Open
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                    <div className="h-px w-20 bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </CardFooter>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
