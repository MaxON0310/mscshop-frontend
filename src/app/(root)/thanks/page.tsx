import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'

import { PUBLIC_URL } from '@/config/url.config'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import styles from '../hero/Hero.module.scss'

export const metadata: Metadata = {
	title: 'Спасибо за покупку',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>Спасибо за покупку</h1>
			<p className={styles.description}>
				Спасибо за ваш заказ! Мы ценим ваше доверие и приложим все
				усилия, чтобы доставить ваш заказ как можно скорее. Продавец свяжется с вами по электронной почте, которую Вы указали при регистрации.
			</p>
			<Link href={PUBLIC_URL.home()}>
				<Button variant='primary'>
					На главную
					<ArrowRight />
				</Button>
			</Link>
		</div>
	)
}
