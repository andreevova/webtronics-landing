import styled from 'styled-components'
import { MOBILE } from '@/constants'
import { Section, Title as UITitle } from '@/components/elements'
import { Gallery as UIGallery } from './components'

export const Element = styled(Section)``

export const Title = styled(UITitle)`
	text-align: center;
	align-self: center;
`

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 25px;
	margin-top: 55px;
	align-items: center;

	${MOBILE} {
		display: flex;
		flex-direction: column-reverse;
	}
`

export const Main = styled.div`
	${MOBILE} {
		margin-top: 30px;
		text-align: center;
	}
`

export const Subtitle = styled.h4`
	font-family: 'ClashDisplay-Medium';
	font-size: 24px;
`

export const Text = styled.p`
	margin-top: 15px;
	line-height: 140%;
`

export const Gallery = styled(UIGallery)``
