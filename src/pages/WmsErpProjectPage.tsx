import IntegrationFlowDiagram from "../components/integration/IntegrationFlowDiagram";
import CaseStudy from "../components/ui/CaseStudy";
import ProjectAuthorship from "../components/ui/ProjectAuthorship";
import Reveal from "../components/ui/Reveal";

export default function WmsErpProjectPage() {
  return (
    <CaseStudy
      number="01"
      title="Integración ERP ↔ WMS en AWS"
      descriptor="Integración ERP/WMS event-driven sobre AWS"
      intro="Integración bidireccional entre Softland ERP e INVAS WMS sobre AWS, con transformación de documentos, reglas de negocio, validaciones y trazabilidad operacional en tiempo real."
      tags={["AWS", "Event-driven", "Python", "ERP / WMS", "Sistemas distribuidos"]}
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
            ERP y WMS en tiempo real operacional. Las transacciones técnicas se
            procesan en milisegundos.
          </p>
        </aside>
      </Reveal>

      <section className="case-section">
        <p className="eyebrow">ARQUITECTURA</p>
        <h2>Dos sentidos, una capa de integración trazable</h2>
        <IntegrationFlowDiagram variant="full" />
        <div className="integration-architecture-copy">
          <div>
            <h3>Arquitectura event-driven sobre AWS</h3>
            <p>
              Softland publica documentos XML en S3; sus eventos activan Lambdas
              que validan, transforman y entregan JSON a INVAS. En el retorno,
              API Gateway recibe eventos del WMS, Lambda aplica validaciones, SNS
              distribuye el trabajo y handlers especializados generan XML para
              el intercambio con el ERP.
            </p>
          </div>
          <div>
            <h3>Controles transversales</h3>
            <p>
              CloudWatch concentra logs, métricas y señales de diagnóstico.
              DynamoDB aporta idempotencia y correlación; la persistencia de
              confirmaciones E2E continúa en validación y evolución.
            </p>
            <div className="tags">
              {["API Gateway", "Lambda", "SNS", "S3", "CloudWatch", "IAM", "DynamoDB"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">DOCUMENTOS Y RESPONSABILIDADES POR SENTIDO</p>
        <h2>Flujos bidireccionales ERP ↔ WMS</h2>
        <div className="case-two-col flow-panels">
          <article>
            <span className="mono accent">SOFTLAND → INVAS</span>
            <h3>Del documento administrativo a la ejecución física</h3>
            <p>
              Órdenes de compra, notas de venta y órdenes de despacho salen desde
              Softland como XML. La capa AWS valida estructura y reglas de negocio,
              transforma XML → JSON y entrega documentos compatibles con INVAS.
            </p>
          </article>
          <article>
            <span className="mono accent">INVAS → SOFTLAND</span>
            <h3>De la operación física al registro ERP</h3>
            <p>
              ASN y recepciones, guías EN/OD, declaración de producto terminado,
              consumo de materia prima, devoluciones y eventos retornan como JSON.
              Los handlers validan y transforman JSON → XML para Softland.
            </p>
          </article>
        </div>
        <div className="process-comparison">
          <div>
            <span className="eyebrow">AS-IS</span>
            <p>Operación ejecutada → información diferida entre sistemas → desfase de ~2 horas y, en casos operacionales, hasta 1 día.</p>
          </div>
          <div>
            <span className="eyebrow">TO-BE</span>
            <p>Evento operacional → transformación y validación automática → integración ERP/WMS en tiempo real → transacción técnica procesada en ms.</p>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">CONFIABILIDAD</p>
        <h2>Integridad, observabilidad y recuperación</h2>
        <div className="case-feature-grid">
          <article>
            <h3>Integridad transaccional</h3>
            <p>Validaciones de negocio, identificación documental y controles de reprocesamiento reducen duplicados e inconsistencias.</p>
          </article>
          <article>
            <h3>Observabilidad operacional</h3>
            <p>CloudWatch reúne ejecuciones, errores, volumen y resultados para facilitar diagnóstico y continuidad operacional.</p>
          </article>
          <article>
            <h3>Diagnóstico y recuperación</h3>
            <p>Los documentos rechazados se aíslan para identificar el origen y recuperar el procesamiento de manera controlada.</p>
          </article>
          <article>
            <span className="state-badge">En validación / evolución</span>
            <h3>Persistencia y correlación E2E</h3>
            <p>El diseño con PK/SK, GSI, escrituras condicionales y control de concurrencia busca fortalecer la recuperación de pendientes; no se presenta como ciclo cerrado en producción.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="eyebrow">DECISIONES TÉCNICAS</p>
        <h2>Decisiones arquitectónicas y trade-offs</h2>
        <div className="decision-list">
          <article><h3>S3 como buffer documental</h3><p>Mantiene el intercambio de archivos de la etapa actual y desacopla el procesamiento sin forzar una migración completa del mecanismo operacional.</p></article>
          <article><h3>DynamoDB para correlación</h3><p>El modelo serverless y las escrituras condicionales permiten diseñar estados persistentes y controles de concurrencia sin incorporar una base relacional.</p></article>
          <article><h3>SQS / DLQ como evolución evaluada</h3><p>Se evalúa para aislar mensajes fallidos y facilitar su recuperación según volumen y complejidad operacional; no se presenta como capacidad ya cerrada.</p></article>
          <article><h3>Decisiones basadas en evidencia</h3><p>La instrumentación guía mejoras sin publicar porcentajes de éxito ni latencias que no cuenten con una base verificable.</p></article>
        </div>
      </section>

      <section className="case-section">
        <ProjectAuthorship
          role="Arquitectura, implementación, validación y operación de la integración"
          title="Responsabilidad técnica y autoría E2E"
          description="Responsable principal del levantamiento AS-IS/TO-BE, diseño de arquitectura AWS, desarrollo de Lambdas y lógica de integración, transformación XML/JSON, reglas de negocio, observabilidad, diagnóstico y evolución de la solución. Desarrollo ejecutado de forma individual, con IA generativa utilizada como herramienta de asistencia controlada durante investigación, revisión, prototipado y documentación."
          badges={["DESARROLLO PRINCIPAL INDIVIDUAL", "ARQUITECTURA E2E", "AI-ASSISTED ENGINEERING", "OPERACIÓN PRODUCTIVA"]}
        />
      </section>

      <section className="case-section">
        <div className="thesis-note">
          <span className="mono accent">TRABAJO DE TÍTULO / UTEM</span>
          <h2>Caso aplicado de Ingeniería Civil en Computación</h2>
          <p>Integración ERP/WMS, digitalización de procesos y arquitectura cloud aplicada a una operación industrial.</p>
          <span className="state-badge">Titulado · 2026 · Nota 7,0</span>
        </div>
      </section>
    </CaseStudy>
  );
}
