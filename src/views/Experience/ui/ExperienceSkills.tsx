import { Tag } from '@/shared/ui';

interface ExperienceSkillsProps {
  skills: readonly string[];
}

export const ExperienceSkills = ({ skills }: ExperienceSkillsProps) => {
  if (skills.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5 border-t border-glass-border/30 pt-4">
      {skills.map((skill) => (
        <Tag key={skill}>{skill}</Tag>
      ))}
    </div>
  );
};
