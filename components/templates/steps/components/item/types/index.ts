import { DivElementProps } from '@/types'

export interface ItemProps extends DivElementProps<'ref'> {
	step: number
	title: string
	desc: string
	reverse?: boolean
}
