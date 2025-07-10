import Narrower from '@/components/narrower';
import SendEmailForm from '@/components/send-email-form';
import { MdOutlineEmail } from 'react-icons/md';

export default function ContactMeSection() {
	return (
		<section>
			<Narrower className="flex flex-col gap-4 items-center w-full">
				<h2 id="contact-me" className="mb-2">
					Contact Me
				</h2>
				<div className="flex gap-4 items-center">
					<div className="rounded-full border border-primary text-primary p-3 text-[1.25rem] hover:text-primary-foreground hover:bg-primary transition-all block">
						<MdOutlineEmail />
					</div>
					<div className="flex flex-col">
						<span>Email address:</span>
						<a
							href="mailto:filiptunguz.su@gmail.com"
							title="Contact email address: filiptunguz.su@gmail.com"
							className="text-primary underline underline-offset-2"
						>
							filiptunguz.su@gmail.com
						</a>
					</div>
				</div>
				<SendEmailForm />
			</Narrower>
		</section>
	);
}
