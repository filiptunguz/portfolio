import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function Narrower({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className={cn('max-w-[1100px] w-[calc(100%_-_2rem)] mx-auto', className)}>{children}</div>
	);
}
