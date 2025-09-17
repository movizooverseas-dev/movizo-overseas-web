// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Movizo Overseas Pvt. Ltd. – Logistics & Freight",
  description: "Domestic and international logistics, freight and tracking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
