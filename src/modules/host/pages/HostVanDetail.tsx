import React from "react";
import { Outlet, useParams } from "react-router";
import BackButton from "../../../components/BackButton";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Nav } from "../../../components/Nav";
import type { NavItem, Van } from "../../../utils/types";

export default function HostVanDetail() {
	const params = useParams();

	const [van, setVan] = React.useState<Van | null>(null);
	const [loading, setLoading] = React.useState(true);

	const tabs: NavItem[] = [
		{ to: ".", label: "Details", end: true },
		{ to: "pricing", label: "Pricing" },
		{ to: "photos", label: "Photos" },
	];

	React.useEffect(() => {
		setLoading(true);

		fetch(`/api/host/vans/${params.id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans))
			.finally(() => setLoading(false));
	}, [params.id]);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (van) {
		return (
			<>
				<BackButton to=".." relative="path" className="mt-15 mb-9" />
				<section className="rounded-md bg-white p-6.5">
					<div className="mb-6.5 flex items-center gap-5">
						<img
							src={van.imageUrl}
							alt={van.name}
							className="size-40 rounded-md object-cover"
						/>
						<div>
							<span
								className={`mb-4 inline-block rounded-md px-3 py-1 font-semibold text-peach text-sm ${
									van.type === "simple"
										? "bg-terracotta"
										: van.type === "luxury"
											? "bg-coal"
											: "bg-teal"
								}`}
							>
								{van.type.charAt(0).toUpperCase() + van.type.slice(1)}
							</span>
							<h1 className="mb-0.5 font-bold text-2xl text-coal">
								{van.name}
							</h1>
							<p className="text-coal">
								<span className="font-bold text-xl">${van.price}</span>
								<span className="font-medium text-base">/day</span>
							</p>
						</div>
					</div>

					<Nav links={tabs} className="mb-7" />
					<Outlet context={van} />
				</section>
			</>
		);
	}
}
