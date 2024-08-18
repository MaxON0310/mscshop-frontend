import { ImagePlus } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/utils/clsx'

import { Button } from '../../Button'

import styles from './ImageUpload.module.scss'
import { useUpload } from './useUpload'

interface ImageUploadProps {
	isDisabled: boolean
	onChange: (value: string[]) => void
	value: string[]
}

export function ImageUpload({ isDisabled, onChange, value }: ImageUploadProps) {
	const { handleButtonClick, isUploading, fileInputRef, handleFileChange } =
		useUpload(onChange)

	return (
		<div>
			<div className={styles.image_container}>
				{value.map(url => (
					<div key={url} className={styles.image_wrapper}>
						<Image src={url} alt='Картинка' fill />
					</div>
				))}
			</div>
			<Button
				type='button'
				disabled={isDisabled || isUploading}
				variant='secondary'
				onClick={handleButtonClick}
				className={cn(styles.upload, {
					'mt-4': value.length
				})}
			>
				<ImagePlus />
				Загрузить картинки
			</Button>
			<input
				type='file'
				multiple
				className='hidden'
				ref={fileInputRef}
				onChange={handleFileChange}
				disabled={isDisabled}
			/>
		</div>
	)
}
