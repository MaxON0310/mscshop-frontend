import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { CategoryForm } from '../CategoryForm'

export const metadata: Metadata = {
	title: 'Создать категорию',
	...NO_INDEX_PAGE
}

export default function CreateCategoryPage() {
	return <CategoryForm />
}
