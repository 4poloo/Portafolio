import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
export default function AboutSection() {
  return (
    <section id="sobre-mi" className="section about-section">
      <Reveal className="about-grid">
        <SectionTitle
          eyebrow="05 / PERFIL"
          title="Perfil profesional"
          description="Ingeniería de software aplicada a procesos, sistemas y operación."
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
          [
            "01",
            "Levantamiento",
            "Procesos, usuarios, restricciones y datos disponibles.",
          ],
          [
            "02",
            "Diseño y desarrollo",
            "Arquitectura, APIs, modelo de datos e implementación.",
          ],
          [
            "03",
            "Operación y mejora",
            "CI/CD, observabilidad, incidentes y evolución continua.",
          ],
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
