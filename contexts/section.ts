import { SectionsRef } from '@/pages'
import { createContext } from 'react'

export const SectionContext = createContext<SectionsRef>({
	start: null,
	about: null,
	technologies: null,
	steps: null,
	questions: null,
	review: null,
	gallery: null,
	contact: null,
})
