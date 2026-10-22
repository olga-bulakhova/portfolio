import { Tag } from '@/shared/ui/Tag/Tag';

type ProjectTechTagsProps = {
  technologies: readonly string[];
};

export const ProjectTechTags = ({ technologies }: ProjectTechTagsProps) => (
  <div className="flex flex-wrap gap-1.5">
    {technologies.map((tech) => (
      <Tag key={tech}>{tech}</Tag>
    ))}
  </div>
);
