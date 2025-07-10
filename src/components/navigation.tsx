'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import LogoIcon from '@/components/LogoIcon';
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
		label: 'Projects',
		href: '/#projects',
	},
	{
		label: 'About',
		href: '/#about-me',
	},
];

export default function Navigation() {
	return (
		<nav className="max-w-[1100px] mx-auto flex items-center justify-between">
			<Logo />
			<DesktopNavigation />
			<MobileNavigation />
		</nav>
	);
}

function DesktopNavigation() {
	const pathname = usePathname();

	return (
		<ul className="hidden lg:flex gap-8 items-center">
			{navigationItems.map((item: NavigationItem) => (
				<li key={item.label}>
					<Link
						href={item.href}
						className={`uppercase font-medium underline-offset-4 ${pathname === item.href ? 'text-primary underline' : 'hover:underline'}`}
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
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className="lg:hidden">
				<CiMenuFries className="text-primary text-[2rem]" />
			</SheetTrigger>
			<SheetContent className="px-8 py-12 border-l-0">
				<SideNavigationContent onClick={() => setOpen(false)} />
			</SheetContent>
		</Sheet>
	);
}

function SideNavigationContent({ onClick }: { onClick?: () => void }) {
	const pathname = usePathname();

	return (
		<>
			<SheetTitle className="hidden">Navigation menu</SheetTitle>
			<div className="flex justify-center py-12" onClick={onClick}>
				<Logo />
			</div>
			<ul className="flex flex-col gap-4">
				{navigationItems.map((item: NavigationItem) => (
					<li key={item.label}>
						<Link
							href={item.href}
							onClick={onClick}
							className={`uppercase font-medium underline-offset-4 ${pathname === item.href ? 'text-primary underline border-primary' : 'hover:underline'}`}
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
			<Link href="/#contact-me">Contact me</Link>
		</Button>
	);
}

function Logo() {
	return (
		<Link href="/" className="flex group items-end">
			<LogoIcon />
			<AnimatedText text="unguz" />
			<LogoIcon
				letter="f"
				className="-ml-[25%] group-hover:rotate-180 group-hover:ml-0 transition-[rotate,margin] duration-300"
			/>
			<AnimatedText text="ilip" />
		</Link>
	);
}

function AnimatedText({ text }: { text: string }) {
	return (
		<span className="max-w-0 group-hover:max-w-[58px] group-hover:xl:max-w-16 duration-300 transition-[max-width,padding,margin] font-bold text-base xl:text-lg pr-0 group-hover:pr-2 group-hover:-ml-1 -mb-1.5 xl:-mb-1.5 overflow-hidden">
			{text}
		</span>
	);
}
