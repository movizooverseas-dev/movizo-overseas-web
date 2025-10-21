// // src/app/contact/page.jsx (or .tsx)
// "use client";

// import Image from "next/image";
// // import { Navbar } from "@/components/navbar"; // if needed
// import { Footer } from "@/components/footer";
// import LoaderPortal from "@/components/LoaderPortal";

// const CONTACT = {
//   titleTop: "Contact us",
//   headline: "Have any queries? We’re all ears!",
//   sub: "Our team is trained, equipped & ready to guide from scratch to success.",
//   phone: "+91-8076991804",
//   email: "info@movizooverseas.com",
//   addressLine1: "A-178, Shop No. 2, Ground Floor, Ganesh Nager,",
//   addressLine2: "Tilak Nagar, New Delhi-110018",
// };

// export default function ContactPage() {
//   const phoneHref = `tel:${(CONTACT?.phone || "").replace(/[^0-9+]/g, "")}`;

//   return (
//     <>
//       <LoaderPortal>
//         <main className="bg-white">
//           {/* ...hero section... */}

//           {/* Two‑column section without cards */}
//           <section className="mx-auto -mt-10 max-w-6xl px-4 pb-16 md:px-6">
//             <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
//               {/* Left: plain content */}
//               <div className="space-y-6">
//                 {/* Phone */}
//                 <div className="flex items-start gap-3">
//                   <svg className="mt-0.5 h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h2.49a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.2 2.22z" />
//                   </svg>
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">Ring us up</p>
//                     <a href={phoneHref} className="mt-1 block text-sm text-blue-700 hover:underline">
//                       {CONTACT?.phone}
//                     </a>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="flex items-start gap-3">
//                   <svg className="mt-0.5 h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M20 4H4a2 2 0 00-2 2v.4l10 6 10-6V6a2 2 0 00-2-2z" />
//                     <path d="M22 8.4l-9.4 5.64a2 2 0 01-2.2 0L1 8.4V18a2 2 0 002 2h16a2 2 0 002-2V8.4z" />
//                   </svg>
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">Write to us</p>
//                     <a href={`mailto:${CONTACT?.email || ""}`} className="mt-1 block break-all text-sm text-blue-700 hover:underline">
//                       {CONTACT?.email}
//                     </a>
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div className="flex items-start gap-3">
//                   <svg className="mt-0.5 h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
//                   </svg>
//                   <div>
//                     <p className="text-sm font-semibold text-slate-900">Visit us</p>
//                     <address className="mt-1 not-italic text-sm text-slate-700">
//                       {CONTACT?.addressLine1}
//                       <br />
//                       {CONTACT?.addressLine2}
//                     </address>
//                   </div>
//                 </div>
//               </div>

//               {/* Right: image */}
//               <div className="relative">
//                 <Image
//                   src="/contact-illustration.png"
//                   alt="Contact illustration"
//                   width={1400}
//                   height={900}
//                   sizes="(min-width: 1024px) 700px, 100vw"
//                   className="h-auto w-full object-contain"
//                   priority={false}
//                 />
//               </div>
//             </div>
//           </section>
//         </main>
//         <Footer />
//       </LoaderPortal>
//     </>
//   );
// }


"use client";

import Image from "next/image";
import { Footer } from "@/components/footer";
import LoaderPortal from "@/components/LoaderPortal";

const CONTACT = {
  titleTop: "Contact Us",
  headline: "Visit our office or call us for any business query",
  sub: "Need assistance with your logistics need? Reach out today and we’ll ensure your experience is seamless and efficient.",
  phone: "+91-8076991804",
  email: "info@movizooverseas.com",
  // Addresses
  delhi: {
    label: "New Delhi",
    line1: "A-178, Shop No. 2, Ground Floor, Ganesh Nagar,",
    line2: "Tilak Nagar, New Delhi - 110018",
  },
  noida: {
    label: "Noida — Branch Office",
    line1: "E-421, New Ashok Nagar,",
    line2: "Delhi - 110096",
  },
};

