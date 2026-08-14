import { FaStar } from "react-icons/fa6";

const ratingRows = [
	{ label: "5 stars", value: 86 },
	{ label: "4 stars", value: 12 },
	{ label: "3 stars", value: 2 },
	{ label: "2 stars", value: 0 },
	{ label: "1 star", value: 0 },
];

const reviews = [
	{
		id: "review-1",
		name: "Elliot Parker",
		date: "Aug 10",
		rating: 5,
		text: "The van was clean, easy to pick up, and exactly what we needed for a long weekend near the coast.",
	},
	{
		id: "review-2",
		name: "Mina Hart",
		date: "Aug 4",
		rating: 5,
		text: "Great handoff and thoughtful storage. It made the trip feel simple from the first stop.",
	},
];

const starKeys = ["star-1", "star-2", "star-3", "star-4", "star-5"];

function StarRating({ rating }: { rating: number }) {
	return (
		<div
			className="flex gap-1 text-clay"
			role="img"
			aria-label={`${rating} out of 5 stars`}
		>
			{starKeys.map((starKey, index) => (
				<FaStar
					key={starKey}
					aria-hidden="true"
					className={index < rating ? "text-clay" : "text-line"}
				/>
			))}
		</div>
	);
}

export default function ReviewsPage() {
	return (
		<section>
			<div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
				<div>
					<p className="mb-4 font-semibold text-clay text-sm uppercase tracking-widest">
						Guest reviews
					</p>
					<h1 className="text-balance font-black text-4xl text-ink leading-tight md:text-5xl">
						Reviews from recent trips.
					</h1>
				</div>
				<p className="font-medium text-muted">Last 30 days</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				<section
					aria-labelledby="overall-rating"
					className="rounded-xl bg-surface p-6 shadow-sm"
				>
					<div className="flex items-center gap-4">
						<h2 id="overall-rating" className="font-black text-5xl text-ink">
							4.9
						</h2>
						<div>
							<StarRating rating={5} />
							<p className="mt-2 font-medium text-muted text-sm">
								Based on {reviews.length} reviews
							</p>
						</div>
					</div>

					<div className="mt-8 grid gap-4">
						{ratingRows.map((row) => (
							<div
								key={row.label}
								className="grid grid-cols-4 items-center gap-3 font-medium text-muted text-sm"
							>
								<span>{row.label}</span>
								<div
									className="col-span-2 h-2 overflow-hidden rounded-full bg-panel"
									role="progressbar"
									aria-label={`${row.label}: ${row.value}%`}
									aria-valuemin={0}
									aria-valuemax={100}
									aria-valuenow={row.value}
								>
									<div
										className="h-full rounded-full bg-clay"
										style={{ width: `${row.value}%` }}
									/>
								</div>
								<span className="text-right">{row.value}%</span>
							</div>
						))}
					</div>
				</section>

				<section aria-labelledby="review-list" className="lg:col-span-2">
					<div className="mb-4 flex items-end justify-between gap-4">
						<h2 id="review-list" className="font-black text-2xl text-ink">
							Latest feedback
						</h2>
						<p className="font-medium text-muted text-sm">
							{reviews.length} reviews
						</p>
					</div>

					<div className="grid gap-4">
						{reviews.map((review) => (
							<article
								key={review.id}
								className="rounded-xl bg-surface p-5 shadow-sm"
							>
								<div className="mb-4 flex flex-wrap items-start justify-between gap-3">
									<div>
										<h3 className="font-bold text-ink">{review.name}</h3>
										<p className="mt-1 font-medium text-muted text-sm">
											{review.date}
										</p>
									</div>
									<StarRating rating={review.rating} />
								</div>
								<p className="font-medium text-muted leading-7">
									{review.text}
								</p>
							</article>
						))}
					</div>
				</section>
			</div>
		</section>
	);
}
