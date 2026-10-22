import { motion } from 'framer-motion';
import { portfolioData } from '@/shared/constants/portfolioData';
import { Section } from '@/shared/ui/Section/Section';
import { ExperienceCard } from './ui/ExperienceCard';
import { TimelineLine } from './ui/TimelineLine';
import { containerVariants } from './model/experienceAnimation';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <Section
      id="experience"
      title="Опыт работы"
      subtitle="Мой путь во фронтенде: продуктовые компании, фриланс и разные стеки — от WordPress до React."
      className="pt-22 md:pt-40"
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <TimelineLine className="hidden md:block" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex w-full flex-col"
        >
          {experience.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
