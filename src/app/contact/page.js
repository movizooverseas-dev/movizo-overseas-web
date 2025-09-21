// app/contact/page.js
"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <Reveal>
            <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>
          </Reveal>
          <form className="mt-6 grid max-w-2xl gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <input className="rounded-md border border-slate-300 px-4 py-3 text-sm" placeholder="Name" />
            <input className="rounded-md border border-slate-300 px-4 py-3 text-sm" placeholder="Email" />
            <input className="rounded-md border border-slate-300 px-4 py-3 text-sm" placeholder="Phone" />
            <textarea className="min-h-32 rounded-md border border-slate-300 px-4 py-3 text-sm" placeholder="Message" />
            <Button className="w-fit bg-sky-600 hover:bg-sky-500">Submit</Button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
