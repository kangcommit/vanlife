import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/modules/auth/context/AuthProvider";
import type { AuthRole } from "@/modules/auth/types";
import ErrorMessage from "@/shared/components/ErrorMessage";
import { paths } from "../routes/paths";

interface RoleRequiredOrGuestProps {
	allowedRoles: AuthRole[];
}

export function RoleRequiredOrGuest({
	allowedRoles,
}: RoleRequiredOrGuestProps) {
	const { status, user } = useAuth();

	if (status === "checking" || status === "signingOut") {
		return null;
	}

	if (status === "failed") {
		return <ErrorMessage />;
	}

	if (user && !allowedRoles.includes(user.role)) {
		return <Navigate to={paths.home} replace />;
	}

	return <Outlet />;
}
