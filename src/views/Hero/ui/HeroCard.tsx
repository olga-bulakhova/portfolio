import { motion } from 'framer-motion';
import { Card } from '@/shared/ui/Card/Card';
import { heroItemVariants } from '../model/heroAnimations';

type HeroCardProps = {
  about: string;
};

export const HeroCard = ({ about }: HeroCardProps) => (
  <motion.div
    variants={heroItemVariants}
    className="group relative w-full lg:col-span-5"
  >
    {/* Декоративное неоновое свечение за карточкой */}
    <div
      aria-hidden="true"
      className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary opacity-30 blur-2xl transition duration-1000 group-hover:opacity-40 group-hover:duration-200"
    />

    <Card className="relative space-y-4 border-brand-primary/20 p-8 shadow-glass-glow dark:border-white/10">
      <h3 className="flex items-center gap-2 text-xl font-bold tracking-tight text-glass-text">
        <span className="text-brand-primary">#</span> Обо мне
      </h3>
      <p className="text-sm leading-relaxed font-normal text-glass-muted md:text-base">
        {about}
      </p>

      {/* Микро-виджет статуса */}
      <div className="grid grid-cols-2 gap-4 border-t border-glass-border/30 pt-4 text-xs">
        <div>
          <span className="mb-0.5 block text-glass-muted">Локация:</span>
          <span className="font-semibold text-glass-text">Беларусь, Минск</span>
        </div>
        <div>
          <span className="mb-0.5 block text-glass-muted">Статус:</span>
          <span className="flex items-center gap-2 font-semibold text-brand-primary">
            <span className="inline-block h-1.5 w-1.5 animate-ping rounded-full bg-emerald-500" />
            Open to offers
          </span>
        </div>
      </div>
    </Card>
  </motion.div>
);
