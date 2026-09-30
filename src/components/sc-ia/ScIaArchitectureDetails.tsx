import { scIaEdges, scIaNodeById } from "../../data/scIaArchitecture";
import ScIaArchitectureDiagram from "./ScIaArchitectureDiagram";

const learningSteps = [
  ["01", "Historial", "Detecciones y candidatos registrados"],
  ["02", "Revisión humana", "Validación, selección y correcciones"],
  ["03", "Dataset", "Exportación de material supervisado"],
  ["04", "Entrenamiento", "Trabajo gestionado y métricas"],
  ["05", "Asignación", "Modelo validado para sesiones futuras"],
] as const;

export default function ScIaArchitectureDetails() {
  return (
    <div className="scia-architecture-details">
      <ScIaArchitectureDiagram variant="detailed" showLegend />

      <details className="scia-details-disclosure">
        <summary>Mostrar conexiones y ciclo supervisado de modelos</summary>
        <div className="scia-details-content">
          <div>
            <h3>Conexiones verificadas</h3>
            <div className="scia-connection-table" role="table" aria-label="Conexiones lógicas SC-IA">
              {scIaEdges.map((edge) => (
                <div role="row" key={edge.id}>
                  <span role="cell" className="mono">{edge.id.toUpperCase()}</span>
                  <span role="cell">
                    {scIaNodeById[edge.from].title} → {scIaNodeById[edge.to].title}
                  </span>
                  <span role="cell">{edge.label}</span>
                  <span role="cell">{"conditional" in edge && edge.conditional ? "Condicional" : edge.kind}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>Mejora supervisada</h3>
            <div className="scia-learning-path">
              {learningSteps.map(([number, title, description]) => (
                <article key={title}>
                  <span className="mono">{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="scia-learning-note">
              Este recorrido requiere revisión y validación. No representa
              aprendizaje autónomo continuo durante la operación.
            </p>
          </div>
        </div>
      </details>
    </div>
  );
}
