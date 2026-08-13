import { useLocation, useParams } from "react-router";
import { BackButton } from "@/shared/components/BackButton";
import ErrorMessage from "@/shared/components/ErrorMessage";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import VanTypeBadge from "@/shared/components/VanTypeBadge";
import { useVan } from "@/shared/hooks/useVan";

export default function VanDetail() {
	const params = useParams();
	const location = useLocation();
	const { van, loading, error, fetchVan } = useVan(`/api/vans/${params.id}`);

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
			<section className="mx-auto max-w-7xl px-6 pt-10 pb-21">
				<BackButton
					to={`..${search}`}
					className="mb-10"
					text={`Back to ${type} vans`}
				/>

				<div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
					<img
						src={van.imageUrl}
						alt={van.name}
						className="mx-auto aspect-square w-full max-w-md rounded-lg lg:w-1/2 lg:max-w-none"
					/>

					<div className="flex flex-1 flex-col">
						<VanTypeBadge type={van.type} className="mb-6 w-fit" />

						<h1 className="mb-3 font-bold text-3xl md:text-4xl">{van.name}</h1>

						<p className="mb-6 text-coal">
							<span className="font-bold text-2xl">${van.price}</span>
							<span className="font-medium text-xl">/day</span>
						</p>

						<p className="mb-8 text-coal leading-7">{van.description}</p>

						<button
							type="button"
							className="w-full rounded-md bg-orange py-3 font-bold text-lg text-white transition-colors hover:bg-orange-hover md:w-fit md:px-12"
						>
							Rent this van
						</button>
					</div>
				</div>
			</section>
		);
	}
}
