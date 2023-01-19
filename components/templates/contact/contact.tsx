import { forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ElementProps } from '@/types'
import { FeedbackData } from '@/api/types'
import { api } from '@/api'
import { schema } from './constants'
import { Element, Title, Desc, Form, Input, Button } from './contact.styled'

export const ContactTemplate = forwardRef<HTMLElement, ElementProps<HTMLElement>>((props, ref) => {
	const {
		register,
		handleSubmit,
		reset: formReset,
		formState: { errors },
	} = useForm<FeedbackData>({
		resolver: yupResolver(schema),
	})

	const buttonDisabled = !!(errors.email?.message || errors.name?.message || errors.phone?.message)

	const onSubmit = (data: FeedbackData) => {
		api.feedback
			.post(data)
			.then((res) => alert(`Thanks ${res.name}!`))
			.then(() => formReset())
			.catch(() => {})
	}

	return (
		<Element {...props} ref={ref}>
			<Title>Contact us</Title>

			<Desc>Do you have any kind of help please contact with us.</Desc>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input {...register('name')} placeholder='Name' type='text' error={errors.name?.message} />

				<Input {...register('phone')} placeholder='Phone' type='tel' error={errors.phone?.message} />

				<Input {...register('email')} placeholder='Email' type='email' error={errors.email?.message} />

				<Button type='submit' disabled={buttonDisabled}>
					Send
				</Button>
			</Form>
		</Element>
	)
})
