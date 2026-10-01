import { useState } from "react";
import IntegrationFlowDiagram from "../integration/IntegrationFlowDiagram";
import ScIaArchitectureDiagram from "../sc-ia/ScIaArchitectureDiagram";
import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const integrationActive = activeProject === "softland-invas";

  return (
    <section id="proyectos" className="section">
      <SectionTitle
        eyebrow="02 / PROYECTOS"
        title="Proyectos principales"
        description="Un ecosistema tecnológico aplicado a operación real: integración empresarial sobre AWS, una plataforma Full Stack para operación y una capa de visión artificial conectada al mismo entorno."
      />
      <p className="projects-authorship-note">
        Desarrollo principal individual · IA generativa como asistencia controlada al proceso de ingeniería.
      </p>
      <Reveal className="projects-bento">
        <ProjectCard
          number="01"
          title="Integración ERP ↔ WMS en AWS"
          category="AWS · EVENT-DRIVEN · ERP/WMS"
          description="Capa de integración bidireccional entre Softland ERP e INVAS WMS, diseñada para transformar documentos, aplicar reglas de negocio, automatizar movimientos y entregar trazabilidad operacional en tiempo real."
          result="De 2 h–1 día de desfase operacional a procesamiento en tiempo real, con transacciones técnicas procesadas en milisegundos."
          tags={["AWS Lambda", "S3", "SNS", "API Gateway", "CloudWatch", "DynamoDB", "Python"]}
          href="/proyectos/integracion-wms-erp"
          spotlightAccent="#7ca9c3"
          spotlightDimmed={activeProject !== null && !integrationActive}
          onSpotlightChange={(active) => setActiveProject(active ? "softland-invas" : null)}
          layout="wide"
        >
          <IntegrationFlowDiagram variant="compact" />
        </ProjectCard>

        <ProjectCard
          number="02"
          title="Plataforma SC"
          category="FULL STACK · OPERACIONES · ARQUITECTURA"
          description="Plataforma operacional modular que centraliza planificación, producción, bodega y procesos de apoyo, conectando datos, APIs y servicios internos en una única experiencia de operación."
          result="Digitalización de procesos y acceso unificado a información operacional."
          tags={["React", "TypeScript", "FastAPI", "MongoDB", "Docker", "AWS"]}
          href="/proyectos/plataforma-sc"
          demoHref="https://plataforma-ops.vercel.app/app"
          spotlightAccent="#e8b56b"
          spotlightDimmed={activeProject !== null && activeProject !== "plataforma-sc" && !integrationActive}
          onSpotlightChange={(active) => setActiveProject(active ? "plataforma-sc" : null)}
          related={integrationActive}
        >
          <div className="browser-preview">
            <div className="browser-chrome">
              <i /><i /><i /><span>Plataforma Ops / Demo 2026</span>
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
          number="03"
          title="SC-IA"
          category="IA APLICADA · COMPUTER VISION · INDUSTRIA"
          description="Sistema de visión artificial para inspección de productos en vivo, detección de anomalías y posterior análisis operacional integrado con Plataforma SC."
          result="Inspección visual, alertas y análisis de resultados por línea y orden de trabajo."
          tags={["Python", "YOLO", "OpenCV", "FastAPI", "MongoDB", "Computer Vision"]}
          href="/proyectos/sc-ia"
          spotlightAccent="#9cc58a"
          spotlightDimmed={activeProject !== null && activeProject !== "sc-ia" && !integrationActive}
          onSpotlightChange={(active) => setActiveProject(active ? "sc-ia" : null)}
          related={integrationActive}
        >
          <ScIaArchitectureDiagram variant="compact" showLegend={false} />
        </ProjectCard>
      </Reveal>
    </section>
  );
}
