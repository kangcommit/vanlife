import { Link } from "react-router";
import VanTypeBadge from "@/shared/domain/vans/components/VanTypeBadge";
import type { Van } from "@/shared/domain/vans/types";

interface VanCardProps {
	van: Van;
	search: string;
	type: string | null;
}

export default function VanCard({ van, search, type }: VanCardProps) {
	return (
		<Link
			key={van.id}
			to={van.id}
			state={{
				search,
				type,
			}}
			aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
			className="group block"
		>
			<div className="overflow-hidden rounded-xl bg-panel">
				<img
					src={van.imageUrl}
					alt={van.name}
					className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>

			<div className="mt-4 flex items-start justify-between gap-4">
				<div className="min-w-0">
					<h2 className="font-bold text-2xl text-ink leading-tight">
						{van.name}
					</h2>
					<p className="mt-2 text-muted">
						<span className="font-bold text-ink text-xl">${van.price}</span>
						<span className="font-medium text-sm"> / day</span>
					</p>
				</div>
				<VanTypeBadge type={van.type} />
			</div>
		</Link>
	);
}
