import styled from 'styled-components'
import Image from 'next/image'
import { SimSvg } from './img'

export const Element = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 181px;
	height: 230px;
`

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Icon = styled(Image)`
	display: table;
	max-width: 162px;
	height: auto;
	pointer-events: none;
`

export const Name = styled.h4`
	font-family: 'ClashDisplay-Medium';
	font-size: 24px;
	text-align: center;
	margin-top: 15px;
`

export const Bg = styled(SimSvg)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`
