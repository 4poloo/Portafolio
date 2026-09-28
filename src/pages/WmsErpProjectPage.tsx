import CaseStudy from "../components/ui/CaseStudy";
import ArchitectureDiagram from "../components/ui/ArchitectureDiagram";
import Reveal from "../components/ui/Reveal";
export default function WmsErpProjectPage() {
  return (
    <CaseStudy
      number="02"
      title="Softland ↔ INVAS"
      descriptor="Integración ERP/WMS sobre AWS"
      intro="Integración bidireccional entre Softland ERP e INVAS WMS sobre AWS, con transformación de documentos, reglas de negocio, validaciones y trazabilidad operacional en tiempo real."
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
          <p className="eyebrow">PROBLEMA</p>
          <h2>Eliminar el desfase entre ERP y operación de bodega</h2>
          <p>
            Softland e INVAS operaban con formatos y reglas diferentes, generando
            un desfase operacional de aproximadamente dos horas y, en algunos
            escenarios, de hasta un día. La integración traduce XML y JSON,
            valida documentos y automatiza órdenes, recepciones, guías,
            declaraciones de producto terminado y consumos de materia prima.
          </p>
        </div>
        <aside className="case-result">
          <span className="mono">IMPACTO OPERACIONAL</span>
          <strong>2 h–1 día → tiempo real</strong>
          <p>
            La operación pasó de trabajar con información diferida a sincronizar
            ERP y WMS en tiempo real operacional. El procesamiento técnico de los
            consumos se ejecuta en milisegundos.
          </p>
        </aside>
      </Reveal>
      <section className="case-section">
        <p className="eyebrow">ARQUITECTURA</p>
        <h2>Arquitectura event-driven sobre AWS</h2>
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
        <p className="eyebrow">FLUJOS</p>
        <h2>Flujos bidireccionales ERP ↔ WMS</h2>
        <div className="case-two-col flow-panels">
          <article>
            <span className="mono accent">SOFTLAND → INVAS</span>
            <h3>Documentos desde ERP hacia WMS</h3>
            <p>
              Órdenes de compra, notas de venta y documentos operacionales
              requeridos por el WMS. Transformación y validación antes de
              invocar sus APIs.
            </p>
          </article>
          <article>
            <span className="mono accent">INVAS → SOFTLAND</span>
            <h3>Retornos desde WMS hacia ERP</h3>
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
              Operación ejecutada → información diferida entre sistemas → desfase
              de ~2 horas y, en casos operacionales, hasta 1 día
            </p>
          </div>
          <div>
            <span className="eyebrow">TO-BE</span>
            <p>
              Evento operacional → transformación y validación automática →
              integración ERP/WMS en tiempo real → consumo procesado en ms
            </p>
          </div>
        </div>
      </section>
      <section className="case-section">
        <p className="eyebrow">CONFIABILIDAD</p>
        <h2>Integridad, observabilidad y recuperación</h2>
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
            <h3>Persistencia y correlación E2E · En validación</h3>
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
        <p className="eyebrow">DECISIONES TÉCNICAS</p>
        <h2>Decisiones arquitectónicas y trade-offs</h2>
        <div className="decision-list">
          <article>
            <h3>S3 como buffer documental</h3>
            <p>
              Permite mantener el intercambio de archivos de la etapa actual,
              sin incorporar de inmediato una nueva capa de mensajería y su
              complejidad operacional.
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
            <h3>SQS / DLQ como evolución evaluada</h3>
            <p>
              Se evalúa el aislamiento automático de mensajes fallidos y su
              recuperación con SQS y DLQ, considerando el volumen de documentos
              y la complejidad operacional. Es una alternativa de evolución.
            </p>
          </article>
          <article>
            <h3>Decisiones basadas en métricas</h3>
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
          <p className="eyebrow">RESPONSABILIDAD</p>
          <h2>Responsabilidad técnica E2E</h2>
          <p>
            Modelado de procesos AS-IS y TO-BE, diseño de arquitectura AWS,
            transformación XML/JSON, validaciones, instrumentación y
            diagnóstico. Coordinación con planta, gerencia y proveedores para
            ajustar la solución a la operación real.
          </p>
        </div>
        <div className="thesis-note">
          <span className="mono accent">TRABAJO DE TÍTULO / UTEM</span>
          <h2>Caso aplicado de Ingeniería Civil en Computación</h2>
          <p>
            Integración ERP/WMS, digitalización de procesos y arquitectura cloud
            aplicada a una operación industrial.
          </p>
          <span className="state-badge">Titulado · 2026 · Nota 7,0</span>
        </div>
      </section>
    </CaseStudy>
  );
}
