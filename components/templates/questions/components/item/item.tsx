import { useRef, useState } from 'react'
import { delay } from '@/utils'
import { useOutsideClick } from '@/hooks'
import { ItemProps } from './types'
import { Element, Container, Head, Title, Plus, Content } from './item.styled'

export const Item: React.FC<ItemProps> = (props) => {
	const { title, desc, ...rest } = props

	const ref = useRef<HTMLDivElement>(null)

	const [shown, setShown] = useState(false)

	useOutsideClick(ref, () => delay(1).then(() => setShown(false)))

	return (
		<Element {...rest} ref={ref}>
			<Container>
				<Head {...{ shown }} onClick={() => setShown(!shown)}>
					<Title>{title}</Title>
					<Plus {...{ shown }} />
				</Head>

				<Content {...{ shown }}>{desc}</Content>
			</Container>
		</Element>
	)
}
