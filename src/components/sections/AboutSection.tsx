import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
export default function AboutSection() {
  return (
    <section id="sobre-mi" className="section about-section">
      <Reveal className="about-grid">
        <SectionTitle
          eyebrow="01 / SOBRE MÍ"
          title="Entender el negocio. Construir la solución."
        />
        <div className="about-copy">
          <p>
            Soy egresado de Ingeniería Civil en Computación de la UTEM. Trabajo
            en la intersección entre{" "}
            <strong>
              desarrollo de software, arquitectura cloud y operaciones reales.
            </strong>
          </p>
          <p>
            En SurChile lidero la evolución tecnológica y sigo programando:
            desde la integración Softland ↔ INVAS sobre AWS hasta Plataforma SC,
            una aplicación que conecta producción, bodega y planificación.
          </p>
          <p>
            Mi trabajo continúa después del despliegue: CI/CD, métricas en
            CloudWatch, diagnóstico de incidentes y mejora de la integridad de
            los datos. Tomo decisiones junto a gerencia y usuarios, con foco en
            impacto y continuidad operacional.
          </p>
        </div>
      </Reveal>
      <Reveal className="process-row">
        {[
          ["01", "Entender", "Procesos, usuarios y restricciones."],
          ["02", "Diseñar y construir", "Arquitectura, APIs y producto."],
          ["03", "Operar y mejorar", "CI/CD, observabilidad y evolución."],
        ].map(([n, title, text]) => (
          <div key={n}>
            <span className="mono accent">{n}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
