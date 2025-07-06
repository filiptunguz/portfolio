import { projects } from '@/database/projects';
import { redirect } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';
import SocialMediaIcon from '@/components/ui/social-media-icon';
import type { Metadata } from 'next';
import Image from 'next/image';

export const generateMetadata = ({ params }: { params: { projectSlug: string } }): Metadata => {
	const project = projects.find((project) => project.slug === params.projectSlug);

	return {
		title: project?.metaTitle,
		description: project?.metaDescription,
	};
};

export default function ProjectPage({ params }: { params: { projectSlug: string } }) {
	const project = projects.find((project) => project.slug === params.projectSlug);

	if (!project) redirect('/');

	return (
		<main className="max-w-[1100px] mx-auto p-4 space-y-12">
			<section className="space-y-4">
				<div className="flex gap-4 items-center">
					<h1 className="text-4xl font-bold items-center leading-none">{project.title}</h1>
					<SocialMediaIcon href={project.githubUrl} title={project.title}>
						<FaGithub />
					</SocialMediaIcon>
				</div>
				<p>{project.description}</p>
			</section>
			<hr />
			<div className="space-y-12 my-8">
				{project.screenshots.map((screenshot, index) => (
					<div
						key={index}
						className={`flex flex-col gap-4 lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
					>
						<div className="lg:flex-1 relative h-[300px]">
							{/* TODO sizes */}
							<Image
								src={screenshot.src}
								alt={screenshot.alt}
								className="rounded-3xl object-cover"
								fill
							/>
						</div>
						<div className="space-y-4 lg:flex-1">
							<h2 className="font-bold text-2xl">{screenshot.title}</h2>
							{screenshot.points.map((point, index) => (
								<p key={index}>{point}</p>
							))}
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
