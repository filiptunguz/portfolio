type LogoIconProps = {
	letter?: 't' | 'f';
	className?: string;
};

export default function LogoIcon({ letter = 't', className }: LogoIconProps) {
	if (letter === 't') {
		return (
			<svg
				className={className}
				width="23"
				height="32"
				viewBox="0 0 1332 1904"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid meet"
			>
				<path d="M0 0V1904H381V381H1332V0H0Z" fill="white" />
			</svg>
		);
	}

	return (
		<svg
			className={className}
			width="23"
			height="32"
			viewBox="0 0 1332 1904"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
		>
			<path d="M0.5 1522V1903.5L1332 1903V0H952V761.5H382V1142H952V1522H0.5Z" fill="#40E0D0" />
		</svg>
	);
}
