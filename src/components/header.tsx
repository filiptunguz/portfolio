import Navigation from '@/components/navigation';

export default function Header() {
	return (
		<header className="sticky top-0 left-0 z-10 w-full p-4 text-white mx-auto bg-background border-b border-b-secondary">
			<Navigation />
		</header>
	);
}
