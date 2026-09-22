import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import ArchitectureDiagram from "../ui/ArchitectureDiagram";
import Reveal from "../ui/Reveal";
export default function ProjectsSection() {
  return (
    <section id="proyectos" className="section">
      <SectionTitle
        eyebrow="02 / PROYECTOS"
        title="Proyectos principales"
        description="Casos productivos donde participé desde el levantamiento y diseño técnico hasta desarrollo, despliegue y operación."
      />
      <Reveal className="projects-grid">
        <ProjectCard
          number="01"
          title="Plataforma SC"
          category="FULL STACK · OPERACIONES · PRODUCTO INTERNO"
          description="Un sistema operacional modular que conecta producción, planificación, bodega y gerencia en una misma plataforma."
          result="Procesos manuales de horas, reducidos a minutos."
          tags={["React", "TypeScript", "FastAPI", "MongoDB", "Docker"]}
          href="/proyectos/plataforma-sc"
        >
          <div className="browser-preview">
            <div className="browser-chrome">
              <i />
              <i />
              <i />
              <span>Plataforma SC / Vista de referencia</span>
            </div>
            <img
              src="/images/plataforma-inicio.webp"
              alt="Vista de inicio de Plataforma SC con navegación modular y widgets, versión 2025"
              width="1200"
              height="640"
              loading="lazy"
            />
          </div>
        </ProjectCard>
        <ProjectCard
          number="02"
          title="Softland ↔ INVAS"
          category="AWS · ERP/WMS · EVENT-DRIVEN"
          description="Integración bidireccional ERP/WMS para automatizar documentos, aplicar reglas de negocio y dar trazabilidad a la operación."
          result="Automatización documental y trazabilidad entre ERP y WMS."
          tags={["AWS Lambda", "SNS", "S3", "CloudWatch", "Python"]}
          href="/proyectos/integracion-wms-erp"
        >
          <ArchitectureDiagram />
        </ProjectCard>
      </Reveal>
    </section>
  );
}
