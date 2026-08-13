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
			<h1 className="mt-14 mb-8 font-bold text-3xl text-coal">
				Your listed vans
			</h1>

			{vans.length > 0 ? (
				<div className="flex flex-col gap-4">{vanElements}</div>
			) : (
				<EmptyState
					title="No listed vans"
					message="You do not have any vans listed yet. Add a van to start hosting."
				/>
			)}
		</>
	);
}
