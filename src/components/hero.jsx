// components/hero.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Reveal } from "@/components/animations/reveal"; // whileInView helper

const SLIDE_MS = 4000;

// Below lg (<= 1023px), use compact layout (mobile + tablet)
function useIsCompact() {
  const [isCompact, setIsCompact] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 1023px)");
    const onChange = (e) => setIsCompact(e.matches);
    setIsCompact(mql.matches);
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, []);
  return isCompact;
}

export function Hero() {
  // Desktop and optional compact (mobile/tablet) variants
  const slides = useMemo(
    () => [
      {
        src: "/container-ship.png",
        srcMobile: "/container-ship-mobile.png",
        alt: "Container ship at sea",
      },
      {
        src: "/cargo-plane.png",
        srcMobile: "/cargo-plane-mobile.png",
        alt: "Cargo plane on runway",
      },
      {
        src: "/delivery-boy.png",
        srcMobile: "/delivery-boy-mobile.png",
        alt: "Doorstep delivery in progress",
      },
    ],
    []
  );

  const isCompact = useIsCompact();

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // timeout ref (no TS types here — plain JS)
  const timeoutRef = useRef(null);

  useEffect(() => {
    // clear existing timeout whenever dependencies change
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, SLIDE_MS);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [index, paused, slides.length]);

  // Safety: if slides array shrinks for some reason, keep index valid
  useEffect(() => {
    if (index >= slides.length) setIndex(0);
  }, [index, slides.length]);

  const next = () => {
    setIndex((i) => (i + 1) % slides.length);
    // effect will cancel + schedule a new timeout automatically
  };

  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    // effect will cancel + schedule a new timeout automatically
  };

  const str = "Logistics";

  return (
    <section
      className="relative isolate overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Carousel stage with a light reveal delay on load */}
      <Reveal delay={0.05}>
        <div className="relative h-[68vh] min-h-[480px] w-full lg:h-[78vh]">
          {slides.map((s, i) => {
            const chosenSrc = isCompact && s.srcMobile ? s.srcMobile : s.src;
            return (
              <motion.div
                key={chosenSrc + i}
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: i === index ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                aria-hidden={i === index ? "false" : "true"}
              >
                <Image
                  src={chosenSrc}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  className="object-contain object-center lg:object-cover"
                  sizes="100vw"
                />
              </motion.div>
            );
          })}
        </div>
      </Reveal>

      {/* Desktop content (unchanged) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
          <div className="pointer-events-auto max-w-3xl">
            <Reveal delay={0.12}>
              <h1 className="bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                Fast, Flawless and Future-Ready{" "}
                <span>
                  <TypeAnimation
                    sequence={[str, 4000, ""]}
                    repeat={Infinity}
                    cursor={true}
                    wrapper="span"
                    style={{ whiteSpace: "pre-line", display: "inline-block" }}
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 max-w-2xl text-base text-slate-700 md:text-lg">
                Domestic & international courier across air, ocean, and surface with dependable tracking and support.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
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
            </Reveal>
          </div>
        </div>
      </div>

      {/* Compact (mobile+tablet): heading at top, CTAs near bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 lg:hidden">
        <div className="mx-auto max-w-7xl px-4 pt-4 flex flex-col items-center">
          <Reveal delay={0.12}>
            <h1 className="pointer-events-auto bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent text-3xl font-extrabold leading-tight sm:text-4xl text-center">
              Fast, Flawless and Future-Ready{" "}
              <span>
                <TypeAnimation
                  sequence={["Logistics", 4000, ""]}
                  repeat={Infinity}
                  cursor={true}
                  wrapper="span"
                  style={{ whiteSpace: "pre-line", display: "inline-block" }}
                />
              </span>
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-16 lg:hidden flex justify-center">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal delay={0.24}>
            <div className="pointer-events-auto flex w-full max-w-sm flex-col gap-3">
              <Link
                href="/track"
                className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              >
                Track Shipment
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
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
          </Reveal>
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
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 lg:bottom-7">
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

