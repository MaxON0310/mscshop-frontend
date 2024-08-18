import type { Metadata } from 'next'

import { productService } from '@/services/product.service'

import { Explorer } from './Explorer'

export const metadata: Metadata = {
	title: 'Каталог товаров'
}

export const revalidate = 60

async function getProducts() {
	const data = await productService.getAll()

	return data
}

export default async function ExplorerPage() {
	const data = await getProducts()

	return <Explorer products={data} />
}
