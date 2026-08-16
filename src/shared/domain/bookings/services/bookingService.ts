import { apiClient } from "@/shared/api/apiClient";
import { apiPaths } from "@/shared/api/endpoints";
import type {
	Booking,
	BookingsResponse,
	CreateBookingRequest,
	CreateReviewRequest,
	Review,
} from "../types";

export async function getBookings() {
	const response = await apiClient.get<BookingsResponse>(
		apiPaths.bookings.list,
	);

	return response.data.data;
}

export async function createBooking(booking: CreateBookingRequest) {
	const response = await apiClient.post<Booking>(
		apiPaths.bookings.list,
		booking,
	);

	return response.data;
}

export async function cancelBooking(id: string) {
	const response = await apiClient.post<Booking>(apiPaths.bookings.cancel(id));

	return response.data;
}

export async function createReview(review: CreateReviewRequest) {
	const response = await apiClient.post<Review>(
		apiPaths.bookings.reviews,
		review,
	);

	return response.data;
}
