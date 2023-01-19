import styled from 'styled-components'
import { Section, Title as UITitle } from '@/components/elements'
import { Item as UIItem } from './components'

export const Element = styled(Section)`
	align-items: center;
`

export const Title = styled(UITitle)`
	max-width: 545px;
	text-align: center;
`

export const Desc = styled.p`
	line-height: 140%;
	margin-top: 15px;
	max-width: 430px;
	text-align: center;
`

export const Grid = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 182px);
	grid-gap: 25px;
	margin-top: 55px;
`

export const Item = styled(UIItem)``
