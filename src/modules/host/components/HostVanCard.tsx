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
			className="flex items-center gap-4 rounded-md bg-white px-6 py-4.5"
		>
			<img
				src={van.imageUrl}
				alt={van.name}
				className="size-16 rounded-md object-cover"
			/>

			<div>
				<h2 className="font-semibold text-coal text-xl">{van.name}</h2>
				<p className="font-medium text-base text-slate">${van.price}/day</p>
			</div>
		</Link>
	);
}
