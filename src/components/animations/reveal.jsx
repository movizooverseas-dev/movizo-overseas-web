// // components/animations/reveal.jsx
// "use client";

// import { motion } from "framer-motion";

// export function Reveal({ children, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 28 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.7, ease: "easeOut", delay }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// components/animations/reveal.jsx
"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

