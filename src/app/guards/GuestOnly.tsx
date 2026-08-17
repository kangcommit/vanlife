import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "@/modules/auth/context/AuthProvider";
import type { AuthRole } from "@/modules/auth/types";
import { bookingsRoutePaths } from "@/modules/bookings/routes";
import { hostRoutePaths } from "@/modules/host/routes";
import ErrorMessage from "@/shared/components/ErrorMessage";

function getSignedInRedirectPath(role: AuthRole) {
	return role === "host" ? hostRoutePaths.root : bookingsRoutePaths.root;
}

export default function GuestOnly() {
	const { status, user } = useAuth();
	const location = useLocation();

	if (status === "checking" || status === "signingOut") {
		return null;
	}

	if (status === "failed") {
		return <ErrorMessage />;
	}

	if (user) {
		const from = location.state?.from;

		return <Navigate to={from ?? getSignedInRedirectPath(user.role)} replace />;
	}

	return <Outlet />;
}
