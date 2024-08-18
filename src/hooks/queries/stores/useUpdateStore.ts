import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

import { storeService } from '@/services/store.service'

import { IStoreEdit } from '@/shared/types/store.interface'

export function useUpdateStore() {
	const params = useParams<{ storeId: string }>()

	const queryClient = useQueryClient()

	const { data: store } = useQuery({
		queryKey: ['store', params.storeId],
		queryFn: () => storeService.getById(params.storeId)
	})

	const { mutate: updateStore, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update store'],
		mutationFn: (data: IStoreEdit) =>
			storeService.update(params.storeId, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			toast.success('Магазин обновлён')
		},
		onError() {
			toast.error('Ошибка при обновлении магазина')
		}
	})

	return useMemo(
		() => ({ store, updateStore, isLoadingUpdate }),
		[store, updateStore, isLoadingUpdate]
	)
}
