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

// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";
// import { TrackForm } from "@/components/track-form";
// import { Reveal } from "@/components/animations/reveal";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState, Suspense } from "react";

// // This child is the only place that calls useSearchParams.
// // It is wrapped in <Suspense> below to satisfy the rule.
// function TrackContent() {
//   const sp = useSearchParams();
//   const awbParam = sp.get("awb") || "";
//   const [awb, setAwb] = useState(awbParam);

//   useEffect(() => setAwb(awbParam), [awbParam]);

//   return (
//     <>
//       <Reveal>
//         <h1 className="text-3xl font-semibold tracking-tight">Track Shipment</h1>
//       </Reveal>

//       <div className="mt-6">
//         <TrackForm />
//       </div>

//       {awb && (
//         <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//           <p className="text-sm text-slate-600">
//             Showing placeholder tracking events for AWB:{" "}
//             <span className="font-medium text-slate-900">{awb}</span>
//           </p>
//           <ul className="mt-3 space-y-2 text-sm text-slate-700">
//             <li>• Shipment created</li>
//             <li>• Picked up from origin</li>
//             <li>• In transit</li>
//             <li>• Out for delivery</li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

// export default function TrackPage() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-white">
//         <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
//           <Suspense fallback={<div className="mt-6">Loading…</div>}>
//             <TrackContent />
//           </Suspense>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import { useTracking } from '@/hooks/useTracking';
// import TrackingResults from '@/components/tracking-result';

// export default function TrackingPage() {
//   const [awbNo, setAwbNo] = useState('');
//   const { data, loading, error, getTracking } = useTracking();

//   function handleTrack() {
//     if (awbNo) getTracking(awbNo);
//   }

//   return (
//     <div>
//       <h1>Track Your Shipment</h1>
//       <input
//         type="text"
//         value={awbNo}
//         onChange={e => setAwbNo(e.target.value)}
//         placeholder="Enter Consignment Number"
//       />
//       <button onClick={handleTrack} disabled={loading}>
//         Track
//       </button>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{color:'red'}}>Error: {error}</p>}
//       {data && <TrackingResults trackingData={data} />}
//     </div>
//   );
// }


// 'use client';

// import { useState } from "react";
// import { useTracking } from "@/hooks/useTracking";
// import TrackingResults from "@/components/tracking-result";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Card } from "@/components/ui/card";

// export default function TrackingPage() {
//   const [trackBy, setTrackBy] = useState("awb");
//   const [awbNo, setAwbNo] = useState("");
//   const { data, loading, error, getTracking } = useTracking();

//   function handleTrack(e) {
//     e.preventDefault();
//     if (awbNo) getTracking(awbNo);
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 via-sky-200 to-white p-4">
//       <h1 className="text-4xl font-bold mb-2 text-center">
//         Track your <span className="text-sky-600">orders</span> easily
//       </h1>
//       <p className="mb-8 text-center text-gray-600">
//         Enter your Mobile Number, AWB, or Order ID to track.
//       </p>
//       <Card className="w-full max-w-md p-6 rounded-xl shadow-lg mb-8">
//         <RadioGroup
//           value={trackBy}
//           onValueChange={setTrackBy}
//           className="flex gap-4 mb-4"
//         >
//           <div className="flex items-center gap-2">
//             <RadioGroupItem value="mobile" id="r1" />
//             <label htmlFor="r1">Mobile</label>
//           </div>
//           <div className="flex items-center gap-2">
//             <RadioGroupItem value="awb" id="r2" />
//             <label htmlFor="r2">AWB</label>
//           </div>
//           <div className="flex items-center gap-2">
//             <RadioGroupItem value="order" id="r3" />
//             <label htmlFor="r3">Order ID</label>
//           </div>
//         </RadioGroup>
//         <form onSubmit={handleTrack}>
//           <Input
//             className="mb-4"
//             placeholder={
//               trackBy === "mobile"
//                 ? "Enter Mobile Number"
//                 : trackBy === "awb"
//                 ? "Enter AWB Number"
//                 : "Enter Order ID"
//             }
//             value={awbNo}
//             onChange={e => setAwbNo(e.target.value)}
//             required
//           />
//           <Button
//             className="bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 text-white w-full font-semibold"
//             type="submit"
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Track Now"}
//           </Button>
//         </form>
//         {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
//       </Card>
//       {/* Tracking Results Display */}
//       {data && (
//         <div className="w-full max-w-2xl">
//           <TrackingResults trackingData={data} />
//         </div>
//       )}
//       <div className="mt-8 text-center text-gray-500 text-sm">
//         Can’t find your order details?<br />
//         We sent your AWB tracking number to you via Email & SMS upon confirmation.
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from "react";
import { useTracking } from "@/hooks/useTracking";
import TrackingResults from "@/components/tracking-result/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";

// Replace with your image path
const imagePath = "/track-order.png";

export default function TrackingPage() {
  const [trackBy, setTrackBy] = useState("awb");
  const [awbNo, setAwbNo] = useState("");
  const { data,loading, error, getTracking } = useTracking();

  function handleTrack(e) {
    e.preventDefault();
    if (awbNo) getTracking(awbNo);
  }

  console.log(data);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 via-sky-200 to-white p-4 mt-10">
      {/* Headings */}
      <div className="w-full max-w-5xl mx-auto mt-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center ">
          Track your <span className="font-bold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent">orders easily</span>
        </h1>
        <p className="mb-8 text-center text-gray-600 text-base md:text-lg">
          Enter your AWB tracking number or Order ID to track our Consignment.
        </p>
      </div>
      {/* Image + Card */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-10">
        {/* Left/Image (only visible on md+) */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <img
            src={imagePath}
            alt="Tracking visual"
            className="max-h-[320px] w-auto rounded-xl"
          />
        </div>
        {/* Right/Card */}
        {/* Right Input Card */}
        <Card className="flex-1 w-full p-8 rounded-xl shadow-2xl bg-white border border-transparent hover:border-sky-300 transition-colors duration-300">
          <RadioGroup value={trackBy} onValueChange={setTrackBy} className="flex gap-6 mb-6 justify-center">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="awb" id="radio-awb" />
              <label htmlFor="radio-awb" className="cursor-pointer select-none">AWB</label>
            </div>
          </RadioGroup>

          <form onSubmit={handleTrack} className="flex flex-col space-y-6">
            <Input
              aria-label="Tracking input"
              className="text-xl p-4 rounded-md border border-gray-300 font-serif focus:border-sky-500 focus:ring-2 focus:ring-sky-300 transition"
              placeholder={
                trackBy === "mobile"
                  ? "Enter Mobile Number"
                  : trackBy === "awb"
                    ? "Enter AWB Number"
                    : "Enter Order ID"
              }
              value={awbNo}
              type={trackBy === "mobile" ? "tel" : "text"} // Optional input type change
              pattern={trackBy === "mobile" ? "[0-9]*" : undefined}
              onChange={e => setAwbNo(e.target.value)}
              required
              autoFocus
            />
            <Button
              className="bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 font-semibold text-white py-4 rounded-md shadow-lg hover:brightness-110 transition"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Track Now'}
            </Button>
          </form>

          {error && (
            <p className="mt-4 text-center text-red-600 font-semibold">
              {error}
            </p>
          )}
        </Card>
      </div>
      {/* Results/Info */}
      {data && (
        <div className="w-full max-w-7xl mx-auto">
          <TrackingResults trackingData={data} awb_no={awbNo} />
        </div>
      )}
    </div>
  );
}

