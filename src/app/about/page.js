// app/about/page.js
"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/animations/reveal";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <Reveal>
            <h1 className="text-3xl font-semibold tracking-tight">About Movizo</h1>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-2xl text-slate-600">
              Movizo Overseas Pvt. Ltd. delivers dependable logistics across air, ocean, and surface with a service mindset focused on time, care, and communication.
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
