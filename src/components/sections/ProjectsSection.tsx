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
