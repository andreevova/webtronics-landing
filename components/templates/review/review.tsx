import { forwardRef, useState } from 'react'
import { ElementProps } from '@/types'
import { data, galleryData } from './constants'
import { Element, Title, Container, Main, Subtitle, Text, Gallery } from './review.styled'

export const ReviewTemplate = forwardRef<HTMLElement, ElementProps<HTMLElement>>((props, ref) => {
	const [active, setActive] = useState(0)

	return (
		<Element {...props} ref={ref}>
			<Title>Review</Title>

			<Container>
				<Main>
					<Subtitle>{data[active].title}</Subtitle>
					<Text>{data[active].desc}</Text>
				</Main>

				<Gallery data={galleryData} onChange={setActive} />
			</Container>
		</Element>
	)
})
