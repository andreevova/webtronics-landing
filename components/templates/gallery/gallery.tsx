import { forwardRef } from 'react'
import { ElementProps } from '@/types'
import { Element, Title, Grid, TextTop, ImageOne, ImageTwo, ImageThree, ImageFour, TextBottom } from './gallery.styled'

export const GalleryTemplate = forwardRef<HTMLElement, ElementProps<HTMLElement>>((props, ref) => {
	return (
		<Element {...props} ref={ref}>
			<Title>Gallery</Title>

			<Grid>
				<TextTop>
					By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course
					we will focus on coding exercises and projects.
				</TextTop>

				<ImageOne src='/gallery/1.jpg' />

				<ImageTwo src='/gallery/2.jpg' />

				<ImageThree src='/gallery/3.jpg' />

				<ImageFour src='/gallery/4.jpg' />

				<TextBottom>
					If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn
					HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be
					extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.
				</TextBottom>
			</Grid>
		</Element>
	)
})
