import Navigation from '@/components/navigation';

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4 text-white max-w-[1100px] mx-auto">
			<h1 className="text-xl font-bold">LOGO</h1>
			<Navigation />
		</header>
	);
}
