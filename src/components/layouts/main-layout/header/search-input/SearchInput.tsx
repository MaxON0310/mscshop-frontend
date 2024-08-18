'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/form-elements/Input'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './SearchInput.module.scss'

export function SearchInput() {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const router = useRouter()

	return (
		<div className={styles.form}>
			<Input
				placeholder='Поиск товаров'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<Button
				variant='primary'
				onClick={() =>
					router.push(
						PUBLIC_URL.explorer(`?searchTerm=${searchTerm}`)
					)
				}
			>
				<Search />
			</Button>
		</div>
	)
}
