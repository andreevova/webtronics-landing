import { DivElementProps } from '@/types'

export interface ItemProps extends DivElementProps<'ref'> {
	title: string
	desc: string
}
