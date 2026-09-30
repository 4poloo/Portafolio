import {
  FiActivity,
  FiCpu,
  FiDatabase,
  FiEye,
  FiLayers,
  FiServer,
  FiSliders,
  FiUserCheck,
  FiVideo,
} from "react-icons/fi";
import type { ScIaArchitectureNode, ScIaNodeGroup } from "../../data/scIaArchitecture";

const groupIcons = {
  plant: FiVideo,
  "ia-worker": FiCpu,
  "ia-api": FiServer,
  "ia-data": FiDatabase,
  platform: FiLayers,
  learning: FiUserCheck,
} as const satisfies Record<ScIaNodeGroup, typeof FiActivity>;

const nodeIcons = {
  inference: FiEye,
  rules: FiSliders,
  analytics: FiActivity,
} as const;

interface ScIaNodeProps {
  node: ScIaArchitectureNode;
  active?: boolean;
  muted?: boolean;
  compact?: boolean;
}

export default function ScIaNode({
  node,
  active = false,
  muted = false,
  compact = false,
}: ScIaNodeProps) {
  const Icon = node.id in nodeIcons
    ? nodeIcons[node.id as keyof typeof nodeIcons]
    : groupIcons[node.group];

  return (
    <div
      className="scia-node"
      data-active={active || undefined}
      data-muted={muted || undefined}
      data-compact={compact || undefined}
    >
      <Icon aria-hidden="true" />
      <span>
        <strong>{node.title}</strong>
        <small>{node.subtitle}</small>
      </span>
    </div>
  );
}
