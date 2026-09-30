export const scIaNodeIds = [
  "camera",
  "capture",
  "inference",
  "rules",
  "detections",
  "alerts",
  "alarm",
  "iadb",
  "sciaapi",
  "gateway",
  "ui",
  "analytics",
  "review",
  "dataset",
  "training",
  "registry",
] as const;

export type ScIaNodeId = (typeof scIaNodeIds)[number];

export const scIaEdgeIds = [
  "o1",
  "o2",
  "o3",
  "o4",
  "o5",
  "o6",
  "o7",
  "o8",
  "c1",
  "c2",
  "c3",
  "c4",
  "d1",
  "d2",
  "r1",
  "r2",
  "r3",
  "r4",
  "r5",
] as const;

export type ScIaEdgeId = (typeof scIaEdgeIds)[number];
export type ScIaSceneId =
  | "capture"
  | "inference"
  | "validation"
  | "results"
  | "platform";
export type ScIaFlowKind =
  | "operational"
  | "control"
  | "response"
  | "conditional"
  | "data"
  | "feedback"
  | "evolution"
  | "configuration";
export type ScIaNodeGroup =
  | "plant"
  | "ia-worker"
  | "ia-api"
  | "ia-data"
  | "platform"
  | "learning";

export interface ScIaArchitectureNode {
  id: ScIaNodeId;
  title: string;
  subtitle: string;
  group: ScIaNodeGroup;
}

export interface ScIaArchitectureEdge {
  id: ScIaEdgeId;
  from: ScIaNodeId;
  to: ScIaNodeId;
  kind: ScIaFlowKind;
  label: string;
  conditional?: boolean;
}

export interface ScIaFlowScene {
  id: ScIaSceneId;
  title: string;
  description: string;
  activeNodes: readonly ScIaNodeId[];
  activeEdges: readonly ScIaEdgeId[];
  technologies: readonly string[];
}

export const scIaNodes = [
  { id: "camera", title: "Cámaras IP", subtitle: "Fuentes RTSP", group: "plant" },
  {
    id: "capture",
    title: "Captura de imágenes",
    subtitle: "OpenCV · worker",
    group: "ia-worker",
  },
  {
    id: "inference",
    title: "Inferencia visual",
    subtitle: "Modelos YOLO",
    group: "ia-worker",
  },
  {
    id: "rules",
    title: "Reglas de inspección",
    subtitle: "Clases · umbrales · ventana",
    group: "ia-worker",
  },
  {
    id: "detections",
    title: "Detecciones y evidencia",
    subtitle: "Registros e imágenes",
    group: "ia-data",
  },
  {
    id: "alerts",
    title: "Anomalías y alertas",
    subtitle: "Eventos confirmados",
    group: "ia-data",
  },
  {
    id: "alarm",
    title: "Alarma configurada",
    subtitle: "Actuación condicional",
    group: "plant",
  },
  {
    id: "iadb",
    title: "Datos de SC-IA",
    subtitle: "MongoDB independiente",
    group: "ia-data",
  },
  {
    id: "sciaapi",
    title: "API SC-IA",
    subtitle: "FastAPI especializada",
    group: "ia-api",
  },
  {
    id: "gateway",
    title: "Backend Plataforma SC",
    subtitle: "Gateway FastAPI",
    group: "platform",
  },
  {
    id: "ui",
    title: "Plataforma SC · IA Lab",
    subtitle: "React · TypeScript",
    group: "platform",
  },
  {
    id: "analytics",
    title: "Analítica histórica",
    subtitle: "OT · línea · período",
    group: "ia-api",
  },
  {
    id: "review",
    title: "Revisión humana",
    subtitle: "Validación y corrección",
    group: "learning",
  },
  {
    id: "dataset",
    title: "Preparación de dataset",
    subtitle: "Selección y exportación",
    group: "learning",
  },
  {
    id: "training",
    title: "Entrenamiento gestionado",
    subtitle: "Trabajos y métricas",
    group: "learning",
  },
  {
    id: "registry",
    title: "Registro y asignación",
    subtitle: "Modelo validado",
    group: "learning",
  },
] as const satisfies readonly ScIaArchitectureNode[];

