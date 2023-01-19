import styled from 'styled-components'

export const Element = styled.div`
	position: relative;
	padding: 1px;
	border-radius: 8px;
	background: linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%);
	clip-path: polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px);
`

export const Container = styled.div`
	border-radius: 8px;
	background-color: #181d3b;
	clip-path: polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px);
`

export const Head = styled.div<{ shown: boolean }>`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	padding: ${(p) => (p.shown ? '25px' : '15px 25px')};
	transition: padding 0.3s ease;
`

export const Title = styled.h4`
	flex: 1;
	font-family: 'ClashDisplay-Medium';
	font-size: 24px;
`

export const Plus = styled.div<{ shown: boolean }>`
	position: relative;
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before,
	&::after {
		content: '';
		position: absolute;
		background-color: white;
		border-radius: 2px;
		transition: transform 0.3s ease, opacity 0.3s ease;
	}

	&::before {
		width: 16px;
		height: 2px;
	}

	&::after {
		width: 2px;
		height: 16px;
		opacity: ${(p) => (p.shown ? 0 : 1)};
		transform: ${(p) => (p.shown ? 'rotate(-90deg)' : 'rotate(0)')};
	}
`

export const Content = styled.div<{ shown: boolean }>`
	max-height: ${(p) => (p.shown ? 'auto' : '0')};
	opacity: ${(p) => (p.shown ? 1 : 0)};
	padding: ${(p) => (p.shown ? '0 25px 25px' : '0 25px 0')};
	transition: opacity 0.3s ease, padding 0.3s ease;
	overflow: hidden;
`
