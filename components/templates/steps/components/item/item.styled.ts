import styled, { css } from 'styled-components'
import { DotAndArrowSvg, BorderSvg } from './img'

export const Element = styled.div<{ reverse: boolean }>`
	display: flex;
	flex-direction: ${(p) => (p.reverse ? 'row-reverse' : 'row')};
	flex-wrap: nowrap;
	align-items: center;
`

export const Container = styled.div`
	position: relative;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 8px;
	padding: 25px;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		padding: 1px;
		border-radius: 8px;
		background: linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		z-index: -1;
	}
`

export const Step = styled.h4`
	font-family: 'ClashDisplay-Medium';
	font-size: 24px;
`

export const Title = styled.h3`
	font-family: 'ClashDisplay-Semibold';
	font-size: 32px;
	margin-top: 15px;
`

export const Desc = styled.p`
	line-height: 140%;
	color: #a2cbfb;
	margin-top: 15px;
`

export const Insert = styled(DotAndArrowSvg).withConfig<{ reverse: boolean }>({ shouldForwardProp: (prop) => !['reverse'].includes(prop) })`
	width: 104px;
	height: 24px;
	margin: 0 0 0 25px;

	${(p) =>
		p.reverse &&
		css`
			transform: scaleX(-1);
			margin: 0 25px 0 0;
		`}
`

export const BorderWrapper = styled.div<{ reverse: boolean }>`
	position: absolute;
	top: -20px;
	bottom: -20px;

	${(p) =>
		p.reverse
			? css`
					left: -20px;
					transform: scaleX(-1);
			  `
			: css`
					right: -20px;
			  `}
`

export const Border = styled(BorderSvg)`
	height: 100%;
`
