import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import ScIaArchitectureDetails from "../components/sc-ia/ScIaArchitectureDetails";
import ScIaArchitectureDiagram from "../components/sc-ia/ScIaArchitectureDiagram";
import ScIaFlowStory from "../components/sc-ia/ScIaFlowStory";
import ScIaMediaGallery from "../components/sc-ia/ScIaMediaGallery";
import CaseStudy from "../components/ui/CaseStudy";
import Reveal from "../components/ui/Reveal";

const capabilities = [
  [
    "Inspección configurable",
    "Asignación de modelos a cámaras y parámetros de inferencia ajustables por proceso.",
  ],
  [
    "Monitoreo y alertas",
    "Seguimiento del análisis visual y registro de condiciones detectadas, con controles de alarma configurables.",
  ],
  [
    "Análisis operacional",
    "Consultas de detecciones y anomalías filtradas por período, línea de producción y orden de trabajo.",
  ],
  [
    "Ciclo de modelos",
    "Carga y administración de modelos, trabajos de entrenamiento y revisión para preparar nuevos conjuntos de datos.",
  ],
] as const;

const technologyLayers = [
  ["API de IA", "Python · FastAPI · Pydantic · Uvicorn", "Gestión de cámaras, modelos, detecciones y analítica."],
  ["Procesamiento visual", "Ultralytics YOLO · OpenCV · NumPy", "Inferencia, captura y manipulación de imágenes."],
  ["Captura y dispositivos", "Cámaras IP · RTSP", "Fuentes de video y mecanismos de alarma contemplados por el código."],
  ["Persistencia", "MongoDB · PyMongo", "Cámaras, modelos, detecciones, alertas y contexto operacional."],
  ["Contenedores", "Docker · Docker Compose · soporte GPU", "Empaquetado y recursos configurados para el servicio."],
  ["Interfaz de gestión", "React · TypeScript · Tailwind CSS", "Operación desde Plataforma SC mediante su gateway."],
] as const;

