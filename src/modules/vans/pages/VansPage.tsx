import { useSearchParams } from "react-router";
import { EmptyState } from "@/shared/components/EmptyState";
import ErrorMessage from "@/shared/components/ErrorMessage";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { useVans } from "@/shared/domain/vans/hooks/useVans";
import type { VanType } from "@/shared/domain/vans/types";
import VanCard from "../components/VanCard";
import VanTypeFilter from "../components/VanTypeFilter";

export default function Vans() {
	const [searchParams, setSearchParams] = useSearchParams();
	const { vans, loading, error, fetchVans } = useVans("/api/vans");

	const typeFilter = searchParams.get("type");

	const displayedVans = typeFilter
		? vans.filter((van) => van.type === typeFilter)
		: vans;

	const search = searchParams.toString();

	const uniqueTypes = [...new Set(vans.map((van) => van.type))];

	function handleSelectFilter(type: VanType) {
		setSearchParams({ type });
	}

	function handleClearFilter() {
		setSearchParams({});
	}

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <ErrorMessage onRetry={fetchVans} />;
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

			{displayedVans.length > 0 ? (
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{displayedVans.map((van) => (
						<VanCard
							key={van.id}
							van={van}
							search={search ? `?${search}` : ""}
							type={typeFilter}
						/>
					))}
				</div>
			) : (
				<EmptyState
					title={typeFilter ? `No ${typeFilter} vans found` : "No vans found"}
					message={
						typeFilter
							? "There are no vans matching this filter. Clear the filter to browse all available vans."
							: "There are no vans available right now. Please check back soon."
					}
				/>
			)}
		</section>
	);
}
