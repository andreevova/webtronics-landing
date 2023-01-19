import { useRef } from 'react'
import { MainLayout } from '@/components/layouts'
import {
	StartSection,
	AboutUsSection,
	TechnologiesSection,
	StepsSection,
	QuestionsSection,
	ReviewSection,
	GallerySection,
	ContactSection,
} from '@/styles/home.styled'
import { SectionContext } from '@/contexts'

export interface SectionsRef {
	start: HTMLElement | null
	about: HTMLElement | null
	technologies: HTMLElement | null
	steps: HTMLElement | null
	questions: HTMLElement | null
	review: HTMLElement | null
	gallery: HTMLElement | null
	contact: HTMLElement | null
}

export default function Home() {
	const sectionsRef = useRef<SectionsRef>({
		start: null,
		about: null,
		technologies: null,
		steps: null,
		questions: null,
		review: null,
		gallery: null,
		contact: null,
	})

	return (
		<SectionContext.Provider value={sectionsRef.current}>
			<MainLayout>
				<StartSection ref={(el) => (sectionsRef.current.start = el)} />
				<AboutUsSection ref={(el) => (sectionsRef.current.about = el)} />
				<TechnologiesSection ref={(el) => (sectionsRef.current.technologies = el)} />
				<StepsSection ref={(el) => (sectionsRef.current.steps = el)} />
				<QuestionsSection ref={(el) => (sectionsRef.current.questions = el)} />
				<ReviewSection ref={(el) => (sectionsRef.current.review = el)} />
				<GallerySection ref={(el) => (sectionsRef.current.gallery = el)} />
				<ContactSection ref={(el) => (sectionsRef.current.contact = el)} />
			</MainLayout>
		</SectionContext.Provider>
	)
}
