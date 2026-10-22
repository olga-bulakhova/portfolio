import { motion } from 'framer-motion';
import type { IContactItem } from '@/shared/constants/portfolioData';
import { Badge } from '@/shared/ui';
import { ContactIcon } from './ContactIcon';

interface ContactLinkProps {
  contact: IContactItem;
}

export const ContactLink = ({ contact }: ContactLinkProps) => {
  const isExternal = /^https?:\/\//i.test(contact.url);

  return (
    <motion.a
      href={contact.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 350, damping: 18 }}
      className="group flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-glass-border bg-glass-bg p-5 text-glass-text shadow-glass-md glass-backdrop transition-all duration-200 hover:border-brand-primary/40"
    >
      <Badge className="transition-all duration-200 group-hover:border-brand-primary/30 group-hover:bg-brand-primary/10 group-hover:text-brand-primary">
        <ContactIcon name={contact.icon} />
      </Badge>

      <div className="min-w-0 overflow-hidden">
        <span className="mb-0.5 block text-[11px] font-bold tracking-wider text-glass-muted uppercase transition-colors group-hover:text-brand-primary">
          {contact.label}
        </span>
        <span className="block truncate text-sm font-black tracking-tight text-glass-text sm:text-base">
          {contact.value}
        </span>
      </div>
    </motion.a>
  );
};
