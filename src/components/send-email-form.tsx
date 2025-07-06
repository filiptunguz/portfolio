'use client';

import { useForm } from 'react-hook-form';
import { EmailData } from '@/app/api/send/route';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Narrower from '@/components/narrower';
import { toast } from 'sonner';

export default function SendEmailForm() {
	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm<EmailData>();

	function onSubmit(data: EmailData) {
		fetch('/api/send', {
			method: 'POST',
			body: JSON.stringify({
				fullName: data.from,
				from: data.from,
				subject: `Message from ${data.from}`,
				message: data.message,
			}),
		}).then((response) => {
			if (response.ok) {
				toast.success('Email sent successfully!', { description: 'I will get back to you soon.' });
			} else {
				toast.error('Failed to send email', { description: 'Please try again later.' });
			}
		});
	}

	return (
		<Narrower>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="p-6 rounded-3xl border border-secondary space-y-4"
			>
				<div>
					<label htmlFor="name" className="font-medium">
						Full Name
					</label>
					<Input type="text" placeholder="Full Name" {...register('from', { required: true })} />
				</div>
				<div>
					<label htmlFor="email" className="font-medium">
						Email Address
					</label>
					<Input
						type="email"
						placeholder="example@domain.com"
						{...register('from', {
							required: true,
							pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
						})}
					/>
				</div>
				<div>
					<label htmlFor="message" className="font-medium ">
						Message
					</label>
					<Textarea
						rows={4}
						placeholder="Type your message"
						className="resize-none"
						{...register('message', { required: true })}
					/>
				</div>
				<Button className="ml-auto w-max block" disabled={!isValid}>
					Send email
				</Button>
			</form>
		</Narrower>
	);
}
