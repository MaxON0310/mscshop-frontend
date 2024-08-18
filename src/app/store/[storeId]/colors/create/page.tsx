import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { CreateColor } from './CreateColor'

export const metadata: Metadata = {
	title: 'Создание цвета',
	...NO_INDEX_PAGE
}

export default function CreateColorPage() {
	return <CreateColor />
}
