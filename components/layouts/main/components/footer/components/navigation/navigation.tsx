import { useContext } from 'react'
import { SectionContext } from '@/contexts'
import { DivElementProps } from '@/types'
import { SectionsRef } from '@/pages'
import { links } from './constants'
import { Element, Title, Menu, Link } from './navigation.styled'

export const Navigation: React.FC<DivElementProps<'ref'>> = (props) => {
	const section = useContext(SectionContext)

	const goToSection = (sectionName: keyof SectionsRef) => {
		const top = section[sectionName]?.getBoundingClientRect().top || 0

		window.scrollTo({
			top: top + window.pageYOffset - 150,
			behavior: 'smooth',
		})
	}

	return (
		<Element {...props}>
			<Title>Company</Title>

			<Menu>
				{links.map((item) => (
					<Link href={`#${item.section}`} onClick={() => goToSection(item.section)} key={item.section}>
						{item.name}
					</Link>
				))}
			</Menu>
		</Element>
	)
}
