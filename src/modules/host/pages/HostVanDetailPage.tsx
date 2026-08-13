import { Outlet, useParams } from "react-router";
import { BackButton } from "@/shared/components/BackButton";
import ErrorMessage from "@/shared/components/ErrorMessage";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { Nav } from "@/shared/components/Nav";
import VanTypeBadge from "@/shared/domain/vans/components/VanTypeBadge";
import { useVan } from "@/shared/domain/vans/hooks/useVan";
import { hostVanDetailNavigation } from "../navigation";

export default function HostVanDetailPage() {
	const params = useParams();
	const { van, loading, error, fetchVan } = useVan(
		`/api/host/vans/${params.id}`,
	);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <ErrorMessage onRetry={fetchVan} />;
	}

	if (van) {
		return (
			<>
				<BackButton to=".." className="mt-15 mb-9" />
				<section className="rounded-md bg-white p-6.5">
					<div className="mb-6.5 flex items-center gap-5">
						<img
							src={van.imageUrl}
							alt={van.name}
							className="size-40 rounded-md object-cover"
						/>
						<div>
							<VanTypeBadge type={van.type} className="mb-4 inline-block" />
							<h1 className="mb-0.5 font-bold text-2xl text-coal">
								{van.name}
							</h1>
							<p className="text-coal">
								<span className="font-bold text-xl">${van.price}</span>
								<span className="font-medium text-base">/day</span>
							</p>
						</div>
					</div>

					<Nav
						links={hostVanDetailNavigation}
						className="mb-7"
						ariaLabel="Van detail navigation"
					/>
					<Outlet context={van} />
				</section>
			</>
		);
	}
}
