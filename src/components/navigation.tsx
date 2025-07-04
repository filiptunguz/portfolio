'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

type NavigationItem = {
	label: string;
	href: string;
};

const navigationItems = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
];

export default function Navigation() {
	const pathname = usePathname();

	return (
		<nav>
			<DesktopNavigation pathname={pathname} />
			<MobileNavigation pathname={pathname} />
		</nav>
	);
}

function DesktopNavigation({ pathname }: { pathname: string }) {
	return (
		<ul className="hidden xl:flex gap-8 items-center">
			{navigationItems.map((item: NavigationItem) => (
				<li key={item.label}>
					<Link
						href={item.href}
						className={`uppercase font-medium ${pathname === item.href ? 'text-primary underline' : 'hover:underline'}`}
					>
						{item.label}
					</Link>
				</li>
			))}
			<HireMeButton />
		</ul>
	);
}

function MobileNavigation({ pathname }: { pathname: string }) {
	return <ul className="xl:hidden">mob nav</ul>;
}

function HireMeButton() {
	return (
		<Button>
			<Link href="/hire-me">Hire me</Link>
		</Button>
	);
}
