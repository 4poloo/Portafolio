import { cp, mkdir, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";

// Only reviewed assets enter the web build. Original reference files stay untouched.
const platformViews = [
  "inicio",
  "planificacion-semanal",
  "planificacion-disponible",
  "detalle-despacho",
  "dashboard-elaboracion",
  "dashboard-produccion",
  "centro-operaciones-ti",
  "observabilidad-integraciones",
  "recetas-produccion",
  "productos",
  "monitoreo-continuo",
  "agenda-impresion",
  "gestion-solicitudes",
];
const platformImages = ["claro", "oscuro"].flatMap((theme) =>
  platformViews.map(
    (view) => "PlataformaOps/" + theme + "/" + view + ".webp",
  ),
);
const output = resolve("node_modules/.cache/portfolio-public");
const files = [
  "logo.png",
  "licenses/kokonut-ui.txt",
  "fonts/dm-sans-latin.woff2",
  "fonts/manrope-latin.woff2",
  "fonts/DM-Sans-OFL.txt",
  "fonts/Manrope-OFL.txt",
  "Maximiliano_Olave_CV_2026_Final.pdf",
  "Maximiliano_Olave_CV_2026_Actualizado.pdf",
  "Maximiliano Olave CV.pdf",
  "FotoPerfil.jpeg",
  "images/portrait.webp",
  ...platformImages,
  "Cursos/3230.png",
  "social-preview.png",
  "ScIa/demostracion.mp4",
  "ScIa/demostracion-poster.webp",
  "ScIa/deteccion-con-tapa.webp",
  "ScIa/deteccion-seguimiento.webp",
  "ScIa/deteccion-sin-tapa.webp",
  "robots.txt",
  "sitemap.xml",
];

await rm(output, { recursive: true, force: true });
for (const file of files) {
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await cp(resolve("public", file), destination);
}
console.log("Prepared " + files.length + " public assets.");
