import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import ShimmerText from "../components/kokonutui/ShimmerText";
import ScIaArchitectureDiagram from "../components/sc-ia/ScIaArchitectureDiagram";
import ArchitectureDiagram from "../components/ui/ArchitectureDiagram";
import CaseStudy from "../components/ui/CaseStudy";
import ImagePreview from "../components/ui/ImagePreview";
import PlatformGallery from "../components/ui/PlatformGallery";
import Reveal from "../components/ui/Reveal";

const modules = [
  [
    "Planificación y despachos",
    "Calendarios operacionales, planificación de órdenes y herramientas para coordinar producción y despacho.",
  ],
  [
    "Producción y elaboración",
    "Gestión de órdenes de trabajo, seguimiento productivo, recetas y apoyo a procesos de elaboración.",
  ],
  [
    "Bodega y trazabilidad",
    "Recepciones, devoluciones, auditoría y consulta de datos operacionales vinculados al WMS.",
  ],
  [
    "Calidad e impresión",
    "Herramientas de calidad, administración de productos y flujos de etiquetado e impresión.",
  ],
  [
    "Gestión y observabilidad",
    "Indicadores operacionales, informes, notificaciones y seguimiento de integraciones.",
  ],
  [
    "Operaciones TI e IA",
    "Gestión de solicitudes e integración con el servicio especializado de inspección visual SC-IA.",
  ],
] as const;

const technologyLayers = [
  ["Aplicación web", "React · TypeScript · Vite · Tailwind CSS · React Router"],
  ["Backend / APIs", "Python · FastAPI · Pydantic · REST / OpenAPI"],
  ["Datos", "MongoDB · Motor / PyMongo"],
  ["Integraciones", "AWS S3 · servicios AWS · INVAS · Softland"],
  ["DevOps", "Docker · GitHub Actions · Nginx · Ubuntu · WireGuard"],
  ["Servicio especializado", "SC-IA · API independiente de visión artificial"],
] as const;

