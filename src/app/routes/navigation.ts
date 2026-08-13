import { hostRoutePaths } from "@/modules/host/routePaths";
import { vansRoutePaths } from "@/modules/vans/routePaths";
import type { NavItem } from "@/shared/utils/types";
import { paths } from "./paths";

export const headerNavigation: NavItem[] = [
	{ to: hostRoutePaths.root, label: "Host" },
	{ to: paths.about, label: "About" },
	{ to: vansRoutePaths.root, label: "Vans" },
];
