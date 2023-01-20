import styled from 'styled-components'
import { Section, Title as UITitle } from '@/components/elements'
import { MOBILE } from '@/constants'
import { LinesSvg, FrontSvg } from './img'
import { Item as UIItem } from './components'

export const Element = styled(Section)``

export const Title = styled(UITitle)`
	text-align: center;
	margin-bottom: 60px;
`

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 50px;

	${MOBILE} {
		grid-template-columns: 1fr;
		grid-gap: 0;
	}
`

export const Mentors = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Subtitle = styled.div`
	font-family: 'ClashDisplay-Semibold';
	font-size: 32px;
	text-align: center;
`

export const Lines = styled(LinesSvg)`
	width: 394px;
	height: 157px;
	margin-top: 10px;

	${MOBILE} {
		display: none;
	}
`

export const Grid = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 188px);
	grid-gap: 25px;

	& > * {
		&:nth-child(2) {
			margin-top: -50px;

			${MOBILE} {
				margin-top: 0;
			}
		}
	}

	${MOBILE} {
		margin-top: 55px;
		grid-template-columns: 1fr;
		grid-gap: 50px;
	}
`

export const Item = styled(UIItem)``

export const Info = styled.div`
	position: relative;
`

export const Text = styled.p`
	line-height: 140%;
	margin-top: 80px;

	${MOBILE} {
		margin-top: 50px;
		text-align: center;
	}
`

export const FrontText = styled(FrontSvg)`
	position: absolute;
	width: 748px;
	height: 186px;
	transform: translate(120px, 80px);

	${MOBILE} {
		display: none;
	}
`
