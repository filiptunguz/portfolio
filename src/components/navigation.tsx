'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
	const [showSideNav, setShowSideNav] = useState(false);

	return (
		<>
			<div className="xl:hidden" onClick={() => setShowSideNav(true)}>
				mob nav
			</div>
			<SideNavigation
				show={showSideNav}
				pathname={pathname}
				onClose={() => setShowSideNav(false)}
			/>
		</>
	);
}

function SideNavigation({
	show,
	pathname,
	onClose,
}: {
	show: boolean;
	pathname: string;
	onClose: () => void;
}) {
	if (!show) return <></>;

	return (
		<ul className="flex flex-col gap-4 py-8 px-12 fixed top-0 right-0 h-full bg-background">
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
			<span className="text-xl absolute top-4 right-4 leading-none" onClick={onClose}>
				X
			</span>
		</ul>
	);
}

function HireMeButton() {
	return (
		<Button>
			<Link href="/hire-me">Hire me</Link>
		</Button>
	);
}
