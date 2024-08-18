'use client'

import { Catalog } from '@/components/ui/catalog/Catalog'

import { useProfile } from '@/hooks/useProfile'

export function Favorites() {
	const { user } = useProfile()

	if (!user) return null

	return (
		<div className='my-6'>
			<Catalog title='Любименькое)))' products={user.favorites} />
		</div>
	)
}
