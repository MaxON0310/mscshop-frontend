import { type VariantProps, cva } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'

import { cn } from '@/utils/clsx'

const iconVariants = cva('animate-spin text-muted-foreground', {
	variants: {
		size: {
			default: 'size-9',
			sm: 'size-6'
		}
	},
	defaultVariants: {
		size: 'default'
	}
})

type TypeIconVariants = VariantProps<typeof iconVariants>

export const Loader = ({ size }: TypeIconVariants) => {
	return <LoaderCircle className={cn(iconVariants({ size }))} />
}
