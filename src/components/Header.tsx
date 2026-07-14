import { Link } from "react-router";
import type { NavItem } from "../types";
import { Nav } from "./Nav";

export default function Header() {
	const headerLinks: NavItem[] = [
		{ to: "host", label: "Host" },
		{ to: "about", label: "About" },
		{ to: "vans", label: "Vans" },
	];

	return (
		<header className="flex items-center justify-between bg-[#FFF7ED] px-6.5 py-9">
			<Link
				to="/"
				className="font-black text-2xl text-black uppercase hover:underline"
			>
				#VanLife
			</Link>
			<Nav links={headerLinks} />
		</header>
	);
}
