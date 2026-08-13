import { Outlet } from "react-router";
import { Nav } from "@/shared/components/Nav";
import { hostNavigation } from "../navigation";

export default function HostLayout() {
	return (
		<section className="mx-6.5 mt-8">
			<Nav
				links={hostNavigation}
				variant="secondary"
				ariaLabel="Host navigation"
			/>
			<Outlet />
		</section>
	);
}
