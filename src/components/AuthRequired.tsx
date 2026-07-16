import { Navigate, Outlet, useLocation } from "react-router";

export default function AuthRequired() {
	const isSignedIn = localStorage.getItem("isSignedIn");

	const location = useLocation();
	const { pathname } = location;

	return isSignedIn ? (
		<Outlet />
	) : (
		<Navigate
			to="/login"
			state={{ message: "You must sign in first", from: pathname }}
			replace
		/>
	);
}
