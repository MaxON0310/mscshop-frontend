import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { STORE_URL } from '@/config/url.config'

import { categoryService } from '@/services/category.service'

export const useDeleteCategory = () => {
	const params = useParams<{ storeId: string; categoryId: string }>()
	const router = useRouter()

	const queryClient = useQueryClient()

	const { mutate: deleteCategory, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete category'],
		mutationFn: () => categoryService.delete(params.categoryId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get categories for store dashboard']
			})
			toast.success('Категория удалёна')
			router.push(STORE_URL.categories(params.storeId))
		},
		onError() {
			toast.error('Ошибка при удалении категории')
		}
	})

	return useMemo(
		() => ({ deleteCategory, isLoadingDelete }),
		[deleteCategory, isLoadingDelete]
	)
}
