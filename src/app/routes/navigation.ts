import { bookingsRoutePaths } from "@/modules/bookings/routes";
import { hostRoutePaths } from "@/modules/host/routes";
import { vansRoutePaths } from "@/modules/vans/routes";
import type { NavItem } from "@/shared/utils/types";
import { paths } from "./paths";

export const headerNavigation: NavItem[] = [
	{ to: hostRoutePaths.root, label: "Host" },
	{ to: bookingsRoutePaths.root, label: "Bookings" },
	{ to: paths.about, label: "About" },
	{ to: vansRoutePaths.root, label: "Vans" },
];
