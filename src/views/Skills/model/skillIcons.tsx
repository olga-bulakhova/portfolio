import type { SkillIconName } from '@/shared/constants';
import { CodeIcon, LayoutIcon, ServerIcon, WrenchIcon } from '@/shared/icons';
import type { ComponentType, SVGProps } from 'react';

// Стабильная карта (объявлена вне рендера) — компоненты не пересоздаются
const ICONS: Record<SkillIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  code: CodeIcon,
  server: ServerIcon,
  layout: LayoutIcon,
  wrench: WrenchIcon,
};

type SkillIconProps = SVGProps<SVGSVGElement> & {
  name: string;
};

/** Выбирает иконку по имени; для неизвестного ключа — безопасный фолбэк. */
export const SkillIcon = ({ name, ...props }: SkillIconProps) => {
  const Icon = ICONS[name as keyof typeof ICONS] ?? CodeIcon;
  return <Icon {...props} />;
};
