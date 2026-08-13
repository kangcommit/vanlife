export default function LoadingSpinner() {
	return (
		<div
			role="status"
			aria-live="polite"
			className={`mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6`}
		>
			<div className="h-10 w-10 animate-spin rounded-full border-4 border-orange border-t-transparent" />
			<span className="sr-only">Loading...</span>
		</div>
	);
}
