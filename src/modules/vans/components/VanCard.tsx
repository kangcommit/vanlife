import { Link } from "react-router";
import type { Van } from "../../../utils/types";
import VanTypeBadge from "./VanTypeBadge";

interface VanCardProps {
	van: Van;
	typeFilter: string | null;
}

export default function VanCard({ van, typeFilter }: VanCardProps) {
	return (
		<Link
			key={van.id}
			to={van.id}
			state={{ type: typeFilter }}
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
