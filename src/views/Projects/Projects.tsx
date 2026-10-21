import { motion } from 'framer-motion';
import { portfolioData } from '@/shared/constants/portfolioData';
import { Section } from '@/shared/ui/Section/Section';
import {
  projectsGridVariants,
  projectCardVariants,
} from './model/projectsAnimations';
import { ProjectCard } from './ui/ProjectCard';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <Section
      id="projects"
      title="Мои проекты"
      subtitle="Коммерческие платформы и высокопроизводительные веб-приложения. Каждая работа спроектирована с упором на чистую архитектуру и измеряемые результаты."
      className="pt-22 md:pt-40"
    >
      <motion.div
        variants={projectsGridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={projectCardVariants}
            className="flex w-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
