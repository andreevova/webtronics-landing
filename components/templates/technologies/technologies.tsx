import { forwardRef } from 'react'
import { ElementProps } from '@/types'
import { data } from './constants'
import { Element, Title, Desc, Grid, Item } from './technologies.styled'

export const TechnologiesTemplate = forwardRef<HTMLElement, ElementProps<HTMLElement>>((props, ref) => {
	return (
		<Element {...props} ref={ref}>
			<Title>Programming technologies</Title>

			<Desc>By the end, you’ll have the portfolio and interview skills you need to start your new career.</Desc>

			<Grid>
				{data.map(({ src, name }) => (
					<Item {...{ src, name }} key={name} />
				))}
			</Grid>
		</Element>
	)
})
