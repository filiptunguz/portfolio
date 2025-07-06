'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className="toaster group"
			toastOptions={{
				classNames: {
					success: '!bg-primary !text-primary-foreground !border-secondary',
					error: '!bg-destructive !text-destructive-foreground !border-white',
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
