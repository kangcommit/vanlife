import { Link } from "react-router";

export default function Header() {
	return (
		<header className="flex items-center justify-between bg-[#FFF7ED] px-6.5 py-9">
			<Link to="/" className="font-black text-2xl text-black uppercase">
				#VanLife
			</Link>
			<nav className="flex gap-6 font-semibold text-[#4D4D4D] text-base">
				<Link to="host">Host</Link>
				<Link to="about">About</Link>
				<Link to="vans">Vans</Link>
			</nav>
		</header>
	);
}
