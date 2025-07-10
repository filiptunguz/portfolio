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
			'An interactive component showcasing isochrone generation on a map. Users can select transport type (walk, drive, bus, bike) and travel time via a simple form. The map dynamically updates to display the reachable area (isochrone) from a fixed starting point, centering and adjusting the view on each change.',
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
	{
		title: 'Credit Calculator',
		slug: 'credit-calculator',
		description:
			'Credit Calculator is a tool that helps users check their creditworthiness for both mortgage and cash loans. It validates employment and contract data, handles complex financial inputs with error checking, and calculates loan potential, monthly burden, and eligibility based on real-time input.',
		coverImage: '/assets/credit-calculator/credit-calculator-cover.webp',
		githubUrl: 'https://github.com/filiptunguz/credit-calculator',
		mainImage: '/assets/credit-calculator/credit-calculator.gif',
		technologies: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite'],
		screenshots: [
			{
				title: 'Basic Employment Data',
				src: '/assets/credit-calculator/basic-employment-data.webp',
				alt: 'Basic Employment Data Section',
				points: [
					'Users enter basic employment details, including contract type and duration of current employment.',
					'The system checks if the user meets minimum conditions—such as being employed for over six months and having a valid contract.',
					'Based on this, it shows whether the user can proceed or highlights specific eligibility issues.',
				],
			},
			{
				title: 'Financial Data',
				src: '/assets/credit-calculator/error-handling.webp',
				alt: 'Financial Data Section',
				points: [
					'Users provide financial details such as salary, loan installments, credit card debt, acceptable overdraft, nominal interest rate, and desired repayment period.',
					'The system performs strict validation to ensure inputs are consistent and realistic—for example, salary must exceed total debt.',
					'Errors are clearly displayed to guide users toward valid, creditworthy input.',
				],
			},
			{
				title: 'Key Financial Insights',
				src: '/assets/credit-calculator/not-creditworthy.webp',
				alt: 'Key Financial Insights Section',
				points: [
					'Based on the entered data, this section displays key financial insights: maximum possible monthly installment, total credit amount, salary charge percentage, and current debt burden.',
					"If the user's debt exceeds acceptable limits, the system clearly indicates that they are not creditworthy, helping them understand and improve their financial standing.",
				],
			},
			{
				title: 'Credit Calculator Conclusion',
				src: '/assets/credit-calculator/successful-calculation.webp',
				alt: 'Credit Calculator Overview',
				points: [
					'This Credit Calculator guides users through three clear steps to assess their loan potential—starting with employment status, followed by financial input, and ending with a personalized credit overview.',
					'It provides a structured and transparent way to understand how income, debt, and loan terms affect overall creditworthiness and borrowing capacity.',
				],
			},
		],
		metaTitle: 'Credit Calculator',
		metaDescription:
			'Credit Calculator is a tool that helps users check their creditworthiness for both mortgage and cash loans. It validates employment and contract data, handles complex financial inputs with error checking, and calculates loan potential, monthly burden, and eligibility based on real-time input.',
	},
];
