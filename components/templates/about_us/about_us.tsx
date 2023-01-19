import { forwardRef } from 'react'
import { ElementProps } from '@/types'
import { data } from './constants'
import { Element, Title, Container, Mentors, Subtitle, Lines, Grid, Item, Info, Text, FrontText } from './about_us.styled'

export const AboutUsTemplate = forwardRef<HTMLElement, ElementProps<HTMLElement>>((props, ref) => {
	return (
		<Element {...props} ref={ref}>
			<Title>About Us</Title>

			<Container>
				<Mentors>
					<Subtitle>Mentors</Subtitle>

					<Lines />

					<Grid>
						{data.map(({ avatar, name, desc }) => (
							<Item src={avatar} {...{ name, desc }} key={name} />
						))}
					</Grid>
				</Mentors>

				<Info>
					<Text>
						Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path
						will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.
					</Text>

					<FrontText />
				</Info>
			</Container>
		</Element>
	)
})
