import styled from 'styled-components'
import { MOBILE } from '@/constants'
import { Section, Title as UITitle, Input as UIInput, Button as UIButton } from '@/components/elements'

export const Element = styled(Section)`
	position: relative;
	padding: 55px;
	border-radius: 20px;
	background: rgba(255, 255, 255, 0.05);
	box-sizing: border-box;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		padding: 1px;
		border-radius: 20px;
		background: linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		z-index: -1;
	}

	${MOBILE} {
		padding: 30px;
	}
`

export const Title = styled(UITitle)`
	text-align: center;
`

export const Desc = styled.p`
	margin-top: 15px;
	line-height: 140%;
	text-align: center;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 490px;
	align-self: center;
	margin-top: 25px;
`

export const Input = styled(UIInput)`
	margin-bottom: 15px;

	&:last-child {
		margin-bottom: 0;
	}
`

export const Button = styled(UIButton)``
