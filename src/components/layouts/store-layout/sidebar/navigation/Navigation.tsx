'use client'

import {
	Album,
	BarChart,
	FolderKanban,
	PaintBucket,
	Settings,
	Star
} from 'lucide-react'
import { useParams } from 'next/navigation'

import { STORE_URL } from '@/config/url.config'

import { MenuItem } from './MenuItem'
import styles from './Navigation.module.scss'
import { IMenuItem } from './menu.interface'

export function Navigation() {
	const params = useParams<{ storeId: string }>()

	const routes: IMenuItem[] = [
		{
			icon: BarChart,
			link: STORE_URL.home(params.storeId),
			value: 'Статистика'
		},
		{
			icon: FolderKanban,
			link: STORE_URL.products(params.storeId),
			value: 'Товары'
		},
		{
			icon: Album,
			link: STORE_URL.categories(params.storeId),
			value: 'Категории'
		},
		{
			icon: PaintBucket,
			link: STORE_URL.colors(params.storeId),
			value: 'Цвета'
		},
		{
			icon: Star,
			link: STORE_URL.reviews(params.storeId),
			value: 'Отзывы'
		},
		{
			icon: Settings,
			link: STORE_URL.settings(params.storeId),
			value: 'Настройки магазина'
		}
	]

	return (
		<div className={styles.wrapper}>
			<div className={styles.navigation}>
				{routes.map(route => (
					<MenuItem key={route.value} route={route} />
				))}
			</div>
		</div>
	)
}