export default function ContactPage() {
  const phoneHref = `tel:${(CONTACT.phone || "").replace(/[^0-9+]/g, "")}`;

  return (
    <>
      <LoaderPortal>
        <main className="bg-white">
          {/* Hero band for visual continuity with site theme
          <section className="relative bg-gradient-to-b from-blue-50 via-blue-100 to-white">
            <div className="mx-auto max-w-7xl px-4 py-16 text-left md:px-6 md:py-20">
              <p className="text-sm font-semibold tracking-wide text-blue-700/80">
                {CONTACT.titleTop}
              </p>
              <h1 className="mt-2 inline-block text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent tracking-tight leading-tight">
                {CONTACT.headline}
              </h1>
              <p className="mt-3 max-w-2xl text-slate-600">{CONTACT.sub}</p>
            </div>

            {/* Optional soft glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl" />
            </div>
          {/* </section> */} 

          <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
    {/* Left: text intro */}
    <div className="flex flex-col justify-center">
      <h2 className="mt-2 inline-block text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent tracking-tight leading-normal">
        Have any queries? 
        <br />
        We’re all ears!
      </h2>
     
    </div>

    {/* Right: feature illustration or image */}
    <div className="relative w-full flex justify-center">
      <Image
        src="/contact-illustration.png" // Replace with your image path
        alt="Contact illustration"
        width={700}
        height={500}
        sizes="(min-width: 1024px) 700px, 100vw"
        className="h-auto w-full max-w-xl object-contain"
        priority={false}
      />
    </div>
  </div>
</section>


          {/* Split section: left intro text, right info panels (cards) */}
          <section className="mx-auto -mt-6 max-w-7xl px-4 pb-16 md:px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left column repeats small intro (keeps balance like the reference) */}
              <div className="flex flex-col justify-center">
                
                <h2 className="mt-2 inline-block text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent tracking-tight leading-normal">
                  Visit our office
                  <br />
                  or call us for any business query
                </h2>
                <p className="mt-4 max-w-prose text-slate-600">
                  {CONTACT.sub}
                </p>
              </div>

              {/* Right column: addresses + call + email */}
              <div className="grid grid-cols-1 gap-6">
                {/* Addresses */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
                    </svg>
                    <p className="text-sm font-semibold text-slate-900">Locations</p>
                  </div>

                  {/* Delhi */}
                  <div className="mt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {CONTACT.delhi.label}
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      {CONTACT.delhi.line1}
                      <br />
                      {CONTACT.delhi.line2}
                    </p>
                  </div>

                  {/* Noida */}
                  <div className="mt-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {CONTACT.noida.label}
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      {CONTACT.noida.line1}
                      <br />
                      {CONTACT.noida.line2}
                    </p>
                  </div>
                </div>

                {/* Call + Email side by side */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Call */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h2.49a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.2 2.22z" />
                      </svg>
                      <p className="text-sm font-semibold text-slate-900">Call</p>
                    </div>
                    <a href={phoneHref} className="mt-3 inline-block text-sm text-blue-700 hover:underline">
                      {CONTACT.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20 4H4a2 2 0 00-2 2v.4l10 6 10-6V6a2 2 0 00-2-2z" />
                        <path d="M22 8.4l-9.4 5.64a2 2 0 01-2.2 0L1 8.4V18a2 2 0 002 2h16a2 2 0 002-2V8.4z" />
                      </svg>
                      <p className="text-sm font-semibold text-slate-900">Email</p>
                    </div>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="mt-3 inline-block break-all text-sm text-blue-700 hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact form only (no map) */}
<section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
  <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur md:p-8">
    <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
      Send us a message
    </h3>
    <p className="mt-1 text-sm text-slate-600">
      Share a few details and the team will get back shortly.
    </p>

    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1 block text-xs font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-sky-600/10 transition focus:border-sky-500 focus:ring-4"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-sky-600/10 transition focus:border-sky-500 focus:ring-4"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="mb-1 block text-xs font-medium text-slate-700">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+91-XXXXXXXXXX"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-sky-600/10 transition focus:border-sky-500 focus:ring-4"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="mb-1 block text-xs font-medium text-slate-700">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company name"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-sky-600/10 transition focus:border-sky-500 focus:ring-4"
        />
      </div>

      {/* Query (full width) */}
      <div className="md:col-span-2">
        <label htmlFor="query" className="mb-1 block text-xs font-medium text-slate-700">
          Query
        </label>
        <textarea
          id="query"
          name="query"
          rows={5}
          required
          placeholder="How can we help?"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-sky-600/10 transition focus:border-sky-500 focus:ring-4"
        />
      </div>

      {/* Submit */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center rounded-lg bg-gradient-to-r from-sky-600 to-sky-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:from-sky-500 hover:to-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-600/30"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</section>

        </main>
        <Footer />
      </LoaderPortal>
    </>
  );
}
