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
		'TODO: I am a frontend developer with a passion for creating beautiful and functional web applications. I specialize in React, Next.js, and TypeScript, and I love building user-friendly interfaces that provide a great user experience.',
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
