import styled from 'styled-components'
import { LAPTOP, MOBILE } from '@/constants'
import { Section, Button as UIButton } from '@/components/elements'
import { fadeInUp, fadeInRight, fadeInLeft } from './animations'

export const Element = styled(Section)``

export const Grid = styled.div<{ columns: [string, string] }>`
	display: grid;
	grid-template-columns: ${(p) => p.columns.join(' ')};
	grid-gap: 25px;
	align-items: center;

	${MOBILE} {
		display: flex;
		flex-direction: column;
		text-align: center;
		margin-bottom: 25px;

		&:nth-child(2) {
			flex-direction: column-reverse;
		}

		&:last-child {
			margin-bottom: 0;
		}
	}
`

export const Title = styled.h1<{ delay?: string }>`
	font-family: 'ClashDisplay-Semibold';
	font-size: 150px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	animation: ${fadeInUp} 0.5s ${(p) => p.delay} both;

	${LAPTOP} {
		font-size: 100px;
	}

	${MOBILE} {
		font-size: 52px;
	}
`

export const Text = styled.p<{ delay?: string }>`
	line-height: 24px;
	animation: ${fadeInLeft} 0.5s ${(p) => p.delay} both;
`

export const Button = styled(UIButton).withConfig<{ delay?: string }>({ shouldForwardProp: (prop) => !['delay'].includes(prop) })`
	animation: ${fadeInRight} 0.5s ${(p) => p.delay} both;
`

export const Subtitle = styled.h3<{ delay?: string }>`
	font-family: 'ClashDisplay-Semibold';
	font-size: 32px;
	align-self: flex-end;
	animation: ${fadeInUp} 0.5s ${(p) => p.delay} both;

	${MOBILE} {
		align-self: center;
	}
`
