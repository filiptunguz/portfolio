import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';

export default function BaseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			{children}
			<Toaster />
		</>
	);
}
