import { motion } from 'framer-motion';
import { Card } from '@/shared/ui/Card/Card';
import { SkillIcon } from '../model/skillIcons';
import { skillCardVariants } from '../model/skillsAnimations';
import { SkillTag } from './SkillTag';
import type { ISkillGroup } from '@/shared/constants/portfolioData'; // или из файла типов

type SkillCardProps = { group: ISkillGroup };

export const SkillCard = ({ group }: SkillCardProps) => {
  return (
    <motion.div variants={skillCardVariants} className="w-full">
      <Card className="flex h-full flex-col justify-between border-brand-primary/10 shadow-glass-md transition-all duration-300 hover:border-brand-primary/30 dark:border-white/5">
        <div className="space-y-6">
          {/* Категория + иконка */}
          <div className="flex items-center gap-3 border-b border-glass-border/30 pb-3">
            <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/10 p-2 text-brand-primary">
              <SkillIcon name={group.icon} className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-bold tracking-tight text-glass-text">
              {group.category}
            </h3>
          </div>

          {/* Облако тегов */}
          <div className="flex flex-wrap gap-2.5">
            {group.items.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
