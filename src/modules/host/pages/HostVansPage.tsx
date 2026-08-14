import { EmptyState } from "@/shared/components/EmptyState";
import ErrorMessage from "@/shared/components/ErrorMessage";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { useVans } from "@/shared/domain/vans/hooks/useVans";
import HostVanCard from "../components/HostVanCard";

export default function HostVansPage() {
	const { vans, loading, error, fetchVans } = useVans("/api/host/vans");

	const vanElements = vans.map((van) => <HostVanCard key={van.id} van={van} />);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <ErrorMessage onRetry={fetchVans} />;
	}

	return (
		<>
			<div className="mb-8 max-w-3xl">
				<p className="mb-4 font-semibold text-clay text-sm uppercase tracking-widest">
					Your fleet
				</p>
				<h1 className="text-balance font-black text-4xl text-ink leading-tight md:text-5xl">
					Your listed vans.
				</h1>
			</div>

			{vans.length > 0 ? (
				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{vanElements}
				</div>
			) : (
				<EmptyState
					title="No listed vans"
					message="You do not have any vans listed yet. Add a van to start hosting."
				/>
			)}
		</>
	);
}
