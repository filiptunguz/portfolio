import { projects } from '@/database/projects';
import { redirect } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';
import SocialMediaIcon from '@/components/ui/social-media-icon';
import type { Metadata } from 'next';
import Image from 'next/image';

export const generateMetadata = async ({
	params,
}: {
	params: Promise<{ projectSlug: string }>;
}): Promise<Metadata> => {
	const { projectSlug } = await params;
	const project = projects.find((project) => project.slug === projectSlug);

	return {
		title: project?.metaTitle + ' | Project by Filip Tunguz',
		description: project?.metaDescription,
	};
};

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ projectSlug: string }>;
}) {
	const { projectSlug } = await params;
	const project = projects.find((project) => project.slug === projectSlug);

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
				{project.technologies && (
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech) => (
							<span
								key={tech}
								className="bg-secondary text-primary px-3 py-1 uppercase rounded-full text-sm font-medium"
							>
								{tech}
							</span>
						))}
					</div>
				)}
			</section>
			<hr />
			<section className="space-y-12 my-8">
				<h2>More about this project</h2>
				{project.mainImage && (
					<Image
						src={project.mainImage}
						alt={`Main image for ${project.title}`}
						className="rounded-3xl max-w-full mx-auto border-2 border-secondary"
						width={800}
						height={501}
					/>
				)}
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
								className="rounded-3xl object-cover border border-secondary"
								fill
							/>
						</div>
						<div className="space-y-4 lg:flex-1">
							<h3 className="font-bold text-2xl">{screenshot.title}</h3>
							{screenshot.points.map((point, index) => (
								<p key={index}>{point}</p>
							))}
						</div>
					</div>
				))}
			</section>
		</main>
	);
}
