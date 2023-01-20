import styled from 'styled-components'
import { MOBILE, NO_MOBILE } from '@/constants'
import { Section, Title as UITitle } from '@/components/elements'

export const Element = styled(Section)``

export const Title = styled(UITitle)`
	text-align: center;
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-gap: 25px;
	margin-top: 55px;

	${MOBILE} {
		grid-template-columns: 1fr;
		grid-template-rows: none;
		text-align: center;
	}
`

export const TextTop = styled.p`
	align-self: center;

	${NO_MOBILE} {
		grid-row-start: 1;
		grid-column-start: 1;
		grid-row-end: 2;
		grid-column-end: 2;
	}
`

export const Image = styled.img`
	display: table;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	border-radius: 16px;
`

export const ImageOne = styled(Image)`
	${NO_MOBILE} {
		grid-row-start: 2;
		grid-column-start: 1;
		grid-row-end: 4;
		grid-column-end: 2;
	}
`

export const ImageTwo = styled(Image)`
	${NO_MOBILE} {
		grid-row-start: 1;
		grid-column-start: 2;
		grid-row-end: 3;
		grid-column-end: 4;
	}
`

export const ImageThree = styled(Image)`
	${NO_MOBILE} {
		grid-row-start: 1;
		grid-column-start: 4;
		grid-row-end: 2;
		grid-column-end: 5;
	}
`

export const ImageFour = styled(Image)`
	${NO_MOBILE} {
		grid-row-start: 2;
		grid-column-start: 4;
		grid-row-end: 3;
		grid-column-end: 5;
	}
`

export const TextBottom = styled.p`
	margin-bottom: 15px;
	align-self: flex-end;

	${NO_MOBILE} {
		grid-row-start: 3;
		grid-column-start: 2;
		grid-row-end: 4;
		grid-column-end: 5;
	}
`
