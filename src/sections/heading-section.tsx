import Image from 'next/image';
import Narrower from '@/components/narrower';
import { Button } from '@/components/ui/button';
import { MdOutlineEmail, MdOutlineFileDownload } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SocialMediaIcon from '@/components/ui/social-media-icon';

export default function HeadingSection() {
	return (
		<section className="relative py-8 lg:py-32">
			<Image
				src="/assets/coding-background.jpg"
				alt="Coding Background"
				fill
				className="object-cover -z-10"
			/>
			<div className="-z-10 absolute top-0 left-0 size-full bg-gradient-to-b from-background via-background/60 to-background" />
			<Narrower className="flex flex-col-reverse lg:flex-row gap-12">
				<AboutHeadingPart />
				<ProfileHeadingPart />
			</Narrower>
		</section>
	);
}

function AboutHeadingPart() {
	return (
		<div className="flex-1 my-auto">
			<span className="text-lg font-medium leading-none">Frontend Developer</span>
			<h1 className="text-5xl lg:text-7xl lg:leading-22 text-white font-bold mb-4">
				Hello I&#39;m
				<br />
				<span className="text-primary">Filip Tunguz</span>
			</h1>
			<p>
				Frontend developer with 4 years of experience, specializing in React, Next.js, and
				TypeScript, with a strong focus on performance and scalable architecture. I enjoy building
				user-friendly interfaces with Tailwind and am currently expanding into mobile development
				using React Native with Expo for cross-platform consistency.
			</p>
		</div>
	);
}

function ProfileHeadingPart() {
	return (
		<div className="flex-1">
			<div className="mx-auto lg:mr-0 lg:ml-auto flex flex-col w-max">
				<div className="relative w-max">
					<Image
						width="300"
						height="300"
						src="/assets/filip_tunguz.jpg"
						alt="Filip Tunguz's picture"
						className="rounded-full border-8 border-primary lg:size-[300px] size-[250px]"
					/>
					<div className="absolute top-1/2 left-1/2 transform -z-10 -translate-x-1/2 -translate-y-1/2 size-2/3 bg-primary rounded-full animate-ping" />
				</div>
				<div className="-mt-[150px] pt-[174px] pb-6 px-4 bg-background border border-secondary/40 rounded-b-3xl flex flex-col gap-4 items-center">
					<Button variant="outline" className="uppercase !px-6 !py-5 mb-2" type="submit" asChild>
						<a href="/assets/Filip_Tunguz_CV.pdf" download="Filip_Tunguz_CV.pdf">
							Download CV <MdOutlineFileDownload />
						</a>
					</Button>
					<span className="font-medium block text-center uppercase leading-none">Social Media</span>
					<div className="flex gap-4 justify-center">
						<SocialMediaIcon
							href="https://www.linkedin.com/in/filiptunguz/"
							title="Filip Tunguz's LinkedIn profile"
						>
							<FaLinkedin />
						</SocialMediaIcon>
						<SocialMediaIcon
							href="https://github.com/filiptunguz"
							title="Filip Tunguz's Github profile"
						>
							<FaGithub />
						</SocialMediaIcon>
						<SocialMediaIcon href="mailto:filiptunguz.su@gmail.com" title="Filip Tunguz's Email">
							<MdOutlineEmail />
						</SocialMediaIcon>
					</div>
				</div>
			</div>
		</div>
	);
}
