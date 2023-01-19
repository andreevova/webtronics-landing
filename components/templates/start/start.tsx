import { forwardRef } from 'react'
import { ElementProps } from '@/types'
import { Element, Grid, Title, Text, Button, Subtitle } from './start.styled'

export const StartTemplate = forwardRef<HTMLElement, ElementProps<HTMLElement>>((props, ref) => {
	return (
		<Element {...props} ref={ref}>
			<Grid columns={['1fr', '350px']}>
				<Title delay='0.15s'>Front-End</Title>
				<Text delay='0.5s'>
					Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).{' '}
				</Text>
			</Grid>

			<Grid columns={['350px', '1fr']}>
				<Button delay='0.4s'>Start my career change</Button>
				<Title delay='0.3s'>Developer</Title>
			</Grid>

			<Subtitle delay='0.8s'>Courses</Subtitle>
		</Element>
	)
})
