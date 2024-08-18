import { axiosWithAuth } from '@/api/api.interceptors'

import { API_URL } from '@/config/api.config'

import {
	IMainStatistics,
	IMiddleStatistics
} from '@/shared/types/statistics.interface'

class StatisticsService {
	async getMain(storeId: string) {
		const { data } = await axiosWithAuth<IMainStatistics[]>({
			url: API_URL.statistics(`/main/${storeId}`),
			method: 'GET'
		})

		return data
	}

	async getMiddle(storeId: string) {
		const { data } = await axiosWithAuth<IMiddleStatistics>({
			url: API_URL.statistics(`/middle/${storeId}`),
			method: 'GET'
		})

		return data
	}
}

export const statisticsService = new StatisticsService()
