import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { reviewService } from '@/services/review.service'

import { IReviewInput } from '@/shared/types/review.interface'

export const useCreateReview = (storeId: string) => {
	const params = useParams<{ id: string }>()

	const queryClient = useQueryClient()

	const { mutate: createReview, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create review'],
		mutationFn: (data: IReviewInput) =>
			reviewService.create(data, params.id, storeId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['product']
			})
			toast.success('Отзыв создан')
		},
		onError() {
			toast.error('Ошибка при создании отзыва')
		}
	})

	return useMemo(
		() => ({
			createReview,
			isLoadingCreate
		}),
		[createReview, isLoadingCreate]
	)
}
