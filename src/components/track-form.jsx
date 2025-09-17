// components/track-form.jsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function TrackForm({ inline = false }) {
  const router = useRouter();
  const [awb, setAwb] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!awb.trim()) return;
    router.push(`/track?awb=${encodeURIComponent(awb.trim())}`);
  }

  return (
    <form onSubmit={submit} className={inline ? "flex gap-2" : "flex w-full max-w-xl gap-2"}>
      <input
        className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none ring-indigo-500/0 transition focus:ring-2"
        placeholder="Enter AWB / Order ID"
        value={awb}
        onChange={(e) => setAwb(e.target.value)}
      />
      <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500">Track</Button>
    </form>
  );
}
