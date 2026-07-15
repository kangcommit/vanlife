import React from "react";
import { useSearchParams } from "react-router";
import type { Van, VansResponse } from "../../../utils/types";
import VanCard from "../components/VanCard";
import VanTypeFilter from "../components/VanTypeFilter";

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

	const uniqueTypes = [...new Set(vans.map((van) => van.type))];

	function handleSelectFilter(type: string) {
		setSearchParams({ type });
	}

	function handleClearFilter() {
		setSearchParams({});
	}

	return (
		<section className="mx-auto mt-13.5 mb-21 max-w-7xl px-6">
			<h1 className="mb-6 font-bold text-3xl">Explore our van options</h1>
			<div className="mb-10 flex flex-wrap items-center justify-between gap-4">
				<VanTypeFilter
					types={uniqueTypes}
					selectedType={typeFilter}
					onSelect={handleSelectFilter}
				/>

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
				{displayedVans.map((van) => (
					<VanCard key={van.id} van={van} typeFilter={typeFilter} />
				))}
			</div>
		</section>
	);
}
