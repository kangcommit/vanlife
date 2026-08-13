import type { NavItem } from "@/shared/utils/types";

export const hostNavigation: NavItem[] = [
	{ to: ".", label: "Dashboard", end: true },
	{ to: "income", label: "Income" },
	{ to: "vans", label: "Vans" },
	{ to: "reviews", label: "Reviews" },
];

export const hostVanDetailNavigation: NavItem[] = [
	{ to: ".", label: "Details", end: true },
	{ to: "pricing", label: "Pricing" },
	{ to: "photos", label: "Photos" },
];
