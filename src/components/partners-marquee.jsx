// src/components/partners-marquee.jsx
// Server Component by default; no "use client" needed.

import Image from "next/image";

const logos = [
  // Place brand logo files in /public/partners and reference them here
  { src: "/partners/delhivery.png", alt: "Delhivery" },
  { src: "/partners/Trackon.png", alt: "Trackon" },
  { src: "/partners/Fedex.png", alt: "Fedex" },
  { src: "/partners/skynet.png", alt: "skynet" },
  { src: "/partners/aramex.png", alt: "Aramex" },
  { src: "/partners/DHL.png", alt: "DHL" },
  { src: "/partners/Dpex.png", alt: "Dpex" },
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
        <h2 className="text-4xl font-extrabold tracking-tight text-center bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent">
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
