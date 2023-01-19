import styled from 'styled-components'

export const Element = styled.div``

export const Title = styled.div`
	font-size: 18px;
	font-weight: bold;
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 25px;
	margin-top: 25px;
`

export const Item = styled.a<{ width?: number; height?: number }>`
	width: ${(p) => `${p.width || 24}px`};
	height: ${(p) => `${p.height || p.width || 24}px`};
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(0.95);
	}
`
