import Link from 'next/link'

import { PUBLIC_URL } from '@/config/url.config'

import { IProduct } from '@/shared/types/product.interface'

import { formatPrice } from '@/utils/string/format-price'
import { getReviewWordWithEnding } from '@/utils/string/get-review-word-with-ending'

import { AddToCartButton } from './AddToCartButton'
import { FavoriteButton } from './FavoriteButton'
import styles from './ProductInfo.module.scss'

interface ProductInfoProps {
	product: IProduct
}

export function ProductInfo({ product }: ProductInfoProps) {
	const rating =
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0

	return (
		<div className={styles.product_info}>
			<h1 className={styles.title}>{product.title}</h1>
			<div className={styles.price}>{formatPrice(product.price)}</div>
			<hr />
			<p className={styles.description}>{product.description}</p>
			<hr />
			<div className={styles.label}>
				<h3>Цвет: </h3>
				<div
					className={styles.color}
					style={{
						backgroundColor: product.color.value
					}}
				/>
			</div>
			<div className={styles.label}>
				<h3>Категория: </h3>
				<Link
					className='text-sm'
					href={PUBLIC_URL.category(product.category.id)}
				>
					{product.category.title}
				</Link>
			</div>
			<div className={styles.label}>
				<h3>Средний рейтинг: </h3>
				<div className='text-sm'>
					⭐ {rating.toFixed(1)} |{' '}
					{getReviewWordWithEnding(product.reviews.length)}
				</div>
			</div>
			<hr />
			<div className={styles.actions}>
				<AddToCartButton product={product} />
				<FavoriteButton product={product} />
			</div>
		</div>
	)
}