export default function PlataformaSCProjectPage() {
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);

  return (
    <CaseStudy
      number="01"
      title="Plataforma SC"
      descriptor="Gestión operacional e integración industrial"
      intro="Diseño y desarrollo de una plataforma operacional Full Stack para centralizar procesos de producción, planificación, bodega y gestión interna. La solución incorpora módulos especializados, integración con sistemas empresariales y una arquitectura que permite conectar servicios independientes, incluido un subsistema de visión artificial para inspección industrial."
      tags={["React", "TypeScript", "FastAPI", "MongoDB", "Docker", "AWS"]}
      next={{ href: "/proyectos/sc-ia", title: "SC-IA" }}
      headerAction={
        <a
          className="case-demo-link"
          href="https://plataforma-di1mrfduz-maxolaves-projects.vercel.app/app"
          target="_blank"
          rel="noreferrer"
        >
          <span className="case-demo-copy">
            <span className="mono">
              <span className="demo-live-dot" aria-hidden="true" /> DEMO EN LÍNEA
            </span>
            <ShimmerText text="Visitar Plataforma Ops" />
          </span>
          <FiArrowUpRight aria-hidden="true" />
        </a>
      }
    >
      <Reveal className="case-section">
        <div>
          <p className="eyebrow">CONTEXTO Y PROBLEMA</p>
          <h2>Centralizar procesos dispersos y reducir tareas manuales</h2>
          <p>
            La operación requería consultar herramientas diferentes, mantener
            planillas y ejecutar tareas manuales para coordinar producción,
            planificación y bodega. El objetivo fue construir un punto de trabajo
            común, con interfaces para cada área y conexiones con los sistemas
            operacionales existentes, sin reemplazar innecesariamente al ERP ni al WMS.
          </p>
        </div>
      </Reveal>

      <section className="case-section">
        <p className="eyebrow">ARQUITECTURA</p>
        <h2>Arquitectura modular e interoperabilidad</h2>
        <div className="case-two-col">
          <ArchitectureDiagram platform />
          <div>
            <h3>Interfaces, dominio e integraciones separados</h3>
            <p>
              React, TypeScript y Vite conforman el cliente web. Un backend
              Python/FastAPI centraliza reglas de negocio, persistencia en MongoDB
              y acceso a integraciones mediante contratos definidos.
            </p>
            <p>
              GitHub Actions automatiza validaciones y despliegues. La arquitectura
              separa interfaces, servicios de dominio y sistemas externos para
              permitir una evolución modular.
            </p>
          </div>
        </div>

        <div className="platform-technology-layers">
          {technologyLayers.map(([layer, stack]) => (
            <article key={layer}>
              <span>{layer}</span>
              <strong>{stack}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">FUNCIONALIDAD</p>
        <h2>Módulos por área operacional</h2>
        <div className="case-feature-grid platform-module-grid">
          {modules.map(([title, text], index) => (
            <article key={title}>
              <span className="mono accent">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section platform-scia-feature">
        <div className="platform-scia-copy">
          <p className="eyebrow">EXTENSIÓN DEL PRODUCTO</p>
          <h2>Inspección visual conectada con la operación</h2>
          <p>
            Plataforma SC integra un servicio independiente de visión artificial
            para supervisar inspecciones de productos durante la operación. Desde
            su interfaz es posible administrar cámaras y modelos, controlar sesiones
            de inspección y consultar resultados asociados a líneas y órdenes de trabajo.
          </p>
          <p>
            La inferencia ocurre en SC-IA; el backend principal funciona como gateway
            para no exponer al navegador la comunicación interna del servicio.
          </p>
          <Link className="scia-inline-link" to="/proyectos/sc-ia">
            Explorar SC-IA y su arquitectura <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <ScIaArchitectureDiagram variant="compact" showLegend={false} />
      </section>

      <section className="case-section">
        <p className="eyebrow">RESULTADOS</p>
        <h2>Impacto operacional</h2>
        <div className="case-result">
          <span className="mono">IMPACTO OPERACIONAL</span>
          <strong>Procesos centralizados</strong>
          <p>
            Consolidación de flujos operacionales e integración de información
            para disminuir la dependencia de tareas y consultas manuales.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">PRODUCTO</p>
        <h2>Capturas de la plataforma</h2>
        <p>
          Recorre una selección actualizada de la plataforma en modo oscuro y
          claro. Cada vista se puede ampliar para revisar la interfaz en detalle.
        </p>
        <PlatformGallery onPreview={setPreview} />
      </section>

      <section className="case-section">
        <p className="eyebrow">CI/CD Y OPERACIÓN</p>
        <h2>Despliegue, operación y mantenibilidad</h2>
        <div className="pipeline" aria-label="Flujo de entrega">
          {["GitHub", "GitHub Actions", "Build / validación", "QA", "Producción"].map(
            (item, index) => (
              <span key={item}>
                {index > 0 && <b aria-hidden="true">→</b>}
                {item}
              </span>
            ),
          )}
        </div>
        <div className="case-two-col">
          <div>
            <h3>Entrega continua</h3>
            <p>
              Pipelines de GitHub Actions para validar y desplegar frontend y
              backend, con operación sobre infraestructura Linux y contenedores.
            </p>
          </div>
          <div>
            <h3>Calidad y evolución</h3>
            <p>
              Análisis con SonarQube para priorizar deuda técnica. Las capacidades
              que siguen en validación se presentan como evolución y no como
              funcionalidades cerradas.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">RESPONSABILIDAD</p>
        <h2>Mi rol en el proyecto</h2>
        <p>
          Participación en el levantamiento con usuarios, diseño de arquitectura,
          desarrollo de interfaces y servicios backend, integraciones y continuidad
          operacional. Coordinación de prioridades técnicas y evolución modular en
          función de necesidades reales de planta.
        </p>
      </section>

      {preview && <ImagePreview {...preview} onClose={() => setPreview(null)} />}
    </CaseStudy>
  );
}
