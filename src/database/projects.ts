type ProjectScreenshotPoint = {
	text: string;
	isBullet: boolean;
};

type ProjectScreenshot = {
	title: string;
	src: string;
	alt: string;
	points: ProjectScreenshotPoint[];
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
		screenshots: [],
		metaTitle: 'Filip Tunguz Portfolio',
		metaDescription:
			'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
	},
];
