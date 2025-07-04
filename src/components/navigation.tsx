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
	return (
		<div
			className={`xl:hidden py-8 fixed top-0 right-0 h-full bg-background transition-[width] overflow-hidden max-w-max ${show ? 'w-[190px]' : 'w-0'}`}
		>
			<ul
				className={`flex flex-col gap-4 h-full transition-[padding] duration-400 overflow-hidden max-w-max pl-12 ${show ? 'pr-12' : 'pr-0'}`}
			>
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
				{/* TODO: add icon here */}
				<span className="text-xl absolute top-4 right-4 leading-none" onClick={onClose}>
					X
				</span>
			</ul>
		</div>
	);
}

function HireMeButton() {
	return (
		<Button>
			<Link href="/hire-me">Hire me</Link>
		</Button>
	);
}
