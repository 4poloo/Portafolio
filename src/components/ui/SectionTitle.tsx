interface SectionTitleProps {
  title: string;
  eyebrow?: string;
  description?: string;
}
export default function SectionTitle({
  title,
  eyebrow,
  description,
}: SectionTitleProps) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
