// components/hero.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { TrackForm } from "@/components/track-form";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:py-24">
        <div className="space-y-6">
          <Reveal>
            <p className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              Domestic & International Logistics
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="inline-block bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl lg:text-6xl">
              Moving Cargo, Powering Business
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-slate-300">
              End-to-end shipping across air, ocean, and road with reliable tracking and on-time delivery across India and 200+ routes worldwide.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <TrackForm inline />
              <Link href="#contact">
                <Button variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/container-ship.jpg"
                alt="Container ship at sea"
                width={900}
                height={700}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/cargo-plane.jpg"
                alt="Cargo plane on runway"
                width={450}
                height={330}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/warehouse.jpg"
                alt="Modern logistics warehouse"
                width={450}
                height={330}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
    </section>
  );
}
