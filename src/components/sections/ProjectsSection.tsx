import { useState } from "react";
import ScIaArchitectureDiagram from "../sc-ia/ScIaArchitectureDiagram";
import ArchitectureDiagram from "../ui/ArchitectureDiagram";
import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="proyectos" className="section">
      <SectionTitle
        eyebrow="02 / PROYECTOS"
        title="Proyectos principales"
        description="Tres casos técnicamente distintos: producto Full Stack, visión artificial aplicada e integración empresarial sobre AWS."
      />
      <Reveal className="projects-grid">
        <ProjectCard
          number="01"
          title="Plataforma SC"
          category="FULL STACK · OPERACIONES · ARQUITECTURA"
          description="Plataforma operacional modular que centraliza planificación, producción, bodega y procesos de apoyo, integrando sistemas empresariales y servicios especializados mediante APIs."
          result="Digitalización de procesos y acceso unificado a información operacional."
          tags={["React", "TypeScript", "FastAPI", "MongoDB", "Docker", "AWS"]}
          href="/proyectos/plataforma-sc"
          demoHref="https://plataforma-ops.vercel.app/app"
          spotlightAccent="#e8b56b"
          spotlightDimmed={
            activeProject !== null && activeProject !== "plataforma-sc"
          }
          onSpotlightChange={(active) =>
            setActiveProject(active ? "plataforma-sc" : null)
          }
        >
          <div className="browser-preview">
            <div className="browser-chrome">
              <i />
              <i />
              <i />
              <span>Plataforma Ops / Demo 2026</span>
            </div>
            <img
              src="/PlataformaOps/oscuro/inicio.webp"
              alt="Vista de inicio de Plataforma Ops en modo oscuro"
              width="1855"
              height="951"
              loading="lazy"
            />
          </div>
        </ProjectCard>

        <ProjectCard
          number="02"
          title="SC-IA"
          category="IA APLICADA · COMPUTER VISION · INDUSTRIA"
          description="Sistema de visión artificial para inspeccionar productos mediante cámaras IP y modelos YOLO, registrar anomalías y conectar los resultados con Plataforma SC."
          result="Inspección visual, alertas y análisis de resultados por línea y orden de trabajo."
          tags={[
            "Python",
            "YOLO",
            "OpenCV",
            "FastAPI",
            "MongoDB",
            "Computer Vision",
          ]}
          href="/proyectos/sc-ia"
          spotlightAccent="#9cc58a"
          spotlightDimmed={activeProject !== null && activeProject !== "sc-ia"}
          onSpotlightChange={(active) =>
            setActiveProject(active ? "sc-ia" : null)
          }
        >
          <ScIaArchitectureDiagram variant="compact" showLegend={false} />
        </ProjectCard>

        <ProjectCard
          number="03"
          title="Softland ↔ INVAS"
          category="AWS · ERP/WMS · EVENT-DRIVEN"
          description="Integración bidireccional ERP/WMS para automatizar documentos, aplicar reglas de negocio y dar trazabilidad a la operación."
          result="De 2 h–1 día de desfase operacional a tiempo real, con consumos procesados en milisegundos."
          tags={["AWS Lambda", "SNS", "S3", "CloudWatch", "Python"]}
          href="/proyectos/integracion-wms-erp"
          spotlightAccent="#7ca9c3"
          spotlightDimmed={
            activeProject !== null && activeProject !== "softland-invas"
          }
          onSpotlightChange={(active) =>
            setActiveProject(active ? "softland-invas" : null)
          }
        >
          <ArchitectureDiagram />
        </ProjectCard>
      </Reveal>
    </section>
  );
}
