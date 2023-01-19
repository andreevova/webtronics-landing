import { ElementProps } from '@/types'
import { Element, Header, Outlet, Footer } from './main.styled'

export const MainLayout: React.FC<ElementProps<HTMLElement, 'ref'>> = (props) => {
	const { children, ...rest } = props

	return (
		<Element {...rest}>
			<Header />

			<Outlet>{children}</Outlet>

			<Footer />
		</Element>
	)
}
