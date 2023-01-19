import styled from 'styled-components'

export const Element = styled.div``

export const Title = styled.div`
	font-size: 18px;
	font-weight: bold;
`

export const Menu = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 15px;
	margin-top: 25px;
`

export const Link = styled.a`
	font-size: 14px;

	&:hover {
		color: transparent;
		background-clip: text;
		background-image: linear-gradient(180deg, #1ff2ff 0%, #27f9e5 52.66%, #2fffcd 100%);
	}
`
