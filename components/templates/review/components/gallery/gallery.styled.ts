import styled, { css } from 'styled-components'

export const Element = styled.div`
	display: flex;
	flex-direction: column;
`

export const Head = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;

	& > * {
		margin-right: 25px;

		&:last-child {
			margin-right: 0;
		}
	}
`

export const Counter = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;

	span {
		&:nth-child(1) {
			font-family: 'ClashDisplay-Medium';
			font-size: 24px;
			margin-right: 5px;
		}

		&:nth-child(2) {
			margin-top: 1px;
		}
	}
`

export const Button = styled.button<{ reverse?: boolean }>`
	cursor: pointer;
	position: relative;
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 8px;
	border: none;
	box-shadow: none;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		padding: 1px;
		border-radius: 8px;
		background: linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask-composite: exclude;
		z-index: -1;
	}

	svg {
		width: 12px;
		height: 20px;
		transition: transform 0.3s ease;
	}

	&:hover svg {
		transform: translateX(2.5px);
	}

	${(p) =>
		p.reverse &&
		css`
			svg {
				transform: scaleX(-1);
			}

			&:hover svg {
				transform: scaleX(-1) translateX(2.5px);
			}
		`}
`

export const Grid = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	margin-top: 15px;
	grid-gap: 25px;
`

export const Item = styled.li<{ active: boolean }>`
	flex: ${(p) => (p.active ? 2 : 1)};
	height: 422px;
	padding: 1px;
	border-radius: 16px;
	background: linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%);
	clip-path: polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px);
	transition: flex 0.3s ease;

	${(p) =>
		!p.active &&
		css`
			cursor: pointer;

			&:hover {
				flex: 1.25;
			}
		`}
`

export const Image = styled.img`
	display: table;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	border-radius: 16px;
	clip-path: polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px);
`
