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
		<section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
			<div className="mb-10 max-w-3xl">
				<p className="mb-4 font-semibold text-clay text-sm uppercase tracking-widest">
					Choose your route
				</p>
				<h1 className="text-balance font-black text-4xl text-ink leading-tight md:text-5xl">
					Explore vans ready for weekends, long stays, and detours.
				</h1>
			</div>

			<div className="mb-12 flex flex-wrap items-center justify-between gap-4">
				<VanTypeFilter
					types={uniqueTypes}
					selectedType={typeFilter}
					onSelect={handleSelectFilter}
				/>

				{typeFilter && (
					<button
						type="button"
						onClick={handleClearFilter}
						className="font-semibold text-muted transition-colors hover:text-clay"
					>
						Clear filters
					</button>
				)}
			</div>

			{displayedVans.length > 0 ? (
				<div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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
