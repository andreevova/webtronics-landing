import styled from 'styled-components'
import { colord } from 'colord'
import { MOBILE } from '@/constants'
import { Company as UICompany, Navigation as UINavigation, Social as UISocial } from './components'

export const Element = styled.footer`
	padding: 35px 30px;
	border-top-width: 1px;
	border-top-style: solid;
	border-image: linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%) 50;
	background-color: ${colord('#fff').alpha(0.05).toHex()};
`

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 155px;
	grid-gap: 50px;
	width: 100%;
	max-width: 1220px;
	margin: 0 auto;

	${MOBILE} {
		grid-template-columns: 1fr;
	}
`

export const Company = styled(UICompany)``

export const Navigation = styled(UINavigation)``

export const Social = styled(UISocial)``
