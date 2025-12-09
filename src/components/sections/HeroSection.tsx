import { motion } from "framer-motion";
import SocialLinks from "../ui/SocialLinks";

function HeroSection() {
  return (
    <section
      id="presentacion"
      className="pt-10 pb-12 border-b border-neutral-800"
    >
      <motion.div
        className="grid gap-10"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Foto + info */}
        <div className="flex gap-6">
          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <div className="group relative h-48 w-48 md:h-56 md:w-56 overflow-hidden rounded-full border border-neutral-500 bg-neutral-900/60">
              <img
                src="/FotoPerfil.jpeg"
                alt="Foto de perfil"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-500/10 px-3 py-1 text-xs text-amber-200 shadow-[0_0_18px_rgba(251,191,36,0.12)]">
              <img
                src="/Cursos/103.png"
                alt="Badge curso DevSecOps"
                className="h-8 w-8 object-contain"
              />
              <span>Certificado · DevSecOps</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200 shadow-[0_0_18px_rgba(52,211,153,0.12)]">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span>Disponibilidad inmediata · Remoto / Híbrido / Presencial</span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-1">
                Ingeniero Civil en Computación mención Informática
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight transition-[color,text-shadow] duration-200 hover:text-amber-200 hover:[text-shadow:0_0_14px_rgba(251,191,36,0.55)]">
                Maximiliano Olave Bastidas
              </h1>
            </div>

            <p className="mt-3 text-sm text-neutral-300 max-w-md">
              Full-Stack Developer con foco en construir productos complejos de principio a fin: plataformas internas, integraciones ERP/WMS y APIs escalables que conectan operaciones reales con tecnología.
            </p>

            <SocialLinks
              linkedinUrl="https://www.linkedin.com/in/maximiliano-olave-bastidas-450960351/"
              githubUrl="https://github.com/4poloo"
              cvUrl="/Maximiliano%20Olave%20CV.pdf"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
