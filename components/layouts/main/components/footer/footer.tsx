import { ElementProps } from '@/types'
import { Element, Container, Company, Navigation, Social } from './footer.styled'

export const Footer: React.FC<ElementProps<HTMLElement, 'ref'>> = (props) => {
	return (
		<Element {...props}>
			<Container>
				<Company />
				<Navigation />
				<Social />
			</Container>
		</Element>
	)
}
