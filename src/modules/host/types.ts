import type { Van } from "@/shared/domain/vans/types";

type HostStatVan = Pick<Van, "id" | "name" | "type">;

export interface Dashboard {
	days: number;
	income: number;
	bookingCount: number;
	averageReviewScore: number;
	reviewCount: number;
	listedVanCount: number;
}

export interface Income {
	days: number;
	total: number;
	periods: Period[];
	transactions: Transaction[];
}

export interface Period {
	period: string;
	income: number;
	bookingCount: number;
}

export interface Transaction {
	id: string;
	amount: number;
	date: string;
	van: HostStatVan;
}

export interface Reviews {
	days: number;
	overallRating: number;
	ratingDistribution: RatingDistribution[];
	reviews: Review[];
}

export interface RatingDistribution {
	rating: number;
	count: number;
	percentage: number;
}

export interface Review {
	id: string;
	renterName: string;
	date: string;
	rating: number;
	text: string;
	van: HostStatVan;
}
