import { ElementProps } from '@/types'

export interface ItemProps extends ElementProps<HTMLLIElement, 'ref'> {
	src: string
	name: string
	desc: string
}
