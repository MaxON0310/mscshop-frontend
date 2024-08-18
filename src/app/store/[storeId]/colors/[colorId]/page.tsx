import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { ColorEdit } from './ColorEdit'

export const metadata: Metadata = {
	title: 'Настройки цвета',
	...NO_INDEX_PAGE
}

export default function ColorEditPage() {
	return <ColorEdit />
}
