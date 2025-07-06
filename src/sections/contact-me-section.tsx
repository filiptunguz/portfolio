import Narrower from '@/components/narrower';
import SendEmailForm from '@/components/send-email-form';

export default function ContactMeSection() {
	return (
		<section>
			<Narrower className="space-y-4">
				<h2>Contact/Hire Me</h2>
				<SendEmailForm />
			</Narrower>
		</section>
	);
}
