import type { SVGProps } from 'react';

export const TelegramIcon = ({
  className = 'h-5 w-5',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
    />
  </svg>
);
