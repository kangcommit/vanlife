import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { isSignedIn, signOut } from "../../modules/auth/utils/session";
import { Nav } from "../../shared/components/Nav";
import type { NavItem } from "../../shared/utils/types";

const headerLinks: NavItem[] = [
	{ to: "host", label: "Host" },
	{ to: "about", label: "About" },
	{ to: "vans", label: "Vans" },
];

export default function Header() {
	const navigate = useNavigate();

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
				{isSignedIn() ? (
					<button
						type="button"
						onClick={handleSignOut}
						className="cursor-pointer font-semibold text-red-600 hover:text-red-700 hover:underline"
					>
						Sign out
					</button>
				) : (
					<Link to="sign-in" aria-label="Sign in">
						<RxAvatar className="size-6" />
					</Link>
				)}
			</div>
		</header>
	);
}
