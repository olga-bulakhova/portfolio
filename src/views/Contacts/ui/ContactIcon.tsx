import type { ComponentType, SVGProps } from 'react';
import type { IContactItem } from '@/shared/constants/portfolioData';
import { TelegramIcon, MailIcon, PhoneIcon } from '@/shared/icons';

type ContactIconName = IContactItem['icon'];

const iconMap: Record<
  ContactIconName,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  telegram: TelegramIcon,
  mail: MailIcon,
  phone: PhoneIcon,
};

interface ContactIconProps {
  name: ContactIconName;
  className?: string;
}

export const ContactIcon = ({ name, className }: ContactIconProps) => {
  const Icon = iconMap[name];
  return <Icon className={className} />;
};
