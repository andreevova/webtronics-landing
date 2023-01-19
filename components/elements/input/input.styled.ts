import styled, { css } from 'styled-components'
import { colord } from 'colord'

export const Element = styled.div`
	display: flex;
	flex-direction: column;
`

export const Container = styled.div<{ disabled: boolean; error: boolean }>`
	position: relative;

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
		transition: background 0.3s ease;

		${(p) =>
			p.disabled
				? css`
						background: linear-gradient(152.14deg, #636363 9.96%, #636363 100%);
				  `
				: p.error &&
				  css`
						background: linear-gradient(152.14deg, #fd4646 9.96%, #fd4646 100%);
				  `}
	}
`

export const Inp = styled.input<{ disabled: boolean; error: boolean }>`
	width: 100%;
	box-sizing: border-box;
	height: 70px;
	padding: 0 25px;
	border-radius: 8px;
	background-color: ${(p) => (p.error ? colord('#FFA5A5').alpha(0.2).toHex() : 'rgba(255, 255, 255, 0.05)')};
	color: ${(p) => (p.disabled ? '#636363' : 'white')};

	&::placeholder {
		color: #a2cbfb;
		transition: color 0.3s ease;
	}

	&:focus {
		&::placeholder {
			color: white;
		}
	}
`

export const ErrorText = styled.p`
	margin-top: 5px;
	line-height: 140%;
`
