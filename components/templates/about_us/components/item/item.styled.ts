import styled from 'styled-components'
import Image from 'next/image'

export const Element = styled.li`
	display: flex;
	flex-direction: column;
`

export const AvatarWrapper = styled.div`
	padding: 2px;
	border-radius: 200px;
	background: linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%);
	overflow: hidden;
`

export const Avatar = styled(Image)`
	display: table;
	width: 184px;
	height: 184px;
	pointer-events: none;
`

export const Name = styled.h4`
	font-family: 'ClashDisplay-Medium';
	font-size: 24px;
	margin-top: 20px;
`

export const Desc = styled.p`
	font-size: 14px;
	margin-top: 5px;
	line-height: 140%;
`
