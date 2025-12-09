import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

function AboutSection() {
  return (
    <motion.section
      id="sobre-mi"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="Sobre mí" />
      <div className="grid gap-8 md:grid-cols-2 mt-2">
        <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950/60 transition-shadow duration-200 hover:shadow-[0_0_25px_rgba(251,191,36,0.12)]">
          <p className="text-sm text-neutral-200 leading-relaxed">
            Soy Ingeniero Civil en Computación mención Informática de la Universidad Tecnologica Metropolitana; con experiencia construyendo soluciones end-to-end que conectan procesos operativos reales con plataformas web modernas. Me especializo en transformar flujos manuales y sistemas aislados en arquitecturas simples, escalables y totalmente digitalizadas. 
          </p>
          <p className="text-sm text-neutral-200 leading-relaxed mt-3">
            Mi trabajo se enfoca en proyectos complejos con impacto directo en el negocio: integraciones ERP/WMS a nivel industrial, diseño de APIs modulares, desarrollo de plataformas internas y automatización de procesos críticos. Desde el análisis funcional y el diseño técnico, hasta el despliegue en producción con AWS, CI/CD y monitoreo.
          </p>
          <p className="text-sm text-neutral-200 leading-relaxed mt-3">
            Me diferencia haber trabajado sobre sistemas reales en producción, donde las decisiones tecnológicas afectan tiempos operativos, eficiencia de planta y costos. Lideré la integración completa entre Softland e Invas utilizando AWS (Lambda, SNS, S3), eliminando costos recurrentes, habilitando trazabilidad y reduciendo procesos manuales de horas a minutos. También desarrollé una plataforma interna modular que digitalizó órdenes de trabajo, dashboards y KPIs para gerencia, consolidando procesos que antes dependían de planillas y asistencia manual.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-950/60 transition-shadow duration-200 hover:shadow-[0_0_25px_rgba(251,191,36,0.12)]">
          <p className="text-sm text-neutral-200 leading-relaxed">
            Disfruto trabajar cerca del negocio y de los usuarios, entendiendo el problema completo antes de escribir la primera línea de código. Esa visión me permite entregar soluciones que realmente se usan, mantener velocidad sin sacrificar calidad y priorizar aquello que genera valor.
          </p>
          <p className="text-sm text-neutral-200 leading-relaxed mt-3">
            Hoy busco seguir creciendo en entornos de producto, donde pueda aportar experiencia técnica y visión de negocio para construir plataformas que escalen y hagan una diferencia real.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
