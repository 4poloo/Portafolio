import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";

interface CourseItem {
  title: string;
  provider: string;
  year: string;
  imageUrl?: string;
}

const courses: CourseItem[] = [
  {
    title: "Máster en DevSecOps",
    provider: "Lite Thinking",
    year: "2025",
    imageUrl: "/Cursos/3230.png",
  },
];

function CoursesSection() {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  return (
    <motion.section
      id="cursos"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle title="Cursos & Títulos" />

      <div className="grid gap-6 md:grid-cols-3 mt-2">
        {courses.map((course) => (
          <article
            key={course.title}
            className="border border-neutral-800 rounded-lg bg-neutral-950/60 overflow-hidden transition-shadow duration-200 hover:shadow-[0_0_25px_rgba(251,191,36,0.12)]"
          >
            <div className="h-48 bg-neutral-900 border-b border-neutral-800 flex items-center justify-center">
              {course.imageUrl ? (
                <button
                  type="button"
                  onClick={() => setPreviewSrc(course.imageUrl ?? null)}
                  className="h-full w-full"
                >
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </button>
              ) : (
                <div className="text-xs text-neutral-500 text-center px-4">
                  Sube aquí la imagen/insignia del curso
                </div>
              )}
            </div>
            <div className="p-4 space-y-1">
              <h3 className="text-sm font-semibold">{course.title}</h3>
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                {course.provider}
              </p>
              <p className="text-xs text-neutral-400">Año: {course.year}</p>
            </div>
          </article>
        ))}
      </div>

      {previewSrc && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewSrc(null)}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-lg border border-neutral-700 bg-neutral-950"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewSrc}
              alt="Certificado"
              className="w-full h-full object-contain"
            />
            <button
              type="button"
              onClick={() => setPreviewSrc(null)}
              className="absolute top-6 right-6 h-9 w-9 rounded-full bg-neutral-900/80 border border-neutral-700 text-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
}

export default CoursesSection;
