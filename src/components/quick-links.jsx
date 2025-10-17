
// components/quick-links.jsx
"use client";

import { Reveal } from "@/components/animations/reveal";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

// Arrow icon
function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m12 5 7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuickLinks() {
  const items = [
    {
      key: "track",
      title: "Track Shipment",
      desc: "Find shipment status with real‑time updates.",
      img: "/track-image.jpg", // image in public
      alt: "Order tracking illustration",
      badge: "Tracking",
    },
    {
      key: "pincode",
      title: "12000+ Pincodes",
      desc: "Pincode Servicability Network Domestic and International.",
      img: "/Pincode-Service.webp", // image in public
      alt: "Pincode Serviceability illustration",
      badge: "Pincodes",
    },
    {
      key: "partners",
      title: "15+ Courier Partners",
      desc: "We have partnered with top courier services.",
      img: "/courier-partners.png", // image in public
      alt: "Pincode Serviceability illustration",
      badge: "Partners",
    }
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Reveal>
          <h2 className="text-4xl bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent font-extrabold tracking-tight mb-8">Core Highlights</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.key} delay={0.04 * i}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 160, damping: 20 }}
                className="h-full"
              >
                <Card className="relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg hover:border-sky-100">
                  <CardHeader className="flex flex-row items-start justify-between gap-3 pb-2">
                    <div className="space-y-1">
                      <CardTitle className="text-xl  font-bold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent">{item.title}</CardTitle>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                    {item.badge ? (
                      <span className="whitespace-nowrap rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-600">
                        {item.badge}
                      </span>
                    ) : null}
                  </CardHeader>

                  <CardContent className="px-4 pb-0">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        fill
                        className="object-contain object-center"
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 98vw"
                        priority={i === 0}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
