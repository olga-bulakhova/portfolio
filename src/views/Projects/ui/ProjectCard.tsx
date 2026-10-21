import { motion } from 'framer-motion';
import { Card } from '@/shared/ui/Card/Card';
import type { IProject } from '@/shared/constants';
import { CATEGORY_LABELS } from '../model/categoryLabels';
import { ProjectMetrics } from './ProjectMetrics';
import { ProjectTechTags } from './ProjectTechTags';
import { ProjectLinks } from './ProjectLinks';

type ProjectCardProps = {
  project: IProject;
};

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="flex h-full w-full"
  >
    <Card className="flex w-full flex-col justify-between border-brand-primary/10 p-6 transition-colors duration-300 hover:border-brand-primary/30 md:p-8">
      <div className="space-y-5">
        {/* Категория + id */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest text-brand-primary uppercase">
            {CATEGORY_LABELS[project.category]}
          </span>
          <span className="text-sm font-semibold text-glass-muted">
            #{project.id}
          </span>
        </div>

        {/* Заголовки */}
        <div className="space-y-1">
          <h3 className="text-xl font-black tracking-tight text-glass-text md:text-2xl">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-brand-primary/90">
            {project.subtitle}
          </p>
        </div>

        {/* Описание */}
        <p className="text-sm leading-relaxed font-normal text-glass-muted md:text-base">
          {project.description}
        </p>

        {/* Метрики */}
        {project.metrics && <ProjectMetrics metrics={project.metrics} />}
      </div>

      {/* Стек + ссылки */}
      <div className="mt-6 space-y-6 border-t border-glass-border/30 pt-6">
        <ProjectTechTags technologies={project.technologies} />
        <ProjectLinks
          live={project.links.live}
          github={project.links.github}
          title={project.title}
        />
      </div>
    </Card>
  </motion.div>
);
