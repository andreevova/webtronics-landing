import { SectionsRef } from '@/pages'

export const links: { name: string; section: keyof SectionsRef }[] = [
	{ name: 'About Us', section: 'about' },
	{ name: 'Review', section: 'review' },
	{ name: 'Steps', section: 'steps' },
	{ name: 'Gallery', section: 'gallery' },
	{ name: 'FAQs', section: 'questions' },
]
