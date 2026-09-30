/**
 * Adapted from Kokonut UI Shimmer Text by Dorian Baffier (MIT).
 * https://kokonutui.com/docs/texts/shimmer-text
 * Uses the portfolio's amber palette and respects reduced-motion preferences.
 */
import { motion, useReducedMotion } from "framer-motion";
import "../../platform-ops.css";

interface ShimmerTextProps {
  text: string;
  className?: string;
}

export default function ShimmerText({
  text,
  className = "",
}: ShimmerTextProps) {
  const reduceMotion = useReducedMotion();
  const classes = [
    "shimmer-text",
    reduceMotion ? "shimmer-text-static" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.span
      className={classes}
      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
      animate={
        reduceMotion
          ? { opacity: 1, y: 0 }
          : {
              opacity: 1,
              y: 0,
              backgroundPosition: ["200% center", "-200% center"],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 0.5 },
              y: { duration: 0.5 },
              backgroundPosition: {
                duration: 2.5,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              },
            }
      }
    >
      {text}
    </motion.span>
  );
}
