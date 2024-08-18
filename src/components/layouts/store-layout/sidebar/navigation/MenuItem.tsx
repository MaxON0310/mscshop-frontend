'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/clsx'

import styles from './Navigation.module.scss'
import { IMenuItem } from './menu.interface'

interface MenuItemProps {
	route: IMenuItem
}

export function MenuItem({ route }: MenuItemProps) {
	const pathname = usePathname()

	return (
		<Link
			href={route.link}
			className={cn(styles.route, {
				[styles.active]: pathname === route.link
			})}
		>
			<route.icon />
			{route.value}
		</Link>
	)
}
