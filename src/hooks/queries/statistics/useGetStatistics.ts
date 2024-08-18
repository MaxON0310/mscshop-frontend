import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { statisticsService } from '@/services/statistics.service'

export const useGetStatistics = () => {
	const params = useParams<{ storeId: string }>()

	const { data: main } = useQuery({
		queryKey: ['get main statistics'],
		queryFn: () => statisticsService.getMain(params.storeId)
	})

	const { data: middle } = useQuery({
		queryKey: ['get middle statistics'],
		queryFn: () => statisticsService.getMiddle(params.storeId)
	})

	return useMemo(() => ({ main, middle }), [main, middle])
}
