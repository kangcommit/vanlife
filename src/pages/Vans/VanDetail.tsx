import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import type { Van } from "../../types";

export default function VanDetail() {
	const params = useParams();
	const navigate = useNavigate();

	const [van, setVan] = React.useState<Van | null>(null);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setLoading(true);

		fetch(`/api/vans/${params.id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans))
			.finally(() => setLoading(false));
	}, [params.id]);

	if (loading) {
		return (
			<section className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6">
				<div className="h-10 w-10 animate-spin rounded-full border-4 border-[#FF8C38] border-t-transparent" />
			</section>
		);
	}

	if (van) {
		return (
			<section className="mx-auto max-w-7xl px-6 pt-10 pb-21">
				<button
					type="button"
					onClick={() => navigate(-1)}
					className="mb-10 inline-flex items-center gap-3 font-medium text-[#201F1D] hover:underline"
				>
					<FaArrowLeftLong className="text-[#858585]" />
					Back to all vans
				</button>

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
							className={`mb-6 w-fit rounded-md px-3 py-1 font-semibold text-[#FFEAD0] ${
								van.type === "simple"
									? "bg-[#E17654]"
									: van.type === "luxury"
										? "bg-[#161616]"
										: "bg-[#115E59]"
							}`}
						>
							{van.type.charAt(0).toUpperCase() + van.type.slice(1)}
						</span>

						<h1 className="mb-3 font-bold text-3xl md:text-4xl">{van.name}</h1>

						<p className="mb-6">
							<span className="font-semibold text-2xl">${van.price}</span>
							<span className="text-[#4D4D4D]">/day</span>
						</p>

						<p className="mb-8 text-[#161616] leading-7">{van.description}</p>

						<button
							type="button"
							className="w-full rounded-md bg-[#FF8C38] py-3 font-bold text-lg text-white transition-colors hover:bg-[#e67c2f] md:w-fit md:px-12"
						>
							Rent this van
						</button>
					</div>
				</div>
			</section>
		);
	}
}
