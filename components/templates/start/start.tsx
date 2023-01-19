import { forwardRef } from 'react'
import { ElementProps } from '@/types'
import { Element, Grid, Title, Text, Button, Subtitle } from './start.styled'

export const StartTemplate = forwardRef<HTMLElement, ElementProps<HTMLElement>>((props, ref) => {
	return (
		<Element {...props} ref={ref}>
			<Grid columns={['1fr', '350px']}>
				<Title>Front-End</Title>
				<Text>
					Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).{' '}
				</Text>
			</Grid>

			<Grid columns={['350px', '1fr']}>
				<Button>Start my career change</Button>
				<Title>Developer</Title>
			</Grid>

			<Subtitle>Courses</Subtitle>
		</Element>
	)
})
