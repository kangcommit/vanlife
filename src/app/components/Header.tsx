import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { authRoutePaths } from "@/modules/auth/routePaths";
import { isSignedIn, signOut } from "@/modules/auth/utils/session";
import { Nav } from "@/shared/components/Nav";
import { headerNavigation } from "../routes/navigation";
import { paths } from "../routes/paths";

export default function Header() {
	const navigate = useNavigate();

	function handleSignOut() {
		signOut();
		navigate(paths.home, { replace: true });
	}

	return (
		<header className="flex items-center justify-between bg-sand px-6.5 py-9">
			<Link
				to={paths.home}
				className="font-black text-2xl text-black uppercase hover:underline"
			>
				#VanLife
			</Link>
			<div className="flex gap-6.5">
				<Nav links={headerNavigation} ariaLabel="Primary navigation" />
				{isSignedIn() ? (
					<button
						type="button"
						onClick={handleSignOut}
						className="cursor-pointer font-semibold text-red-600 hover:text-red-700 hover:underline"
					>
						Sign out
					</button>
				) : (
					<Link to={authRoutePaths.signIn} aria-label="Sign in">
						<RxAvatar className="size-6" />
					</Link>
				)}
			</div>
		</header>
	);
}
