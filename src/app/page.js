// src/app/page.js
import { Hero } from "@/components/hero";
import PartnersMarquee from "@/components/partners-marquee";
import { QuickLinks } from "@/components/quick-links";
import { Services } from "@/components/services";
//import { Stats } from "@/components/stats";
import { Footer } from "@/components/footer";
import  LoaderPortal from "@/components/LoaderPortal";

export default function Page() {
  return (
    <>
      <LoaderPortal />
      <main className="mt-10">        
        <Hero />
        <QuickLinks />
        <Services />
        <PartnersMarquee />
      </main>
      <Footer />
      <LoaderPortal />
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


