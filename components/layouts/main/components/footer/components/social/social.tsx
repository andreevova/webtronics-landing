import { DivElementProps } from '@/types'
import { links } from './constants'
import { Element, Title, Grid, Item } from './social.styled'

export const Social: React.FC<DivElementProps<'ref'>> = (props) => {
	return (
		<Element {...props}>
			<Title>Social media</Title>

			<Grid>
				{links.map(({ name, icon, width, height }) => (
					<Item href={`#${name}`} dangerouslySetInnerHTML={{ __html: icon }} {...{ width, height }} key={name} />
				))}
			</Grid>
		</Element>
	)
}
