import { FiActivity, FiClock, FiTrendingUp, FiLayers } from "react-icons/fi";
import SpotlightCard from "../kokonutui/SpotlightCard";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
export default function ImpactSection() {
  return (
    <section id="impacto" className="section">
      <SectionTitle
        eyebrow="01 / IMPACTO"
        title="Impacto en la operación"
        description="Resultados obtenidos mediante automatización, desarrollo interno e integración de sistemas productivos."
      />
      <Reveal className="impact-grid">
        <SpotlightCard>
          <FiTrendingUp className="card-icon" aria-hidden="true" />
          <p className="metric">
            &gt; $25 MM<span>CLP / AÑO</span>
          </p>
          <h3>Ahorro operacional anual</h3>
          <p>
            Reemplazo de software externo por una solución interna desarrollada
            a medida.
          </p>
        </SpotlightCard>
        <SpotlightCard>
          <FiClock className="card-icon" aria-hidden="true" />
          <p className="metric">
            2 h <span className="metric-arrow">→</span> min
            <span>TIEMPO OPERATIVO</span>
          </p>
          <h3>Automatización de procesos</h3>
          <p>
            Procesos de cerca de dos horas diarias, reducidos a minutos con
            automatización.
          </p>
        </SpotlightCard>
        <SpotlightCard>
          <FiActivity className="card-icon" aria-hidden="true" />
          <p className="metric">
            E2E<span>OBSERVABILIDAD</span>
          </p>
          <h3>Observabilidad de integraciones</h3>
          <p>
            Latencia, éxito, fallos y reintentos para diagnosticar incidentes y
            recuperar el flujo.
          </p>
        </SpotlightCard>
        <SpotlightCard>
          <FiLayers className="card-icon" aria-hidden="true" />
          <p className="metric">
            ERP ↔ WMS<span>INTEGRACIÓN PRODUCTIVA</span>
          </p>
          <h3>Integración ERP ↔ WMS</h3>
          <p>
            Intercambio bidireccional de documentos entre Softland e INVAS, con
            transformación, validaciones y trazabilidad operacional.
          </p>
        </SpotlightCard>
      </Reveal>
      <p className="section-footnote">
        Resultados de mi trabajo en SurChile · Experiencia e impactos
        documentados en el CV 2026.
      </p>
    </section>
  );
}
