import { useLocation, useParams } from "react-router";
import { apiPaths } from "@/shared/api/endpoints";
import { BackButton } from "@/shared/components/BackButton";
import { EmptyState } from "@/shared/components/EmptyState";
import ErrorMessage from "@/shared/components/ErrorMessage";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import VanTypeBadge from "@/shared/domain/vans/components/VanTypeBadge";
import { useVan } from "@/shared/domain/vans/hooks/useVan";

export default function VanDetail() {
	const { id } = useParams();
	const location = useLocation();
	const { van, loading, error, fetchVan } = useVan(
		id ? apiPaths.vans.detail(id) : null,
	);

	const search = location.state?.search || "";
	const type = location.state?.type || "all";

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <ErrorMessage onRetry={fetchVan} />;
	}

	if (van) {
		return (
			<section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
				<BackButton
					to={`..${search}`}
					className="mb-10 text-muted hover:text-clay"
					text={`Back to ${type} vans`}
				/>

				<div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
					<div className="overflow-hidden rounded-2xl bg-panel shadow-md">
						<img
							src={van.imageUrl}
							alt={van.name}
							className="aspect-square w-full object-cover"
						/>
					</div>

					<div className="flex flex-col py-2">
						<VanTypeBadge type={van.type} className="mb-6 w-fit" />

						<h1 className="mb-4 text-balance font-black text-4xl text-ink leading-tight md:text-6xl">
							{van.name}
						</h1>

						<p className="mb-8 text-muted">
							<span className="font-black text-3xl text-ink">${van.price}</span>
							<span className="font-semibold text-lg"> / day</span>
						</p>

						<p className="mb-10 max-w-2xl font-medium text-lg text-muted leading-9">
							{van.description}
						</p>

						<button
							type="button"
							className="w-full rounded-lg bg-clay px-8 py-3 font-bold text-lg text-surface transition-colors hover:bg-clay-dark active:scale-95 md:w-fit"
						>
							Rent this van
						</button>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
			<BackButton
				to={`..${search}`}
				className="mb-10 text-muted hover:text-clay"
				text={`Back to ${type} vans`}
			/>
			<EmptyState
				title="Van not found"
				message="This van may have moved, or the address may need another look."
			/>
		</section>
	);
}
