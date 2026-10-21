import { motion } from 'framer-motion';
import { portfolioData } from '@/shared/constants/portfolioData';
import { Section } from '@/shared/ui/Section/Section';
import { useSmoothScroll } from '@/shared/lib/useSmoothScroll';
import { heroContainerVariants } from './model/heroAnimations';
import { HeroIntro } from './ui/HeroIntro';
import { HeroCard } from './ui/HeroCard';

export const Hero = () => {
  const { hero } = portfolioData;
  const scrollToSection = useSmoothScroll();

  return (
    <Section
      id="hero"
      className="flex items-center justify-center pt-24 md:pt-40"
    >
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12"
      >
        <HeroIntro
          name={hero.name}
          jobTitle={hero.jobTitle}
          title={hero.title}
          subRole={hero.subRole}
          onPrimaryClick={() => scrollToSection('projects')}
          onContactsClick={() => scrollToSection('contacts')}
        />
        <HeroCard about={hero.about} />
      </motion.div>
    </Section>
  );
};
