import styled from 'styled-components'
import { Section, Button as UIButton } from '@/components/elements'

export const Element = styled(Section)``

export const Grid = styled.div<{ columns: [string, string] }>`
	display: grid;
	grid-template-columns: ${(p) => p.columns.join(' ')};
	grid-gap: 25px;
	align-items: center;
`

export const Title = styled.h1`
	font-family: 'ClashDisplay-Semibold';
	font-size: 150px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`

export const Text = styled.p`
	line-height: 24px;
`

export const Button = styled(UIButton)``

export const Subtitle = styled.h3`
	font-family: 'ClashDisplay-Semibold';
	font-size: 32px;
	align-self: flex-end;
`
