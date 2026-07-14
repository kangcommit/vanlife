export interface Van {
	id: string;
	name: string;
	price: number;
	description: string;
	imageUrl: string;
	type: string;
}

export interface VansResponse {
	vans: Van[];
}

export interface NavItem {
	to: string;
	label: string;
	end?: boolean;
}
