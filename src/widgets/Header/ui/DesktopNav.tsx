import { motion, useReducedMotion } from 'framer-motion';
import { NAV_LINKS } from '../model/navLinks';

type DesktopNavProps = {
  activeSection: string;
  onLinkClick: (id: string) => void;
};

export const DesktopNav = ({ activeSection, onLinkClick }: DesktopNavProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <nav className="hidden items-center gap-1 md:flex">
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.id;
        return (
          <button
            key={link.id}
            type="button"
            onClick={() => onLinkClick(link.id)}
            aria-current={isActive ? 'true' : undefined}
            className={`relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'text-brand-primary'
                : 'text-glass-muted hover:text-glass-text'
            }`}
          >
            {link.label}
            {isActive && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute right-4 bottom-0 left-4 h-0.5 bg-brand-primary"
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 380, damping: 30 }
                }
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};
