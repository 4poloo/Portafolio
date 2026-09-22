import type { ReactNode } from "react";

interface TechBadgeProps {
  icon?: ReactNode;
  label: string;
  className?: string;
}

function TechBadge({ icon, label, className }: TechBadgeProps) {
  return (
    <span
      className={`group inline-flex items-center gap-1 rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-200 bg-neutral-900/70 transition-all duration-200 hover:-translate-y-0.5 ${className ?? ""}`}
    >
      {icon && <span className="text-lg transition-colors">{icon}</span>}
      <span className="transition-colors">{label}</span>
    </span>
  );
}

export default TechBadge;
