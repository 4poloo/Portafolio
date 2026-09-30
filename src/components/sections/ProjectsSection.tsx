import ScIaArchitectureDiagram from "../sc-ia/ScIaArchitectureDiagram";
import ArchitectureDiagram from "../ui/ArchitectureDiagram";
import ProjectCard from "../ui/ProjectCard";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

export default function ProjectsSection() {
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
          demoHref="https://plataforma-di1mrfduz-maxolaves-projects.vercel.app/app"
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
          tags={["Python", "YOLO", "OpenCV", "FastAPI", "MongoDB", "Computer Vision"]}
          href="/proyectos/sc-ia"
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
        >
          <ArchitectureDiagram />
        </ProjectCard>
      </Reveal>
    </section>
  );
}
