// 'use client';

// import {
//   CheckCircle2,
//   FileCheck,
//   PackageCheck,
//   PlaneTakeoff,
//   MapPin,
//   Truck,
//   MoveDiagonal,
// } from 'lucide-react';

// const ICONS = {
//   'Order Booked': FileCheck,
//   'Order Picked': PackageCheck,
//   'In Transit': MoveDiagonal,
//   'Order Departed': PlaneTakeoff,
//   'At Destination': MapPin,
//   'Out for Delivery': Truck,
//   'Delivered': CheckCircle2,
// };

// export default function ProgressStepper({ stages, currentIndex, reachedAt }) {
//   return (
//     <div className="w-full">
//       <h3 className="text-base md:text-lg font-semibold mb-4">Progress</h3>
//       <div className="relative px-2">
//         <div className="
//           flex flex-row items-start md:items-center
//           justify-between
//           gap-3 md:gap-6
//           w-full
//           overflow-x-auto
//           pb-2
//           scrollbar-thin scrollbar-thumb-sky-200 scrollbar-track-transparent
//           snap-x
//         ">
//           {stages.map((label, idx) => {
//             const Icon = ICONS[label] || FileCheck;
//             const completed = idx < currentIndex;
//             const active = idx === currentIndex;
//             const when = reachedAt[label];

//             return (
//               <div
//                 key={label}
//                 className="flex-1 min-w-[80px] md:min-w-[120px] flex flex-col items-center justify-start snap-center"
//               >
//                 {/* Connector line */}
//                 {idx !== 0 && (
//                   <div
//                     className={`absolute top-6 left-0 h-2
//                       ${completed ? 'bg-emerald-400' : active ? 'bg-sky-400' : 'bg-slate-300'}
//                       md:w-full w-0 z-0`}
//                     style={{
//                       width: '100%',
//                       height: '4px',
//                       top: '24px',
//                       left: '-50%',
//                     }}
//                   />
//                 )}

//                 {/* Icon */}
//                 <div
//                   className={`
//                     flex items-center justify-center
//                     h-12 w-12 md:h-16 md:w-16
//                     rounded-full border-2
//                     shadow-lg
//                     transition-transform duration-200
//                     ${completed ? 'bg-emerald-600 border-emerald-400 text-white' : ''}
//                     ${active ? 'bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 border-sky-400 text-white scale-105 shadow-sky-200' : ''}
//                     ${!completed && !active ? 'bg-slate-200 border-slate-300 text-slate-700' : ''}
//                   `}
//                   style={active ? { boxShadow: '0 0 16px #0ea5e9' } : undefined}
//                 >
//                   <Icon size={32} />
//                 </div>

//                 {/* Stage Name */}
//                 <div className="mt-2 text-center w-full">
//                   <div className={`font-semibold text-xs md:text-base`}>
//                     {label}
//                   </div>
//                   <div className="text-[10px] md:text-xs text-slate-500 font-mono">
//                     {when ? when.toLocaleString() : ''}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {/* horizontal connector line under all icons for desktop */}
//         <div className="hidden md:block absolute md:left-4 md:right-4 top-11 h-[4px] bg-slate-200 z-0" />
//       </div>
//       {/* Highlight current status message below bar */}
//       <div className="mt-4 flex justify-center">
//         <span className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-sky-100 via-emerald-100 to-sky-50 shadow">
//           {stages[currentIndex] && `Current Status: ${stages[currentIndex]}`}
//         </span>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import {
//   CheckCircle2,
//   FileCheck,
//   PackageCheck,
//   PlaneTakeoff,
//   MapPin,
//   Truck,
//   MoveDiagonal,
// } from 'lucide-react';

// const ICONS = {
//   'Order Booked': FileCheck,
//   'Order Picked': PackageCheck,
//   'In Transit': MoveDiagonal,
//   'Order Departed': PlaneTakeoff,
//   'At Destination': MapPin,
//   'Out for Delivery': Truck,
//   'Delivered': CheckCircle2,
// };

// export default function ProgressStepper({ stages, currentIndex, reachedAt }) {
//   return (
//     <div className="w-full">
//       <h3 className="text-base md:text-lg font-semibold mb-4">Progress</h3>
//       <div className="relative w-full overflow-x-auto px-2">
//         <div className="flex items-start md:items-center justify-start gap-4 min-w-full pb-2 snap-x scrollbar-thin scrollbar-thumb-sky-200 scrollbar-track-transparent">
//           {stages.map((label, idx) => {
//             const Icon = ICONS[label] || FileCheck;
//             const completed = idx < currentIndex;
//             const active = idx === currentIndex;
//             const when = reachedAt[label];

