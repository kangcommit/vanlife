import { apiClient } from "@/shared/api/apiClient";
import { apiPaths } from "@/shared/api/endpoints";
import type { Booking, CreateBookingRequest } from "../types";

export async function createBooking(booking: CreateBookingRequest) {
	const response = await apiClient.post<Booking>(
		apiPaths.bookings.list,
		booking,
	);

	return response.data;
}
