import axios, { Method, ResponseType } from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3004',
})

interface Query {
	method: Method
	url: string
	params?: any
	data?: any
	headers?: any
	responseType?: ResponseType
}

export const request = async <T>(query: Query) => {
	try {
		const response = await api.request({ ...query })
		return response.data as T
	} catch (err: any) {
		throw err
	}
}
