import type { Dispatch, SetStateAction } from "react";

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

export interface NavItem {
	to: string;
	label: string;
	end?: boolean;
}

export interface HostVanContext {
	van: Van;
	setVan: Dispatch<SetStateAction<Van | null>>;
}

export type VanType = "simple" | "luxury" | "rugged";

export interface User {
	id: string;
	email: string;
	password: string;
	name: string;
}
