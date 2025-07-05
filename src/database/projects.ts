type ProjectScreenshot = {
	title: string;
	src: string;
	alt: string;
	points: string[];
};

export type Project = {
	title: string;
	slug: string;
	description: string;
	coverImage: string;
	githubUrl: string;
	screenshots: ProjectScreenshot[];
	metaTitle: string;
	metaDescription: string;
};

export const projects: Project[] = [
	{
		title: 'Filip Tunguz Portfolio',
		slug: 'filip-tunguz-portfolio',
		description: 'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
		coverImage: '/projects/filip-tunguz-portfolio/cover.jpg',
		githubUrl: 'https://github.com/filiptunguz/portfolio',
		screenshots: [
			{
				title: 'Title 1',
				src: '/assets/project-1.jpg',
				alt: 'Screenshot 1',
				points: [
					'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
					'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
					'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
				],
			},
			{
				title: 'Title 2',
				src: '/assets/project-2.jpg',
				alt: 'Screenshot 2',
				points: [
					'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
					'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
					'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
				],
			},
		],
		metaTitle: 'Filip Tunguz Portfolio',
		metaDescription:
			'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
	},
];
