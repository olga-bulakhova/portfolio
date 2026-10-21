import { ExternalLinkIcon, GithubIcon } from '@/shared/icons';
import { Button } from '@/shared/ui/Button/Button';

type ProjectLinksProps = {
  live: string;
  github?: string;
  title: string;
};

export const ProjectLinks = ({ live, github, title }: ProjectLinksProps) => (
  <div className="flex items-center gap-3">
    <Button
      href={live}
      target="_blank"
      variant="primary"
      className="flex-1 !py-2 text-xs"
    >
      Смотреть демо
      <ExternalLinkIcon className="h-3.5 w-3.5" />
    </Button>

    {github && (
      <Button
        href={github}
        target="_blank"
        variant="glass"
        className="h-9 w-9 !p-2"
        aria-label={`Исходный код проекта «${title}» на GitHub`}
      >
        <GithubIcon className="h-4 w-4 fill-current" />
      </Button>
    )}
  </div>
);
