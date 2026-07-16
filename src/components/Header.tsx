import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { isSignedIn, signOut } from "../utils/auth";
import type { NavItem } from "../utils/types";
import { Nav } from "./Nav";

const headerLinks: NavItem[] = [
	{ to: "host", label: "Host" },
	{ to: "about", label: "About" },
	{ to: "vans", label: "Vans" },
];

export default function Header() {
	const navigate = useNavigate();

	const signedIn = isSignedIn();

	function handleSignOut() {
		signOut();
		navigate("/", { replace: true });
	}

	return (
		<header className="flex items-center justify-between bg-sand px-6.5 py-9">
			<Link
				to="/"
				className="font-black text-2xl text-black uppercase hover:underline"
			>
				#VanLife
			</Link>
			<div className="flex gap-6.5">
				<Nav links={headerLinks} ariaLabel="Primary navigation" />
				{signedIn ? (
					<button
						type="button"
						onClick={handleSignOut}
						className="cursor-pointer font-semibold text-red-600 hover:text-red-700 hover:underline"
					>
						Sign out
					</button>
				) : (
					<Link to="login" aria-label="Sign in">
						<RxAvatar className="size-6" />
					</Link>
				)}
			</div>
		</header>
	);
}
