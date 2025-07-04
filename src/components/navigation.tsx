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
			<ul className="flex gap-4 items-center">
				{navigationItems.map((item: NavigationItem) => (
					<li key={item.label}>
						<Link
							href={item.href}
							className={pathname === item.href ? 'text-primary underline' : 'hover:underline'}
						>
							{item.label}
						</Link>
					</li>
				))}
				<Button>
					<Link href="/hire-me">Hire me</Link>
				</Button>
			</ul>
		</nav>
	);
}
