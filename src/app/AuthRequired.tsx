import { Navigate, Outlet, useLocation } from "react-router";
import { isSignedIn } from "@/modules/auth/utils/session";
import { paths } from "./routes/paths";

export default function AuthRequired() {
	const location = useLocation();
	const { hash, pathname, search } = location;

	if (!isSignedIn()) {
		return (
			<Navigate
				to={paths.signIn}
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
