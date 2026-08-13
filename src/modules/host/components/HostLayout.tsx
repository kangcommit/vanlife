import { Outlet } from "react-router";
import { paths } from "@/app/routes/paths";
import { Nav } from "@/shared/components/Nav";
import type { NavItem } from "@/shared/utils/types";

const hostLinks: NavItem[] = [
	{ to: ".", label: "Dashboard", end: true },
	{ to: paths.hostIncome, label: "Income" },
	{ to: paths.vans, label: "Vans" },
	{ to: paths.hostReviews, label: "Reviews" },
];

export default function HostLayout() {
	return (
		<section className="mx-6.5 mt-8">
			<Nav links={hostLinks} variant="secondary" ariaLabel="Host navigation" />
			<Outlet />
		</section>
	);
}
