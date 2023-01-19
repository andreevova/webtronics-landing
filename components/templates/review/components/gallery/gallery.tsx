import { useState } from 'react'
import { GalleryProps } from './types'
import { arrowIcon } from './icons'
import { Element, Head, Counter, Button, Grid, Item, Image } from './gallery.styled'

export const Gallery: React.FC<GalleryProps> = (props) => {
	const { data = [], onChange = () => {}, ...rest } = props

	const [activeIndex, setActiveIndex] = useState(0)

	const handleNext = () => {
		if (activeIndex < data.length - 1) {
			setActiveIndex(activeIndex + 1)
			onChange(activeIndex + 1)
		} else {
			setActiveIndex(0)
			onChange(0)
		}
	}

	const handlePrev = () => {
		if (activeIndex === 0) {
			setActiveIndex(data.length - 1)
			onChange(data.length - 1)
		} else {
			setActiveIndex(activeIndex - 1)
			onChange(activeIndex - 1)
		}
	}

	const handleSelect = (index: number) => {
		setActiveIndex(index), onChange(index)
	}

	return (
		<Element {...rest}>
			<Head>
				<Counter>
					<span>{activeIndex + 1}/</span>
					<span>{data.length}</span>
				</Counter>

				<Button reverse dangerouslySetInnerHTML={{ __html: arrowIcon }} onClick={handlePrev} />

				<Button dangerouslySetInnerHTML={{ __html: arrowIcon }} onClick={handleNext} />
			</Head>

			<Grid>
				{data.map((src, i) => (
					<Item active={activeIndex === i} onClick={() => handleSelect(i)} key={src}>
						<Image {...{ src }} />
					</Item>
				))}
			</Grid>
		</Element>
	)
}
