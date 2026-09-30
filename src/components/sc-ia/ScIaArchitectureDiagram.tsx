import { useReducedMotion } from "framer-motion";
import {
  scIaEdgeById,
  scIaNodeById,
  scIaScenes,
  type ScIaEdgeId,
  type ScIaNodeId,
  type ScIaSceneId,
} from "../../data/scIaArchitecture";
import ScIaConnectionSvg from "./ScIaConnectionSvg";
import ScIaFlowLegend from "./ScIaFlowLegend";
import ScIaNode from "./ScIaNode";
import "../../sc-ia-diagrams.css";

export interface ScIaArchitectureDiagramProps {
  variant?: "compact" | "overview" | "detailed";
  activeScene?: ScIaSceneId | null;
  motionEnabled?: boolean;
  showLegend?: boolean;
  className?: string;
}

const operationalNodes = [
  "camera",
  "capture",
  "inference",
  "rules",
  "detections",
] as const satisfies readonly ScIaNodeId[];

const operationalEdges = ["o1", "o2", "o3", "o4"] as const satisfies readonly ScIaEdgeId[];

function DiagramSequence({
  nodeIds,
  edgeIds,
  activeNodes,
  activeEdges,
  motionEnabled,
  compact = false,
}: {
  nodeIds: readonly ScIaNodeId[];
  edgeIds: readonly ScIaEdgeId[];
  activeNodes: ReadonlySet<ScIaNodeId>;
  activeEdges: ReadonlySet<ScIaEdgeId>;
  motionEnabled: boolean;
  compact?: boolean;
}) {
  return (
    <div className="scia-sequence" data-compact={compact || undefined}>
      {nodeIds.map((nodeId, index) => {
        const edgeId = edgeIds[index];
        const isMuted = activeNodes.size > 0 && !activeNodes.has(nodeId);

        return (
          <div className="scia-sequence-item" key={nodeId}>
            <ScIaNode
              node={scIaNodeById[nodeId]}
              active={activeNodes.has(nodeId)}
              muted={isMuted}
              compact={compact}
            />
            {edgeId && (
              <ScIaConnectionSvg
                label={scIaEdgeById[edgeId].label}
                kind={scIaEdgeById[edgeId].kind}
                active={activeEdges.has(edgeId)}
                motionEnabled={motionEnabled}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function ScIaArchitectureDiagram({
  variant = "overview",
  activeScene = null,
  motionEnabled = false,
  showLegend = true,
  className = "",
}: ScIaArchitectureDiagramProps) {
  const reducedMotion = useReducedMotion();
  const scene = scIaScenes.find((item) => item.id === activeScene);
  const activeNodes = new Set<ScIaNodeId>(scene?.activeNodes ?? []);
  const activeEdges = new Set<ScIaEdgeId>(scene?.activeEdges ?? []);
  const canAnimate = motionEnabled && !reducedMotion;

  if (variant === "compact") {
    const platformNodes = ["ui", "gateway", "sciaapi"] as const satisfies readonly ScIaNodeId[];
    const platformEdges = ["c1", "c2"] as const satisfies readonly ScIaEdgeId[];

    return (
      <figure className={`scia-diagram scia-diagram-compact ${className}`.trim()}>
        <figcaption>
          <span className="mono">INTEGRACIÓN SC ↔ SC-IA</span>
          <span>Control y consulta mediante gateway</span>
        </figcaption>
        <DiagramSequence
          nodeIds={platformNodes}
          edgeIds={platformEdges}
          activeNodes={activeNodes}
          activeEdges={activeEdges}
          motionEnabled={canAnimate}
          compact
        />
        <div className="scia-compact-worker">
          <span className="mono">SERVIDOR SC-IA</span>
          <p>
            El worker lee RTSP directamente y ejecuta OpenCV, YOLO y reglas de
            inspección; el gateway no transporta cada frame de inferencia.
          </p>
        </div>
      </figure>
    );
  }

  if (variant === "detailed") {
    return (
      <figure className={`scia-diagram scia-diagram-detailed ${className}`.trim()}>
        <figcaption>
          <span className="mono">ARQUITECTURA LÓGICA POR CARRILES</span>
          <span>Captura, servicio especializado y plataforma empresarial</span>
        </figcaption>
        <div className="scia-lanes">
          <section className="scia-lane" aria-labelledby="scia-lane-plant">
            <div className="scia-lane-heading">
              <span>01</span>
              <h3 id="scia-lane-plant">Planta y captura</h3>
            </div>
            <ScIaNode node={scIaNodeById.camera} />
            <p className="scia-lane-note">
              <strong>RTSP → worker SC-IA.</strong> La cámara entrega frames al
              servicio especializado, no al backend principal.
            </p>
            <ScIaNode node={scIaNodeById.alarm} />
            <p className="scia-lane-note">
              La alarma es una rama opcional y depende de la configuración.
            </p>
          </section>

          <section className="scia-lane scia-lane-core" aria-labelledby="scia-lane-core">
            <div className="scia-lane-heading">
              <span>02</span>
              <h3 id="scia-lane-core">Servidor SC-IA</h3>
            </div>
            <div className="scia-lane-cluster">
              <span className="mono">WORKER DE INFERENCIA</span>
              {(["capture", "inference", "rules"] as const).map((id) => (
                <ScIaNode node={scIaNodeById[id]} key={id} />
              ))}
            </div>
            <div className="scia-lane-cluster scia-lane-cluster-split">
              <ScIaNode node={scIaNodeById.sciaapi} />
              <ScIaNode node={scIaNodeById.iadb} />
              <ScIaNode node={scIaNodeById.analytics} />
            </div>
          </section>

          <section className="scia-lane" aria-labelledby="scia-lane-platform">
            <div className="scia-lane-heading">
              <span>03</span>
              <h3 id="scia-lane-platform">Plataforma SC</h3>
            </div>
            <ScIaNode node={scIaNodeById.gateway} />
            <ScIaConnectionSvg label="Consulta / respuesta" kind="control" />
            <ScIaNode node={scIaNodeById.ui} />
            <p className="scia-lane-note">El navegador consume contratos del backend principal.</p>
          </section>
        </div>
        {showLegend && <ScIaFlowLegend />}
      </figure>
    );
  }

  return (
    <figure className={`scia-diagram scia-diagram-overview ${className}`.trim()}>
      <figcaption>
        <span className="mono">DE LA CÁMARA A LA DECISIÓN OPERACIONAL</span>
        <span>Diagrama conceptual · no corresponde a un stream real</span>
      </figcaption>
      <DiagramSequence
        nodeIds={operationalNodes}
        edgeIds={operationalEdges}
        activeNodes={activeNodes}
        activeEdges={activeEdges}
        motionEnabled={canAnimate}
      />
      <div className="scia-results-rail">
        <div>
          <span className="mono">RESULTADOS</span>
          <ScIaNode
            node={scIaNodeById.alerts}
            active={activeNodes.has("alerts")}
            muted={activeNodes.size > 0 && !activeNodes.has("alerts")}
            compact
          />
          <ScIaNode
            node={scIaNodeById.iadb}
            active={activeNodes.has("iadb")}
            muted={activeNodes.size > 0 && !activeNodes.has("iadb")}
            compact
          />
        </div>
        <div>
          <span className="mono">INTEGRACIÓN</span>
          {(["sciaapi", "gateway", "ui"] as const).map((id) => (
            <ScIaNode
              node={scIaNodeById[id]}
              active={activeNodes.has(id)}
              muted={activeNodes.size > 0 && !activeNodes.has(id)}
              compact
              key={id}
            />
          ))}
        </div>
      </div>
      {showLegend && <ScIaFlowLegend />}
    </figure>
  );
}
