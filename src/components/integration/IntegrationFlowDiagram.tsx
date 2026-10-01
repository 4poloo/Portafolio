import { motion, useReducedMotion } from "framer-motion";
import type { FocusEvent, MouseEvent } from "react";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  FiActivity,
  FiCloud,
  FiCode,
  FiDatabase,
  FiGitMerge,
  FiLayers,
  FiServer,
} from "react-icons/fi";
import "../../bento-integration.css";

type LaneId = "forward" | "return";

interface FlowNode {
  id: string;
  label: string;
  detail: string;
  icon: IconType;
}

interface IntegrationFlowDiagramProps {
  variant?: "compact" | "full";
  animated?: boolean;
}

const forwardNodes: FlowNode[] = [
  { id: "softland-out", label: "Softland ERP", detail: "Documento XML", icon: FiDatabase },
  { id: "s3-in", label: "S3", detail: "Objeto / evento", icon: FiCloud },
  { id: "lambda-s3", label: "Lambda S3", detail: "Validación · XML → JSON", icon: FiCode },
  { id: "invas-in", label: "INVAS WMS", detail: "Recepción JSON", icon: FiServer },
];

const returnNodes: FlowNode[] = [
  { id: "invas-out", label: "INVAS WMS", detail: "Evento JSON", icon: FiServer },
  { id: "api", label: "API Gateway", detail: "Recepción HTTP", icon: FiCloud },
  { id: "lambda-app", label: "Lambda App", detail: "Validación", icon: FiCode },
  { id: "sns", label: "SNS", detail: "Distribución", icon: FiGitMerge },
  { id: "handler", label: "Handler", detail: "JSON → XML", icon: FiCode },
  { id: "s3-out", label: "S3 / archivos", detail: "Intercambio", icon: FiCloud },
  { id: "softland-in", label: "Softland ERP", detail: "Procesamiento", icon: FiDatabase },
];

function FlowLane({ id, label, nodes, active, setActive }: {
  id: LaneId;
  label: string;
  nodes: FlowNode[];
  active: { lane: LaneId; index: number } | null;
  setActive: (value: { lane: LaneId; index: number } | null) => void;
}) {
  const clearFocus = (event: FocusEvent<HTMLOListElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActive(null);
  };
  const clearHover = (event: MouseEvent<HTMLOListElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setActive(null);
  };

  return (
    <section className="integration-lane" aria-label={label}>
      <div className="integration-lane-heading">
        <span>{id === "forward" ? "01" : "02"}</span>
        <strong>{label}</strong>
      </div>
      <ol className="integration-lane-track" onBlur={clearFocus} onMouseLeave={clearHover}>
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = active?.lane === id && active.index === index;
          const connectorActive = active?.lane === id && (active.index === index || active.index === index - 1);
          return (
            <li className="integration-step" key={node.id}>
              {index > 0 && (
                <span className="integration-connector" data-active={connectorActive || undefined} aria-hidden="true" />
              )}
              <div
                className="integration-node"
                data-active={isActive || undefined}
                tabIndex={0}
                onFocus={() => setActive({ lane: id, index })}
                onMouseEnter={() => setActive({ lane: id, index })}
              >
                <Icon aria-hidden="true" />
                <span>
                  <strong>{node.label}</strong>
                  <small>{node.detail}</small>
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default function IntegrationFlowDiagram({ variant = "full", animated = true }: IntegrationFlowDiagramProps) {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState<{ lane: LaneId; index: number } | null>(null);
  const shouldAnimate = animated && !reducedMotion;

  return (
    <motion.figure
      className={`integration-flow integration-flow--${variant}`}
      initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      aria-label="Flujo bidireccional entre Softland ERP e INVAS WMS"
    >
      <figcaption>
        <span>INTEGRACIÓN BIDIRECCIONAL</span>
        <small>Eventos, transformación y trazabilidad</small>
      </figcaption>
      <div className="integration-lanes">
        <FlowLane id="forward" label="Softland → INVAS" nodes={forwardNodes} active={active} setActive={setActive} />
        <FlowLane id="return" label="INVAS → Softland" nodes={returnNodes} active={active} setActive={setActive} />
      </div>
      <div className="integration-controls" aria-label="Controles transversales del flujo">
        <div>
          <FiDatabase aria-hidden="true" />
          <span><strong>DynamoDB</strong><small>Idempotencia y correlación E2E</small></span>
        </div>
        {variant === "full" && (
          <div className="integration-control-evolution">
            <FiLayers aria-hidden="true" />
            <span><strong>Persistencia de confirmaciones / correlación E2E</strong><small>En validación / evolución</small></span>
          </div>
        )}
        <div>
          <FiActivity aria-hidden="true" />
          <span><strong>CloudWatch</strong><small>Logs, métricas y trazabilidad</small></span>
        </div>
      </div>
    </motion.figure>
  );
}
