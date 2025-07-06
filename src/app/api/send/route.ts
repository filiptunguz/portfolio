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

export async function POST(request: NextRequest) {
	const payload = (await request.json()) as EmailData;

	try {
		const { data, error } = await resend.emails.send({
			from: payload.from,
			to: ['filiptunguz.su@gmail.com'],
			subject: payload.subject,
			react: EmailTemplate({ fullName: payload.fullName, message: payload.message }),
		});

		if (error) {
			return Response.json({ error });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error });
	}
}
