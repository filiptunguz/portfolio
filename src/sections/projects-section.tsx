import Narrower from '@/components/narrower';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsSection() {
	return (
		<section>
			<Narrower className="space-y-8">
				<h2 id="projects">My Projects</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<ProjectCard
						title="Image Cropper"
						src="/assets/image-cropper/image-preview-component.webp"
						alt="Image Cropper Cover Image"
						description="A lightweight React + TypeScript image upload library built with Tailwind. Includes drag-and-drop or file select, multi/single file support, image preview with removal and cropping, and all logic exposed through hooks for full control. Cropped images are ready-to-upload files, handled entirely on the frontend. Use built-in components or create your own easily."
						href="/image-cropper"
					/>
					<ProjectCard
						title="Project Title"
						src="/assets/project-2.jpg"
						alt="Projekat"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						href="/project-2"
					/>
					<ProjectCard
						title="Project Title"
						src="/assets/project-2.jpg"
						alt="Projekat"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						href="/project-3"
					/>
					<ProjectCard
						title="Project Title"
						src="/assets/project-2.jpg"
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
