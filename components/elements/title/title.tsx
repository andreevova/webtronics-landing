import { forwardRef } from 'react'
import { ElementProps } from '@/types'
import { Element } from './title.styled'

export const Title = forwardRef<HTMLHeadingElement, ElementProps<HTMLHeadingElement>>((props, ref) => {
	const { children, ...rest } = props

	return (
		<Element {...rest} ref={ref}>
			{children}
		</Element>
	)
})
