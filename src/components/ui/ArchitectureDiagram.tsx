import {
  FiArrowRight,
  FiCloud,
  FiDatabase,
  FiLayers,
  FiActivity,
} from "react-icons/fi";
export default function ArchitectureDiagram({
  platform = false,
}: {
  platform?: boolean;
}) {
  return (
    <div
      className={`architecture ${platform ? "architecture-platform" : ""}`}
      role="img"
      aria-label={
        platform
          ? "Usuarios acceden a React, que se comunica con FastAPI. FastAPI usa MongoDB y conecta servicios AWS e INVAS."
          : "Softland ERP y AWS intercambian documentos con INVAS WMS. CloudWatch observa el procesamiento; DynamoDB añade correlación en validación."
      }
    >
      <div className="diagram-caption mono">
        {platform ? "ARQUITECTURA DE PLATAFORMA" : "INTEGRACIÓN BIDIRECCIONAL"}
        <span className="status-dot" />
      </div>
      <div className="diagram-flow">
        <div className="diagram-node">
          <FiDatabase />
          <strong>{platform ? "React" : "Softland"}</strong>
          <span>{platform ? "Interfaz de usuarios" : "ERP · XML"}</span>
        </div>
        <span className="diagram-arrow" aria-hidden="true">
          {platform ? "→" : "↔"}
        </span>
        <div className="diagram-node diagram-cloud">
          <FiCloud />
          <strong>{platform ? "FastAPI" : "AWS"}</strong>
          <span>{platform ? "Lógica de negocio" : "Capa de integración"}</span>
        </div>
        <span className="diagram-arrow" aria-hidden="true">
          {platform ? "→" : "↔"}
        </span>
        <div className="diagram-node">
          <FiLayers />
          <strong>{platform ? "Servicios" : "INVAS"}</strong>
          <span>{platform ? "AWS · INVAS" : "WMS · JSON"}</span>
        </div>
      </div>
      <div className="diagram-services">
        {(platform
          ? ["Python", "MongoDB", "REST APIs"]
          : ["API Gateway", "Lambda", "SNS", "S3"]
        ).map((x) => (
          <span key={x}>{x}</span>
        ))}
      </div>
      <div className="diagram-observability">
        <FiActivity aria-hidden="true" />
        {platform
          ? "Docker · Nginx · GitHub Actions"
          : "CloudWatch · Métricas y trazabilidad"}
        <FiArrowRight aria-hidden="true" />
      </div>
      {!platform && (
        <p className="diagram-note">
          DynamoDB · Persistencia y correlación en validación
        </p>
      )}
    </div>
  );
}
