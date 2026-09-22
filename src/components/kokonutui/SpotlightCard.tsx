/** Adapted from Kokonut UI Spotlight Cards by dorianbaffier (MIT).
 * https://kokonutui.com/docs/cards/spotlight-cards
 * Reduced tilt, no sibling dimming, existing Framer Motion, accessible touch/motion defaults.
 */
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}
export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rx = useTransform(y, [0, 1], [2, -2]);
  const ry = useTransform(x, [0, 1], [-2, 2]);
  const rotateX = useSpring(rx, { stiffness: 300, damping: 28 });
  const rotateY = useSpring(ry, { stiffness: 300, damping: 28 });
  function move(event: PointerEvent<HTMLElement>) {
    if (
      reduced ||
      event.pointerType !== "mouse" ||
      !matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }
  return (
    <motion.article
      className={`spotlight-card ${className}`}
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
      style={
        reduced ? undefined : { rotateX, rotateY, transformPerspective: 900 }
      }
    >
      <div className="spotlight-glow" aria-hidden="true" />
      <div className="spotlight-content">{children}</div>
    </motion.article>
  );
}
