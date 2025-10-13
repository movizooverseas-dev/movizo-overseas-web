// // components/navbar.jsx
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { cn } from "@/lib/utils";

// const nav = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Contact Us", href: "/contact" },
// ];

// export function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
//         <Link href="/" className="flex items-center gap-3">
//           <div className="relative h-15 w-45 overflow-hidden rouned-full ring-white/10">
//             <Image src="/movizoLogo.png" alt="Movizo Logo" fill className="object-cover" priority />
//           </div>
//         </Link>

//         <nav className="hidden items-center gap-1 md:flex">
//           {nav.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={cn(
//                 "rounded-md px-3 py-2 text-sm transition-colors hover:bg-white/5",
//                 pathname === item.href ? "text-white" : "text-slate-300"
//               )}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <Link href="/track" className="ml-1">
//             <Button className="bg-indigo-600 hover:bg-indigo-500">Track Shipment</Button>
//           </Link>
//         </nav>

//         <button
//           aria-label="Menu"
//           onClick={() => setOpen((s) => !s)}
//           className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/5 md:hidden"
//         >
//           <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
//             <path d="M3 6h18M3 12h18M3 18h18" />
//           </svg>
//         </button>
//       </div>

//       {open && (
//         <div className="border-t border-white/10 bg-slate-950/90 px-4 py-3 md:hidden">
//           <div className="flex flex-col gap-2">
//             {nav.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className={cn(
//                   "rounded-md px-3 py-2 text-sm transition-colors hover:bg-white/5",
//                   pathname === item.href ? "text-white" : "text-slate-300"
//                 )}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Link href="/track" onClick={() => setOpen(false)}>
//               <Button className="mt-1 w-full bg-indigo-600 hover:bg-indigo-500">Track Shipment</Button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// components/navbar.jsx
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { cn } from "@/lib/utils";

// const nav = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Contact Us", href: "/contact" },
// ];

// export function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
//         <Link href="/" className="flex items-center gap-3">
//           <div className="relative h-12 w-36 overflow-hidden ">
//             <Image src="/movizoLogo.png" alt="Movizo Logo" fill className="object-cover" priority />
//           </div>
//         </Link>

//         <nav className="hidden items-center gap-1 md:flex">
//           {nav.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={cn(
//                 "rounded-md px-3 py-2 text-sm transition-colors hover:bg-slate-100",
//                 pathname === item.href ? "text-slate-900" : "text-slate-600"
//               )}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <Link href="/track" className="ml-1">
//             <Button className="bg-sky-600 hover:bg-sky-500">Track Shipment</Button>
//           </Link>
//         </nav>

//         <button
//           aria-label="Menu"
//           onClick={() => setOpen((s) => !s)}
//           className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
//         >
//           <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
//             <path d="M3 6h18M3 12h18M3 18h18" />
//           </svg>
//         </button>
//       </div>

//       {open && (
//         <div className="border-t border-slate-200 bg-white/95 px-4 py-3 md:hidden">
//           <div className="flex flex-col gap-2">
//             {nav.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className={cn(
//                   "rounded-md px-3 py-2 text-sm transition-colors hover:bg-slate-100",
//                   pathname === item.href ? "text-slate-900" : "text-slate-600"
//                 )}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Link href="/track" onClick={() => setOpen(false)}>
//               <Button className="mt-1 w-full bg-sky-600 hover:bg-sky-500">Track Shipment</Button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }




// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { cn } from "@/lib/utils";

// const nav = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Contact Us", href: "/contact" },
// ];

// export function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   // Gray text + sky underline animation from center
//   const linkBase =
//     "relative inline-block px-4 py-2 text-slate-700 uppercase tracking-[0.15em] " +
//     "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 " +
//     "hover:after:left-0 hover:after:w-full";

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white backdrop-blur border-b border-slate-200">
//       <div className="mx-auto max-w-7xl h-14 md:h-16 px-4 md:px-6 flex items-center">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-3">
//           <div className="relative h-9 w-32 md:h-12 md:w-38 overflow-hidden">
//             <Image
//               src="/movizoLogo.png"
//               alt="Movizo Logo"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </Link>

//         {/* Right-aligned desktop nav next to Track */}
//         <nav className="hidden md:flex items-center gap-3 ml-auto">
//           {nav.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={cn(
//                 linkBase,
//                 pathname === item.href ? "text-slate-900" : "text-slate-700"
//               )}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <Link href="/track">
//             <Button className="bg-sky-600 hover:bg-sky-500 text-white text-base md:text-lg px-5 md:px-6 py-2.5 md:py-3 rounded-md">
//               Track
//             </Button>
//           </Link>
//         </nav>

//         {/* Mobile hamburger */}
//         <button
//           aria-label="Menu"
//           aria-expanded={open}
//           aria-controls="mobile-menu"
//           onClick={() => setOpen((s) => !s)}
//           className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-slate-800 hover:bg-slate-100 md:hidden"
//         >
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="transition-transform duration-200"
//           >
//             <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white px-4 py-3">
//           <div className="flex flex-col gap-1">
//             {nav.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className={cn(
//                   "relative inline-block px-4 py-3 text-slate-700 uppercase tracking-[0.15em] " +
//                     "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 " +
//                     "hover:after:left-0 hover:after:w-full",
//                   pathname === item.href ? "text-slate-900" : "text-slate-700"
//                 )}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Link href="/track" onClick={() => setOpen(false)}>
//               <Button className="mt-2 w-full bg-sky-600 hover:bg-sky-500 text-white text-lg py-3">
//                 Track
//               </Button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

// Small hook to detect scroll
function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(10);

  // Gray text + sky underline animation from center
  const linkBase =
    "relative inline-block px-4 py-2 text-slate-700 uppercase tracking-[0.15em] " +
    "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 " +
    "hover:after:left-0 hover:after:w-full";

  return (
    <header
      className={cn(
        // Fixed so the backdrop blur can blend over content
        "fixed top-0 inset-x-0 z-50 w-full transition-all",
        // Translucent, glassy surface that blends with page content
        "backdrop-blur-md supports-[backdrop-filter]:bg-white/50 bg-white/60",
        // Strengthen background + add shadow when scrolled
        scrolled ? "bg-white/80 shadow-sm" : "shadow-none",
        // Optional subtle bottom border when at top
        scrolled ? "border-b border-slate-200/70" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl h-14 md:h-16 px-4 md:px-6 flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-32 md:h-12 md:w-38 overflow-hidden">
            <Image
              src="/movizoLogo.png"
              alt="Movizo Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Right-aligned desktop nav next to Track */}
        <nav className="hidden md:flex items-center gap-3 ml-auto">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                linkBase,
                pathname === item.href ? "text-slate-900" : "text-slate-700"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/track">
            <Button className="bg-sky-600 hover:bg-sky-500 text-white text-base md:text-lg px-5 md:px-6 py-2.5 md:py-3 rounded-md">
              Track
            </Button>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((s) => !s)}
          className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-slate-800 hover:bg-slate-100 md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200"
          >
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden px-4 py-3 transition-colors",
            // Keep menu matching header translucency
            "border-t border-slate-200/70 bg-white/80 backdrop-blur-md"
          )}
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "relative inline-block px-4 py-3 text-slate-700 uppercase tracking-[0.15em] " +
                    "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 " +
                    "hover:after:left-0 hover:after:w-full",
                  pathname === item.href ? "text-slate-900" : "text-slate-700"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/track" onClick={() => setOpen(false)}>
              <Button className="mt-2 w-full bg-sky-600 hover:bg-sky-500 text-white text-lg py-3">
                Track
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
