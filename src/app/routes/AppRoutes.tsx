import { Route, Routes } from "react-router";
import AuthRequired from "@/app/guards/AuthRequired";
import { authRoutes } from "@/modules/auth/routes";
import { hostRoutes } from "@/modules/host/routes";
import { vansRoutes } from "@/modules/vans/routes";
import RootLayout from "../components/RootLayout";
import GuestOnly from "../guards/GuestOnly";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { paths } from "./paths";

export function AppRoutes() {
	return (
		<Routes>
			<Route path={paths.home} element={<RootLayout />}>
				<Route index element={<HomePage />} />
				<Route path={paths.about} element={<AboutPage />} />

				<Route element={<GuestOnly />}>{authRoutes}</Route>

				{vansRoutes}
				<Route element={<AuthRequired />}>{hostRoutes}</Route>

				<Route path={paths.notFound} element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}
