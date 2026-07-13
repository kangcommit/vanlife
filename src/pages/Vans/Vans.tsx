import React from "react";
import { Link } from "react-router";
import type { Van, VansResponse } from "../../types";

export default function Vans() {
	const [vans, setVans] = React.useState<Van[]>([]);

	React.useEffect(() => {
		fetch("/api/vans")
			.then((res) => res.json())
			.then((data: VansResponse) => setVans(data.vans));
	}, []);

	const vanElements = vans.map((van) => {
		return (
			<div
				key={van.id}
				className="group cursor-pointer transition-transform duration-200 hover:-translate-y-1"
			>
				<Link
					to={`/vans/${van.id}`}
					aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
				>
					<img
						src={van.imageUrl}
						alt={van.name}
						className="h-56 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-[1.02]"
					/>
					<div className="mt-3 flex items-start justify-between">
						<div>
							<h2 className="font-semibold text-[#161616] text-xl">
								{van.name}
							</h2>
							<p>
								<span className="font-semibold text-[#161616] text-xl">
									${van.price}
								</span>
								<span className="text-[#4D4D4D] text-sm">/day</span>
							</p>
						</div>
						<span
							className={`rounded-md px-3 py-1 font-semibold text-[#FFEAD0] text-base ${
								van.type === "simple"
									? "bg-[#E17654]"
									: van.type === "luxury"
										? "bg-[#161616]"
										: "bg-[#115E59]"
							}`}
						>
							{van.type.charAt(0).toUpperCase() + van.type.slice(1)}
						</span>
					</div>
				</Link>
			</div>
		);
	});

	const uniqueTypes = [...new Set(vans.map((van) => van.type))];

	const typeElements = uniqueTypes.map((type) => {
		return (
			<button
				key={type}
				type="button"
				className="h-9 w-26 cursor-pointer rounded-md bg-[#FFEAD0] font-medium text-[#4D4D4D] text-base"
			>
				{type.charAt(0).toUpperCase() + type.slice(1)}
			</button>
		);
	});

	return (
		<section className="mx-auto mt-13.5 mb-21 max-w-7xl px-6">
			<h1 className="mb-6 font-bold text-3xl">Explore our van options</h1>
			<div className="mb-10 flex flex-wrap items-center justify-between gap-4">
				<div className="flex flex-wrap gap-3">{typeElements}</div>
				<button
					type="button"
					className="cursor-pointer font-medium text-[#4D4D4D] underline underline-offset-2"
				>
					Clear filters
				</button>
			</div>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{vanElements}
			</div>
		</section>
	);
}
