// // components/footer.jsx
// import Link from "next/link";

// export function Footer() {
//   return (
//     // <footer className="border-t border-white/10 bg-slate-950">
//       <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
//           <div className="md:col-span-2">
//             <h3 className="text-lg font-semibold">Movizo Overseas Pvt. Ltd.</h3>
//             <p className="mt-2 max-w-md text-sm text-slate-400">
//               Comprehensive logistics solutions spanning air, ocean, and surface with customs, warehousing, and last-mile delivery.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-sm font-semibold text-slate-200">Company</h4>
//             <ul className="mt-3 space-y-2 text-sm text-slate-400">
//               <li><Link href="/">Home</Link></li>
//               <li><Link href="/about">About Us</Link></li>
//               <li><Link href="/contact">Contact Us</Link></li>
//               <li><Link href="/track">Track Shipment</Link></li>
//             </ul>
//           </div>

//           <div id="contact">
//             <h4 className="text-sm font-semibold text-slate-200">Contact</h4>
//             <ul className="mt-3 space-y-2 text-sm text-slate-400">
//               <li>New Delhi, India</li>
//               <li>+91-XXXXXXXXXX</li>
//               <li>support@movizooverseas.com</li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-slate-500">
//           <p>© {new Date().getFullYear()} Movizo Overseas Pvt. Ltd. All rights reserved.</p>
//           <div className="flex gap-4">
//             <Link href="/privacy">Privacy</Link>
//             <Link href="/terms">Terms</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// components/footer.jsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-slate-900">Movizo Overseas Pvt. Ltd.</h3>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              Comprehensive logistics across air, ocean, and surface with customs, warehousing, and last‑mile delivery.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/track">Track Shipment</Link></li>
            </ul>
          </div>

          <div id="contact">
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>New Delhi, India</li>
              <li>+91-8076991804</li>
              <li>info@movizooverseas.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Movizo Overseas Pvt. Ltd. All rights reserved.</p>
          {/* <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

