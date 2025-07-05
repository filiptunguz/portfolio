import Image from 'next/image';
import Narrower from '@/components/narrower';
import { Button } from '@/components/ui/button';
import { MdOutlineFileDownload } from 'react-icons/md';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HeadingSection() {
	return (
		<section className="relative h-[1000px]">
			<Image
				src="/coding-background.jpg"
				alt="Coding Background"
				fill
				className="object-cover -z-10"
			/>
			<div className="-z-10 absolute top-0 left-0 size-full bg-gradient-to-b from-background via-background/50 to-background" />
			<Narrower className="flex gap-4">
				<div className="flex-1">
					<h1>Filip Tunguz</h1>
				</div>
				<ProfileHeadingPart />
			</Narrower>
		</section>
	);
}

function ProfileHeadingPart() {
	return (
		<div className="flex-1">
			<div className="flex flex-col w-max">
				<div className="relative w-max">
					<Image
						width="300"
						height="300"
						src="/filip-tunguz.jpg"
						alt="Filip Tunguz's picture"
						className="rounded-full border-8 border-primary"
					/>
					<div className="absolute top-1/2 left-1/2 transform -z-10 -translate-x-1/2 -translate-y-1/2 size-2/3 bg-primary rounded-full animate-ping"></div>
				</div>
				<div className="-mt-[150px] pt-[174px] pb-6 px-4 bg-background rounded-b-3xl flex flex-col gap-4 items-center">
					<Button variant="outline" className="uppercase !px-6 !py-5 mb-2">
						Download CV <MdOutlineFileDownload />
					</Button>
					<span className="font-medium block text-center uppercase leading-none">Social Media</span>
					<div className="flex gap-4 justify-center">
						<SocialMediaIcon href="/">
							<FaLinkedin />
						</SocialMediaIcon>
						<SocialMediaIcon href="/">
							<FaGithub />
						</SocialMediaIcon>
					</div>
				</div>
			</div>
		</div>
	);
}

function SocialMediaIcon({ children, href }: { children: React.ReactNode; href: string }) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="rounded-full border border-primary text-primary p-3 text-[1.25rem] hover:text-primary-foreground hover:bg-primary transition-all"
		>
			{children}
		</Link>
	);
}
