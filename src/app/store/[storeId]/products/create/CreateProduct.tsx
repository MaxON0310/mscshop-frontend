'use client'

import { useGetCategories } from '@/hooks/queries/categories/useGetCategories'
import { useGetColors } from '@/hooks/queries/colors/useGetColors'

import { ProductForm } from '../ProductForm'

export function CreateProduct() {
	const { categories } = useGetCategories()
	const { colors } = useGetColors()

	return <ProductForm categories={categories || []} colors={colors || []} />
}
