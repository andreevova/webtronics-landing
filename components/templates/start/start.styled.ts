import styled from 'styled-components'
import { Section, Button as UIButton } from '@/components/elements'
import { fadeInUp, fadeInRight, fadeInLeft } from './animations'

export const Element = styled(Section)``

export const Grid = styled.div<{ columns: [string, string] }>`
	display: grid;
	grid-template-columns: ${(p) => p.columns.join(' ')};
	grid-gap: 25px;
	align-items: center;
`

export const Title = styled.h1<{ delay?: string }>`
	font-family: 'ClashDisplay-Semibold';
	font-size: 150px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	animation: ${fadeInUp} 0.5s ${(p) => p.delay} both;
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
`
