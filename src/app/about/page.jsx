// app/about/page.tsx
"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/animations/reveal";
import Loader from "@/components/Loader";
import LoaderPortal from "@/components/LoaderPortal";

const VALUES = [
  {
    key: "integrity",
    title: "Integrity",
    desc: "We foster a vibrant work culture nourished with trust and ethics.",
    icon: "/integrity.png",
  },
  {
    key: "people-first",
    title: "People First Culture",
    desc: "People‑centric ethos drives our logistics innovation and prowess.",
    icon: "/people-first.png",
  },
  {
    key: "service-quality",
    title: "Service Quality",
    desc: "Consistency in elevating service quality standards sets us apart.",
    icon: "/service-quality.png",
  },
  {
    key: "benefit-sharing",
    title: "Benefit Sharing",
    desc: "Competitive pricing and benefit sharing foster enduring relationships.",
    icon: "/benefit-sharing.png",
  },
  {
    key: "innovation",
    title: "Innovation",
    desc: "We harness new‑age technology and data intelligence for accuracy.",
    icon: "/innovation.png",
  },
];

export default function AboutPage() {
  return (
    <>
      <LoaderPortal>

      <main className="bg-white">
        {/* Top intro (optional page title) */}
        {/* <section className="mx-auto max-w-7xl px-4 pt-12 md:px-6">
          <Reveal>
          <h1 className="inline-block text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent tracking-tight">
          About Movizo
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-2xl text-slate-600">
              Movizo Overseas Pvt. Ltd. delivers dependable logistics across air, ocean, and surface with a service mindset focused on time, care, and communication.
              </p>
              </Reveal>
        </section> */}

        {/* Vision & Mission with external PNGs */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
            {/* Row 1: Vision (text right), big PNG left */}
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[560px]">
                  <Image
                    src="/vision.png"
                    alt="Vision"
                    width={560}
                    height={560}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="h-auto w-full object-contain drop-shadow-2xl"
                    priority={false}
                    />
                </div>
              </div>

              <div>
                <p className="mt-2 inline-block text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent tracking-tight leading-normal">Vision</p>
                <h2 className="mt-2 inline-block text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent tracking-tight leading-normal">
                  Be the most preferred, tech‑driven supply‑chain partner
                </h2>
                <p className="mt-3 max-w-prose text-slate-600">
                  Focus on engineering, transparency, and reliability to deliver delightful logistics at scale across markets.
                </p>
              </div>
            </div>

            <div className="h-12 md:h-20" />

            {/* Row 2: Mission (text left), big PNG right */}
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div>
                <p className="mt-2 inline-block text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent tracking-tight leading-normal">Mission</p>
                <h2 className="mt-2 inline-block text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent tracking-tight leading-normal">
                  Deliver accuracy, speed, and care—every single time
                </h2>
                <p className="mt-3 max-w-prose text-slate-600">
                  Combine an outstanding team, engineered networks, and clear communication to meet commitments consistently.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-[560px]">
                  <Image
                    src="/mission.png"
                    alt="Mission"
                    width={560}
                    height={560}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="h-auto w-full object-contain drop-shadow-2xl"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* <Reveal>
              <h2 className="inline-block text-xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent">
              Our story
              </h2>
              </Reveal> */}
            {/* <Reveal delay={0.05}>
              <p className="mt-3 text-slate-600">
              Starting with a small, focused team, Movizo set out to raise the bar on reliability and accessibility in parcel logistics—growing from regional operations to national and international coverage while keeping services efficient and economical.
              </p>
              </Reveal> */}
          </div>
        </section>

        {/* Our Values — two-column layout with icon list */}
        <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
          <div className="grid gap-10 md:grid-cols-5">
            {/* Left: heading + intro */}
            <div className="md:col-span-2">
              <Reveal>
                <h2 className="inline-block text-3xl font-extrabold tracking-tight bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent">
                  Our Values
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-3 text-slate-600">
                  Embodying a customer‑centric approach, we emphasize trustworthiness, accessibility, and nimbleness to surpass shipping expectations—standing by core values that build long‑term relationships.
                </p>
              </Reveal>
            </div>

            {/* Right: icon + copy list */}
            <ul className="md:col-span-3 space-y-8">
              {VALUES.map((v) => (
                <li key={v.key} className="flex items-start gap-4">
                  <Image
                    src={v.icon}
                    alt={v.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{v.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Culture note */}
<section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
  <Reveal>
    <div className="mx-auto max-w-sm md:max-w-md">
      <div className="aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Image area (slightly taller than half to avoid seam) */}
        <div className="relative h-[51%] w-full">
          <img
            src="/culture.png"
            alt="People‑centric culture"
            className="absolute inset-0 block h-full w-full object-cover"
            loading="lazy"
            />
        </div>

        {/* Content area (slightly shorter) */}
        <div className="flex h-[49%] flex-col items-start justify-center p-6">
          <h3 className="inline-block text-lg font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent tracking-tight">
            A people‑centric culture
          </h3>
          <p className="mt-2 text-sm text-slate-700">
            We cultivate trust, respect, and collaboration—prioritizing employee well‑being and customer satisfaction in every delivery.
          </p>
        </div>
      </div>
    </div>
  </Reveal>
</section>




        {/* Optional stats */}
        <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
          <Reveal>{/* reserved for future stats */}</Reveal>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm md:flex-row md:text-left">
              <div>
                <p className="text-base font-semibold text-slate-900">Ready to move smarter?</p>
                <p className="mt-1 text-sm text-slate-600">
                  Explore solutions tailored to the next stage of growth.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
              >
                Talk to our team
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </LoaderPortal>
    </>
  );
}
