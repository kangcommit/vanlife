import type { ReactNode } from "react";

interface EmptyStateProps {
	title: string;
	message: string;
	action?: ReactNode;
}

export function EmptyState({ title, message, action }: EmptyStateProps) {
	return (
		<div className="rounded-md border border-smoke bg-white px-6 py-10 text-center shadow-sm">
			<h2 className="mb-2 font-bold text-2xl text-coal">{title}</h2>
			<p className="mx-auto max-w-md text-slate leading-7">{message}</p>
			{action && <div className="mt-6">{action}</div>}
		</div>
	);
}
