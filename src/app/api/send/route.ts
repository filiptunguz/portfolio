import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailData = {
	fullName: string;
	from: string;
	subject: string;
	message: string;
};

/**
 * This API route is used to send emails using the Resend service.
 * Resend is only capable of sending emails, not receiving them, so I did this workaround - from
 * the domain I own, to domain I own.
 * This was the simplest way at the moment to implement a contact form.
 */
export async function POST(request: NextRequest) {
	const payload = (await request.json()) as EmailData;

	try {
		const { data, error } = await resend.emails.send({
			from: `${payload.fullName} <no-reply@filiptunguz.com>`,
			to: 'hiring@filiptunguz.com',
			subject: payload.subject,
			react: EmailTemplate({ senderEmail: payload.from, message: payload.message }),
		});

		if (error) {
			console.error(error);
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		console.error(error);
		return Response.json({ error }, { status: 500 });
	}
}
