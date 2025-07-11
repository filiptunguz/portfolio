import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Filip Tunguz - Frontend Developer',
	description:
		'Frontend developer with 4 years of experience, specializing in React, Next.js, and TypeScript, with a strong focus on performance and scalable architecture. I enjoy building user-friendly interfaces with Tailwind and am currently expanding into mobile development using React Native with Expo for cross-platform consistency.',
	icons: {
		apple: '/assets/favicon/apple-touch-icon.png',
		icon: [
			{ rel: 'icon', type: 'image/png', sizes: '32x32', url: '/assets/favicon/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', url: '/assets/favicon/favicon-16x16.png' },
		],
	},
	manifest: '/assets/favicon/site.webmanifest',
	openGraph: {
		images: '/assets/filiptunguz_og_image.jpg',
	},
	twitter: {
		images: '/assets/filiptunguz_og_image.jpg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${jetBrainsMono.className}`}>{children}</body>
		</html>
	);
}
