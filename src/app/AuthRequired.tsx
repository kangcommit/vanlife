import { Navigate, Outlet, useLocation } from "react-router";
import { authRoutePaths } from "@/modules/auth/routePaths";
import { isSignedIn } from "@/modules/auth/utils/session";

export default function AuthRequired() {
	const location = useLocation();
	const { hash, pathname, search } = location;

	if (!isSignedIn()) {
		return (
			<Navigate
				to={authRoutePaths.signIn}
				state={{
					message: "You must sign in first",
					from: pathname + search + hash,
				}}
				replace
			/>
		);
	}

	return <Outlet />;
}
