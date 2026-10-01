/** Adapted from Kokonut UI Spotlight Cards by dorianbaffier (MIT).
 * https://kokonutui.com/docs/cards/spotlight-cards
 * Project cards use the full glow, spring tilt, shimmer and sibling focus effect.
 */
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { FocusEvent, PointerEvent, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  variant?: "subtle" | "feature";
  accentColor?: string;
  dimmed?: boolean;
  onActiveChange?: (active: boolean) => void;
}

export default function SpotlightCard({
  children,
  className = "",
  variant = "subtle",
  accentColor = "#e8b56b",
  dimmed = false,
  onActiveChange,
}: SpotlightCardProps) {
  const reduced = useReducedMotion();
  const tiltMax = variant === "feature" ? 7 : 2;
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rx = useTransform(y, [0, 1], [tiltMax, -tiltMax]);
  const ry = useTransform(x, [0, 1], [-tiltMax, tiltMax]);
  const rotateX = useSpring(rx, { stiffness: 300, damping: 28 });
  const rotateY = useSpring(ry, { stiffness: 300, damping: 28 });

  const supportsHover = (pointerType?: string) =>
    !reduced &&
    pointerType !== "touch" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function move(event: PointerEvent<HTMLElement>) {
    if (!supportsHover(event.pointerType)) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  function deactivate() {
    x.set(0.5);
    y.set(0.5);
    onActiveChange?.(false);
  }

  function blur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      deactivate();
    }
  }

  return (
    <motion.article
      className={`spotlight-card ${className}`}
      data-spotlight={variant}
      animate={
        variant === "feature"
          ? { opacity: dimmed ? 0.52 : 1, scale: dimmed ? 0.97 : 1 }
          : undefined
      }
      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
      onFocus={() => onActiveChange?.(true)}
      onBlur={blur}
      onPointerEnter={(event) => {
        if (supportsHover(event.pointerType)) onActiveChange?.(true);
      }}
      onPointerMove={move}
      onPointerLeave={deactivate}
      style={
        reduced ? undefined : { rotateX, rotateY, transformPerspective: 900 }
      }
    >
      {variant === "feature" && (
        <div
          className="spotlight-tint"
          aria-hidden="true"
          style={{
            background: `radial-gradient(ellipse at 20% 20%, color-mix(in srgb, ${accentColor} 10%, transparent), transparent 65%)`,
          }}
        />
      )}
      <div
        className="spotlight-glow"
        aria-hidden="true"
        style={
          variant === "feature"
            ? {
                background: `radial-gradient(ellipse at 20% 20%, color-mix(in srgb, ${accentColor} 22%, transparent), transparent 65%)`,
              }
            : undefined
        }
      />
      {variant === "feature" && (
        <div className="spotlight-shimmer" aria-hidden="true" />
      )}
      <div className="spotlight-content">{children}</div>
      {variant === "feature" && (
        <div
          className="spotlight-accent-line"
          aria-hidden="true"
          style={{
            background: `linear-gradient(90deg, color-mix(in srgb, ${accentColor} 65%, transparent), transparent)`,
          }}
        />
      )}
    </motion.article>
  );
}
