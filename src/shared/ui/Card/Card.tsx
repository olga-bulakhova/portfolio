import type { ReactNode } from 'react'

interface CardProps {
	children: ReactNode
	className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
	return (
		<div
			className={`
        bg-glass-bg 
        border border-glass-border 
        glass-backdrop 
        rounded-2xl 
        shadow-glass-md 
        p-6 
        text-glass-text 
        transition-shadow duration-300 
        hover:shadow-glass-sm
        ${className}
      `}
		>
			{children}
		</div>
	)
}
