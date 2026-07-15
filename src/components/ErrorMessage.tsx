import { FaTriangleExclamation } from "react-icons/fa6";

interface ErrorMessageProps {
	title?: string;
	message?: string;
	onRetry?: () => void;
	className?: string;
}

export default function ErrorMessage({
	title = "Something went wrong",
	message = "We couldn't load the requested content. Please try again.",
	onRetry,
	className,
}: ErrorMessageProps) {
	return (
		<div
			role="alert"
			aria-live="assertive"
			className={`mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6 ${className}`}
		>
			<div className="flex max-w-md flex-col items-center text-center">
				<FaTriangleExclamation
					aria-hidden="true"
					className="mb-6 text-6xl text-red-500"
				/>

				<h2 className="mb-3 font-bold text-3xl text-coal">{title}</h2>

				<p className="mb-8 text-base text-slate leading-7">{message}</p>

				{onRetry && (
					<button
						type="button"
						onClick={onRetry}
						className="cursor-pointer rounded-md bg-orange px-6 py-3 font-bold text-white transition-colors hover:bg-orange-hover"
					>
						Try Again
					</button>
				)}
			</div>
		</div>
	);
}
