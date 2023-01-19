import { ItemProps } from './types'
import { Element, Main, Icon, Name, Bg } from './item.styled'

export const Item: React.FC<ItemProps> = (props) => {
	const { src, name, ...rest } = props

	return (
		<Element {...rest}>
			<Main>
				<Icon {...{ src }} alt={name} width={162} height={136} />
				<Name>{name}</Name>
			</Main>

			<Bg />
		</Element>
	)
}
