import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "@/modules/auth/context/AuthProvider";
import { authRoutePaths } from "@/modules/auth/routes";
import ErrorMessage from "@/shared/components/ErrorMessage";

export default function AuthRequired() {
	const location = useLocation();
	const { status } = useAuth();

	if (status === "checking" || status === "signingOut") {
		return null;
	}

	if (status === "failed") {
		return <ErrorMessage />;
	}

	if (status === "anonymous") {
		return (
			<Navigate
				to={authRoutePaths.signIn}
				state={{
					message: "You must sign in first",
					from: location.pathname + location.search + location.hash,
				}}
				replace
			/>
		);
	}

	return <Outlet />;
}
