import { useCallback, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { BackButton } from "../../../shared/components/BackButton";
import ErrorMessage from "../../../shared/components/ErrorMessage";
import LoadingSpinner from "../../../shared/components/LoadingSpinner";
import { Nav } from "../../../shared/components/Nav";
import VanTypeBadge from "../../../shared/components/VanTypeBadge";
import type { NavItem, Van } from "../../../shared/utils/types";

const tabs: NavItem[] = [
	{ to: ".", label: "Details", end: true },
	{ to: "pricing", label: "Pricing" },
	{ to: "photos", label: "Photos" },
];

export default function HostVanDetailPage() {
	const params = useParams();

	const [van, setVan] = useState<Van | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchVan = useCallback(async () => {
		setLoading(true);
		setError(false);

		try {
			const response = await fetch(`/api/host/vans/${params.id}`);

			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const data = await response.json();
			setVan(data.vans);
		} catch (_) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}, [params.id]);

	useEffect(() => {
		fetchVan();
	}, [fetchVan]);

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
						links={tabs}
						className="mb-7"
						ariaLabel="Van detail navigation"
					/>
					<Outlet context={van} />
				</section>
			</>
		);
	}
}
