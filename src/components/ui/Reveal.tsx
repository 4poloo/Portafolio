import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, transform: "translateY(12px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
