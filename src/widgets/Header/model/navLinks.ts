export type NavLink = {
  id: string;
  label: string;
};

export const CONTACTS_ID = 'contacts';

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'hero', label: 'Обо мне' },
  { id: 'skills', label: 'Навыки' },
  { id: 'projects', label: 'Проекты' },
  { id: 'experience', label: 'Опыт' },
] as const;


