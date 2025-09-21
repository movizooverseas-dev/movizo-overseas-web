// import * as React from "react";
// import { cn } from "@/lib/utils";

// const variants = {
//   default: "bg-indigo-600 text-white hover:bg-indigo-500",
//   outline: "border border-white/15 bg-transparent text-white hover:bg-white/10",
//   ghost: "text-white hover:bg-white/10",
// };

// export const Button = React.forwardRef(function Button(
//   { className, variant = "default", ...props },
//   ref
// ) {
//   return (
//     <button
//       ref={ref}
//       className={cn(
//         "inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-50",
//         variants[variant],
//         className
//       )}
//       {...props}
//     />
//   );
// });

// components/ui/button.jsx
import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-sky-600 text-white hover:bg-sky-500",
  outline: "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export const Button = React.forwardRef(function Button(
  { className, variant = "default", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
