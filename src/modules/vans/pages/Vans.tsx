import React from "react";
import { Link, useSearchParams } from "react-router";
import type { Van, VansResponse } from "../../../utils/types";

export default function Vans() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [vans, setVans] = React.useState<Van[]>([]);

	const typeFilter = searchParams.get("type");

	React.useEffect(() => {
		fetch("/api/vans")
			.then((res) => res.json())
			.then((data: VansResponse) => setVans(data.vans));
	}, []);

	const displayedVans = typeFilter
		? vans.filter((van) => van.type === typeFilter)
		: vans;

	const vanElements = displayedVans.map((van) => {
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
					<span
						className={`rounded-md px-3 py-1 font-semibold text-base text-peach ${
							van.type === "simple"
								? "bg-terracotta"
								: van.type === "luxury"
									? "bg-coal"
									: "bg-teal"
						}`}
					>
						{van.type.charAt(0).toUpperCase() + van.type.slice(1)}
					</span>
				</div>
			</Link>
		);
	});

	const uniqueTypes = [...new Set(vans.map((van) => van.type))];

	const typeElements = uniqueTypes.map((type) => {
		const colorClasses: Record<string, { active: string; hover: string }> = {
			simple: {
				active: "bg-terracotta",
				hover: "hover:bg-terracotta",
			},
			luxury: {
				active: "bg-coal",
				hover: "hover:bg-coal hover:text-peach",
			},
			rugged: {
				active: "bg-teal",
				hover: "hover:bg-teal",
			},
		};

		function handleFilter() {
			setSearchParams({ type });
		}

		return (
			<button
				key={type}
				type="button"
				aria-pressed={typeFilter === type}
				onClick={handleFilter}
				className={`h-9 w-26 cursor-pointer rounded-md font-medium text-base transition-colors ${
					typeFilter === type
						? `${colorClasses[type].active} font-semibold text-peach`
						: `bg-peach text-slate ${colorClasses[type].hover} hover:text-peach`
				}`}
			>
				{type.charAt(0).toUpperCase() + type.slice(1)}
			</button>
		);
	});

	function handleClearFilter() {
		setSearchParams({});
	}

	return (
		<section className="mx-auto mt-13.5 mb-21 max-w-7xl px-6">
			<h1 className="mb-6 font-bold text-3xl">Explore our van options</h1>
			<div className="mb-10 flex flex-wrap items-center justify-between gap-4">
				<div className="flex flex-wrap gap-3">{typeElements}</div>
				{typeFilter && (
					<button
						type="button"
						onClick={handleClearFilter}
						className="cursor-pointer font-medium text-slate hover:underline"
					>
						Clear filters
					</button>
				)}
			</div>
			<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{vanElements}
			</div>
		</section>
	);
}
