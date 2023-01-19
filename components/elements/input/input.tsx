import { forwardRef } from 'react'
import { InputProps } from './types'
import { Element, Container, Inp, ErrorText } from './input.styled'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { style, className, disabled = false, error, ...rest } = props

	return (
		<Element {...{ style, className }}>
			<Container {...{ disabled, error: !!error }}>
				<Inp {...{ disabled, error: !!error, ...rest }} ref={ref} />
			</Container>

			{!!error && <ErrorText>{error}</ErrorText>}
		</Element>
	)
})
