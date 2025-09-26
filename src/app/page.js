// // app/page.js
// "use client";

// import { Navbar } from "@/components/navbar";
// import { Hero } from "@/components/hero";
// import { Footer } from "@/components/footer";
// import { Reveal } from "@/components/animations/reveal";

// export default function Page() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Hero />
//         <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
//           <Reveal>
//             <h2 className="text-2xl font-semibold tracking-tight">Why Movizo</h2>
//           </Reveal>
//           <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
//             {[
//               { title: "Air Freight", desc: "Time-critical air cargo with end-to-end visibility." },
//               { title: "Ocean Freight", desc: "Cost-effective LCL/FCL with global coverage." },
//               { title: "Surface & Rail", desc: "Reliable multimodal transport across India." },
//             ].map((f, i) => (
//               <Reveal key={f.title} delay={0.05 * i}>
//                 <div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
//                   <h3 className="font-medium">{f.title}</h3>
//                   <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
//                   <div className="mt-4 h-px w-0 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

// app/page.js
// "use client";

// import { Navbar } from "@/components/navbar";
// import { Hero } from "@/components/hero";
// import { QuickLinks } from "@/components/quick-links";
// import { Services } from "@/components/services";
// import { Stats } from "@/components/stats";
// import { Footer } from "@/components/footer";

// export default function Page() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Hero />
//         <QuickLinks />
//         <Services />
//         <Stats />
//       </main>
//       <Footer />
//     </>
//   );
// }
//*************************************************************************************** */
// src/app/page.js
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { QuickLinks } from "@/components/quick-links";
import PartnersMarquee from "@/components/partners-marquee";
import { Services } from "@/components/services";
//import { Stats } from "@/components/stats";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickLinks />
        <Services />
        <PartnersMarquee />
      </main>
      <Footer />
    </>
  );
}

//*********************************************************************************** */
// src/app/page.js
// import Services from "@/components/services";
// import MoreServices from "@/components/more-services";

// export default function Home() {
//   return (
//     <>
//       {/* ...existing sections like Hero, QuickLinks, etc. */}
//       <Services />
//       <MoreServices />
//       {/* ...rest of the page */}
//     </>
//   );
// }


