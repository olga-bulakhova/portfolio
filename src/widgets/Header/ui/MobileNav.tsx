import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/shared/ui/Button/Button';
import { NAV_LINKS, CONTACTS_ID } from '../model/navLinks';

type MobileNavProps = {
  id: string;
  isOpen: boolean;
  activeSection: string;
  onLinkClick: (id: string) => void;
};

export const MobileNav = ({
  id,
  isOpen,
  activeSection,
  onLinkClick,
}: MobileNavProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        id={id}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="w-full overflow-hidden border-b border-glass-border bg-glass-bg glass-backdrop md:hidden"
      >
        <div className="flex flex-col space-y-2 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onLinkClick(link.id)}
              aria-current={activeSection === link.id ? 'true' : undefined}
              className={`w-full cursor-pointer rounded-xl px-3 py-2 text-left text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-brand-primary/10 text-brand-primary'
                  : 'text-glass-muted hover:bg-glass-border/20 hover:text-glass-text'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="border-t border-glass-border/50 pt-4">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => onLinkClick(CONTACTS_ID)}
            >
              Связаться
            </Button>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
