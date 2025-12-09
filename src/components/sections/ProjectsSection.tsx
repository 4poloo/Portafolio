import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Plataforma de Operaciones",
    subtitle: "Web App · Integraciones · Plataforma",
    whatIsIt:
      "Plataforma interna modular para gestionar producción y operaciones, donde se administran órdenes de trabajo, dashboards para operarios y dashboards de KPI para jefes de área.",
    problem:
      "Unificó procesos que antes se hacían en planillas y sistemas aislados, mejorando tiempos operativos al pasar de procesos manuales de horas a minutos y facilitando el acceso a la información.",
    challenges:
      "Integración con el WMS existente, diseño de modelos de datos para procesos de planta y creación de UX para usuarios no técnicos, incluyendo la lógica de productos finales basados en recetas.",
    whatIDid: [
      "Diseñé una plataforma interna modular para gestionar órdenes de trabajo y dashboards de información.",
      "Integré consumo de APIs de Invas WMS y APIs de integración en AWS dentro de la plataforma.",
      "Creé una API interna para la conexión a la base de datos usada por la plataforma.",
    ],
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "TypeScript",
      "FastAPI",
      "Python",
      "Docker",
      "MongoDB",
      "AWS",
      "Nginx",
      "WMS/Invas",
    ],
    linkUrl: "https://plataforma-ops.vercel.app/",
    images: [
      "/PlataformaOps/1.png",
      "/PlataformaOps/2.png",
      "/PlataformaOps/3.png",
      "/PlataformaOps/4.png",
      "/PlataformaOps/5.png",
      "/PlataformaOps/6.png",
      "/PlataformaOps/7.png",
      "/PlataformaOps/8.png",
      "/PlataformaOps/9.png",
    ],
  },
  {
    title: "Integración de ERP/WMS",
    subtitle: "Serverless · Integraciones · AWS",
    whatIsIt:
      "Integración entre sistemas no integrables nativamente, generando un puente de comunicación bidireccional utilizando datos en formato XML y JSON.",
    problem:
      "Reemplazó el proceso de insertar datos de órdenes de compra, notas de venta, gestión de órdenes de trabajo y movimientos de stock en ambos sistemas de forma manual, logrando que la información se mantenga igual en ERP y WMS.",
    challenges:
      "Compatibilizar la información entregada y recibida por ambos sistemas usando XML y JSON, trabajar con manuales de Softland poco claros, logs de difícil lectura y crear verificaciones para evitar duplicidad de información, replicando además los negocios entre bodega y producción dentro de la integración, además de un módulo de Producción de Softland no integrable el cual fue reemplazado por la plataforma de operaciones desarrollada.",
    whatIDid: [
      "Construí un puente de comunicación bidireccional entre ERP y WMS usando XML y JSON.",
      "Automaticé la integración de órdenes de compra, notas de venta, órdenes de trabajo y movimientos de stock entre ambos sistemas.",
      "Apliqué validaciones para compatibilizar la información y evitar duplicidad de datos entre Softland e Invas.",
    ],
    technologies: [
      "FastAPI",
      "Python",
      "MongoDB Atlas",
      "AWS",
      "EC2",
      "SNS",
      "S3",
      "Lambda",
    ],
    linkUrl: "/proyectos/integracion-wms-erp",
    images: [
      "/Integracion/Infra/Arquitectura.drawio.png",
      "/Integracion/AsIs/Recepciones.drawio.png",
      "/Integracion/AsIs/Despachos.drawio.png",
      "/Integracion/ToBe/Recepcion-TOBE.drawio.png",
      "/Integracion/ToBe/Despachos-tobe.drawio.png",
    ],
  },
  {
    title: "Ecommerce Ecomlimp",
    subtitle: "E-commerce · Página Web · Carrito de Compras",
    whatIsIt:
      "Página web e-commerce para una empresa de limpieza que buscaba presencia online y un carrito de compras básico.",
    problem:
      "Mejoró la presencia online de la empresa y permitió ofrecer la posibilidad de compra online a sus clientes.",
    challenges:
      "Uso de React y JavaScript más avanzado en el frontend, creando el carrito de compras sin necesidad de backend, solo con lógica en el lado del cliente.",
    whatIDid: [
      "Desarrollé una página web e-commerce para una empresa de limpieza con catálogo y carrito básico.",
      "Implementé el carrito de compras utilizando únicamente frontend con React y JavaScript.",
      "Diseñé la interfaz responsive empleando TailwindCSS sobre una base con React y Vite.",
    ],
    technologies: ["React", "Vite", "TailwindCSS", "JavaScript"],
    linkUrl: "https://ecomlimp-demo.netlify.app",
    images: [
      "/Ecomlimp/Captura%20desde%202025-12-08%2002-06-44.png",
      "/Ecomlimp/Captura%20desde%202025-12-08%2002-06-58.png",
      "/Ecomlimp/Captura%20desde%202025-12-08%2002-07-25.png",
      "/Ecomlimp/Captura%20desde%202025-12-08%2002-07-31.png",
      "/Ecomlimp/Captura%20desde%202025-12-08%2002-07-44.png",
      "/Ecomlimp/Captura%20desde%202025-12-08%2002-07-55.png",
    ],
  },
];

function ProjectsSection() {
  return (
    <section id="proyectos">
      <SectionTitle title="Proyectos Principales" />
      <motion.div
        className="mt-4 space-y-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectsSection;
