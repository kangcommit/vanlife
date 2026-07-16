import { Navigate, Outlet, useLocation } from "react-router";
import { isSignedIn } from "../utils/auth";

export default function AuthRequired() {
	const location = useLocation();
	const { pathname } = location;

	return isSignedIn() ? (
		<Outlet />
	) : (
		<Navigate
			to="/login"
			state={{ message: "You must sign in first", from: pathname }}
			replace
		/>
	);
}
