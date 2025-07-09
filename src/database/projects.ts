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
		technologies: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite'],
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
	{
		title: 'Isochrone Reachzone',
		slug: 'isochrone-reachzone',
		description:
			'An interactive React + Vite + TypeScript + Tailwind component showcasing isochrone generation on a map. Users can select transport type (walk, drive, bus, bike) and travel time via a simple form. The map dynamically updates to display the reachable area (isochrone) from a fixed starting point, centering and adjusting the view on each change.',
		coverImage: '/assets/isochrone-reachzone/full-app.webp',
		githubUrl: 'https://github.com/filiptunguz/isochrone-reachzone',
		mainImage: '/assets/isochrone-reachzone/isochrone-reachzone.gif',
		technologies: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite', 'Leaflet'],
		screenshots: [
			{
				title: 'Form',
				src: '/assets/isochrone-reachzone/form.webp',
				alt: 'Form Component',
				points: [
					'A responsive form allowing users to select one of four transport modes (walk, drive, bus, bike) and adjust travel time using a slider.',
					'Each change instantly updates the isochrone map below, providing an intuitive and interactive way to visualize reachable areas based on selected travel parameters.',
				],
			},
			{
				title: 'OpenStreetMap',
				src: '/assets/isochrone-reachzone/full-app.webp',
				alt: 'OpenStreetMap Component',
				points: [
					'An interactive map rendered with Leaflet via React-Leaflet, displaying geographic data using OpenStreetMap tiles.',
					'It provides smooth user interactions like zooming and panning, while integrating custom overlays and markers.',
					'The map efficiently responds to state changes, offering clear visual feedback and seamless integration with external UI controls.',
				],
			},
			{
				title: 'Isochrone Polygon',
				src: '/assets/isochrone-reachzone/polygon.webp',
				alt: 'Isochrone Polygon Component',
				points: [
					'A dynamic polygon rendered with React-Leaflet’s Polygon component to visualize isochrone boundaries on the map.',
					'It updates in real-time based on user input, accurately outlining the area reachable within the selected travel conditions.',
					'The polygon is styled for clarity and overlays seamlessly on the map without performance issues.',
				],
			},
		],
		metaTitle: 'Isochrone Reachzone',
		metaDescription:
			'An interactive React + Vite + TypeScript + Tailwind component showcasing isochrone generation on a map. Users can select transport type (walk, drive, bus, bike) and travel time via a simple form. The map dynamically updates to display the reachable area (isochrone) from a fixed starting point, centering and adjusting the view on each change.',
	},
];
