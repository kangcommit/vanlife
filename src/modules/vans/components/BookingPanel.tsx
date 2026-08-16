import type { DateRange } from "@daypicker/react";
import { useState } from "react";
import { useCreateBooking } from "@/shared/domain/bookings/hooks/useCreateBooking";
import {
	formatDateForApi,
	getNightCount,
} from "@/shared/domain/bookings/utils/bookingDates";
import type { VanDetail } from "@/shared/domain/vans/types";
import { BookingCalendar } from "./BookingCalendar";
import { BookingStatus } from "./BookingStatus";
import { BookingSummary } from "./BookingSummary";
import { GuestSelect } from "./GuestSelect";

interface BookingPanelProps {
	van: Pick<VanDetail, "id" | "name" | "price" | "sleeps">;
}

export function BookingPanel({ van }: BookingPanelProps) {
	const [dateRange, setDateRange] = useState<DateRange>();
	const [guests, setGuests] = useState(1);
	const { createBooking, booking, loading, error, success, reset } =
		useCreateBooking();

	const nights = getNightCount(dateRange?.from, dateRange?.to);
	const estimatedTotal = nights * van.price;
	const canSubmit = Boolean(
		dateRange?.from && dateRange.to && nights > 0 && !success,
	);
	const statusMessage =
		error?.message ||
		(success && booking
			? `Booking request sent for ${van.name}. Total: $${booking.totalPrice.toLocaleString()}.`
			: "");
	const statusVariant = success && booking ? "success" : "error";
	const submitButtonText = getSubmitButtonText({ loading, success });

	function handleDateSelect(range?: DateRange) {
		if (success || error) {
			reset();
		}

		setDateRange(range);
	}

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!dateRange?.from || !dateRange.to || nights === 0) {
			return;
		}

		reset();
		createBooking({
			vanId: van.id,
			startDate: formatDateForApi(dateRange.from),
			endDate: formatDateForApi(dateRange.to),
			guests,
		});
	}

	return (
		<section
			aria-labelledby="booking-panel-title"
			className="rounded-xl bg-surface p-5 shadow-sm"
		>
			<div className="mb-5">
				<p className="font-semibold text-clay text-sm uppercase tracking-widest">
					Book this van
				</p>
				<h2
					id="booking-panel-title"
					className="mt-2 font-black text-2xl text-ink"
				>
					Request your trip.
				</h2>
			</div>

			<form className="grid gap-5" onSubmit={handleSubmit}>
				<BookingCalendar dateRange={dateRange} onSelect={handleDateSelect} />

				<GuestSelect
					guestLimit={van.sleeps}
					guests={guests}
					onChange={setGuests}
				/>

				<BookingSummary
					dateRange={dateRange}
					nights={nights}
					price={van.price}
					estimatedTotal={estimatedTotal}
				/>

				<button
					type="submit"
					disabled={!canSubmit || loading}
					className="rounded-lg bg-clay px-6 py-3 font-bold text-surface transition-colors hover:bg-clay-dark active:scale-95 disabled:bg-line disabled:text-muted"
				>
					{submitButtonText}
				</button>

				<BookingStatus message={statusMessage} variant={statusVariant} />
			</form>
		</section>
	);
}

function getSubmitButtonText({
	loading,
	success,
}: {
	loading: boolean;
	success: boolean;
}) {
	if (loading) {
		return "Sending request...";
	}

	if (success) {
		return "Request sent";
	}

	return "Request booking";
}
