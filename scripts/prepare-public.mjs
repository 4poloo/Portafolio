import { cp, mkdir, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";

// Only reviewed assets enter the web build. Original reference files stay untouched.
const output = resolve("node_modules/.cache/portfolio-public");
const files = [
  "logo.png",
  "licenses/kokonut-ui.txt",
  "fonts/dm-sans-latin.woff2",
  "fonts/manrope-latin.woff2",
  "fonts/DM-Sans-OFL.txt",
  "fonts/Manrope-OFL.txt",
  "Maximiliano_Olave_CV_2026_Actualizado.pdf",
  "Maximiliano Olave CV.pdf",
  "images/portrait.webp",
  "images/plataforma-inicio.webp",
  "images/plataforma-acceso.webp",
  "Cursos/3230.png",
  "social-preview.png",
  "robots.txt",
  "sitemap.xml",
];
await rm(output, { recursive: true, force: true });
for (const file of files) {
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await cp(resolve("public", file), destination);
}
console.log(`Prepared ${files.length} public assets.`);
