import { ReactNode } from 'react';

export default function SocialMediaIcon({
	children,
	href,
	title,
}: {
	children: ReactNode;
	href: string;
	title: string;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			title={title}
			className="rounded-full border border-primary text-primary p-3 text-[1.25rem] hover:text-primary-foreground hover:bg-primary transition-all block"
		>
			{children}
		</a>
	);
}
