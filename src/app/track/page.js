// app/track/page.js
// "use client";

// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import { TrackForm } from "@/components/track-form";
// import { Reveal } from "@/components/animations/reveal";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function TrackPage() {
//   const sp = useSearchParams();
//   const awbParam = sp.get("awb") || "";
//   const [awb, setAwb] = useState(awbParam);

//   useEffect(() => setAwb(awbParam), [awbParam]);

//   return (
//     <>
//       <Navbar />
//       <main className="bg-white">
//         <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
//           <Reveal>
//             <h1 className="text-3xl font-semibold tracking-tight">Track Shipment</h1>
//           </Reveal>
//           <div className="mt-6">
//             <TrackForm />
//           </div>

//           {awb && (
//             <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//               <p className="text-sm text-slate-600">
//                 Showing placeholder tracking events for AWB: <span className="font-medium text-slate-900">{awb}</span>
//               </p>
//               <ul className="mt-3 space-y-2 text-sm text-slate-700">
//                 <li>• Shipment created</li>
//                 <li>• Picked up from origin</li>
//                 <li>• In transit</li>
//                 <li>• Out for delivery</li>
//               </ul>
//             </div>
//           )}
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TrackForm } from "@/components/track-form";
import { Reveal } from "@/components/animations/reveal";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

// This child is the only place that calls useSearchParams.
// It is wrapped in <Suspense> below to satisfy the rule.
function TrackContent() {
  const sp = useSearchParams();
  const awbParam = sp.get("awb") || "";
  const [awb, setAwb] = useState(awbParam);

  useEffect(() => setAwb(awbParam), [awbParam]);

  return (
    <>
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight">Track Shipment</h1>
      </Reveal>

      <div className="mt-6">
        <TrackForm />
      </div>

      {awb && (
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-600">
            Showing placeholder tracking events for AWB:{" "}
            <span className="font-medium text-slate-900">{awb}</span>
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Shipment created</li>
            <li>• Picked up from origin</li>
            <li>• In transit</li>
            <li>• Out for delivery</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default function TrackPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <Suspense fallback={<div className="mt-6">Loading…</div>}>
            <TrackContent />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
}

