import { FiDownload } from "react-icons/fi";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Presentación", href: "#presentacion" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Cursos", href: "#cursos" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToId = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const targetHash = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (targetHash) {
      // Espera un frame para asegurar que la vista principal está montada.
      requestAnimationFrame(() => scrollToId(targetHash));
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.pathname, location.state, navigate]);

  const handleNavClick = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href } });
      return;
    }
    scrollToId(href);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="MaxOlaDev logo"
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="text-sm tracking-[0.25em] uppercase text-neutral-400">
            MaxOlaDev
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs sm:text-sm">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="border border-neutral-600/70 px-3 py-1.5 hover:bg-neutral-100 hover:text-neutral-900 transition-colors rounded-sm"
            >
              {item.label}
            </button>
          ))}

          <a
            href="/Maximiliano%20Olave%20CV.pdf"
            download="Maximiliano Olave CV.pdf"
            className="hidden sm:inline-flex items-center gap-2 border border-neutral-600/70 px-3 py-1.5 rounded-sm hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
          >
            <span>Descargar CV</span>
            <FiDownload className="text-base" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
