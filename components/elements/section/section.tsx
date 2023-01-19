import { ElementProps } from '@/types'
import { forwardRef } from 'react'
import { Element } from './section.styled'

export const Section = forwardRef<HTMLElement, ElementProps<HTMLElement>>((props, ref) => {
	const { children, ...rest } = props

	return (
		<Element {...rest} ref={ref}>
			{children}
		</Element>
	)
})
