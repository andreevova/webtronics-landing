import { ItemProps } from './types'
import { Element, AvatarWrapper, Avatar, Name, Desc } from './item.styled'

export const Item: React.FC<ItemProps> = (props) => {
	const { src, name, desc } = props

	return (
		<Element {...props}>
			<AvatarWrapper>
				<Avatar {...{ src }} alt={name} width={184} height={184} />
			</AvatarWrapper>

			<Name>{name}</Name>

			<Desc>{desc}</Desc>
		</Element>
	)
}
