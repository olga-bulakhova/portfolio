type ProjectTechTagsProps = {
  technologies: readonly string[];
};

export const ProjectTechTags = ({ technologies }: ProjectTechTagsProps) => (
  <div className="flex flex-wrap gap-1.5">
    {technologies.map((tech) => (
      <span
        key={tech}
        className="cursor-default rounded-lg border border-brand-primary/10 bg-brand-primary/5 px-2.5 py-1 text-[11px] font-semibold text-brand-primary"
      >
        {tech}
      </span>
    ))}
  </div>
);
