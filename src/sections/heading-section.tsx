import Image from 'next/image';

export default function HeadingSection() {
	return (
		<section className="relative h-[1000px]">
			<Image src="/coding-background.jpg" alt="Coding Background" fill className="object-cover" />
			<div className="absolute top-0 left-0 size-full bg-gradient-to-b from-background via-background/50 to-background" />
		</section>
	);
}
