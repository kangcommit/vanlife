import { Outlet } from "react-router";
import { Nav } from "../../../components/Nav";
import type { NavItem } from "../../../utils/types";

const hostLinks: NavItem[] = [
	{ to: ".", label: "Dashboard", end: true },
	{ to: "income", label: "Income" },
	{ to: "vans", label: "Vans" },
	{ to: "reviews", label: "Reviews" },
];

export default function HostLayout() {
	return (
		<section className="mx-6.5 mt-8">
			<Nav links={hostLinks} variant="secondary" ariaLabel="Host navigation" />
			<Outlet />
		</section>
	);
}
