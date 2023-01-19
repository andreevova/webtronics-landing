import React, { forwardRef } from 'react'
import { ButtonElementProps } from '@/types'
import { Element } from './button.styled'

export const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
	const { children, ...rest } = props

	return (
		<Element {...rest} ref={ref}>
			{children}
		</Element>
	)
})
