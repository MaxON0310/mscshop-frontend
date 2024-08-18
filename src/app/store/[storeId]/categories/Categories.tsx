'use client'

import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { DataTable } from '@/components/ui/data-table/DataTable'
import DataTableLoading from '@/components/ui/data-table/DataTableLoading'

import { STORE_URL } from '@/config/url.config'

import { useGetCategories } from '@/hooks/queries/categories/useGetCategories'

import { formatDate } from '@/utils/date/format-date'

import styles from '../Store.module.scss'

import { ICategoryColumn, categoryColumns } from './CategoryColumns'

export function Categories() {
	const params = useParams<{ storeId: string }>()

	const { categories, isLoading } = useGetCategories()

	const formattedCategories: ICategoryColumn[] = categories
		? categories.map(category => ({
				id: category.id,
				createdAt: formatDate(category.createdAt),
				title: category.title,
				storeId: category.storeId
			}))
		: []

	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<DataTableLoading />
			) : (
				<>
					<div className={styles.header}>
						<Heading
							title={`Категории (${categories?.length})`}
							description='Все категории вашего магазина'
						/>
						<div className={styles.buttons}>
							<Link
								href={STORE_URL.categoryCreate(params.storeId)}
							>
								<Button variant='primary'>
									<Plus />
									Создать
								</Button>
							</Link>
						</div>
					</div>
					<div className={styles.table}>
						<DataTable
							columns={categoryColumns}
							data={formattedCategories}
							filterKey='title'
						/>
					</div>
				</>
			)}
		</div>
	)
}
