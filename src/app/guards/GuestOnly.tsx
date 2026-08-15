import { Navigate, Outlet } from "react-router";
import { isSignedIn } from "@/modules/auth/utils/session";
import { hostRoutePaths } from "@/modules/host/routes";

export default function GuestOnly() {
	if (isSignedIn()) {
		return <Navigate to={hostRoutePaths.root} replace />;
	}

	return <Outlet />;
}
