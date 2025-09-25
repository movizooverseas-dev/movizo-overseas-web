// // components/hero.jsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Reveal } from "@/components/animations/reveal";
// import { TrackForm } from "@/components/track-form";
// import { Button } from "@/components/ui/button";

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:py-24">
//         <div className="space-y-6">
//           <Reveal>
//             <p className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
//               Domestic & International Logistics
//             </p>
//           </Reveal>

//           <Reveal delay={0.05}>
//             <h1 className="inline-block bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl lg:text-6xl">
//               Moving Cargo, Powering Business
//             </h1>
//           </Reveal>

//           <Reveal delay={0.1}>
//             <p className="max-w-xl text-slate-300">
//               End-to-end shipping across air, ocean, and road with reliable tracking and on-time delivery across India and 200+ routes worldwide.
//             </p>
//           </Reveal>

//           <Reveal delay={0.15}>
//             <div className="flex flex-col gap-3 sm:flex-row">
//               <TrackForm inline />
//               <Link href="#contact">
//                 <Button variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
//                   Get a Quote
//                 </Button>
//               </Link>
//             </div>
//           </Reveal>
//         </div>

//         <Reveal delay={0.1}>
//           <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4">
//             <div className="col-span-2 row-span-2 overflow-hidden rounded-xl border border-white/10">
//               <Image
//                 src="/TruckImage.png"
//                 alt="Container ship at sea"
//                 width={900}
//                 height={750}
//                 className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//                 priority
//               />
//             </div>
//             <div className="overflow-hidden rounded-xl border border-white/10">
//               <Image
//                 src="/images/runway.jpg"
//                 alt="Cargo plane on runway"
//                 width={450}
//                 height={330}
//                 className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>
//             <div className="overflow-hidden rounded-xl border border-white/10">
//               <Image
//                 src="/images/warehouse.jpg"
//                 alt="Modern logistics warehouse"
//                 width={450}
//                 height={330}
//                 className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>
//           </div>
//         </Reveal>
//       </div>

//       <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
//     </section>
//   );
// }

// components/hero.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {TypeAnimation} from "react-type-animation";

const SLIDE_MS = 6000;

export function Hero() {
  const slides = useMemo(
    () => [
      { src: "/container-ship.png", alt: "Container ship at sea" },
      { src: "/cargo-plane.jpg", alt: "Cargo plane on runway" },
      { src: "/images/warehouse.jpg", alt: "High‑capacity logistics warehouse" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const str = "Logistics";

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, SLIDE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, slides.length]);

  return (
    <section
      className="relative isolate overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Carousel stage */}
      <div className="relative h-[68vh] min-h-[480px] w-full md:h-[78vh]">
        {slides.map((s, i) => (
          <motion.div
            key={s.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-hidden={i === index ? "false" : "true"}gigit
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        ))}

        {/* Readability overlay: left white gradient to transparent */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
      </div>

      {/* Content: left‑aligned headline + CTA */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
          <motion.div
            className="pointer-events-auto max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Fast, Flawless and Future‑Ready 
            <span>
                    {" "}
                    <TypeAnimation className="color font-italic"
                        sequence={[str,4000,""]}
                        repeat={Infinity}
                        cursor={true}
                        style={
                            {
                                whiteSpace:"pre-line",
                                display:"inline-block"
                            }
                        }
                    />
            </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base text-slate-700 md:text-lg">
              Domestic & international courier across air, ocean, and surface with dependable tracking and support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/track"
                className="inline-flex items-center rounded-md bg-sky-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              >
                Track Shipment
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              >
                Explore Services
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-300 bg-white/90 p-2 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/40 md:left-6"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" className="stroke-current">
          <path d="M15 18l-6-6 6-6" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-300 bg-white/90 p-2 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/40 md:right-6"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" className="stroke-current">
          <path d="M9 6l6 6-6 6" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-7">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-sky-600" : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}


