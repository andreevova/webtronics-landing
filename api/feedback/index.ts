import { api } from '@/api'
import { FeedbackData } from '@/api/types'

export const post = (data: FeedbackData) => {
	return api.request<FeedbackPostResponse>({ method: 'post', url: '/feedback', data })
}

export interface FeedbackPostResponse {
	id: number
	email: string
	name: string
	phone: string
}
