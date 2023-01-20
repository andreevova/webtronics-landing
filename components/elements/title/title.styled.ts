import styled from 'styled-components'
import { MOBILE } from '@/constants'

export const Element = styled.h2`
	font-family: 'ClashDisplay-Semibold';
	font-size: 72px;

	${MOBILE} {
		font-size: 52px;
	}
`
