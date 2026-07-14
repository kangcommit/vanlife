import React from "react";
import { Link } from "react-router";
import type { Van, VansResponse } from "../../types";

export default function HostVans() {
	const [vans, setVans] = React.useState<Van[]>([]);

	React.useEffect(() => {
		fetch("/api/host/vans")
			.then((res) => res.json())
			.then((data: VansResponse) => setVans(data.vans));
	}, []);

	const vanElements = vans.map((van) => (
		<Link
			key={van.id}
			to={`/host/vans/${van.id}`}
			aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
			className="flex items-center gap-4 rounded-md bg-white px-6 py-4.5"
		>
			<img
				src={van.imageUrl}
				alt={van.name}
				className="size-16 rounded-md object-cover"
			/>

			<div>
				<h2 className="font-semibold text-[#161616] text-xl">{van.name}</h2>
				<p className="font-medium text-[#4D4D4D] text-base">${van.price}/day</p>
			</div>
		</Link>
	));

	return (
		<>
			<h1 className="mt-14 mb-8 font-bold text-[#161616] text-[32px]">
				Your listed vans
			</h1>
			<div className="flex flex-col gap-4">{vanElements}</div>
		</>
	);
}
