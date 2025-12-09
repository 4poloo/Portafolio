import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

function WmsErpProjectPage() {
  const asIsImages = [
    { src: "/Integracion/AsIs/Recepciones.drawio.png", label: "Recepciones · AS-IS" },
    { src: "/Integracion/AsIs/Despachos.drawio.png", label: "Despachos · AS-IS" },
    { src: "/Integracion/AsIs/PT.drawio.png", label: "Producto Terminado · AS-IS" },
  ];

  const toBeImages = [
    { src: "/Integracion/ToBe/Recepcion-TOBE.drawio.png", label: "Recepciones · TO-BE" },
    { src: "/Integracion/ToBe/Despachos-tobe.drawio.png", label: "Despachos · TO-BE" },
    { src: "/Integracion/ToBe/Pt-TOBE.drawio.png", label: "Producto Terminado · TO-BE" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  const cardShadow =
    "transition-shadow duration-200 hover:shadow-[0_0_25px_rgba(251,191,36,0.12)]";

  return (
    <motion.section
      className="pt-10 pb-16"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="Integración ERP ↔ WMS" />

      {/* Resumen + Resultados */}
      <div className="grid gap-6 md:grid-cols-2 mt-4">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className={`border border-neutral-800 rounded-lg p-6 bg-neutral-950/60 space-y-3 ${cardShadow}`}
        >
          <h3 className="text-sm font-semibold text-neutral-100">
            Resumen del proyecto
          </h3>
          <p className="text-sm text-neutral-200 leading-relaxed">
            Implementé un puente de integración entre el ERP (Softland) y el WMS
            (Invas) para automatizar el envío y recepción de órdenes de compra,
            notas de venta, órdenes de trabajo y movimientos de stock. La
            integración interpreta documentos en XML, los transforma a JSON,
            aplica lógica de negocio y sincroniza la información entre ambos
            sistemas, evitando la doble digitación y manteniendo los datos
            alineados en todo el flujo operativo.
          </p>
          <p className="text-sm text-neutral-200 leading-relaxed">
            El foco del proyecto fue conectar dos plataformas que no se integran
            de forma nativa, diseñando una capa intermedia que entiende cómo
            funciona la operación en planta y traduce ese flujo al lenguaje de
            cada sistema, manteniendo trazabilidad y control sobre cada
            transacción.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className={`border border-neutral-800 rounded-lg p-6 bg-neutral-950/60 space-y-3 ${cardShadow}`}
        >
          <h3 className="text-sm font-semibold text-neutral-100">
            Resultados y métricas
          </h3>
          <ul className="text-sm text-neutral-200 leading-relaxed list-disc list-outside pl-4 space-y-1">
            <li>
              Eliminación de la doble digitación entre ERP y WMS en órdenes de
              compra, notas de venta y movimientos de stock.
            </li>
            <li>
              Reducción del tiempo de registro de información operativa al
              automatizar la carga y validación de documentos.
            </li>
            <li>
              Mayor trazabilidad sobre el estado de cada integración gracias a
              logs estructurados y validaciones por documento.
            </li>
            <li>
              Menor riesgo de errores humanos en procesos críticos de bodega y
              producción.
            </li>
          </ul>
          <p className="text-xs text-neutral-400">
            Nota: los valores exactos de ahorro de tiempo y costos se pueden
            documentar internamente; aquí se presenta el impacto de forma
            cualitativa para el portafolio.
          </p>
        </motion.div>
      </div>

      {/* Tecnologías + Flujo */}
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className={`border border-neutral-800 rounded-lg p-6 bg-neutral-950/60 ${cardShadow}`}
        >
          <h4 className="text-sm font-semibold text-neutral-100 mb-2">
            Tecnologías y arquitectura
          </h4>
          <p className="text-sm text-neutral-200 leading-relaxed mb-3">
            La integración se implementó como un servicio desacoplado entre ERP
            y WMS, combinando backend en Python con servicios cloud y una base
            de datos para trazabilidad.
          </p>
          <ul className="text-sm text-neutral-200 leading-relaxed list-disc list-outside pl-4 space-y-1 mb-3">
            <li>Servicio backend de integración desarrollado con FastAPI.</li>
            <li>
              Procesamiento de documentos en formato XML y transformación a JSON.
            </li>
            <li>
              Uso de servicios en la nube para orquestar la integración
              (AWS: Lambda, SNS, S3, EC2 según el flujo).
            </li>
            <li>
              Almacenamiento de estados y logs de integración en MongoDB Atlas.
            </li>
            <li>
              Consumo de APIs del WMS para registrar y actualizar información
              operativa.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 text-xs text-neutral-100">
            {[
              "FastAPI",
              "Python",
              "MongoDB Atlas",
              "AWS",
              "Lambda",
              "SNS",
              "S3",
              "EC2",
              "XML",
              "JSON",
              "Softland ERP",
              "Invas WMS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className={`border border-neutral-800 rounded-lg p-6 bg-neutral-950/60 ${cardShadow}`}
        >
          <h4 className="text-sm font-semibold text-neutral-100 mb-2">
            Pasos y flujo de integración
          </h4>
          <p className="text-sm text-neutral-200 leading-relaxed mb-3">
            A alto nivel, el flujo sigue una secuencia clara desde el ERP hasta
            el WMS (y en algunos casos en sentido inverso), aplicando
            validaciones y controles en cada etapa:
          </p>
          <ul className="text-sm text-neutral-200 leading-relaxed list-disc list-outside pl-4 space-y-1">
            <li>
              El ERP genera documentos (OC, NV, OT, movimientos) en formato XML.
            </li>
            <li>
              El servicio de integración recibe el XML, lo valida y lo transforma
              a una estructura JSON estándar.
            </li>
            <li>
              Se aplica lógica de negocio para completar campos, mapear códigos y
              preparar el payload para el WMS.
            </li>
            <li>
              El sistema llama a las APIs del WMS y registra el resultado de cada
              operación.
            </li>
            <li>
              Se manejan errores, reintentos y casos especiales para evitar
              duplicidad o pérdida de información.
            </li>
            <li>
              Los estados y eventos relevantes se guardan para trazabilidad y
              auditoría futura.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Mi rol */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className={`border border-neutral-800 rounded-lg p-6 bg-neutral-950/60 ${cardShadow}`}
        >
          <h4 className="text-sm font-semibold text-neutral-100 mb-2">
            Mi rol en el proyecto
          </h4>
          <ul className="text-sm text-neutral-200 leading-relaxed list-disc list-outside pl-4 space-y-1">
            <li>
              Levantamiento del proceso junto a jefatura de planta y revisión de
              cómo se operaba en ERP y WMS.
            </li>
            <li>
              Diseño del flujo de integración y definición de los documentos a
              sincronizar entre sistemas.
            </li>
            <li>
              Implementación de la lógica de transformación XML ↔ JSON y
              validaciones clave.
            </li>
            <li>
              Configuración de la arquitectura cloud para soportar la
              integración.
            </li>
            <li>
              Pruebas con datos reales y ajuste fino según el feedback de
              operación.
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className={`border border-neutral-800 rounded-lg p-6 bg-neutral-950/60 ${cardShadow}`}
        >
          <h4 className="text-sm font-semibold text-neutral-100 mb-2">
            Aprendizajes clave
          </h4>
          <ul className="text-sm text-neutral-200 leading-relaxed list-disc list-outside pl-4 space-y-1">
            <li>
              La importancia de entender el proceso completo antes de diseñar la
              integración.
            </li>
            <li>
              Cómo manejar sistemas con documentación limitada y logs poco
              amigables.
            </li>
            <li>
              El valor de una capa intermedia que abstrae la lógica de negocio y
              desacopla los sistemas.
            </li>
            <li>
              La necesidad de trazabilidad clara para soporte y evolución futura
              de la solución.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Diagramas / BPMN / Imágenes */}
      <div className="mt-8 space-y-4">
        <h3 className="text-sm font-semibold text-neutral-100">
          Diagramas del proceso y arquitectura
        </h3>
        <p className="text-sm text-neutral-200 leading-relaxed max-w-3xl">
          A continuación se muestran diagramas de alto nivel del proceso AS-IS y
          TO-BE, además de la arquitectura de integración. Los BPMN y esquemas
          se presentan con datos genéricos para proteger la información
          interna, pero reflejan el flujo real modelado para la planta.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-2">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className={`border border-neutral-800 rounded-xl bg-neutral-950/70 p-4 flex flex-col gap-3 ${cardShadow}`}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              BPMN · AS-IS
            </span>
            <p className="text-xs text-neutral-300">
              Proceso original con doble digitación en ERP y WMS, uso de
              planillas y poca trazabilidad.
            </p>
            <div className="space-y-3">
              {asIsImages.map(({ src, label }) => (
                <div
                  key={src}
                  className="rounded-lg overflow-hidden border border-neutral-800/80 bg-neutral-900/60"
                >
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className={`border border-neutral-800 rounded-xl bg-neutral-950/70 p-4 flex flex-col gap-3 ${cardShadow}`}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              BPMN · TO-BE
            </span>
            <p className="text-xs text-neutral-300">
              Proceso optimizado con la capa de integración automatizando el
              intercambio de información entre ERP y WMS.
            </p>
            <div className="space-y-3">
              {toBeImages.map(({ src, label }) => (
                <div
                  key={src}
                  className="rounded-lg overflow-hidden border border-neutral-800/80 bg-neutral-900/60"
                >
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`mt-4 border border-neutral-800 rounded-xl bg-neutral-950/70 p-4 flex flex-col gap-3 ${cardShadow}`}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Arquitectura · Evidencias
          </span>
          <p className="text-xs text-neutral-300 max-w-3xl">
            Arquitectura de alto nivel del funcionamiento de la integración de
            Invas - Softland.
          </p>
          <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-neutral-950/90">
            <img
              src="/Integracion/Infra/Arquitectura.drawio.png"
              alt="Arquitectura de la integración ERP-WMS"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default WmsErpProjectPage;
