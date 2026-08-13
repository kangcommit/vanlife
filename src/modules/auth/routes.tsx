import { Route } from "react-router";
import SignInPage from "./pages/SignInPage";
import { authRoutePaths } from "./routePaths";

export const authRoutes = (
	<Route path={authRoutePaths.signIn} element={<SignInPage />} />
);
