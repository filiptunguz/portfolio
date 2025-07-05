import Narrower from '@/components/narrower';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsSection() {
	return (
		<section>
			<Narrower className="space-y-8">
				<h2 className="text-center text-3xl font-bold leading-none">My Projects</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<ProjectCard
						title="Project Title"
						src="/project-1.jpg"
						alt="Projekat"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						href="/project-1"
					/>
					<ProjectCard
						title="Project Title"
						src="/project-2.jpg"
						alt="Projekat"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						href="/project-2"
					/>
					<ProjectCard
						title="Project Title"
						src="/project-2.jpg"
						alt="Projekat"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						href="/project-3"
					/>
					<ProjectCard
						title="Project Title"
						src="/project-2.jpg"
						alt="Projekat"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						href="/project-4"
					/>
				</div>
			</Narrower>
		</section>
	);
}

function ProjectCard({
	title,
	src,
	alt,
	description,
	href,
}: {
	title: string;
	src: string;
	alt: string;
	description: string;
	href: string;
}) {
	return (
		<div className="border border-secondary/40 p-6 rounded-3xl relative group cursor-pointer overflow-hidden space-y-4 mix-blend-lighten">
			<Image
				src={src}
				alt={alt}
				fill
				className="object-cover -z-10 group-hover:scale-110 transition-[scale]"
			/>
			<div className="absolute top-0 left-0 size-full -z-10 group-hover:backdrop-blur-md transition-all bg-gradient-to-r from-background/90 to-background/70" />
			<h3 className="text-xl font-bold leading-none">{title}</h3>
			<p className="text-sm">{description}</p>
			<Link href={href} className="text-primary hover:border-b border-primary">
				View Project
			</Link>
		</div>
	);
}
