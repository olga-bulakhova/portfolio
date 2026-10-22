import { CheckCircleIcon } from '@/shared/icons';
import { ListItem } from '@/shared/ui';

type ProjectMetricsProps = {
  metrics: readonly string[];
};

export const ProjectMetrics = ({ metrics }: ProjectMetricsProps) => {
  if (metrics.length === 0) return null;

  return (
    <div className="space-y-2.5 pt-2">
      <h4 className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-glass-text uppercase">
        <CheckCircleIcon className="h-4 w-4 text-brand-primary" />
        Ключевые результаты и фичи:
      </h4>
      <ul className="space-y-2">
        {metrics.map((metric) => (
          <ListItem key={metric}>{metric}</ListItem>
        ))}
      </ul>
    </div>
  );
};
