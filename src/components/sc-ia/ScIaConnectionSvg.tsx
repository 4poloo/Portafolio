import { motion } from "framer-motion";
import type { ScIaFlowKind } from "../../data/scIaArchitecture";

interface ScIaConnectionSvgProps {
  label: string;
  kind: ScIaFlowKind;
  active?: boolean;
  motionEnabled?: boolean;
}

export default function ScIaConnectionSvg({
  label,
  kind,
  active = false,
  motionEnabled = false,
}: ScIaConnectionSvgProps) {
  return (
    <div
      className="scia-connection"
      data-kind={kind}
      data-active={active || undefined}
      aria-label={label}
    >
      <span>{label}</span>
      <svg viewBox="0 0 100 18" aria-hidden="true" focusable="false">
        <path className="scia-connection-line" d="M 12 9 H 86" />
        {kind === "control" && (
          <path className="scia-connection-arrow" d="M 18 4 L 10 9 L 18 14" />
        )}
        <path className="scia-connection-arrow" d="M 80 4 L 88 9 L 80 14" />
        {active && motionEnabled && (
          <motion.circle
            key={label}
            className="scia-connection-pulse"
            cy="9"
            r="3"
            initial={{ cx: 14, opacity: 0 }}
            animate={{ cx: 83, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          />
        )}
      </svg>
    </div>
  );
}
