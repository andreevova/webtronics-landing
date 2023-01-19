import { DivElementProps } from '@/types'
import { Element, Logo, Address } from './company.styled'

export const Company: React.FC<DivElementProps<'ref'>> = (props) => {
	return (
		<Element {...props}>
			<Logo src='/logo@2x.png' alt='' width={169} height={33} />
			<Address>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</Address>
		</Element>
	)
}
