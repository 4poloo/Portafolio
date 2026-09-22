import CaseStudy from "../components/ui/CaseStudy";
import ArchitectureDiagram from "../components/ui/ArchitectureDiagram";
import Reveal from "../components/ui/Reveal";
export default function WmsErpProjectPage() {
  return (
    <CaseStudy
      number="02"
      title="Softland ↔ INVAS"
      intro="Ingeniería de integración para conectar ERP, WMS y operación industrial. Una arquitectura orientada a eventos sobre AWS, con reglas de negocio y trazabilidad documental."
      tags={[
        "AWS",
        "Event-driven",
        "Python",
        "ERP / WMS",
        "Sistemas distribuidos",
      ]}
      next={{ href: "/proyectos/plataforma-sc", title: "Plataforma SC" }}
    >
      <Reveal className="case-overview">
        <div>
          <p className="eyebrow">EL DESAFÍO</p>
          <h2>Dos sistemas que necesitaban hablar el mismo idioma.</h2>
          <p>
            Softland e INVAS operaban con formatos y reglas diferentes. La
            integración traduce XML y JSON, valida documentos y automatiza
            órdenes, recepciones, guías, declaraciones de producto terminado y
            consumos de materia prima.
          </p>
        </div>
        <aside className="case-result">
          <span className="mono">ESTADO DEL PROYECTO</span>
          <strong>Integración productiva</strong>
          <p>
            Con evolución continua en confiabilidad, monitoreo y recuperación.
            Persistencia E2E sobre DynamoDB en validación.
          </p>
        </aside>
      </Reveal>
      <section className="case-section">
        <p className="eyebrow">ARQUITECTURA CLOUD</p>
        <h2>Desacoplar sistemas. Conectar procesos.</h2>
        <div className="case-two-col">
          <ArchitectureDiagram />
          <div>
            <h3>Una capa de integración orientada a eventos</h3>
            <p>
              API Gateway recibe solicitudes, Lambda ejecuta transformaciones y
              reglas de negocio, SNS distribuye eventos y S3 sirve como
              intercambio y buffer documental. IAM controla el acceso a
              servicios y CloudWatch centraliza señales operacionales.
            </p>
            <p>
              La integración combina componentes serverless con infraestructura
              local y ambientes QA/PROD. DynamoDB añade una capa de correlación
              y persistencia en evolución.
            </p>
            <div className="tags">
              {[
                "API Gateway",
                "Lambda",
                "SNS",
                "S3",
                "CloudWatch",
                "IAM",
                "DynamoDB",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="case-section">
        <p className="eyebrow">FLUJOS DE NEGOCIO</p>
        <h2>Información que viaja en ambos sentidos.</h2>
        <div className="case-two-col flow-panels">
          <article>
            <span className="mono accent">SOFTLAND → INVAS</span>
            <h3>De la planificación a la ejecución</h3>
            <p>
              Órdenes de compra, notas de venta y documentos operacionales
              requeridos por el WMS. Transformación y validación antes de
              invocar sus APIs.
            </p>
          </article>
          <article>
            <span className="mono accent">INVAS → SOFTLAND</span>
            <h3>De la operación al registro</h3>
            <p>
              ASN y recepciones, guías de entrada y salida, declaración de
              producto terminado y consumo de materia prima. Procesamiento de
              respuestas y trazabilidad documental.
            </p>
          </article>
        </div>
        <div className="process-comparison">
          <div>
            <span className="eyebrow">AS-IS</span>
            <p>
              Documento → digitación manual → registro en otro sistema →
              revisión manual
            </p>
          </div>
          <div>
            <span className="eyebrow">TO-BE</span>
            <p>
              Documento → transformación y validación → integración →
              seguimiento de respuesta
            </p>
          </div>
        </div>
      </section>
      <section className="case-section">
        <p className="eyebrow">CONFIABILIDAD</p>
        <h2>El flujo real incluye errores y reintentos.</h2>
        <div className="case-feature-grid">
          <article>
            <h3>Integridad transaccional</h3>
            <p>
              Validaciones de negocio, identificación de documentos y controles
              de reprocesamiento para reducir duplicados e inconsistencias. La
              correlación permite seguir una operación y entender su estado.
            </p>
          </article>
          <article>
            <h3>Observabilidad E2E</h3>
            <p>
              CloudWatch reúne métricas de latencia, volumen, éxito/fallo,
              reintentos y errores. El seguimiento desde emisión hasta respuesta
              facilita el diagnóstico y la continuidad operacional.
            </p>
          </article>
          <article>
            <h3>Diagnóstico y recuperación</h3>
            <p>
              Los documentos rechazados y archivos bloqueantes requieren
              identificar el origen, aislar el problema y recuperar el
              procesamiento de forma controlada.
            </p>
          </article>
          <article>
            <span className="state-badge">En validación / evolución</span>
            <h3>Persistencia E2E · DynamoDB</h3>
            <p>
              Diseño de correlación de confirmaciones con PK/SK, GSI, escrituras
              condicionales y control de concurrencia. Busca fortalecer
              idempotencia y recuperación de pendientes; no se presenta como
              ciclo cerrado en producción.
            </p>
          </article>
        </div>
      </section>
      <section className="case-section">
        <p className="eyebrow">DECISIONES & TRADE-OFFS</p>
        <h2>La arquitectura responde al contexto.</h2>
        <div className="decision-list">
          <article>
            <h3>S3 como buffer documental</h3>
            <p>
              Permite mantener el intercambio de archivos de la etapa actual. El
              aislamiento automático de fallos con SQS y DLQ se considera una
              evolución, evaluando volumen y complejidad operacional.
            </p>
          </article>
          <article>
            <h3>DynamoDB para correlación</h3>
            <p>
              Un modelo serverless con escrituras condicionales permite diseñar
              estados persistentes y controles de concurrencia sin agregar una
              base relacional a este flujo.
            </p>
          </article>
          <article>
            <h3>Medir antes de ampliar</h3>
            <p>
              La observabilidad ayuda a decidir qué mejorar con evidencia. La
              integración incorpora monitoreo y diagnóstico sin publicar
              porcentajes de éxito ni latencias que no cuenten con una base
              verificable.
            </p>
          </article>
        </div>
      </section>
      <section className="case-section case-two-col">
        <div>
          <p className="eyebrow">MI CONTRIBUCIÓN</p>
          <h2>Del levantamiento al soporte productivo.</h2>
          <p>
            Modelado de procesos AS-IS y TO-BE, diseño de arquitectura AWS,
            transformación XML/JSON, validaciones, instrumentación y
            diagnóstico. Coordinación con planta, gerencia y proveedores para
            ajustar la solución a la operación real.
          </p>
        </div>
        <div className="thesis-note">
          <span className="mono accent">
            INGENIERÍA CIVIL EN COMPUTACIÓN / UTEM
          </span>
          <h3>Trabajo de título</h3>
          <p>
            La integración y digitalización ERP/WMS son el eje del trabajo de
            título, con análisis de procesos, arquitectura cloud e impacto
            operacional.
          </p>
          <span className="state-badge">Egresado · Defensa en proceso</span>
        </div>
      </section>
    </CaseStudy>
  );
}
