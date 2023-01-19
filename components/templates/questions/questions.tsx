import { forwardRef } from 'react'
import { ElementProps } from '@/types'
import { Element, Title, Grid, Side, Text, QuestionIcon, Item } from './questions.styled'

export const QuestionsTemplate = forwardRef<HTMLElement, ElementProps<HTMLElement>>((props, ref) => {
	return (
		<Element {...props} ref={ref}>
			<Title>Frequently Asked Questions</Title>

			<Grid>
				<Side>
					<Text>Do you have any kind of questions? We are here to help.</Text>
					<QuestionIcon src='/question.png' />
				</Side>

				<Side>
					{[...Array(5)].map((_, i) => (
						<Item
							title='What is the price?'
							desc='Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
							key={i}
						/>
					))}
				</Side>
			</Grid>
		</Element>
	)
})
