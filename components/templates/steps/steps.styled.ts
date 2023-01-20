import styled from 'styled-components'
import { MOBILE } from '@/constants'
import { Section, Title as UITitle } from '@/components/elements'
import { Item as UIItem } from './components'

export const Element = styled(Section)``

export const Title = styled(UITitle)`
	text-align: center;
`

export const Grid = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 55px;
`

export const Item = styled(UIItem).withConfig<{ height: number }>({ shouldForwardProp: (prop) => !['height'].includes(prop) })`
	position: relative;
	width: calc(50% + 19px / 2);

	${MOBILE} {
		width: 100%;
		margin-bottom: 60px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	&:not(:nth-child(1)) {
		&:not(:nth-child(even))::before,
		&:nth-child(even)::before {
			content: '';
			position: absolute;
			width: 4px;
			background: linear-gradient(180deg, #1ff2ff 0%, #27f9e5 52.66%, #2fffcd 100%);
			z-index: -1;
			height: ${(p) => `${p.height + 3}px`};
		}

		&:not(:nth-child(even))::before {
			right: calc((19px - 4px) / 2);
		}

		&:nth-child(even)::before {
			left: calc((19px - 4px) / 2);
		}

		&:last-child::before {
			display: none;
		}

		${MOBILE} {
			&::before {
				display: none;
			}
		}
	}

	&:nth-child(even) {
		align-self: flex-end;
		margin-top: ${(p) => `-${p.height / 2 - 10}px`};

		${MOBILE} {
			margin-top: 0;
		}
	}
`