export const scIaEdges = [
  { id: "o1", from: "camera", to: "capture", kind: "operational", label: "RTSP" },
  { id: "o2", from: "capture", to: "inference", kind: "operational", label: "Frames" },
  {
    id: "o3",
    from: "inference",
    to: "rules",
    kind: "operational",
    label: "Clases + confianza",
  },
  {
    id: "o4",
    from: "rules",
    to: "detections",
    kind: "operational",
    label: "Evidencia",
  },
  {
    id: "o5",
    from: "rules",
    to: "alerts",
    kind: "conditional",
    label: "Anomalía confirmada",
    conditional: true,
  },
  {
    id: "o6",
    from: "rules",
    to: "alarm",
    kind: "conditional",
    label: "Según configuración",
    conditional: true,
  },
  { id: "o7", from: "detections", to: "iadb", kind: "data", label: "Registros" },
  { id: "o8", from: "alerts", to: "iadb", kind: "data", label: "Historial" },
  { id: "c1", from: "ui", to: "gateway", kind: "control", label: "Consulta / comandos" },
  { id: "c2", from: "gateway", to: "sciaapi", kind: "control", label: "API interna / proxy" },
  { id: "c3", from: "sciaapi", to: "gateway", kind: "response", label: "Resultados / MJPEG" },
  { id: "c4", from: "gateway", to: "ui", kind: "response", label: "Visualización" },
  { id: "d1", from: "iadb", to: "analytics", kind: "data", label: "Datos registrados" },
  { id: "d2", from: "analytics", to: "sciaapi", kind: "data", label: "Endpoints" },
  { id: "r1", from: "iadb", to: "review", kind: "feedback", label: "Candidatos" },
  { id: "r2", from: "review", to: "dataset", kind: "feedback", label: "Selección / corrección" },
  { id: "r3", from: "dataset", to: "training", kind: "evolution", label: "Entrenamiento solicitado" },
  { id: "r4", from: "training", to: "registry", kind: "evolution", label: "Modelo validado" },
  { id: "r5", from: "registry", to: "inference", kind: "configuration", label: "Próximas sesiones" },
] as const satisfies readonly ScIaArchitectureEdge[];

export const scIaScenes = [
  {
    id: "capture",
    title: "Captura",
    description: "SC-IA obtiene frames desde cámaras IP mediante RTSP.",
    activeNodes: ["camera", "capture"],
    activeEdges: ["o1"],
    technologies: ["Cámaras IP", "RTSP", "OpenCV"],
  },
  {
    id: "inference",
    title: "Inferencia",
    description:
      "El modelo asignado analiza las imágenes e identifica las clases configuradas.",
    activeNodes: ["capture", "inference"],
    activeEdges: ["o2"],
    technologies: ["Ultralytics YOLO", "OpenCV", "Python"],
  },
  {
    id: "validation",
    title: "Reglas",
    description:
      "Los resultados pasan por filtros y reglas para confirmar condiciones de inspección.",
    activeNodes: ["inference", "rules"],
    activeEdges: ["o3"],
    technologies: ["Confianza", "IoU", "Ventana temporal"],
  },
  {
    id: "results",
    title: "Resultados",
    description:
      "Se generan registros y evidencia; las anomalías pueden emitir alertas y controlar alarmas configuradas.",
    activeNodes: ["rules", "detections", "alerts", "alarm", "iadb"],
    activeEdges: ["o4", "o5", "o6", "o7", "o8"],
    technologies: ["MongoDB", "Evidencia", "Alertas configurables"],
  },
  {
    id: "platform",
    title: "Integración",
    description:
      "Plataforma SC permite supervisar la inspección y consultar resultados por línea y orden de trabajo.",
    activeNodes: ["sciaapi", "gateway", "ui", "analytics"],
    activeEdges: ["c1", "c2", "c3", "c4", "d2"],
    technologies: ["FastAPI", "Gateway", "React", "MJPEG"],
  },
] as const satisfies readonly ScIaFlowScene[];

export const scIaNodeById = Object.fromEntries(
  scIaNodes.map((node) => [node.id, node]),
) as Record<ScIaNodeId, ScIaArchitectureNode>;

export const scIaEdgeById = Object.fromEntries(
  scIaEdges.map((edge) => [edge.id, edge]),
) as Record<ScIaEdgeId, ScIaArchitectureEdge>;