//             return (
//               <div key={label} className="flex items-center snap-center min-w-[100px] md:min-w-[140px]">
//                 {/* Icon + label stacked vertically */}
//                 <div className="flex flex-col items-center w-20 md:w-auto">
//                   <div
//                     className={`
//                       flex items-center justify-center
//                       h-12 w-12 md:h-16 md:w-16
//                       rounded-full border-2 shadow-lg transition-transform duration-200
//                       ${completed ? 'bg-emerald-600 border-emerald-400 text-white' : ''}
//                       ${active ? 'bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 border-sky-400 text-white scale-110 shadow-sky-200 shadow-lg' : ''}
//                       ${!completed && !active ? 'bg-slate-200 border-slate-300 text-slate-700' : ''}
//                     `}
//                     style={active ? { boxShadow: '0 0 18px #0ea5e9' } : undefined}
//                   >
//                     <Icon size={32} />
//                   </div>
//                   <div className="mt-2 text-center w-full">
//                     <div className="font-semibold text-sm md:text-lg">{label}</div>
//                     <div className="text-[10px] md:text-sm text-slate-500 font-mono">
//                       {when ? when.toLocaleString() : ''}
//                     </div>
//                   </div>
//                 </div>
//                 {/* Connector line to the right */}
//                 {idx < stages.length - 1 && (
//                   <div
//                     className={`hidden md:block flex-grow h-0 border-t-2 ml-2
//                       ${completed ? 'border-emerald-400' : active ? 'border-sky-400' : 'border-slate-300'}
//                     `}
//                   />
//                 )}
//                 {/* Mobile connector as horizontal line side */}
//                 {idx < stages.length - 1 && (
//                   <div
//                     className={`md:hidden flex-grow h-[3px] bg ${
//                       completed ? 'bg-emerald-400' : active ? 'bg-sky-400' : 'bg-slate-300'
//                     } ml-2`}
//                     style={{ marginTop: 24 }}
//                   />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       {/* Highlight current status */}
//       <div className="mt-4 flex justify-center">
//         <span className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-sky-100 via-emerald-100 to-sky-50 shadow">
//           {stages[currentIndex] ? `Current Status: ${stages[currentIndex]}` : ''}
//         </span>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import {
//   CheckCircle2,
//   FileCheck,
//   PackageCheck,
//   PlaneTakeoff,
//   MapPin,
//   Truck,
//   MoveDiagonal,
// } from 'lucide-react';

// const ICONS = {
//   'Order Booked': FileCheck,
//   'Order Picked': PackageCheck,
//   'In Transit': MoveDiagonal,
//   'Order Departed': PlaneTakeoff,
//   'At Destination': MapPin,
//   'Out for Delivery': Truck,
//   'Delivered': CheckCircle2,
// };

// export default function ProgressStepper({ stages, currentIndex, reachedAt }) {
//   return (
//     <div className="w-full max-w-full">
//       <h3 className="text-base md:text-lg font-semibold mb-4">Progress</h3>
//       <div className="relative w-full overflow-x-auto px-2">
//         {/* Icons row */}
//         <div
//           className="flex items-start md:items-center justify-start gap-6 min-w-full pb-8 snap-x scrollbar-thin scrollbar-thumb-sky-300 scrollbar-track-slate-100"
//           role="list"
//         >
//           {stages.map((label, idx) => {
//             const Icon = ICONS[label] || FileCheck;
//             const completed = idx < currentIndex;
//             const active = idx === currentIndex;
//             const when = reachedAt[label];

