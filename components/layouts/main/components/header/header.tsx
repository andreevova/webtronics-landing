import { useContext } from 'react'
import { SectionContext } from '@/contexts'
import { useWindowScroll } from '@/hooks'
import { SectionsRef } from '@/pages'
import { ElementProps } from '@/types'
import { links } from './constants'
import { Element, Container, Logo, Nav, Link } from './header.styled'

export const Header: React.FC<ElementProps<HTMLElement, 'ref'>> = (props) => {
	const section = useContext(SectionContext)

	const { scrollY } = useWindowScroll()

	const fixed = scrollY > 50

	const goToSection = (sectionName: keyof SectionsRef) => {
		const top = section[sectionName]?.getBoundingClientRect().top || 0

		window.scrollTo({
			top: top + window.pageYOffset - 150,
			behavior: 'smooth',
		})
	}

	return (
		<Element {...{ fixed, ...props }}>
			<Container {...{ fixed }}>
				<Logo src='/logo@2x.png' alt='' width={169} height={33} />

				<Nav>
					{links.map((item) => (
						<Link href={`#${item.section}`} onClick={() => goToSection(item.section)} key={item.name}>
							{item.name}
						</Link>
					))}
				</Nav>
			</Container>
		</Element>
	)
}
