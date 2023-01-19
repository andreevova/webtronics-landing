import { forwardRef, useEffect, useRef, useState } from 'react'
import { ElementProps } from '@/types'
import { useWindowSize } from '@/hooks'
import { data } from './constants'
import { Item as ItemRef } from './components'
import { Element, Title, Grid, Item } from './steps.styled'

export const StepsTemplate = forwardRef<HTMLElement, ElementProps<HTMLElement>>((props, ref) => {
	const itemRefs = useRef<(ItemRef | null)[]>(Array.from(Array(data.length)).map((_) => null))

	const [itemHeights, setItemHeights] = useState<number[]>(Array.from(Array(data.length)).map(() => 0))

	const { width, height } = useWindowSize()

	useEffect(() => {
		const hasRef = itemRefs.current.every((el) => el !== null)

		if (hasRef) {
			itemRefs.current.forEach((el, i) => {
				if (itemHeights[i] !== el?.clientHeight) {
					itemHeights[i] = el?.clientHeight || 0
					setItemHeights([...itemHeights])
				}
			})
		}
	}, [itemRefs, width, height])

	return (
		<Element {...props} ref={ref}>
			<Title>Steps</Title>

			<Grid>
				{data.map((item, i) => (
					<Item {...item} height={itemHeights[i]} ref={(el) => (itemRefs.current[i] = el)} key={item.step} />
				))}
			</Grid>
		</Element>
	)
})
