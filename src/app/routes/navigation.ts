import type { NavItem } from "@/shared/utils/types";
import { paths } from "./paths";

export const headerNavigation: NavItem[] = [
	{ to: paths.host, label: "Host" },
	{ to: paths.about, label: "About" },
	{ to: paths.vans, label: "Vans" },
];

export const hostNavigation: NavItem[] = [
	{ to: ".", label: "Dashboard", end: true },
	{ to: paths.hostIncome, label: "Income" },
	{ to: paths.vans, label: "Vans" },
	{ to: paths.hostReviews, label: "Reviews" },
];

export const hostVanDetailNavigation: NavItem[] = [
	{ to: ".", label: "Details", end: true },
	{ to: paths.hostVanPricing, label: "Pricing" },
	{ to: paths.hostVanPhotos, label: "Photos" },
];
