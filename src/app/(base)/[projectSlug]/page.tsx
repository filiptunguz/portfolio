import { projects } from '@/database/projects';
import { redirect } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';
import SocialMediaIcon from '@/components/ui/social-media-icon';
import type { Metadata } from 'next';

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
		<main className="max-w-[1100px] mx-auto p-4 space-y-4">
			<div className="flex gap-4 items-center">
				<h1 className="text-4xl font-bold items-center leading-none">{project.title}</h1>
				<SocialMediaIcon href={project.githubUrl} title={project.title}>
					<FaGithub />
				</SocialMediaIcon>
			</div>
			<p>{project.description}</p>
		</main>
	);
}
