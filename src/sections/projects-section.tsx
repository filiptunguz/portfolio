import Narrower from '@/components/narrower';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/database/projects';

export default function ProjectsSection() {
	return (
		<section>
			<Narrower className="space-y-8">
				<h2 id="projects">My Projects</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{projects.map((project) => (
						<ProjectCard
							key={project.slug}
							title={project.title}
							src={project.coverImage}
							alt={`${project.title} cover image`}
							description={project.description}
							href={project.slug}
						/>
					))}
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
		<Link
			href={href}
			className="border border-secondary p-6 rounded-3xl relative group cursor-pointer overflow-hidden h-[270px] space-y-4 flex items-end"
		>
			<Image
				src={src}
				alt={alt}
				fill
				className="object-cover -z-10 group-hover:scale-110 transition-[scale]"
			/>
			<div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 size-full -z-10 transition-opacity bg-gradient-to-r from-background/90 to-background/70" />
			<div className="max-h-6 group-hover:max-h-[270px] group-hover:backdrop-blur transition-[max-height,backdrop-filter] overflow-hidden space-y-4 duration-400">
				<h3 className="text-xl font-bold leading-none drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
					{title}
				</h3>
				<p className="text-sm">{description}</p>
				<span className="text-primary hover:underline underline-offset-4">View Project</span>
			</div>
		</Link>
	);
}
