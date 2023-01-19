import { colord } from 'colord'
import styled, { css } from 'styled-components'

export const Element = styled.button`
	cursor: pointer;
	height: 70px;
	font-weight: 500;
	font-size: 20px;
	color: #0a1482;
	padding: 0 30px;
	line-height: 24px;
	border-radius: 8px;
	text-align: center;
	background: linear-gradient(180deg, #1ff2ff 0%, #27f9e5 52.66%, #2fffcd 100%);
	transition: color 0.3s ease;

	&:hover {
		color: #3b48d0;
	}

	&:active {
		color: white;
	}

	${(p) =>
		p.disabled &&
		css`
			opacity: 0.4;
		`}
`
