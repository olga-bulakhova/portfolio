import { motion } from 'framer-motion';
import { portfolioData } from '@/shared/constants/portfolioData';
import { Section } from '@/shared/ui/Section/Section';
import { skillsGridVariants } from './model/skillsAnimations';
import { SkillCard } from './ui/SkillCard';

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <Section
      id="skills"
      title="Технологический стек"
      subtitle="Инструменты и технологии, которые я использую в работе."
      className="pt-22 md:pt-40"
    >
      <motion.div
        variants={skillsGridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group) => (
          <SkillCard key={group.id} group={group} />
        ))}
      </motion.div>
    </Section>
  );
};
