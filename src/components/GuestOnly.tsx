import { Navigate, Outlet } from "react-router";

export default function GuestOnly() {
	const isSignedIn = localStorage.getItem("isSignedIn");

	return isSignedIn ? <Navigate to="/host" replace /> : <Outlet />;
}
