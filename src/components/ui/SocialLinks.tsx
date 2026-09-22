import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "../../data/profile";
export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href={profile.github} target="_blank" rel="noreferrer">
        <FaGithub aria-hidden="true" /> GitHub{" "}
        <FiArrowUpRight aria-hidden="true" />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        <FaLinkedinIn aria-hidden="true" /> LinkedIn{" "}
        <FiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  );
}
