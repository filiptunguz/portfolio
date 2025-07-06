interface EmailTemplateProps {
	fullName: string;
	message: string;
}

export function EmailTemplate({ fullName, message }: EmailTemplateProps) {
	return (
		<div>
			<p>{message}</p>
			<p>Sent by: {fullName}</p>
		</div>
	);
}
