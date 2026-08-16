import ErrorMessage from "@/shared/components/ErrorMessage";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { PageHeader } from "@/shared/components/PageHeader";
import { DashboardStatCard } from "../components/DashboardStatCard";
import { useDashboard } from "../hooks/useDashboard";

export default function DashboardPage() {
	const { dashboard, loading, error, refetch } = useDashboard();

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <ErrorMessage onRetry={refetch} />;
	}

	if (!dashboard) {
		return null;
	}

	return (
		<section>
			<PageHeader
				eyebrow="Host dashboard"
				title="Welcome back. Your vans are ready for the next trip."
				aside={
					<p className="font-medium text-muted">Last {dashboard.days} days</p>
				}
			/>

			<div className="grid gap-6 md:grid-cols-3">
				<DashboardStatCard
					label="Recent income"
					value={`$${dashboard.income.toLocaleString()}`}
					description={`Across ${dashboard.bookingCount} bookings`}
				/>
				<DashboardStatCard
					label="Review score"
					value={dashboard.averageReviewScore.toFixed(1)}
					description={`From ${dashboard.reviewCount} reviews`}
					variant="panel"
				/>
				<DashboardStatCard
					label="Listed vans"
					value={dashboard.listedVanCount}
					description="Available for booking"
					variant="dark"
				/>
			</div>
		</section>
	);
}
