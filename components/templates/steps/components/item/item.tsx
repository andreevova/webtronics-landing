import { forwardRef, memo } from 'react'
import { ItemProps } from './types'
import { Element, Container, Step, Title, Desc, Insert, BorderWrapper, Border } from './item.styled'

export const Item = memo(
	forwardRef<HTMLDivElement, ItemProps>((props, ref) => {
		const { step, title, desc, reverse = false, ...rest } = props

		return (
			<Element {...{ reverse, ...rest }} ref={ref}>
				<Container>
					<Step>Step {step}</Step>
					<Title>{title}</Title>
					<Desc>{desc}</Desc>

					<BorderWrapper {...{ reverse }}>
						<Border />
					</BorderWrapper>
				</Container>

				<Insert {...{ reverse }} />
			</Element>
		)
	}),
)

export type Item = HTMLDivElement
