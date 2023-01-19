import styled from 'styled-components'
import { Header as UIHeader, Footer as UIFooter } from './components'

export const Element = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
`

export const Header = styled(UIHeader)``

export const Outlet = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0 30px;
`

export const Footer = styled(UIFooter)`
	margin-top: 100px;
`
