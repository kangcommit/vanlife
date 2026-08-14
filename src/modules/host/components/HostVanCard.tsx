import { Link } from "react-router";
import type { Van } from "@/shared/domain/vans/types";

interface HostVanCardProps {
	van: Van;
}

export default function HostVanCard({ van }: HostVanCardProps) {
	return (
		<Link
			to={van.id}
			aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
			className="group flex h-full items-center gap-4 rounded-xl bg-surface p-3 shadow-sm transition-transform hover:-translate-y-1 sm:flex-col sm:items-stretch"
		>
			<img
				src={van.imageUrl}
				alt={van.name}
				decoding="async"
				className="size-18 shrink-0 rounded-lg bg-panel object-cover sm:aspect-square sm:size-auto sm:w-full"
			/>

			<div className="min-w-0 sm:flex sm:flex-1 sm:flex-col">
				<h2 className="font-bold text-ink text-xl leading-tight">{van.name}</h2>
				<p className="mt-1 font-medium text-base text-muted sm:mt-3">
					<span className="font-bold text-ink">${van.price}</span> / day
				</p>
			</div>
		</Link>
	);
}
