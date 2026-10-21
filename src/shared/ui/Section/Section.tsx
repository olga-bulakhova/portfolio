import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
	children: ReactNode
	id: string // Необходим для ScrollSpy и навигации в Header
	title?: string // Опциональный заголовок секции
	subtitle?: string // Опциональный подзаголовок секции
	className?: string
}

export const Section = ({ children, id, title, subtitle, className = '' }: SectionProps) => {
	return (
		<motion.section
			id={id}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }} // Анимация сработает один раз при скролле
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className={`py-20 md:py-28 px-4 max-w-6xl mx-auto w-full ${className}`}
		>
			{/* Шапка секции генерируется автоматически, если передан заголовок */}
			{(title || subtitle) && (
				<div className='text-center mb-12 md:mb-16 space-y-3'>
					{title && <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-glass-text'>{title}</h2>}
					{subtitle && <p className='text-sm md:text-base text-glass-muted max-w-2xl mx-auto'>{subtitle}</p>}
				</div>
			)}

			<div>{children}</div>
		</motion.section>
	)
}
