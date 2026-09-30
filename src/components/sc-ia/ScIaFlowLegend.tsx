const items = [
  ["operational", "Inspección"],
  ["control", "Peticiones / consulta"],
  ["response", "Respuesta"],
  ["conditional", "Condicional"],
  ["feedback", "Revisión / entrenamiento"],
] as const;

export default function ScIaFlowLegend() {
  return (
    <div className="scia-legend" aria-label="Leyenda del diagrama">
      {items.map(([kind, label]) => (
        <span key={kind} data-kind={kind}>
          <i aria-hidden="true" /> {label}
        </span>
      ))}
    </div>
  );
}