export default function ScIaProjectPage() {
  return (
    <CaseStudy
      className="scia-case-study"
      number="02"
      title="SC-IA"
      descriptor="Visión artificial para control de calidad"
      intro="SC-IA es un servicio especializado de visión artificial para inspección industrial. Captura imágenes desde cámaras IP, ejecuta modelos YOLO y clasifica condiciones observables del producto. Registra resultados y anomalías para consultarlos desde Plataforma SC y relacionarlos con la operación de producción."
      tags={["Python", "YOLO", "OpenCV", "FastAPI", "MongoDB", "Computer Vision"]}
      next={{ href: "/proyectos/integracion-wms-erp", title: "Softland ↔ INVAS" }}
    >
      <Reveal className="case-overview scia-problem-overview">
        <div>
          <p className="eyebrow">PROBLEMA</p>
          <h2>Transformar inspecciones visuales en información operacional</h2>
          <p>
            La supervisión visual de productos puede requerir atención constante
            y dificulta consolidar evidencias para el análisis posterior. Este
            desarrollo aborda condiciones observables mediante modelos de visión
            artificial y vincula los resultados con cámaras, líneas y órdenes de
            trabajo.
          </p>
          <p>
            El propósito es apoyar el control de calidad: no sustituye las
            validaciones humanas ni garantiza ausencia de errores.
          </p>
        </div>
        <aside className="scia-principle-card">
          <span className="mono">PRINCIPIO DE DISEÑO</span>
          <strong>Inferencia separada de la aplicación empresarial</strong>
          <p>
            El procesamiento ocurre en SC-IA. Plataforma SC accede mediante su
            propio backend, sin exponer cámaras, modelos o persistencia al navegador.
          </p>
        </aside>
      </Reveal>

      <section className="case-section scia-architecture-hero">
        <div className="scia-section-heading">
          <p className="eyebrow">RECORRIDO ARQUITECTÓNICO</p>
          <h2>De la cámara a la decisión operacional</h2>
          <p>
            Una API de visión artificial procesa imágenes, aplica reglas y entrega
            resultados consultables desde Plataforma SC.
          </p>
        </div>
        <ScIaArchitectureDiagram variant="overview" showLegend />
        <a className="scia-inline-link" href="#flujo-tecnico">
          Explorar el flujo técnico <FiArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <section className="case-section" id="flujo-tecnico">
        <div className="scia-section-heading">
          <p className="eyebrow">CÓMO FUNCIONA</p>
          <h2>Cinco pasos, un flujo controlable</h2>
          <p>
            El recorrido explica la captura, inferencia, validación e integración.
            Puedes elegir cualquier paso o reproducir la secuencia completa.
          </p>
        </div>
        <ScIaFlowStory />
      </section>

      <section className="case-section">
        <div className="scia-section-heading">
          <p className="eyebrow">ARQUITECTURA E INTEGRACIÓN</p>
          <h2>Responsabilidades separadas por carril</h2>
          <p>
            La cámara entrega el stream directamente al worker SC-IA. La API de IA,
            su persistencia y la inferencia permanecen separadas del backend
            operacional, que funciona como gateway para la interfaz empresarial.
          </p>
        </div>
        <ScIaArchitectureDetails />
      </section>

      <section className="case-section">
        <p className="eyebrow">CAPACIDADES VERIFICADAS</p>
        <h2>Inspección, seguimiento y evolución controlada</h2>
        <div className="case-feature-grid scia-capabilities-grid">
          {capabilities.map(([title, description], index) => (
            <article key={title}>
              <span className="mono accent">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-two-col scia-results-section">
        <div>
          <p className="eyebrow">ANALÍTICA POSTERIOR</p>
          <h2>De la detección a la información para producción</h2>
          <p>
            El servicio conserva clases identificadas, resultados filtrados,
            anomalías, eventos de alerta y contexto operacional. Sus endpoints
            permiten consultar registros por período, línea y orden de trabajo.
          </p>
          <p>
            La API proporciona estos datos y el frontend dispone de clientes para
            consumirlos. Esta descripción no afirma que cada panel analítico esté
            publicado ni que las métricas correspondan a operación continua.
          </p>
        </div>
        <div className="scia-result-map" aria-label="Información registrada por SC-IA">
          {[
            "Clases y confianza",
            "Anomalías confirmadas",
            "Evidencia visual",
            "Línea y orden de trabajo",
            "Eventos de alerta",
            "Período de inspección",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">MODELOS Y REVISIÓN HUMANA</p>
        <h2>Administración de modelos y mejora supervisada</h2>
        <div className="case-two-col">
          <div>
            <p>
              El proyecto incorpora gestión de modelos y trabajos de entrenamiento.
              También contempla revisión de detecciones y registro de correcciones
              para seleccionar material destinado a futuros conjuntos de datos.
            </p>
          </div>
          <div>
            <p>
              Separar inferencia y revisión permite evolucionar la solución sin
              describirla incorrectamente como aprendizaje autónomo en operación.
              Un modelo se asigna a futuras sesiones después de su revisión.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section">
        <ScIaMediaGallery />
      </section>

      <section className="case-section">
        <p className="eyebrow">TECNOLOGÍAS POR RESPONSABILIDAD</p>
        <h2>Stack enfocado en el problema que resuelve</h2>
        <div className="scia-technology-table">
          {technologyLayers.map(([layer, stack, purpose]) => (
            <article key={layer}>
              <h3>{layer}</h3>
              <strong>{stack}</strong>
              <p>{purpose}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">DECISIONES DE INGENIERÍA</p>
        <h2>Decisiones que delimitan el sistema</h2>
        <div className="decision-list">
          <article>
            <h3>Servicio y persistencia aislados</h3>
            <p>
              API, worker y MongoDB de SC-IA tienen responsabilidades propias y no
              se confunden con el backend o la base principal de Plataforma SC.
            </p>
          </article>
          <article>
            <h3>Estabilidad configurable</h3>
            <p>
              Umbrales por modelo o clase y ventanas temporales permiten definir
              cuándo una detección pasa a considerarse anomalía, sin prometer la
              eliminación de falsos positivos.
            </p>
          </article>
          <article>
            <h3>Integración con el proceso</h3>
            <p>
              Los eventos pueden relacionarse con línea y OT; el gateway incorpora
              resultados, control y visualización al contexto de Plataforma SC.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">MI PARTICIPACIÓN</p>
          <h2>Arquitectura e integración aplicada</h2>
          <p>
            Participación en el diseño e integración de la arquitectura de visión
            artificial, los servicios backend y su conexión con Plataforma SC,
            además de la coordinación de funcionalidades para inspección y consulta
            de resultados.
          </p>
        </div>
        <aside className="scia-platform-cta">
          <span className="mono">PRODUCTO RELACIONADO</span>
          <h3>La operación vive en Plataforma SC</h3>
          <p>
            Conoce la aplicación empresarial que integra el servicio especializado
            de visión artificial con procesos y usuarios de planta.
          </p>
          <Link to="/proyectos/plataforma-sc">
            Ver la plataforma donde se integra <FiArrowUpRight aria-hidden="true" />
          </Link>
        </aside>
      </section>
    </CaseStudy>
  );
}
