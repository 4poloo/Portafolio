interface SectionTitleProps {
  id?: string;
  title: string;
}

function SectionTitle({ id, title }: SectionTitleProps) {
  return (
    <div id={id} className="w-full border-t border-neutral-800 pt-10 mt-10">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
