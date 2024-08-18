'use client'

import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { DataTable } from '@/components/ui/data-table/DataTable'
import DataTableLoading from '@/components/ui/data-table/DataTableLoading'

import { STORE_URL } from '@/config/url.config'

import { useGetColors } from '@/hooks/queries/colors/useGetColors'

import { IColor } from '@/shared/types/color.interface'

import { formatDate } from '@/utils/date/format-date'

import styles from '../Store.module.scss'

import { colorColumns } from './ColorColumns'

export function Colors() {
	const params = useParams<{ storeId: string }>()

	const { colors, isLoading } = useGetColors()

	const formattedColors: IColor[] = colors
		? colors.map(color => ({
				id: color.id,
				createdAt: formatDate(color.createdAt),
				name: color.name,
				value: color.value,
				storeId: color.storeId
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
							title={`Цвета (${colors?.length})`}
							description='Все цвета вашего магазина'
						/>
						<div className={styles.buttons}>
							<Link href={STORE_URL.colorCreate(params.storeId)}>
								<Button variant='primary'>
									<Plus />
									Создать
								</Button>
							</Link>
						</div>
					</div>
					<div className={styles.table}>
						<DataTable
							columns={colorColumns}
							data={formattedColors}
							filterKey='name'
						/>
					</div>
				</>
			)}
		</div>
	)
}
