interface LoadingSpinnerProps {
	size?: string;
	color?: string;
	className?: string;
}

export default function LoadingSpinner({
	size = "h-10 w-10",
	color = "border-orange",
	className,
}: LoadingSpinnerProps) {
	return (
		<section
			className={`mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6 ${className}`}
		>
			<div
				className={`${size} animate-spin rounded-full border-4 ${color} border-t-transparent`}
			/>
		</section>
	);
}
