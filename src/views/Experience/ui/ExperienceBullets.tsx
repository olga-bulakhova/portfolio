import { ListItem } from '@/shared/ui';

interface ExperienceBulletsProps {
  items: readonly string[];
}

export const ExperienceBullets = ({ items }: ExperienceBulletsProps) => (
  <ul className="mb-5 space-y-2">
    {items.map((bullet) => (
      <ListItem key={bullet}>{bullet}</ListItem>
    ))}
  </ul>
);
