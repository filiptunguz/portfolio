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
	mainImage?: string; // Optional main image for the project
	coverImage: string;
	githubUrl: string;
	screenshots: ProjectScreenshot[];
	metaTitle: string;
	metaDescription: string;
	technologies?: string[]; // Optional technologies used in the project
};

export const projects: Project[] = [
	{
		title: 'Image Cropper',
		slug: 'image-cropper',
		description:
			'A lightweight React + TypeScript image upload library built with Tailwind. Includes drag-and-drop or file select, multi/single file support, image preview with removal and cropping, and all logic exposed through hooks for full control. Cropped images are ready-to-upload files, handled entirely on the frontend. Use built-in components or create your own easily.',
		coverImage: '/assets/image-cropper/image-preview-component.webp',
		githubUrl: 'https://github.com/filiptunguz/image-uploader',
		mainImage: '/assets/image-cropper/image-cropper.gif',
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
		screenshots: [
			{
				title: 'Drag and Drop Hook and Component',
				src: '/assets/image-cropper/drag-and-drop-component.webp',
				alt: 'Drag and Drop Component',
				points: [
					'Lightweight and flexible image upload solution supporting drag-and-drop and file selection.',
					'Easily switch between single or multiple file uploads.',
					'Built as a hook for full control over functionality, with optional UI component for quick setup.',
					'Ideal for custom-styled apps.',
				],
			},
			{
				title: 'Image Preview Component',
				src: '/assets/image-cropper/image-preview-component.webp',
				alt: 'Image Preview Component',
				points: [
					'Image previewer for selected files with built-in support for cropping, removing, and future editing features.',
					'Displays all selected images and allows individual interaction.',
					'Exposes logic through a hook, again letting you plug it into your own UI while keeping full control over behavior.',
				],
			},
			{
				title: 'Image Crop Component',
				src: '/assets/image-cropper/image-crop-component.webp',
				alt: 'Image Crop Component',
				points: [
					'Image cropping tool with support for free, custom, or original aspect ratios.',
					'Cropped images are instantly converted to upload-ready files—no backend processing needed.',
					'All logic is handled via a hook, allowing easy integration into any UI or use of the provided components.',
				],
			},
		],
		metaTitle: 'Image Cropper',
		metaDescription:
			'This component enables image uploading through drag-and-drop or file selection. It supports multiple image uploads, real-time previews, and a (for now) image cropping feature.',
	},
];
