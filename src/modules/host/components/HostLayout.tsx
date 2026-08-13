import { Outlet } from "react-router";
import { hostNavigation } from "@/app/routes/navigation";
import { Nav } from "@/shared/components/Nav";

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
