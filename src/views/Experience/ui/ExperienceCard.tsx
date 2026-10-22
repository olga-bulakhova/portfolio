import { motion } from 'framer-motion';
import { type IExperience } from '@/shared/constants/portfolioData';
import { Card } from '@/shared/ui/Card/Card';
import { TimelineDot } from './TimelineDot';
import { ExperienceBullets } from './ExperienceBullets';
import { ExperienceSkills } from './ExperienceSkills';
import { cardVariants } from '../model/experienceAnimation';
import { Tag } from '@/shared/ui';

interface ExperienceCardProps {
  item: IExperience;
  index: number;
}

export const ExperienceCard = ({ item, index }: ExperienceCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative mb-12 flex w-full flex-col items-center justify-between last:mb-0 md:flex-row ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Сетка-заглушка для центрирования на десктопе */}
      <div
        aria-hidden="true"
        className="hidden w-full md:block md:w-[calc(50%-2rem)]"
      />

      <TimelineDot className="hidden md:block" />

      {/* Контентная карточка. custom={index} управляет направлением вылета */}
      <motion.div
        variants={cardVariants}
        custom={index}
        className="w-full md:w-[calc(50%-2rem)] md:pl-0 md:pl-12"
      >
        <Card className="border-brand-primary/10 p-6 transition-colors duration-300 hover:border-brand-primary/30">
          <Tag> {item.period}</Tag>

          <div className="mt-3 mb-4 space-y-1">
            <h3 className="text-lg font-black tracking-tight text-glass-text md:text-xl">
              {item.role}
            </h3>
            <p className="text-sm font-semibold text-brand-secondary">
              {item.company}
            </p>
          </div>

          <ExperienceBullets items={item.description} />
          <ExperienceSkills skills={item.skills} />
        </Card>
      </motion.div>
    </div>
  );
};
