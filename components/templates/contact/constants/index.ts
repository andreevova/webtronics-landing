import * as yup from 'yup'
import 'yup-phone'

export const schema = yup
	.object({
		name: yup.string().required().min(2),
		phone: yup.string().phone().required(),
		email: yup.string().email().required(),
	})
	.required()
