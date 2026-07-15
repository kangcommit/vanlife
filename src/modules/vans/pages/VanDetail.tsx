import React from "react";
import { useLocation, useParams } from "react-router";
import BackButton from "../../../components/BackButton";
import LoadingSpinner from "../../../components/LoadingSpinner";
import type { Van } from "../../../utils/types";

export default function VanDetail() {
	const params = useParams();
	const location = useLocation();
	console.log(location);

	const [van, setVan] = React.useState<Van | null>(null);
	const [loading, setLoading] = React.useState(true);

	const type = location.state.type || "all";

	React.useEffect(() => {
		setLoading(true);

		fetch(`/api/vans/${params.id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans))
			.finally(() => setLoading(false));
	}, [params.id]);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (van) {
		return (
			<section className="mx-auto max-w-7xl px-6 pt-10 pb-21">
				<BackButton className="mb-10" text={`Back to ${type} vans`} />

				<div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
					<div className="lg:w-1/2">
						<img
							src={van.imageUrl}
							alt={van.name}
							className="h-auto w-full rounded-lg object-cover lg:h-162.5"
						/>
					</div>

					<div className="flex flex-1 flex-col">
						<span
							className={`mb-6 w-fit rounded-md px-3 py-1 font-semibold text-peach ${
								van.type === "simple"
									? "bg-terracotta"
									: van.type === "luxury"
										? "bg-coal"
										: "bg-teal"
							}`}
						>
							{van.type.charAt(0).toUpperCase() + van.type.slice(1)}
						</span>

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
