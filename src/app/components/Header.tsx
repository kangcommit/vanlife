import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { authRoutePaths } from "@/modules/auth/routes";
import { signOutUser } from "@/modules/auth/services/authService";
import { isSignedIn, signOut } from "@/modules/auth/utils/session";
import { Nav } from "@/shared/components/Nav";
import { headerNavigation } from "../routes/navigation";
import { paths } from "../routes/paths";

export default function Header() {
	const navigate = useNavigate();

	async function handleSignOut() {
		await signOutUser();
		signOut();
		navigate(paths.home, { replace: true });
	}

	return (
		<header className="border-line border-b bg-canvas/95">
			<div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
				<Link
					to={paths.home}
					className="font-black text-2xl text-ink transition-colors hover:text-clay"
				>
					VanLife
				</Link>
				<div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 sm:justify-end sm:gap-6">
					<Nav
						links={headerNavigation}
						ariaLabel="Primary navigation"
						className="flex-wrap gap-x-5 gap-y-2 sm:gap-6"
					/>
					{isSignedIn() ? (
						<button
							type="button"
							onClick={handleSignOut}
							className="font-semibold text-clay text-sm transition-colors hover:text-clay-dark active:scale-95"
						>
							Sign out
						</button>
					) : (
						<Link
							to={authRoutePaths.signIn}
							aria-label="Sign in"
							className="text-muted transition-colors hover:text-clay"
						>
							<RxAvatar className="size-6" />
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}
