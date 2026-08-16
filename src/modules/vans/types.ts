export interface CreateBookingRequest {
	vanId: string;
	startDate: string;
	endDate: string;
	guests: number;
}

export interface Booking {
	id: string;
	vanId: string;
	startDate: string;
	endDate: string;
	guests: number;
	totalPrice: number;
	status: "pending" | "confirmed" | "completed" | "cancelled";
	createdAt: string;
}
