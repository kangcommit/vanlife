import { Navigate, Outlet } from "react-router";
import { isSignedIn } from "@/modules/auth/utils/session";
import { paths } from "./routes/paths";

export default function GuestOnly() {
	if (isSignedIn()) {
		return <Navigate to={paths.host} replace />;
	}

	return <Outlet />;
}