//             return (
//               <div
//                 key={label}
//                 className="flex flex-col items-center snap-center min-w-[100px] md:min-w-[140px]"
//                 role="listitem"
//               >
//                 <div
//                   className={`
//                     flex items-center justify-center
//                     h-12 w-12 md:h-16 md:w-16
//                     rounded-full border-2 shadow-md transition-transform duration-200
//                     ${completed ? 'bg-emerald-600 border-emerald-400 text-white' : ''}
//                     ${active ? 'bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 border-sky-500 text-white scale-110 shadow-lg' : ''}
//                     ${!completed && !active ? 'bg-slate-200 border-slate-300 text-slate-700' : ''}
//                   `}
//                   style={active ? { boxShadow: '0 0 20px #0ea5e9' } : undefined}
//                 >
//                   <Icon size={32} />
//                 </div>
//                 {/* Label below icon */}
//                 <div className="mt-3 text-center w-full">
//                   <div className="font-semibold text-xs md:text-base leading-tight">
//                     {label}
//                   </div>
//                   <div className="text-[10px] md:text-xs text-slate-500 font-mono whitespace-nowrap">
//                     {when ? when.toLocaleString() : ''}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {/* Connector Line Full width below icons */}
//         <div className="absolute left-2 right-2 bottom-5 h-[6px] flex z-0">
//           {stages.map((_, idx) => {
//             const completed = idx < currentIndex;
//             const active = idx === currentIndex;
//             if (idx === stages.length - 1) return null; // no line after last icon
//             return (
//               <div
//                 key={idx}
//                 className={`flex-grow mx-1 rounded h-full ${
//                   completed ? 'bg-emerald-400' : active ? 'bg-sky-400' : 'bg-slate-300'
//                 }`}
//               />
//             );
//           })}
//         </div>
//       </div>
//       {/* Current status message */}
//       <div className="mt-16 flex justify-center">
//         <span className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-sky-100 via-emerald-100 to-sky-50 shadow-md select-none">
//           {stages[currentIndex] ? `Current Status: ${stages[currentIndex]}` : ''}
//         </span>
//       </div>
//     </div>
//   );
// }


'use client';

import {
  CheckCircle2,
  FileCheck,
  PackageCheck,
  PlaneTakeoff,
  MapPin,
  Truck,
  MoveDiagonal,
} from 'lucide-react';

const ICONS = {
  'Order Booked': FileCheck,
  'Order Picked': PackageCheck,
  'In Transit': MoveDiagonal,
  'Order Departed': PlaneTakeoff,
  'At Destination': MapPin,
  'Out for Delivery': Truck,
  'Delivered': CheckCircle2,
};

export default function ProgressStepper({ stages, currentIndex, reachedAt }) {
  return (
    <div className="w-full max-w-full">
      <h3 className="mb-4 text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-sky-600 via-sky-600 to-sky-800 bg-clip-text text-transparent">Progress</h3>
      <div className="overflow-x-auto px-2">
        <div className="flex min-w-full justify-start gap-6 snap-x scrollbar-thin scrollbar-thumb-sky-300 scrollbar-track-slate-100">
          {stages.map((label, idx) => {
            const Icon = ICONS[label] || FileCheck;
            const completed = idx < currentIndex;
            const active = idx === currentIndex;
            const when = reachedAt[label];

            return (
              <div
                key={label}
                className="flex flex-col items-center snap-center min-w-[100px] md:min-w-[140px]"
              >
                {/* Icon */}
                <div
                  className={`
                    flex items-center justify-center
                    h-12 w-12 md:h-16 md:w-16
                    rounded-full border-2 shadow-md transition-transform duration-200
                    ${completed ? 'bg-emerald-600 border-emerald-400 text-white' : ''}
                    ${active ? 'bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 border-sky-500 text-white scale-110 shadow-lg' : ''}
                    ${!completed && !active ? 'bg-slate-200 border-slate-300 text-slate-700' : ''}
                  `}
                  style={active ? { boxShadow: '0 0 20px #0ea5e9' } : undefined}
                >
                  <Icon size={32} />
                </div>

                {/* Label */}
                <div className="mt-3 text-center w-full">
                  <div className="font-semibold text-sm md:text-lg leading-tight">
                    {label}
                  </div>
                  <div className="text-[10px] md:text-sm text-slate-500 font-mono whitespace-nowrap">
                    {when ? when.toLocaleString() : ''}
                  </div>
                </div>

                {/* Connector line below label, except last event */}
                {idx < stages.length - 1 && (
                  <div
                    className={`w-full h-[4px] rounded mt-4 transition-colors
                      ${completed ? 'bg-emerald-400' : active ? 'bg-sky-400' : 'bg-slate-300'}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Current status label */}
      <div className="mt-8 flex justify-center">
        <span className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-sky-100 via-emerald-100 to-sky-50 shadow-md select-none">
          {stages[currentIndex] ? `Current Status: ${stages[currentIndex]}` : ''}
        </span>
      </div>
    </div>
  );
}
