import { Outlet } from "react-router";
import type { NavItem } from "../types";
import { Nav } from "./Nav";

export default function HostLayout() {
	const hostLinks: NavItem[] = [
		{ to: ".", label: "Dashboard", end: true },
		{ to: "income", label: "Income" },
		{ to: "vans", label: "Vans" },
		{ to: "reviews", label: "Reviews" },
	];

	return (
		<div className="mx-6.5 mt-8">
			<Nav links={hostLinks} variant="secondary" />
			<Outlet />
		</div>
	);
}
