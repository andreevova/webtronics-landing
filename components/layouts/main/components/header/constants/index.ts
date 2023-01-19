import { SectionsRef } from '@/pages'

export const links: { name: string; section: keyof SectionsRef }[] = [
	{ name: 'About', section: 'about' },
	{ name: 'Programs', section: 'technologies' },
	{ name: 'Steps', section: 'steps' },
	{ name: 'Questions', section: 'questions' },
	{ name: 'Get in touch', section: 'contact' },
]
