import { motion } from 'framer-motion';
import { portfolioData } from '@/shared/constants/portfolioData';
import { Section } from '@/shared/ui/Section/Section';
import { ContactLink } from './ui/ContactLink';
import { containerVariants, itemVariants } from './model/contactsAnimation';

export const Contacts = () => {
  const { contacts } = portfolioData;

  return (
    <Section
      id="contacts"
      title="Связаться со мной"
      subtitle="Открыта к интересным проектам и сотрудничеству. Выберите удобный способ связи:"
      className="py-22 md:py-40"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid w-full grid-cols-1 gap-4 pt-4 sm:grid-cols-3"
      >
        {contacts.map((contact) => (
          <motion.div
            key={contact.id}
            variants={itemVariants}
            className="flex w-full"
          >
            <ContactLink contact={contact} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
