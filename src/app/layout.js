// app/layout.js
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Movizo Overseas Pvt. Ltd. – Logistics & Freight",
  description: "Domestic & international logistics with reliable tracking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-white text-slate-800 antialiased">
      <Navbar />
        {children}
      </body>
    </html>
  );
}
