import { EmptyState } from "@/shared/components/EmptyState";
import ErrorMessage from "@/shared/components/ErrorMessage";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { PageHeader } from "@/shared/components/PageHeader";
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
			<PageHeader
				eyebrow="Your fleet"
				title="Your listed vans."
				className="mb-8"
			/>

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
