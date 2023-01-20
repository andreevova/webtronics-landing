import styled from 'styled-components'
import { MOBILE } from '@/constants'
import { Section, Title as UITitle } from '@/components/elements'
import { Item as UIItem } from './components'

export const Element = styled(Section)``

export const Title = styled(UITitle)`
	max-width: 640px;
	text-align: center;
	align-self: center;
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 25px;
	margin-top: 55px;

	${MOBILE} {
		grid-template-columns: 1fr;
		text-align: center;
	}
`

export const Side = styled.div`
	display: flex;
	flex-direction: column;

	${MOBILE} {
		align-items: center;

		&:last-child {
			margin-top: 50px;
		}
	}
`

export const Text = styled.p`
	max-width: 280px;
	line-height: 140%;
`

export const QuestionIcon = styled.img`
	display: table;
	max-width: 344px;
	transform: scale(3.5);
	margin-top: 30px;
	pointer-events: none;
`

export const Item = styled(UIItem)`
	margin-bottom: 25px;

	&:last-child {
		margin-bottom: 0;
	}
`
