// components/navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-md ring-1 ring-white/10">
            <Image src="/images/logo.png" alt="Movizo Logo" fill className="object-cover" priority />
          </div>
          <span className="text-lg font-semibold tracking-tight">Movizo Overseas Pvt. Ltd.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors hover:bg-white/5",
                pathname === item.href ? "text-white" : "text-slate-300"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/track" className="ml-1">
            <Button className="bg-indigo-600 hover:bg-indigo-500">Track Shipment</Button>
          </Link>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((s) => !s)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/5 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/90 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors hover:bg-white/5",
                  pathname === item.href ? "text-white" : "text-slate-300"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/track" onClick={() => setOpen(false)}>
              <Button className="mt-1 w-full bg-indigo-600 hover:bg-indigo-500">Track Shipment</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
