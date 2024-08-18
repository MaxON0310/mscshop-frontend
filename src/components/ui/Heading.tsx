import { cn } from '@/utils/clsx'

interface HeadingProps {
	title: string
	description?: string
	className?: string
}

export function Heading({ title, description, className }: HeadingProps) {
	return (
		<div className='space-y-1'>
			<h2 className={cn('text-2xl font-medium', className)}>{title}</h2>
			{description && (
				<p className='text-sm text-muted-foreground'>{description}</p>
			)}
		</div>
	)
}
