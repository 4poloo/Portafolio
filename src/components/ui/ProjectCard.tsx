import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  whatIsIt: string;
  problem: string;
  challenges: string;
  whatIDid?: string[];
  technologies: string[];
  linkLabel?: string;
  linkUrl?: string;
  images?: string[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function ProjectCard({
  title,
  subtitle,
  whatIsIt,
  problem,
  challenges,
  technologies,
  whatIDid,
  linkLabel = "Ver proyecto",
  linkUrl = "#",
  images = [],
}: ProjectCardProps) {
  const [current, setCurrent] = useState(0);

  const safeImages = useMemo(
    () => images.filter(Boolean),
    [images]
  );

  useEffect(() => {
    if (!safeImages.length) return;
    const id = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeImages.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [safeImages.length]);

  const goNext = () => {
    if (!safeImages.length) return;
    setCurrent((prev) => (prev + 1) % safeImages.length);
  };

  const goPrev = () => {
    if (!safeImages.length) return;
    setCurrent((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="grid md:grid-cols-[2fr,1.5fr] border border-neutral-800 rounded-lg overflow-hidden bg-neutral-950/60 transition-shadow duration-200 hover:shadow-[0_0_25px_rgba(251,191,36,0.12)]"
    >
      <div className="p-6 sm:p-7 space-y-3 border-b md:border-b-0 md:border-r border-neutral-800">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && (
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            {subtitle}
          </p>
        )}
        <p className="text-sm text-neutral-300">
          <span className="font-semibold block">¿Qué es?</span>
          {whatIsIt}
        </p>
        <p className="text-sm text-neutral-300">
          <span className="font-semibold block">Qué problema resolvió</span>
          {problem}
        </p>
        {whatIDid && whatIDid.length > 0 && (
          <div className="text-sm text-neutral-300">
            <span className="font-semibold block">Lo que hice</span>
            <ul className="list-disc list-outside pl-4 space-y-1 mt-1">
              {whatIDid.map((item) => (
                <li key={item} className="text-xs text-neutral-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="text-sm text-neutral-300">
          <span className="font-semibold block">Retos</span>
          {challenges}
        </p>
        <div className="text-sm text-neutral-300">
          <span className="font-semibold block mb-1">Tecnologías usadas</span>
          <p className="text-xs text-neutral-400">
            {technologies.join(" · ")}
          </p>
        </div>
        <div className="pt-3">
          {(() => {
            const isInternal = linkUrl?.startsWith("/");
            const anchorProps = isInternal
              ? {}
              : { target: "_blank", rel: "noreferrer" };

            return (
              <a
                href={linkUrl}
                {...anchorProps}
                className="inline-flex items-center text-xs font-medium border border-neutral-600 px-3 py-1.5 rounded-sm hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
              >
                {linkLabel}
              </a>
            );
          })()}
          {/* 
          <a
            href={linkUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-xs font-medium border border-neutral-600 px-3 py-1.5 rounded-sm hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
          >
            {linkLabel}
          </a> */}
        </div>
      </div>

      <div className="p-6 sm:p-7 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950">
        {safeImages.length > 0 ? (
          <div className="relative w-full">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-md border border-neutral-800 bg-neutral-950 flex items-center justify-center">
              <motion.img
                key={safeImages[current]}
                src={safeImages[current]}
                alt={`${title} imagen ${current + 1}`}
                className="h-full w-full object-contain"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {safeImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-neutral-900/70 border border-neutral-700 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                  aria-label="Anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-neutral-900/70 border border-neutral-700 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                  aria-label="Siguiente"
                >
                  ›
                </button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {safeImages.map((img, idx) => (
                    <span
                      key={img}
                      className={`h-1.5 w-4 rounded-full transition-all ${
                        idx === current
                          ? "bg-amber-400"
                          : "bg-neutral-600"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="aspect-[4/3] w-full border border-dashed border-neutral-700 rounded-md flex items-center justify-center text-xs text-neutral-500">
            Imágenes del proyecto
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
