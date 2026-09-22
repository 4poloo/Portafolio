import { useState } from "react";
import { FiMaximize2 } from "react-icons/fi";
import CaseStudy from "../components/ui/CaseStudy";
import ArchitectureDiagram from "../components/ui/ArchitectureDiagram";
import ImagePreview from "../components/ui/ImagePreview";
import Reveal from "../components/ui/Reveal";
const modules = [
  [
    "Planificación",
    "Calendario de órdenes de compra y notas de venta; planificación productiva, reprogramación y horas extra.",
  ],
  [
    "Producción",
    "Gestión y cierre de órdenes de trabajo, lógica de SETUP y seguimiento productivo.",
  ],
  [
    "Bodega",
    "Recepciones, devoluciones de materia prima y consulta de información operacional de INVAS.",
  ],
  [
    "Gestión",
    "Dashboards de producción y KPI, herramientas de consulta y ticketing TI.",
  ],
];
export default function PlataformaSCProjectPage() {
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(
    null,
  );
  return (
    <CaseStudy
      number="01"
      title="Plataforma SC"
      intro="De planillas y sistemas aislados a una plataforma operacional que conecta a las personas con la información que necesitan."
      tags={[
        "Full Stack",
        "React",
        "TypeScript",
        "FastAPI",
        "MongoDB",
        "Docker",
      ]}
      next={{
        href: "/proyectos/integracion-wms-erp",
        title: "Softland ↔ INVAS",
      }}
    >
      <Reveal className="case-overview">
        <div>
          <p className="eyebrow">EL CONTEXTO</p>
          <h2>Una operación, múltiples fuentes de información.</h2>
          <p>
            Producción, planificación y bodega dependían de planillas,
            digitación manual y consultas a sistemas diferentes. El desafío fue
            crear una interfaz común para resolver procesos específicos de
            planta e integrar información de Softland e INVAS.
          </p>
        </div>
        <aside className="case-result">
          <span className="mono">RESULTADO OPERACIONAL</span>
          <strong>2 horas → minutos</strong>
          <p>
            Digitalización y automatización de procesos que antes requerían
            cerca de dos horas de trabajo manual diario.
          </p>
        </aside>
      </Reveal>
      <section className="case-section">
        <p className="eyebrow">ARQUITECTURA</p>
        <h2>Una base modular, conectada a la operación.</h2>
        <div className="case-two-col">
          <ArchitectureDiagram platform />
          <div>
            <h3>Frontend y backend con responsabilidades claras</h3>
            <p>
              React, TypeScript y Vite ofrecen interfaces específicas para cada
              área. FastAPI concentra reglas de negocio, acceso a MongoDB e
              integración con servicios AWS e INVAS mediante APIs REST.
            </p>
            <p>
              Docker y Nginx permiten operar sobre Ubuntu. La conectividad
              cloud/on-premise se apoya en WireGuard, con separación de
              ambientes QA y PROD.
            </p>
            <div className="tags">
              {[
                "Vite",
                "Tailwind CSS",
                "Python",
                "Nginx",
                "Ubuntu",
                "WireGuard",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="case-section">
        <p className="eyebrow">MÓDULOS</p>
        <h2>Interfaces alrededor de procesos reales.</h2>
        <div className="case-feature-grid">
          {modules.map(([title, text], i) => (
            <article key={title}>
              <span className="mono accent">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="case-section">
        <p className="eyebrow">EL PRODUCTO</p>
        <h2>Un vistazo a la plataforma.</h2>
        <p>
          Capturas de referencia de la versión 2025. Ilustran el acceso y la
          navegación modular; el producto ha seguido evolucionando.
        </p>
        <div className="gallery-grid">
          {[
            {
              src: "/images/plataforma-inicio.webp",
              title: "Inicio y navegación modular · Referencia 2025",
            },
            {
              src: "/images/plataforma-acceso.webp",
              title: "Acceso a la plataforma · Referencia 2025",
            },
          ].map((item) => (
            <figure key={item.src}>
              <button
                type="button"
                onClick={() => setPreview(item)}
                aria-label={`Ampliar ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  width="1200"
                  height="640"
                  loading="lazy"
                />
                <span>
                  <FiMaximize2 aria-hidden="true" /> Ampliar
                </span>
              </button>
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="case-section">
        <p className="eyebrow">ENTREGA & CALIDAD</p>
        <h2>Desarrollar también es mantener.</h2>
        <div className="pipeline" aria-label="Flujo de entrega">
          {[
            "GitHub",
            "GitHub Actions",
            "Build / validación",
            "QA",
            "Producción",
          ].map((x, i) => (
            <span key={x}>
              {i > 0 && <b aria-hidden="true">→</b>}
              {x}
            </span>
          ))}
        </div>
        <div className="case-two-col">
          <div>
            <h3>Mi rol</h3>
            <p>
              Levantamiento funcional con usuarios, diseño de arquitectura,
              desarrollo frontend y backend, integraciones y operación.
              Priorización del roadmap junto a gerencia y soporte a incidentes
              productivos.
            </p>
          </div>
          <div>
            <h3>Evolución y mantenibilidad</h3>
            <p>
              Pipelines para backend y frontend, despliegues controlados y
              análisis con SonarQube para priorizar deuda técnica. Los conteos
              cíclicos y el ETL de configuración de etiquetas son líneas de
              evolución, no funcionalidades presentadas como terminadas.
            </p>
          </div>
        </div>
      </section>
      {preview && (
        <ImagePreview {...preview} onClose={() => setPreview(null)} />
      )}
    </CaseStudy>
  );
}
