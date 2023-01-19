import { DivElementProps } from '@/types'

export interface GalleryProps extends Omit<DivElementProps<'ref'>, 'onChange'> {
	data: string[]
	onChange?(index: number): void
}
