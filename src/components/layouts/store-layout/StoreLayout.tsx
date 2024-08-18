import type { PropsWithChildren } from 'react'

import styles from './StoreLayout.module.scss'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

export function StoreLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.layout}>
				<div className={styles.sidebar}>
					<Sidebar />
				</div>
				<div className={styles.header}>
					<Header />
				</div>
				<main>{children}</main>
			</div>
		</div>
	)
}
