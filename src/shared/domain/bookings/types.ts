import type { VanType } from "@/shared/domain/vans/types";

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

export interface CreateBookingRequest {
	vanId: string;
	startDate: string;
	endDate: string;
	guests: number;
}

export interface CreateReviewRequest {
	bookingId: string;
	rating: number;
	text: string;
}

export interface Booking {
	id: string;
	startDate: string;
	endDate: string;
	guests: number;
	totalPrice: number;
	status: BookingStatus;
	createdAt: string;
}

export interface BookingVan {
	id: string;
	name: string;
	imageUrl: string;
	type: VanType;
	location: string;
}

export interface BookingReview {
	id: string;
	rating: number;
	text: string;
	createdAt: string;
}

export interface RenterBooking extends Booking {
	review: BookingReview | null;
	van: BookingVan;
}

export interface BookingsResponse {
	data: RenterBooking[];
	meta: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
	};
}

export interface Review {
	id: string;
	bookingId: string;
	rating: number;
	text: string;
	createdAt: string;
}
