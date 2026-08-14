export interface VansResponse {
	data: Van[];
	meta: Meta;
}

export interface VanResponse {
	data: VanDetail;
}

export interface Van {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	type: string;
	location: string;
	rating: number;
}

export interface VanDetail extends Van {
	description: string;
	sleeps: number;
	amenities: string[];
}

export interface Meta {
	page: number;
	limit: number;
	total: number;
	totalPages: number;
}

export type VanType = Van["type"];
