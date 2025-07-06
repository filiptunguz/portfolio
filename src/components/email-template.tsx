interface EmailTemplateProps {
	senderEmail: string;
	message: string;
}

export function EmailTemplate({ senderEmail, message }: EmailTemplateProps) {
	return (
		<div>
			<p>{message}</p>
			<p>Sent by: {senderEmail}</p>
		</div>
	);
}
