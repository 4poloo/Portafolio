import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

interface SocialLinksProps {
  linkedinUrl?: string;
  githubUrl?: string;
  cvUrl?: string;
}

function SocialLinks({
  linkedinUrl = "https://www.linkedin.com/in/maximiliano-olave-bastidas-450960351/",
  githubUrl = "https://github.com/4poloo",
  cvUrl = "/Maximiliano%20Olave%20CV.pdf",
}: SocialLinksProps) {
  const iconBase =
    "h-9 w-9 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-700 hover:border-neutral-400 hover:-translate-y-0.5 transition-all";

  return (
    <div className="flex items-center gap-4 mt-4">
      <a href={linkedinUrl} target="_blank" rel="noreferrer" className={iconBase}>
        <FaLinkedin className="text-xl text-sky-500" />
      </a>
      <a href={githubUrl} target="_blank" rel="noreferrer" className={iconBase}>
        <FaGithub className="text-xl" />
      </a>
      <a
        href={cvUrl}
        download="Maximiliano Olave CV.pdf"
        className={iconBase}
      >
        <FiFileText className="text-xl" />
      </a>
    </div>
  );
}

export default SocialLinks;
