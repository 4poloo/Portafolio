import { motion } from "framer-motion";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

function ExperienceItem({ role, company, period, description }: ExperienceItemProps) {
  return (
    <motion.li
      className="relative pl-6 pb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.4 }}
    >
      <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-neutral-100 border border-neutral-700" />
      <div className="space-y-1">
        <h3 className="text-base font-semibold">
          {role} ·{" "}
          <span className="font-normal text-neutral-300">{company}</span>
        </h3>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          {period}
        </p>
        <p className="text-sm text-neutral-300">{description}</p>
      </div>
    </motion.li>
  );
}

export default ExperienceItem;
