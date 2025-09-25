// src/components/partners-marquee.jsx
// Server Component by default; no "use client" needed.

import Image from "next/image";

const logos = [
  // Place brand logo files in /public/partners and reference them here
  { src: "/partners/delhivery.png", alt: "Delhivery" },
  //{ src: "/partners/amazon.svg", alt: "Amazon Shipping" },
  //{ src: "/partners/blue-dart.svg", alt: "Blue Dart" },
  { src: "/partners/dtdc.png", alt: "DTDC" },
  //{ src: "/partners/xpressbees.svg", alt: "XpressBees" },
  { src: "/partners/aramex.png", alt: "Aramex" },
 // { src: "/partners/ecom-express.svg", alt: "Ecom Express" },
  //{ src: "/partners/ekart.svg", alt: "Ekart" },
  // ...add more as needed
];

// Re-usable logo item
function LogoBox({ src, alt }) {
  return (
    <div className="h-14 w-40 shrink-0 rounded-md bg-white ring-1 ring-slate-200 shadow-sm flex items-center justify-center px-4">
      <Image src={src} alt={alt} width={140} height={40} className="object-contain" />
    </div>
  );
}

export default function PartnersMarquee() {
  // Duplicate the list to create a seamless loop track
  const track = [...logos, ...logos];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight text-center">
          Trusted Courier Partners
        </h2>

        {/* Row 1 (leftwards) */}
        <div className="relative mt-6 overflow-hidden mask-fade-x marquee-paused">
          <div className="marquee-track marquee-left">
            {track.map((l, i) => (
              <LogoBox key={`top-${i}-${l.src}`} src={l.src} alt={l.alt} />
            ))}
          </div>
        </div>

        {/* Row 2 (rightwards) */}
        <div className="relative mt-4 overflow-hidden mask-fade-x marquee-paused">
          <div className="marquee-track marquee-right">
            {track.map((l, i) => (
              <LogoBox key={`bottom-${i}-${l.src}`} src={l.src} alt={l.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
