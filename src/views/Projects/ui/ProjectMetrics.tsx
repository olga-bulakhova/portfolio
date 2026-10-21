import { CheckCircleIcon } from '@/shared/icons';

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
          <li
            key={metric}
            className="flex items-start gap-2 text-xs leading-relaxed text-glass-muted md:text-sm"
          >
            <span
              aria-hidden="true"
              className="pt-0.5 font-bold text-brand-primary select-none"
            >
              •
            </span>
            <span>{metric}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
