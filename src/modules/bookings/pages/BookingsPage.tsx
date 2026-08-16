import { EmptyState } from "@/shared/components/EmptyState";
import ErrorMessage from "@/shared/components/ErrorMessage";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { PageHeader } from "@/shared/components/PageHeader";
import { useBookings } from "@/shared/domain/bookings/hooks/useBookings";
import { BookingCard } from "../components/BookingCard";

export default function BookingsPage() {
	const { bookings, loading, error, refetch } = useBookings();
	const bookingCountLabel =
		bookings.length === 1 ? "1 booking" : `${bookings.length} bookings`;

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <ErrorMessage onRetry={refetch} />;
	}

	return (
		<section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
			<PageHeader
				eyebrow="Your bookings"
				title="Trips you have requested and taken."
				aside={<p className="font-medium text-muted">{bookingCountLabel}</p>}
			/>

			{bookings.length > 0 ? (
				<div className="grid gap-5">
					{bookings.map((booking) => (
						<BookingCard key={booking.id} booking={booking} />
					))}
				</div>
			) : (
				<EmptyState
					title="No bookings yet"
					message="When you request a van, your trip details will show up here."
				/>
			)}
		</section>
	);
}
