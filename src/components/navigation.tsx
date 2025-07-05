'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';

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
	return (
		<nav>
			<DesktopNavigation />
			<MobileNavigation />
		</nav>
	);
}

function DesktopNavigation() {
	const pathname = usePathname();

	return (
		<ul className="hidden xl:flex gap-8 items-center">
			{navigationItems.map((item: NavigationItem) => (
				<li key={item.label}>
					<Link
						href={item.href}
						className={`uppercase font-medium border-primary ${pathname === item.href ? 'text-primary border-b' : 'hover:border-b'}`}
					>
						{item.label}
					</Link>
				</li>
			))}
			<HireMeButton />
		</ul>
	);
}

function MobileNavigation() {
	return (
		<Sheet>
			<SheetTrigger className="xl:hidden">
				<CiMenuFries className="text-primary text-[2rem]" />
			</SheetTrigger>
			<SheetContent className="px-8 py-12 border-l-0">
				<SideNavigationContent />
			</SheetContent>
		</Sheet>
	);
}

function SideNavigationContent() {
	const pathname = usePathname();

	return (
		<>
			<SheetTitle>Navigation menu</SheetTitle>
			<div className="py-12">
				<span className="block text-xl font-bold text-center">LOGO</span>
			</div>
			<ul className="flex flex-col gap-4">
				{navigationItems.map((item: NavigationItem) => (
					<li key={item.label}>
						<Link
							href={item.href}
							className={`uppercase font-medium ${pathname === item.href ? 'text-primary border-b border-primary' : 'hover:borer-b'}`}
						>
							{item.label}
						</Link>
					</li>
				))}
				<HireMeButton />
			</ul>
		</>
	);
}

function HireMeButton() {
	return (
		<Button>
			<Link href="/hire-me">Hire me</Link>
		</Button>
	);
}
