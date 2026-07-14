import { Outlet } from "react-router";
import { Nav } from "./Nav";

export default function HostLayout() {
	const hostLinks = [
		{ to: ".", label: "Dashboard", end: true },
		{ to: "income", label: "Income" },
		{ to: "reviews", label: "Reviews" },
	];

	return (
		<>
			<Nav links={hostLinks} variant="secondary" />
			<Outlet />
		</>
	);
}
