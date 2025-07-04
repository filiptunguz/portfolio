import Navigation from '@/components/navigation';

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4 text-white max-w-[1100px] mx-auto">
			<span className="text-xl font-bold">LOGO</span>
			<Navigation />
		</header>
	);
}
