import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { categoryService } from '@/services/category.service'

export const useGetCategories = () => {
	const params = useParams<{ storeId: string }>()

	const { data: categories, isLoading } = useQuery({
		queryKey: ['get categories for store dashboard'],
		queryFn: () => categoryService.getByStoreId(params.storeId)
	})

	return useMemo(
		() => ({
			categories,
			isLoading
		}),
		[categories, isLoading]
	)
}
