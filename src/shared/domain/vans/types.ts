export interface Van {
	id: string;
	name: string;
	price: number;
	description: string;
	imageUrl: string;
	type: VanType;
	hostId: string;
}

export interface VansResponse {
	vans: Van[];
}

export type VanType = "simple" | "luxury" | "rugged";
