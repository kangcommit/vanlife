import { PageHeader } from "@/shared/components/PageHeader";

export default function DashboardPage() {
	return (
		<section>
			<PageHeader
				eyebrow="Host dashboard"
				title="Welcome back. Your vans are ready for the next trip."
			/>

			<div className="grid gap-6 md:grid-cols-3">
				<article className="rounded-xl bg-surface p-6 shadow-sm">
					<p className="font-semibold text-muted text-sm">Income this month</p>
					<p className="mt-3 font-black text-4xl text-ink">$2,260</p>
					<p className="mt-2 font-medium text-muted text-sm">
						Across 8 bookings
					</p>
				</article>

				<article className="rounded-xl bg-panel p-6 shadow-sm">
					<p className="font-semibold text-muted text-sm">Review score</p>
					<p className="mt-3 font-black text-4xl text-ink">4.9</p>
					<p className="mt-2 font-medium text-muted text-sm">
						From recent guests
					</p>
				</article>

				<article className="rounded-xl bg-forest p-6 shadow-sm">
					<p className="font-semibold text-panel text-sm">Listed vans</p>
					<p className="mt-3 font-black text-4xl text-surface">3</p>
					<p className="mt-2 font-medium text-panel text-sm">
						Available for booking
					</p>
				</article>
			</div>
		</section>
	);
}
