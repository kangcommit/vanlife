import { Link } from "react-router";
import VanTypeBadge from "@/shared/components/VanTypeBadge";
import type { Van } from "@/shared/utils/types";

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
			className="group transition-transform duration-200 hover:-translate-y-1"
		>
			<img
				src={van.imageUrl}
				alt={van.name}
				className="aspect-square w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-[1.02]"
			/>
			<div className="mt-3 flex items-start justify-between">
				<div>
					<h2 className="font-semibold text-coal text-xl">{van.name}</h2>
					<p>
						<span className="font-semibold text-coal text-xl">
							${van.price}
						</span>
						<span className="text-slate text-sm">/day</span>
					</p>
				</div>
				<VanTypeBadge type={van.type} />
			</div>
		</Link>
	);
}
