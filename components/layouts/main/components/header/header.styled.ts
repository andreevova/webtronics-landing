import styled, { css } from 'styled-components'
import Image from 'next/image'
import { colord } from 'colord'
import { NOT_SUPPORT_BLUR, SUPPORT_BLUR } from '@/constants'

export const Element = styled.header<{ fixed: boolean }>`
	position: sticky;
	top: 0;
	padding: 0 30px;
	transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
	z-index: 9;

	${(p) =>
		p.fixed &&
		css`
			${NOT_SUPPORT_BLUR} {
				background-color: ${colord('#0C102D').alpha(0.9).toHex()};
			}

			${SUPPORT_BLUR} {
				backdrop-filter: blur(50px);
				background: ${colord('#0C102D').alpha(0.8).toHex()};
			}
		`}
`

export const Container = styled.div<{ fixed: boolean }>`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	align-self: center;
	width: 100%;
	max-width: 1220px;
	padding: ${(p) => (p.fixed ? '20px' : '40px')} 0;
	margin: 0 auto;
	transition: padding 0.3s ease;
`

export const Logo = styled(Image)`
	width: 169px;
	height: 33px;
`

export const Nav = styled.nav`
	margin-left: auto;
`

export const Link = styled.a`
	margin-right: 50px;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		background-image: linear-gradient(180deg, #1ff2ff 0%, #27f9e5 52.66%, #2fffcd 100%);
	}
`
