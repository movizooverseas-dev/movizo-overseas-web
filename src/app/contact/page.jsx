
"use client";

import { Footer } from "@/components/footer";
import LoaderPortal from "@/components/LoaderPortal";

const CONTACT = {
  titleTop: "Contact us",
  headline: "Have any queries? We’re all ears!",
  sub: "Our team is trained, equipped & ready to guide from scratch to success.",
  phone: "+91-8076991804",
  email: "info@movizooverseas.com",
  addressLine1: "A-178, Shop No. 2, Ground Floor, Ganesh Nager,",
  addressLine2: "Tilak Nagar, New Delhi-110018",
};

// Replace with a real Embed API URL and key
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Gurugram+Haryana";

export default function ContactPage() {
  return (
    <>
      <LoaderPortal>
      <main className="bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-blue-50 via-blue-100 to-white">
  <div className="mx-auto max-w-6xl px-4 py-18 md:px-6 md:py-24 text-center">
    {/* Label on its own line, neutral color */}
    <p className="text-sm md:text-base font-semibold tracking-wide text-blue-700/80">
      Contact us
    </p>

    {/* Headline below, gradient applied only here */}
    <h1 className="mt-2 inline-block text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent tracking-tight leading-tight">
      Have any queries? We’re all ears!
    </h1>

    <p className="mx-auto mt-3 max-w-2xl text-slate-600">
      Our team is trained, equipped & ready to guide from scratch to success.
    </p>
  </div>

  {/* Decorative glow (optional) */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl" />
  </div>
</section>


        {/* Card */}
        <section className="mx-auto -mt-10 max-w-6xl px-4 pb-16 md:px-6">
          <div className="rounded-2xl bg-white/90 shadow-xl ring-1 ring-black/5 backdrop-blur">
            <div className="grid grid-cols-1 gap-6 p-5 md:p-8 lg:grid-cols-2">
              {/* Left: Contact details */}
              <div className="flex flex-col justify-center gap-6">
                {/* Phone */}
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-5">
                  <svg
                    className="mt-0.5 h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h2.49a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.2 2.22z" />
                  </svg>
                  <div>
                    <p className="inline-block text-base font-semibold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent">
                      Ring us up
                    </p>
                    <a
                      href={`tel:${CONTACT.phone.replace(/[^0-9+]/g, "")}`}
                      className="mt-1 block text-slate-700 hover:text-blue-700 hover:underline text-sm"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-5">
                  <svg
                    className="mt-0.5 h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    >
                    <path d="M20 4H4a2 2 0 00-2 2v.4l10 6 10-6V6a2 2 0 00-2-2z" />
                    <path d="M22 8.4l-9.4 5.64a2 2 0 01-2.2 0L1 8.4V18a2 2 0 002 2h16a2 2 0 002-2V8.4z" />
                  </svg>
                  <div>
                    <p className="inline-block text-base font-semibold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent">
                      Write to us
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="mt-1 block text-slate-700 hover:text-blue-700 hover:underline text-sm break-all"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-5">
                  <svg
                    className="mt-0.5 h-5 w-5 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
                  </svg>
                  <div>
                    <p className="inline-block text-base font-semibold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent">
                      Visit us
                    </p>
                    <address className="mt-1 not-italic text-sm text-slate-700">
                      {CONTACT.addressLine1}
                      <br />
                      {CONTACT.addressLine2}
                    </address>
                  </div>
                </div>
              </div>

              {/* Right: Map */}
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <iframe
                  title="Office location map"
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </LoaderPortal>
    </>
  );
}
