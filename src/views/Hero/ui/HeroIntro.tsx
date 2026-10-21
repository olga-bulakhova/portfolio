import { motion } from 'framer-motion';
import { Button } from '@/shared/ui/Button/Button';
import { ArrowRightIcon } from '@/shared/icons/ArrowRightIcon';
import { heroItemVariants } from '../model/heroAnimations';

type HeroIntroProps = {
  name: string;
  title: string;
  subRole: string;
  onPrimaryClick: () => void;
  onContactsClick: () => void;
};

export const HeroIntro = ({
  name,
  title,
  subRole,
  onPrimaryClick,
  onContactsClick,
}: HeroIntroProps) => (
  <div className="space-y-6 text-left lg:col-span-7">
    {/* Приветственный тег */}
    <motion.div
      variants={heroItemVariants}
      className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-primary uppercase"
    >
      <span className="h-2 w-2 animate-pulse rounded-full bg-brand-primary" />
      {name}
    </motion.div>

    {/* Заголовок */}
    <motion.h1
      variants={heroItemVariants}
      className="text-4xl leading-[1.1] font-black tracking-tight text-glass-text sm:text-5xl md:text-6xl"
    >
      <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent drop-shadow-sm">
        {title}
      </span>
    </motion.h1>

    {/* Подзаголовок / стек */}
    <motion.p
      variants={heroItemVariants}
      className="text-lg font-medium text-brand-primary md:text-xl"
    >
      {subRole}
    </motion.p>

    {/* CTA */}
    <motion.div
      variants={heroItemVariants}
      className="flex flex-wrap gap-4 pt-2"
    >
      <Button variant="primary" className="group" onClick={onPrimaryClick}>
        Смотреть проекты
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
      <Button variant="glass" onClick={onContactsClick}>
        Контакты
      </Button>
    </motion.div>
  </div>
);
